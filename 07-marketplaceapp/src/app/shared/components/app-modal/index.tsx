import { Modal, TouchableWithoutFeedback, View } from "react-native";
import { useModalStore } from "../../store/use-modal";

export const AppModal = () => {
  const { close, config, content, isOpen, open } = useModalStore();

  if (!isOpen || !content) {
    return null;
  }

  return (
    <Modal
      visible={isOpen}
      transparent={config.transparent}
      animationType={config.animationType}
      statusBarTranslucent={config.statusBarTranslucent}
      onRequestClose={close}
    >
      <TouchableWithoutFeedback onPress={close}>
        <View className="flex-1 bg-black/50 justify-center items-center px-6">
          <TouchableWithoutFeedback onPress={() => {}}>
            {content}
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
