import { RegisterView } from "../viewModels/Register/view";
import { useRegisterViewModel } from "../viewModels/Register/view-model";

export default function Register() {
  const props = useRegisterViewModel();

  return <RegisterView {...props} />;
}
