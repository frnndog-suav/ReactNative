import {
  Icon,
  Pressable,
  Toast,
  ToastDescription,
  ToastTitle,
  VStack,
} from "@gluestack-ui/themed";
import { X } from "lucide-react-native";
import { MY_THEME_CONTROLLER } from "../../theme";

type TProps = {
  id: string;
  title: string;
  description?: string;
  action?: "error" | "success";
  onClose: () => void;
};

export function ToastMessage({
  id,
  title,
  action = "success",
  description,
  onClose,
}: TProps) {
  return (
    <Toast
      nativeID={`toast-${id}`}
      marginTop={20}
      borderRadius={4}
      marginHorizontal={16}
      backgroundColor={
        action === "success"
          ? MY_THEME_CONTROLLER.COLORS.GREEN_500
          : MY_THEME_CONTROLLER.COLORS.RED_500
      }
    >
      <VStack gap={8} padding={12} sx={{ width: "100%" }}>
        <Pressable alignSelf="flex-end" onPress={onClose}>
          <Icon as={X} color={MY_THEME_CONTROLLER.COLORS.GRAY_100} />
        </Pressable>
        <ToastTitle color="white" fontWeight={"700"}>
          {title}
        </ToastTitle>

        {description && (
          <ToastDescription
            color="white"
            fontWeight={MY_THEME_CONTROLLER.FONTS.BODY}
          >
            {description}
          </ToastDescription>
        )}
      </VStack>
    </Toast>
  );
}
