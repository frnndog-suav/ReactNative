import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Footer } from "./components/Footer";
import { HomeHeader } from "./components/Header";
import { ProductCard } from "./components/ProductCard";
import { SearchInput } from "./components/SearchInput";
import { useHomeViewModel } from "./useHome.viewModel";

type TProps = ReturnType<typeof useHomeViewModel>;

export const HomeView = ({
  products,
  isLoading,
  hasNextPage,
  isFetchingNextPage,
  handleEndReached,
}: TProps) => {
  return (
    <SafeAreaView edges={["top"]}>
      <FlatList
        numColumns={2}
        data={products}
        onEndReached={handleEndReached}
        keyExtractor={({ id }) => `product-${id}`}
        contentContainerClassName="px-[16px] pb-[120px]"
        renderItem={({ item }) => <ProductCard product={item} />}
        ListFooterComponent={
          <Footer
            isLoading={hasNextPage && (isLoading || isFetchingNextPage)}
          />
        }
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        ListHeaderComponent={() => (
          <>
            <HomeHeader />
            <SearchInput />
          </>
        )}
      />
    </SafeAreaView>
  );
};
