import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useProductViewModel } from "./use-product-view-model";

type TProps = ReturnType<typeof useProductViewModel>;

export const ProductView = ({ isError, isLoading, productDetail }: TProps) => {
  if (isError) {
    return <Text>Houve um erro ao carregar os detalhes do produto</Text>;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={[]}
        renderItem={() => <></>}
        ListHeaderComponent={
          <>
            <Text>{productDetail?.name}</Text>
          </>
        }
      />
    </SafeAreaView>
  );
};
