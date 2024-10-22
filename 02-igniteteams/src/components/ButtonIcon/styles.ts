import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type TButtonIconStyle = "PRIMARY" | "SECONDARY";

type TButtonIconStyleProps = {
  type: TButtonIconStyle;
};

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;
  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<TButtonIconStyleProps>(
  ({ theme, type }) => ({
    size: 24,
    color: type === "PRIMARY" ? theme.COLORS.GRAY_700 : theme.COLORS.RED,
  })
)``;
