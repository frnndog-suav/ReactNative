import { Text, View } from "react-native";

interface IProps {
  productName: string;
  onClose: () => void;
  onGoToCart: () => void;
  onContinueShopping: () => void;
}

export const AddToCartSuccessModal = ({
  onClose,
  onContinueShopping,
  onGoToCart,
  productName,
}: IProps) => {
  return (
    <View className="bg-white rounded-xl p-6 w-full mx-w-sm">
      <Text>{productName} has been added to your cart!</Text>
    </View>
  );
};
