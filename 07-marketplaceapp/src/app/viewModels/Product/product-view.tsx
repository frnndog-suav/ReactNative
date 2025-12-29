import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AddToCardFooter } from "./components/AddToCartFooter";
import { CommentItem } from "./components/CommentItem";
import { EmptyList } from "./components/EmptyList";
import { ErrorMessage } from "./components/ErrorMessage";
import { Header } from "./components/Header";
import { ListFooter } from "./components/ListFooter";
import { Loading } from "./components/Loading";
import { useProductViewModel } from "./use-product-view-model";

type TProps = ReturnType<typeof useProductViewModel>;

export const ProductView = ({
  isError,
  isLoading,
  productDetails,
  comments,
  fetchNextPage,
  getCommentsError,
  getCommentsLoading,
  handleEndReached,
  handleRefetch,
  hasNextPage,
  isFetchingNextPage,
  handleAddToCart,
  isRefetching,
}: TProps) => {
  if (isError) {
    return <ErrorMessage />;
  }

  if (isLoading || !productDetails) {
    return <Loading />;
  }

  return (
    <SafeAreaView className="flex-1 bg-background" edges={["top"]}>
      <FlatList
        data={comments}
        className="px-6"
        onRefresh={handleRefetch}
        refreshing={isRefetching}
        onEndReached={handleEndReached}
        renderItem={({ item }) => <CommentItem comment={item} />}
        ListEmptyComponent={<EmptyList isLoadingComments={isLoading} />}
        ListHeaderComponent={<Header productDetails={productDetails} />}
        ListFooterComponent={<ListFooter isLoadingMore={getCommentsLoading} />}
        contentContainerClassName="pb-6"
      />
      <AddToCardFooter
        product={productDetails}
        handleAddToCart={handleAddToCart}
      />
    </SafeAreaView>
  );
};
