import { useAuth } from "@hooks/useAuth";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { user } = useAuth();

  const theme = DefaultTheme;

  theme.colors.background = "#121214";

  return (
    <NavigationContainer theme={theme}>
      {!user.id ? <AuthRoutes /> : <AppRoutes />}
    </NavigationContainer>
  );
}
