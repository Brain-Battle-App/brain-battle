import { SafeAreaView, View } from "react-native";
import React, { useMemo, useCallback } from "react";
import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useTheme } from "@/Theme/ThemeProvider";

const CustomBottomSheet = (props: any) => {
  const { theme }: any = useTheme();

  const {
    bottomSheetModalRef,
    snapTo,
    onDismiss,
    children,
    snap,
    handleSheetChanges,
    backgroundColor,
    snapPoints,
    onBackDrop
  } = props;

  // const snapPoints = useMemo(() => ["55%", "55%"], []);

  // useFocusEffect(
  //   useCallback(() => {
  //     return () => {
  //       if (onBackDrop) {
  //         onBackDrop(); // Make sure onBackDrop is defined before calling it
  //       }

  //       bottomSheetModalRef.current?.close();
  //     };
  //   }, [])
  // );

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      backdropComponent={(props) => (
        <Backdrop {...props} bottomSheetModalRef={bottomSheetModalRef} />
      )}
      snapPoints={snapPoints}
      index={0}
      onDismiss={props?.onDismiss}
      backgroundStyle={{
        // borderTopLeftRadius: 25,  // Top left radius
        // borderTopRightRadius: 25, // Top right radius
        backgroundColor:backgroundColor ||theme.colors.background

      }}
    >
      <BottomSheetScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <View style={{ paddingBottom: 30 }}>{children}</View>
        </SafeAreaView>
      </BottomSheetScrollView>
    </BottomSheetModal>
  );
};

const Backdrop = ({ animatedIndex, bottomSheetModalRef, style }: any) => {
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [1, 1],
      [1, 1],
      Extrapolate.CLAMP
    ),
  }));

  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: "rgba(0,0,0,0.2)",
      },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle]
  );

  return (
    <Animated.View
      onTouchStart={() => bottomSheetModalRef.current?.close()}
      style={containerStyle}
    />
  );
};
export default CustomBottomSheet;
