import { useLocalSearchParams } from "expo-router";
import { ProductView } from "../../viewModels/Product/product-view";
import { useProductViewModel } from "../../viewModels/Product/use-product-view-model";

export default function Product() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const viewModel = useProductViewModel(Number(id));

  return <ProductView {...viewModel} />;
}
