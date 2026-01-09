import clsx from "clsx";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { TFocusedField } from "../../use-card-bottom-sheet-view-model";
import { useCreditCardViewModel } from "./use-credit-card-view-model";

const PURPLE_GRADIENT: readonly [string, string, string] = [
  "#5b3a8f",
  "#6b5ca5",
  "#7b6cb5",
];

export type TCardData = {
  number: string;
  name: string;
  expiry: string;
  cvv: string;
};

interface IProps extends ReturnType<typeof useCreditCardViewModel> {
  cardData: TCardData;
  focusedField: TFocusedField | null;
}

export const CreditCardView = ({
  focusedField,
  backAnimatedStyle,
  frontAnimatedStyle,
  cardData,
  formatCardNumber,
}: IProps) => {
  return (
    <View className="h-[192px]">
      <Animated.View
        style={[
          frontAnimatedStyle,
          {
            height: 192,
            width: "100%",
            position: "absolute",
            backfaceVisibility: "hidden",
          },
        ]}
      >
        <LinearGradient
          colors={PURPLE_GRADIENT}
          start={{ x: 0, y: 0.5 }}
          style={{ flex: 1, borderRadius: 16, padding: 20 }}
        >
          <View className="flex-row justify-between items-center mb-4">
            <View className="w-12 h-8 bg-yellow-400 rounded-md" />
          </View>

          <View
            className={clsx("py-2 px-1 rounded-lg mb-6", {
              "bg-white/20": focusedField === "number",
            })}
          >
            <Text className="text-white text-lg tracking-widest text-center">
              {formatCardNumber(cardData.number)}
            </Text>
          </View>

          <View className="flex-row justify-between items-end">
            <View
              className={clsx("flex-1 py-2 px-2 rounded-lg", {
                "bg-white/20": focusedField === "name",
              })}
            >
              <Text className="text-white text-sm font-bold uppercase">
                PORTADOR
              </Text>
              <Text className="text-white font-sm font-bold uppercase">
                {cardData.name.length ? cardData.name : "NOME DO TITULAR"}
              </Text>
            </View>

            <View
              className={clsx("ml-4 py-1 px-1 rounded-lg", {
                "bg-white/20": focusedField === "expiry",
              })}
            >
              <Text className="text-white text-xs mb-1 font-semibold">
                VÁLIDO ATÉ
              </Text>
              <Text className="text-white text-xs mb-1 font-bold">
                {cardData.expiry.length ? cardData.expiry : "MM/AA"}
              </Text>
            </View>
          </View>
        </LinearGradient>
      </Animated.View>

      <Animated.View
        style={[
          backAnimatedStyle,
          {
            height: 192,
            width: "100%",
            position: "absolute",
            backfaceVisibility: "hidden",
          },
        ]}
      >
        <LinearGradient
          colors={PURPLE_GRADIENT}
          start={{ x: 0, y: 0.5 }}
          style={{ flex: 1, borderRadius: 16 }}
        >
          <View className="h-[40px] bg-black w-full mt-[20px]" />
          <View className="flex-1 justify-center items-end px-5">
            <View className="w-[24px]">
              <Text className="text-white text-xs font-semibold mb-2">CVV</Text>
              <View
                className={clsx("bg-white p-2 rounded h-8 justify-center", {
                  "bg-blue-100": focusedField === "cvv",
                })}
              >
                <Text>{cardData.cvv || "..."}</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </Animated.View>
    </View>
  );
};
