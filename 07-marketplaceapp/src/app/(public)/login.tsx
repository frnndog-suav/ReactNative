import { LoginView } from "../viewModels/Login/login-view";
import { useLoginViewModel } from "../viewModels/Login/use-login.viewModel";

export default function Login() {
  const props = useLoginViewModel();

  return <LoginView {...props} />;
}
