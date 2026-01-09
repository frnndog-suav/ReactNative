import { HomeView } from "../../viewModels/Home/view";
import { useHomeViewModel } from "../../viewModels/Home/view-model";

export default function Home() {
  const viewModel = useHomeViewModel();

  return <HomeView {...viewModel} />;
}
