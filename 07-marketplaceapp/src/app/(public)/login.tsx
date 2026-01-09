import { LoginView } from "../viewModels/Login/view";
import { useLoginViewModel } from "../viewModels/Login/view-model";

export default function Login() {
  const props = useLoginViewModel();

  return <LoginView {...props} />;
}
