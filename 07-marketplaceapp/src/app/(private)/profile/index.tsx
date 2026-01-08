import { ProfileView } from "../../viewModels/Profile/profile-view";
import { useProfileViewModel } from "../../viewModels/Profile/use-profile-view-model";

export default function Profile() {
  const viewModel = useProfileViewModel();

  return <ProfileView {...viewModel} />;
}
