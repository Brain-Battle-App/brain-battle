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
  const QrCodeModal = ({ modalVisible, setModalVisible }: any) => {
    return (
      <Modal
        isVisible={modalVisible}
        onBackdropPress={setModalVisible}
        backdropColor="transparent"
        style={{ flex: 1 }}
      >
        <View
          style={{
            width: "90%",
            // height: isiPad ? windowHeight / 1.1 : windowHeight / 1.2,
            backgroundColor: colors.white,
            borderRadius: moderateScale(25),
            elevation: 10,
            shadowColor: colors.black + "50",
            shadowOffset: { width: 2, height: 2 },
            alignSelf: "center",
            shadowOpacity: 0.5,
            shadowRadius: 5,
            padding: moderateScale(20),
          }}
        >
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => setModalVisible(false)}
            style={{
              width: moderateScale(20),
              height: moderateScale(20),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ width: "70%", height: "70%" }}
              source={icons.cross}
            />
          </TouchableOpacity>
          <View
            style={{
              marginHorizontal: moderateScale(10),
              marginVertical: verticalScale(5),
            }}
          >
            <View
              style={{ width: moderateScale(250), height: verticalScale(250),alignSelf:"center" }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={images.qrcode}
                resizeMode="contain"
              />
            </View>
          </View>
          <View style={{alignItems:"center",alignSelf:"center",gap:verticalScale(15)}}>
          <CustomText
                fontFam={fonts.medium}
                fontWeight="600"
                label="@sarahm"
                size={30}
                style={{marginBottom:verticalScale(15)}}
                color={"#494949"}
              />
  
  <TouchableOpacity
                  activeOpacity={0.6}
                  style={{
                    ...styles.boxContainer,
                    alignItems: "center",
                    flexDirection: "row",
                    gap: verticalScale(20),
                    borderRadius: moderateScale(20),
                   
                  }}
                >
                  <Image
                    style={{
                      width: moderateScale(22),
                      height: moderateScale(22),
                    }}
                    source={icons.share}
                    resizeMode="contain"
  
                  />
                  <CustomText
                    fontFam={fonts.medium}
                    fontWeight="600"
                    label={"Share"}
                    size={22}
                    color={colors.black}
                  />
                </TouchableOpacity>
  
  
  <TouchableOpacity
                  activeOpacity={0.6}
                  style={{
                    ...styles.boxContainer,
                    alignItems: "flex-end",
                    flexDirection: "row",
                    justifyContent:"center",
                    width:"70%",
                    gap: verticalScale(15),
                    paddingLeft:moderateScale(40),
                    borderRadius: moderateScale(20),
                   
                  }}
                >
                  <Image
                    style={{
                      width: moderateScale(22),
                      height: moderateScale(22),
                      marginBottom:verticalScale(5)
                    }}
                    source={icons.download}
                    resizeMode="contain"
                  />
                
                  <View style={{width:"100%",alignSelf:"center",}}>
                  <CustomText
                    fontFam={fonts.medium}
                    fontWeight="600"
                    label={"Save to Camera Roll"}
                    size={22}
                    color={colors.black}
                  />
  
                  </View>
                 
                </TouchableOpacity>
  
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
    }
  
  });
  