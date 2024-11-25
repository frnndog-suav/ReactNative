import { ExerciseCard } from "@components/ExerciseCard";
import { Group } from "@components/Group";
import { ToastMessage } from "@components/ToastMessage";
import { TExerciseDTO } from "@dtos/ExerciseDTO";
import { Heading, HStack, Text, useToast, VStack } from "@gluestack-ui/themed";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { api } from "@services/api";
import { AppError } from "@utils/appError";
import { useCallback, useEffect, useState } from "react";
import { FlatList } from "react-native";
import { HomeHeader } from "./components/HomeHeader";
import { Loading } from "@components/Loading";

export function Home() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const toast = useToast();
  const [exercises, setExercises] = useState<TExerciseDTO[]>([]);
  const [groupSelected, setGroupSelected] = useState("Costas");
  const [groups, setGroups] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  function handleOpenExerciseDetails(exerciseId: string) {
    navigation.navigate("exercise", { exerciseId });
  }

  async function fetchGroups() {
    try {
      const response = await api.get("/groups");
      setGroups(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível carregar os grupos musculares.";

      toast.show({
        placement: "top",
        render: ({ id }) => (
          <ToastMessage
            id={id}
            title={title}
            action="error"
            onClose={() => toast.close(id)}
          />
        ),
      });
    }
  }

  async function fetchExercisesByGroup() {
    try {
      setIsLoading(true);
      const response = await api.get(`/exercises/bygroup/${groupSelected}`);
      setExercises(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível carregar os exercícios.";

      toast.show({
        placement: "top",
        render: ({ id }) => (
          <ToastMessage
            id={id}
            title={title}
            action="error"
            onClose={() => toast.close(id)}
          />
        ),
      });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchGroups();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchExercisesByGroup();
    }, [groupSelected])
  );

  return (
    <VStack>
      <HomeHeader />

      <FlatList
        data={groups}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
        keyExtractor={(item) => item}
        contentContainerStyle={{
          paddingHorizontal: 32,
        }}
        renderItem={({ item }) => (
          <Group
            name={item}
            onPress={() => setGroupSelected(item)}
            isActive={
              groupSelected.toLocaleLowerCase() === item.toLocaleLowerCase()
            }
          />
        )}
      />

      {isLoading ? (
        <Loading />
      ) : (
        <VStack paddingHorizontal={16} height={"100%"}>
          <HStack
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            marginBottom={10}
            alignItems="center"
          >
            <Heading
              marginBottom={0}
              marginTop={0}
              color="#C4C4CC"
              fontSize={16}
            >
              Exercícios
            </Heading>
            <Text color="#C4C4CC" fontSize={12}>
              {exercises.length}
            </Text>
          </HStack>

          <FlatList
            data={exercises}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 550 }}
            renderItem={({ item }) => (
              <ExerciseCard
                onPress={() => handleOpenExerciseDetails(item.id)}
                data={item}
              />
            )}
          />
        </VStack>
      )}
    </VStack>
  );
}
