import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "./components/Header";
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

  return (
    <SafeAreaView className="flex-1 bg-background">
      <FlatList
        data={comments}
        renderItem={() => <></>}
        ListHeaderComponent={<Header productDetails={productDetails} />}
        className="px-6"
      />
    </SafeAreaView>
  );
};
