import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TProduct } from "../../shared/types/product";
import { HomeHeader } from "./components/Header";
import { ProductCard } from "./components/ProductCard";
import { SearchInput } from "./components/SearchInput";

export const HomeView = () => {
  const productsList: TProduct[] = [
    {
      id: 1,
      value: "100",
      name: "Product 1",
      description: "Description 1",
      photo: "https://via.placeholder.com/150",
      height: "100",
      width: "100",
      weight: "100",
      averageRating: 1,
      views: 1,
      ratingCount: 1,
      categoryId: 1,
      category: { id: 1, name: "Category 1" },
      createdAt: "2021-01-01",
      updatedAt: "2021-01-01",
      deletedAt: "2021-01-01",
    },
  ];

  return (
    <SafeAreaView edges={["top"]}>
      <FlatList
        data={productsList}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={({ id }) => `product-${id}`}
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
