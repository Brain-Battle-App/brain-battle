import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { colors } from "@/utils/colors";
import { moderateScale, verticalScale } from "@/utils/Mertics";
import CustomText from "../CustomText";
import { fonts } from "@/utils/fonts";
import { useTheme } from "@/Theme/ThemeProvider";
import { isiPad } from "@/utils/CommonFun";
import { scale } from "react-native-size-matters";
const ViewQuestionsSheetModal = ({ modalVisible, setModalVisible }: any) => {
  const { theme }: any = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        gap: verticalScale(10),
        alignItems: "center",
        alignSelf: "center",
        paddingHorizontal: moderateScale(20),
        paddingVertical: verticalScale(10),
      }}
    >
      <CustomText
        label="SAT Math: Algebra"
        size={23}
        fontFam={fonts.medium}
        fontWeight="600"
        color={theme.colors.text}
      />

      <View
        style={{
          ...styles.boxContainer,
          backgroundColor: theme.colors.white,
        }}
      >
        <CustomText
          label="Question"
          size={22}
          fontFam={fonts.medium}
          fontWeight="600"
          color={theme.colors.text}
        />

        <View
          style={{
            ...styles.boxContainer,
            padding: scale(10),
            backgroundColor: theme.colors.background,
            alignItems: "center",
          }}
        >
          <CustomText
            label="When x = 3 and y = 5, by how much
        does the value of 3x2 - 2y exceed the value of 2x2 - 3у?"
            size={17}
            lineHeight={verticalScale(24)}
            style={{ textAlign: "center" }}
            color={theme.colors.text}
          />
        </View>
      </View>
      <View
        style={{
          ...styles.boxContainer,
          backgroundColor: theme.colors.white,
        }}
      >
        <CustomText
          label="Answer"
          size={22}
          fontFam={fonts.medium}
          fontWeight="600"
          color={theme.colors.green}
        />

        <View
          style={{
            ...styles.boxContainer,
            padding: scale(10),
            backgroundColor: theme.colors.green + "10",
            alignItems: "center",
          }}
        >
          <CustomText
            label="The value of 3x^2 - 2y exceeds the value of 2x^2 - 3y by 14"
            size={17}
            lineHeight={verticalScale(24)}
            style={{ textAlign: "center" }}
            color={theme.colors.text}
          />
        </View>
      </View>

      <View
        style={{
          ...styles.boxContainer,
          backgroundColor: theme.colors.white,
        }}
      >
        <CustomText
          label="Explanation"
          size={22}
          fontFam={fonts.medium}
          fontWeight="600"
          color={theme.colors.primary}
        />

        <View
          style={{
            ...styles.boxContainer,
            padding: scale(10),
            backgroundColor: theme.colors.primary + "10",
          }}
        >
          <CustomText
            label={
              "1.  Substitute the values of x and y into both expressions: \n .  For 3x^2 - 2y: 3(3)^2 - 2(5) = 3(9) - 10 = 27 - 10 = 17 \n .  For 2x^2 - 3y: 2(3)^2 - 3(5) = 2(9) - 15 = 18 - 15 = 3 \n 2. Calculate the difference between the two values\n . 17 - 3 = 14"
            }
            size={17}
            lineHeight={verticalScale(24)}
            color={theme.colors.text}
          />
        </View>
      </View>
    </View>
  );
};

export default ViewQuestionsSheetModal;

const styles = StyleSheet.create({
  boxContainer: {
    width: "100%",
    borderRadius: moderateScale(20),
    padding: scale(15),
    alignItems: "center",
    gap: verticalScale(10),
  },

  downloadContainer: {
    height: moderateScale(isiPad ? 55 : 50),
    width: moderateScale(isiPad ? 55 : 50),
    borderRadius: moderateScale(20),
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.black,
    overflow: "hidden",
  },
});
