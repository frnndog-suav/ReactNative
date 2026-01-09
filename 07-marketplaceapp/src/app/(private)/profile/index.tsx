import { ProfileView } from "../../viewModels/Profile/view";
import { useProfileViewModel } from "../../viewModels/Profile/view-model";

export default function Profile() {
  const viewModel = useProfileViewModel();

  return <ProfileView {...viewModel} />;
}
