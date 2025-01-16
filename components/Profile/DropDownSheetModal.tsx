import {
  Image,
  ScrollView,
  StyleSheet,
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
import { useTheme } from "@/Theme/ThemeProvider";
import { isiPad } from "@/utils/CommonFun";
import { appStyles } from "@/utils/appStyles";
import { scale } from "react-native-size-matters";
import { country } from "@/utils/Data";
const DropDownSheetModal = ({ selected, setSelected,sheetRef }: any) => {
  const { theme }: any = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        // borderTopLeftRadius: moderateScale(25),
        // borderTopRightRadius: moderateScale(25),
        gap: verticalScale(20),
        alignItems: "center",

        alignSelf: "center",
        paddingHorizontal: moderateScale(20),
        paddingVertical: verticalScale(10),
      }}
    >
      <View style={{ ...appStyles.rowjustify, width: "100%" }}>
        <CustomText
          label="Change School"
          size={16}
          color={theme.colors?.text}
        />
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => sheetRef.current.dismiss()}
          style={{
            width: moderateScale(30),
            height: moderateScale(30),
            borderRadius: moderateScale(100),
            alignItems: "center",
            justifyContent: "center",
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
      </View>
      <View style={{ gap: verticalScale(10), width: "100%" }}>
        <TouchableOpacity
          // onPress={onPress}
          activeOpacity={0.5}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: scale(15),
            height: verticalScale(57),
            width: "100%",
            alignItems: "center",
            borderRadius: scale(13),
            backgroundColor: theme.colors.white,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginRight: 10,
              gap: scale(14),
              flexDirection: "row",
            }}
          >
            <Image
              source={images.roosevelt}
              style={{
                width: scale(20),
                height: scale(20),
              }}
              resizeMode={"contain"}
            />

            <CustomText
              size={18}
              color={theme.colors.text}
              text={"Roosevelt HS"}
            />
          </View>

          <TouchableOpacity
            // onPress={onShowPassword}
            // disabled={!onShowPassword}
            activeOpacity={0.6}
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Image
              source={images.arrow_down}
              style={{
                width: scale(20),
                height: scale(20),
                tintColor: theme.colors.text,
              }}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        </TouchableOpacity>
        <View
          style={{
            borderRadius: scale(20),
            backgroundColor: theme.colors.white,
            width: "100%",
            maxHeight: verticalScale(300),
            padding: moderateScale(15),
            gap:verticalScale(10)
          }}
        >
          <View
            style={{
              ...styles.searchContainer,
              width: "100%",
              backgroundColor: theme.colors.white,
              height: verticalScale(39),
              borderWidth: 1,
              borderColor: "#1C1D20"
            }}
          >
            <View
              style={{
                flex: 1,
                gap: scale(10),
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TextInput
                style={{
                  flex: 1,
                  fontSize: moderateScale(17),
                  fontFamily: fonts.regular,
                  padding: 0,
                  color: theme.colors.text,
                }}
                placeholder={"Search"}
                value={""}
                placeholderTextColor={theme.colors.text}
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                height: verticalScale(39),
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={images.search}
                resizeMode="contain"
                style={{
                  width: scale(18),
                  height: scale(18),
                  tintColor: theme.colors.text,
                }}
              />
            </TouchableOpacity>
          </View>

          <ScrollView
          showsVerticalScrollIndicator={false}
          >
        {country.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.5}
              onPress={() => setSelected(item)}
              style={{
                ...appStyles.row,
                justifyContent: "space-between",
                paddingHorizontal: moderateScale(5),
                paddingVertical: verticalScale(8),
              }}
            >
              <View>
                <Image
                  style={{
                    width: moderateScale(27),
                    height: moderateScale(27),
                  }}
                  resizeMode="contain"
                  source={item.image}
                />
              </View>
              <View style={{ width: "70%" }}>
                <CustomText
                  numberOfLines={1}
                  label={item.name}
                  size={17}
                  style={{ textAlign: "left" }}
                  color={theme.colors.text}
                />
              </View>

              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => setSelected(item)}
                style={{
                  width: moderateScale(22),
                  height: moderateScale(22),
                  borderRadius: moderateScale(20),
                  borderColor:
                    selected?.name == item.name ? theme.colors.primary:theme.colors.text,
                  borderWidth: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {selected?.name == item.name && (
                  <View
                    style={{
                      width: moderateScale(13),
                      height: moderateScale(13),
                      borderRadius: moderateScale(20),
                      backgroundColor: theme.colors.primary,
                    }}
                  ></View>
                )}
              </TouchableOpacity>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
        </View>
      </View>

      

      
    </View>
  );
};

export default DropDownSheetModal;

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
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: scale(15),
    borderRadius: scale(12),
  },
  inputContainer: {},
});
