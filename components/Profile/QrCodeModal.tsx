import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useState } from "react";
  import Modal from "react-native-modal";
import { colors } from "@/utils/colors";
import { moderateScale,verticalScale } from "@/utils/Mertics";
import CustomText from "../CustomText";
import images from "@/constants/images";
import { fonts } from "@/utils/fonts";
import icons from "@/constants/icons";
import { windowWidth } from "@/utils/Dimensions";
import { useTheme } from "@/Theme/ThemeProvider";
import { isiPad } from "@/utils/CommonFun";
import CustomButton from "../CustomButton";
  const QrCodeModal = ({ modalVisible, setModalVisible }: any) => {
    const { theme }:any = useTheme();

    return (
      <Modal
        isVisible={modalVisible}
        onBackdropPress={setModalVisible}
        backdropColor="black"
        style={{ flex: 1,
          alignItems:"flex-end",
          alignContent:"flex-end",
          bottom:0

         }}
      >
        <View
          style={{
            width: windowWidth,
            // height: isiPad ? windowHeight / 1.1 : windowHeight / 1.2,
            backgroundColor:theme.colors.background,
            borderTopLeftRadius: moderateScale(25),
            borderTopRightRadius: moderateScale(25),
            // borderRadius: moderateScale(25),
            gap:verticalScale(20),
           
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
              borderRadius:moderateScale(100),
              alignItems: "center",
              justifyContent: "center",
              alignSelf:"flex-end",
              backgroundColor:theme.colors.white
            }}
          >
            <Image
              style={{ width: "40%", height: "40%",tintColor:theme.colors.text }}
              source={icons.cross}
            />
          </TouchableOpacity>
          <View
            style={{
              marginHorizontal: moderateScale(10),
              paddingVertical: verticalScale(40),
              backgroundColor:theme.colors.white,
              borderRadius:moderateScale(25),
              alignItems:"center",
              padding:moderateScale(20),
              gap:verticalScale(15)
            }}
          >
            <View
              style={{ width: moderateScale(200), height: verticalScale(200),}}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={images.qrcode}
                resizeMode="contain"
              />
            </View>
            <CustomText
                label="@sarahm"
                size={24}
                color={theme.colors?.text}
              />
          </View>
          <View style={{alignItems:"center",gap:verticalScale(15),flexDirection:"row"}}>
            <View
            style={{...styles.downloadContainer,
              backgroundColor:theme.colors.white,

            }}
            >

<Image
                    style={{
                      width: moderateScale(22),
                      height: moderateScale(22),
                      tintColor:theme?.colors.primary
                    }}
                    source={icons.download}
                    resizeMode="contain"
                  />
              

            </View>
        

          

<CustomButton
                        textStyles={`font-semibold ${colors.bluelight}`}
                        // textStyles="text-lg text-white font-clashsemibold"
                        containerStyles={`rounded-[50%] w-[80%]`}
                        title='Share QR Code'
                        handlePress={() => console.log("Weekly")}
                      />
  
  
  
  
 
  
          </View>
  
        
        </View>
      </Modal>
    );
  };
  
  export default QrCodeModal;
  
  const styles = StyleSheet.create({
    boxContainer: {
      width: "100%",
      padding: moderateScale(20),
     borderWidth:1,
    },

    downloadContainer: {
      height: moderateScale( isiPad? 55:50),
      width: moderateScale(isiPad? 55:50),
      borderRadius: moderateScale(20),
      alignItems: "center",
      justifyContent: "center",
      shadowColor: colors.black,
      overflow: "hidden",
    },
  
  });
  