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
  const LinkCopiedModal = ({ modalVisible, setModalVisible }: any) => {
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
            width: "97%",
            // height: isiPad ? windowHeight / 1.1 : windowHeight / 1.2,
            backgroundColor: theme.colors.white,
            borderRadius: moderateScale(25),
            // borderRadius: moderateScale(25),
            gap: verticalScale(20),
            alignItems: "center",
            marginHorizontal:scale(20),
            alignSelf: "center",
            paddingVertical: moderateScale(40),
          }}
        >

<CustomText
            label="Link copied!"
            size={22}
            fontFam={fonts.medium}
            fontWeight={"600"}
            color={theme.colors?.text}
          />
         
        </View>
      </Modal>
    );
  };
  
  export default LinkCopiedModal;
  
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
  