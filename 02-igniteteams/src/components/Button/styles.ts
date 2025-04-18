import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type TButtonStyle = "PRIMARY" | "SECONDARY";

type TButtonStyledProps = {
  type: TButtonStyle;
};

export const Container = styled(TouchableOpacity)<TButtonStyledProps>`
  flex: 1;
  max-height: 56px;
  width: 100%;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};

  border-radius: 6px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
