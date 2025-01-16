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
import icons from "@/constants/icons";
import { windowWidth } from "@/utils/Dimensions";
import { useTheme } from "@/Theme/ThemeProvider";
import { isiPad } from "@/utils/CommonFun";
import { appStyles } from "@/utils/appStyles";
import { scale } from "react-native-size-matters";
import { LinearGradient } from "expo-linear-gradient";
import CustomButton from "../CustomButton";

const LogoutSheetModal = ({ modalVisible, setModalVisible, sheetRef }: any) => {
  const { theme }: any = useTheme();

  return (
    <View
      style={{
        width: windowWidth,
        backgroundColor: theme.colors.background,
        borderTopLeftRadius: moderateScale(25),
        borderTopRightRadius: moderateScale(25),
        gap: verticalScale(20),
        alignItems: "center",

        alignSelf: "center",
        padding: moderateScale(20),
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
          source={icons.cross}
        />
      </TouchableOpacity>

      <Image
        style={{
          width: moderateScale(100),
          height: moderateScale(100),
        }}
        source={images.logout}
      />

      <CustomText
        fontFam={fonts.medium}
        fontWeight="600"
        label={"Are you sure you want to Log Out?"}
        size={20}
        lineHeight={verticalScale(30)}
        style={{ textAlign: "center", width: "80%" }}
        color={theme.colors.text}
      />

      <CustomButton
        textStyle={{ color: theme.colors.white }}
        containerStyle={{
          backgroundColor: "#FF3A31",
          marginTop: verticalScale(40),
        }}
        containerStyles={`rounded-full w-full`}
        textStyles="text-lg  font-clashmedium"
        title="Yes, Logout"
        handlePress={() => sheetRef.current.dismiss()}

        
      />
    </View>
  );
};

export default LogoutSheetModal;

const styles = StyleSheet.create({
  boxContainer: {
    width: "100%",
    elevation: 5,
    shadowColor: colors.black + "50",
    shadowOffset: { width: 2, height: isiPad ? 4 : 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    borderRadius: moderateScale(30),
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
