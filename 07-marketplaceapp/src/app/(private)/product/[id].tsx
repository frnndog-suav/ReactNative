import { useLocalSearchParams } from "expo-router";
import { ProductView } from "../../viewModels/Product/view";
import { useProductViewModel } from "../../viewModels/Product/view-model";

export default function Product() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const viewModel = useProductViewModel(Number(id));

  return <ProductView {...viewModel} />;
}
