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
import images from "@/constants/images";
import { fonts } from "@/utils/fonts";
import icons from "@/constants/icons";
import { windowWidth } from "@/utils/Dimensions";
import { useTheme } from "@/Theme/ThemeProvider";
import { isiPad } from "@/utils/CommonFun";
import { appStyles } from "@/utils/appStyles";
import { scale } from "react-native-size-matters";
import { LinearGradient } from "expo-linear-gradient";

const ConfirmPurcheaseModal = ({ modalVisible, sheetRef }: any) => {
  const { theme }: any = useTheme();

  const [ProPlainsData, setProPlainsData] = useState([
    { txt: "Unlimited Public Game Entry", icon: images.tick },
    { txt: "Play, Rewards, Leaderboard Features ", icon: images.tick },
    { txt: "Create Private Matches With Friends", icon: images.tick },
    { txt: "In-Depth Game Review", icon: images.tick },
    {
      txt: "Custom Study Sets",
      icon: images.soon,
      isCommingSoon: "Coming Soon",
    },
  ]);

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

    <TouchableOpacity
      activeOpacity={0.6}
      style={{
        ...styles.boxContainer,
        backgroundColor: theme.colors.white,
        borderWidth: 1,
        borderColor: "#FCB810",
      
        padding: scale(20),
      }}
    >
      <View
        style={{
          ...appStyles.rowjustify,
          paddingVertical: verticalScale(10),
          borderBottomWidth:verticalScale(0.5),
          borderBottomColor:"#EEEFF2"
          
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: moderateScale(15),

          }}
        >
          <CustomText
            fontFam={fonts.medium}
            fontWeight="600"
            label={"Pro"}
            size={25}
            color={"#A48A00"}
          />
          <Image
            style={{
              width: moderateScale(25),
              height: moderateScale(25),
            }}
            source={images.battle_gold}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: moderateScale(5),
          }}
        >
          <CustomText
            fontFam={fonts.medium}
            fontWeight="600"
            label={"$ 12"}
            style={{ alignSelf: "flex-end" }}
            size={32}
            color={"#A48A00"}
          />
          <CustomText
            label={"/ Month"}
            fontFam={fonts.medium}
            fontWeight="600"
            size={18}
            style={{ alignSelf: "flex-end" }}
            color={theme.colors.text}
          />
        </View>
      </View>

     
      <View >
        {ProPlainsData.map((item, index) => {
          return (
            <View>
              <View
                style={{
                  ...appStyles.row,
                  paddingVertical: verticalScale(10),
                  gap: scale(10),
                  width: "70%",
                }}
              >
                <Image
                  style={{
                    width: moderateScale(22),
                    height: moderateScale(22),
                  }}
                  source={images.checkmark_circle}
                  resizeMode="contain"
                />

                <View
                  style={{
                    gap: verticalScale(10),
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <CustomText
                    text={item.txt}
                    // style={{ marginLeft: moderateScale(isiPad ? 20 : 15) }}
                    size={15}
                    color={theme.colors.text}
                  />
                  {item?.isCommingSoon && (
                    <View
                      style={{
                        padding: moderateScale(8),
                        borderRadius: moderateScale(12),
                        alignItems: "center",
                        justifyContent: "center",
                        gap: scale(5),
                        backgroundColor: theme.colors.primary + "20",
                      }}
                    >
                      <CustomText
                        text={item.isCommingSoon}
                        size={13}
                        color={theme.colors.primary}
                      />
                    </View>
                  )}
                </View>
              </View>
            </View>
          );
        })}
      </View>

      <TouchableOpacity
      onPress={() => sheetRef.current.dismiss()}
      activeOpacity={0.5}>
        <LinearGradient
          colors={["#B4840E", "#000000"]} // Gradient colors
          start={{ x: 0, y: 0 }} // Start at the top-left
          end={{ x: 1, y: 1 }} // End at the bottom-right
          style={{
            backgroundColor: theme.colors.white,
            borderRadius: moderateScale(999),
            alignItems: "center",
            padding: moderateScale(10),
            height: verticalScale(45),
            justifyContent: "center",
          }}
        >
          <CustomText label="Unlock" size={18} color={theme.colors.white} />
        </LinearGradient>
      </TouchableOpacity>
    </TouchableOpacity>
  </View>
  );
};

export default ConfirmPurcheaseModal;

const styles = StyleSheet.create({
  boxContainer: {
    width: "100%",
   
    borderRadius: moderateScale(30),
    gap:verticalScale(10)
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
