import { HomeView } from "../../viewModels/Home/home-view";
import { useHomeViewModel } from "../../viewModels/Home/use-home.viewModel";

export default function Home() {
  const viewModel = useHomeViewModel();

  return <HomeView {...viewModel} />;
}
