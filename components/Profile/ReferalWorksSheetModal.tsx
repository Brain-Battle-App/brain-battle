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
import Modal from "react-native-modal";
import { colors } from "@/utils/colors";
import { moderateScale, verticalScale } from "@/utils/Mertics";
import CustomText from "../CustomText";
import images from "@/constants/images";
import { fonts } from "@/utils/fonts";
import { windowWidth } from "@/utils/Dimensions";
import { useTheme } from "@/Theme/ThemeProvider";
import { isiPad } from "@/utils/CommonFun";
import { scale } from "react-native-size-matters";
const ReferalWorksSheetModal = ({ sheetRef }: any) => {
  const { theme }: any = useTheme();

  return (
    <View
    style={{
      flex: 1,
      backgroundColor: theme.colors.background,
      // borderTopLeftRadius: moderateScale(25),
      // borderTopRightRadius: moderateScale(25),
      gap: verticalScale(10),
      alignItems: "center",
      alignSelf: "center",
      paddingHorizontal: moderateScale(20),
      paddingVertical: verticalScale(10),
    }}
  >
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={() => sheetRef.current.dismiss()}
      style={{
        width: moderateScale(30),
        height: moderateScale(30),
        borderRadius: moderateScale(100),
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-end",
        backgroundColor: theme.colors.white,
      }}
    >
      <Image
        style={{
          width: "40%",
          height: "40%",
          tintColor: theme.colors.text,
        }}
        source={images.cross}
      />
    </TouchableOpacity>

    <CustomText
      label="How referal works?"
      size={23}
      fontFam={fonts.medium}
      fontWeight={"600"}
      color={theme.colors.text}
    />

    <View
      style={{
        ...styles.boxContainer,
        backgroundColor: theme.colors.white,
      }}
    >
  <View style={{gap:verticalScale(4)}}>
  <CustomText
          label={
            "1. Invite friends"
          }
          size={17}
          color={theme.colors.text}
        />
           <CustomText
          label={
            ".  Share your referral code to family or friends."
          }
          size={17}
          color={theme.colors.text}
        />

  </View>

  <View style={{gap:verticalScale(4)}}>
  <CustomText
          label={
            "2. Fulfill the terms & conditions"
          }
          size={17}
          color={theme.colors.text}
        />
           <CustomText
                          lineHeight={verticalScale(25)}
          label={
            ". Remind your referrals to complete their registration using your referral code and fulfill all T&C requirements."
          }
          size={17}
          color={theme.colors.text}
        />

  </View>
  <View style={{gap:verticalScale(4)}}>
  <CustomText
          label={
            "3. Win rewards"
          }
          size={17}
          color={theme.colors.text}
        />
           <CustomText
           lineHeight={verticalScale(25)}
          label={
            ". When your referrals have met the T&C requirements, you will receive rewards!."
          }
          size={17}
          color={theme.colors.text}
        />

  </View>
        
    </View>
  </View>
  );
};

export default ReferalWorksSheetModal;

const styles = StyleSheet.create({
  boxContainer: {
    width: "100%",
    borderRadius: moderateScale(20),
    padding: scale(15),
    gap: verticalScale(15),
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
