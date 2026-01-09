import { useEffect } from "react";
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface IProps {
  isFlipped: boolean;
}

export const useCreditCardViewModel = ({ isFlipped }: IProps) => {
  const flipValue = useSharedValue(0);

  const frontAnimatedStyle = useAnimatedStyle(() => {
    const rotateValue = interpolate(flipValue.value, [0, 1], [0, 180]);

    return {
      transform: [{ rotateY: `${rotateValue}deg` }],
    };
  });

  const backAnimatedStyle = useAnimatedStyle(() => {
    const rotateValue = interpolate(flipValue.value, [0, 1], [180, 360]);

    return {
      transform: [{ rotateY: `${rotateValue}deg` }],
    };
  });

  const formatCardNumber = (cardNumber: string) => {
    const formatted = cardNumber.replace(/\s/g, "");

    const padded = formatted.padEnd(16, "*");

    return padded.match(/.{1,4}/g)?.join(" ") || "**** **** **** ****";
  };

  useEffect(() => {
    flipValue.value = withTiming(isFlipped ? 1 : 0, { duration: 600 });
  }, [isFlipped]);

  return { frontAnimatedStyle, backAnimatedStyle, formatCardNumber };
};
