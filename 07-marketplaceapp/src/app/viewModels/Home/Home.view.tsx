import { FlatList, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../../styles/colors";
import { Footer } from "./components/footer";
import { HomeHeader } from "./components/header";
import { ProductCard } from "./components/product-card";
import { SearchInput } from "./components/search-input";
import { useHomeViewModel } from "./use-home.viewModel";

type TProps = ReturnType<typeof useHomeViewModel>;

export const HomeView = ({
  products,
  isLoading,
  hasNextPage,
  isRefetching,
  isFetchingNextPage,
  handleRefresh,
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
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            onRefresh={handleRefresh}
            colors={[colors["purple-base"]]}
            tintColor={colors["purple-base"]}
          />
        }
      />
    </SafeAreaView>
  );
};
