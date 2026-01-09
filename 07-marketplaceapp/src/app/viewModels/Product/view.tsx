import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AddToCardFooter } from "./components/add-to-cart-footer";
import { CommentItem } from "./components/comment-item";
import { EmptyList } from "./components/empty-list";
import { ErrorMessage } from "./components/error-message";
import { Header } from "./components/header";
import { ListFooter } from "./components/list-footer";
import { Loading } from "./components/loading";
import { useProductViewModel } from "./view-model";

interface IProps extends ReturnType<typeof useProductViewModel> {}

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
  handleOpenReview,
}: IProps) => {
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
        ListHeaderComponent={
          <Header
            handleOpenReview={handleOpenReview}
            productDetails={productDetails}
          />
        }
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
