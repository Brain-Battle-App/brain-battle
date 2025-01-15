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
import CustomButton from "../CustomButton";
import { LinearGradient } from "expo-linear-gradient";
import { appStyles } from "@/utils/appStyles";
import { scale } from "react-native-size-matters";
import { router } from "expo-router";
const LivePopupModal = ({ modalVisible, setModalVisible }: any) => {
  const { theme }: any = useTheme();

  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={setModalVisible}
      backdropColor="black"
      style={{
        flex: 1,
        alignItems: "flex-end",
        alignContent: "flex-end",
        bottom: 0,
      }}
    >
      <View
        style={{
          width: windowWidth,
          // height: isiPad ? windowHeight / 1.1 : windowHeight / 1.2,
          backgroundColor: theme.colors.background,
          borderTopLeftRadius: moderateScale(25),
          borderTopRightRadius: moderateScale(25),
          // borderRadius: moderateScale(25),
          gap: verticalScale(20),
          alignItems: "center",

          alignSelf: "center",
          padding: moderateScale(20),
        }}
      >
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => setModalVisible(false)}
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
        <CustomText
          label="Out of Lives?"
          fontFam={fonts.bold}
          fontWeight="700"
          size={24}
          color={theme.colors?.pink}
        />
        <LinearGradient
          colors={["#FF3A3140", "#FCB81030", "#55A2FF40"]} // Gradient colors
          start={{ x: 0, y: 0 }} // Start at the top-left
          end={{ x: 1, y: 1 }} // End at the bottom-right
          style={{
            backgroundColor: theme.colors.white,
            borderRadius: moderateScale(40),
            alignItems: "center",
            paddingHorizontal: moderateScale(45),
            paddingVertical: verticalScale(30),
            gap: verticalScale(15),
          }}
        >
          <ImageBackground
            style={{
              width: moderateScale(80),
              height: verticalScale(80),
              alignItems: "center",
              justifyContent: "center",
            }}
            source={images.heart}
            resizeMode="contain"
          >
            <CustomText
              label="0"
              size={30}
              fontFam={fonts.medium}
              fontWeight="600"
              color={theme.colors.white}
            />
          </ImageBackground>
        </LinearGradient>
        <View style={{ ...appStyles.row, gap: scale(3) }}>
          <CustomText
            label="Your receive"
            size={12}
            color={theme.colors.black_gray}
          />
          <CustomText
            label="4"
            size={14}
            fontFam={fonts.medium}
            fontWeight="600"
            color={theme.colors.pink}
          />
          <CustomText
            label="new lives every"
            size={12}
            color={theme.colors.black_gray}
          />
          <CustomText
            label="4 hours!"
            size={14}
            fontFam={fonts.medium}
            fontWeight="600"
            color={theme.colors.pink}
          />
        </View>

        <View
          style={{
            ...appStyles.row,
            gap: scale(10),
            paddingHorizontal: scale(10),
            paddingVertical: verticalScale(7),
            backgroundColor: theme.colors.white,
            borderRadius: 999,
          }}
        >
          <CustomText
            label="Time to full Next lives"
            size={12}
            color={theme.colors.text}
          />
          <View
            style={{
              ...appStyles.row,
              gap: scale(5),
              borderRadius: 999,
              backgroundColor: theme.colors.black_Shade,
              padding: scale(4),
            }}
          >
            <Image
              style={{
                width: moderateScale(18),
                height: verticalScale(18),
                alignItems: "center",
                justifyContent: "center",
                tintColor: theme.colors.text,
              }}
              source={images.clock}
              resizeMode="contain"
            />

            <CustomText label="24:24" size={14} color={theme.colors.text} />
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            gap: verticalScale(15),
            flexDirection: "row",
          }}
        >
          <CustomButton
            textStyles={`font-semibold text-white`}
            // textStyles="text-lg text-white font-clashsemibold"
            containerStyles={`rounded-[50%] w-[100%]`}
            title="Purchease Lives"
            handlePress={() => {
              setModalVisible(false);
              setTimeout(() => {
                router.push("/ConfirmPurchease");
              }, 500);
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default LivePopupModal;

const styles = StyleSheet.create({
  boxContainer: {
    width: "100%",
    padding: moderateScale(20),
    borderWidth: 1,
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
