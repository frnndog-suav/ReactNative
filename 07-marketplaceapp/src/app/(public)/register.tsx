import { RegisterView } from "../viewModels/Register/register.view";
import { useRegisterViewModel } from "../viewModels/Register/use-register.viewModel";

export default function Register() {
  const props = useRegisterViewModel();

  return <RegisterView {...props} />;
}
