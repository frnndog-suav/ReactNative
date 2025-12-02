import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeHeader } from "./components/Header";
import { SearchInput } from "./components/SearchInput";

export const HomeView = () => {
  return (
    <SafeAreaView edges={["top"]}>
      <FlatList
        data={[]}
        renderItem={() => <></>}
        ListHeaderComponent={() => (
          <>
            <HomeHeader />
            <SearchInput />
          </>
        )}
        contentContainerClassName="px-[16px] pb-[120px]"
      />
    </SafeAreaView>
  );
};
