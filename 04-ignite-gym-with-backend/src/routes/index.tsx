import { useAuth } from "@hooks/useAuth";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { Loading } from "@components/Loading";

export function Routes() {
  const { user, isLoadingUserStorageData } = useAuth();

  if (isLoadingUserStorageData) {
    return <Loading />;
  }

  const theme = DefaultTheme;

  theme.colors.background = "#121214";

  return (
    <NavigationContainer theme={theme}>
      {!user.id ? <AuthRoutes /> : <AppRoutes />}
    </NavigationContainer>
  );
}
