import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CommentItem } from "./components/CommentItem";
import { EmptyList } from "./components/EmptyList";
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
  isRefetching,
}: TProps) => {
  if (isError) {
    return <Text>Houve um erro ao carregar os detalhes do produto</Text>;
  }

  if (!productDetails) {
    return null;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SafeAreaView className="flex-1 bg-background">
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
      />
    </SafeAreaView>
  );
};
