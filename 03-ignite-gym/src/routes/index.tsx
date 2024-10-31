import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const theme = DefaultTheme;

  theme.colors.background = "#121214";

  return (
    <NavigationContainer theme={theme}>
      <AppRoutes />
    </NavigationContainer>
  );
}
