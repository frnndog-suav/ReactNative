import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeHeader } from "./components/Header";
import { ProductCard } from "./components/ProductCard";
import { SearchInput } from "./components/SearchInput";
import { useHomeViewModel } from "./useHome.viewModel";

type TProps = ReturnType<typeof useHomeViewModel>;

export const HomeView = ({ products }: TProps) => {
  return (
    <SafeAreaView edges={["top"]}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={({ id }) => `product-${id}`}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
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
