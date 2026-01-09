import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { useCallback, useEffect, useMemo, useRef } from "react";
import { colors } from "../../../../styles/colors";
import { useBottomSheetStore } from "../../store/use-bottom-sheet-store";

export const AppBottomSheet = () => {
  const { content, config, isOpen, close } = useBottomSheetStore();

  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => {
    return config?.snapPoints || ["80%", "90%"];
  }, [config?.snapPoints]);

  useEffect(() => {
    if (isOpen && content) {
      bottomSheetRef.current?.snapToIndex(0);
    } else {
      bottomSheetRef.current?.close();
    }
  }, [isOpen, content]);

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        opacity={0.7}
        appearsOnIndex={0}
        pressBehavior={"close"}
        disappearsOnIndex={-1}
      />
    ),
    []
  );

  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1) {
      close();
    }
  }, []);

  return (
    <BottomSheet
      index={-1}
      animateOnMount
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backdropComponent={renderBackdrop}
      enablePanDownToClose={config.enablePanDownToClose ?? true}
      backgroundStyle={{
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        backgroundColor: colors.background,
      }}
    >
      <BottomSheetScrollView>{content}</BottomSheetScrollView>
    </BottomSheet>
  );
};
