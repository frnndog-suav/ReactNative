import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface IProps {
  children: React.ReactNode;
}

export function KeyboardContainer(props: IProps) {
  return (
    <SafeAreaView className="flex-1">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="flex-1">{props.children}</View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
