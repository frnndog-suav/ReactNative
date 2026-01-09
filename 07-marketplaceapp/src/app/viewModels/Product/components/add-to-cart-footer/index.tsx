import { View } from "react-native";
import { AppButton } from "../../../../shared/components/app-button";
import { AppPriceText } from "../../../../shared/components/app-price-text";
import { IProduct } from "../../../../shared/interface/product";

interface IProps {
  product: IProduct;
  handleAddToCart: () => void;
}

export const AddToCardFooter = ({ product, handleAddToCart }: IProps) => {
  return (
    <View className="fixed justify-between bg-white bottom-0 right-0 left-0 p-7 h-[126px] flex-row items-center">
      <AppPriceText value={Number(product.value)} />

      <AppButton
        onPress={handleAddToCart}
        leftIcon="cart"
        className="w-[120px] h-[40px] rounded-[10px]"
      >
        Adicionar
      </AppButton>
    </View>
  );
};
