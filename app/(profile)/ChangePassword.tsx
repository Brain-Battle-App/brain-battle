import {
  FlatList,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  TextInput,
} from "react-native";

import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale, horizontalScale } from "@/utils/Mertics";
import images from "@/constants/images";
import CountryDropDown from "@/components/CountryDropDown";
import icons from "@/constants/icons";
import { useTheme } from "@/Theme/ThemeProvider";
import Header from "@/components/Header";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { scale } from "react-native-size-matters";
import { appStyles } from "@/utils/appStyles";
import CustomText from "@/components/CustomText";
import { fonts } from "@/utils/fonts";

const ChangePassword = ({ navigation }: any) => {
  const { theme }: any = useTheme();

  const [isCountryDropDown, setIsCountryDropDown] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState({
    name: "Country",
    image: images.ukflag,
  });

  const PasswordValidate = ({ title }: any) => {
    return (
      <View style={{ ...appStyles.row, gap: scale(7) }}>
        <Image
          style={{
            width: moderateScale(18),
            height: moderateScale(18),
            tintColor: theme.colors.text,
          }}
          source={images.checkmark_circle}
        />
        <CustomText
          label={title}
          fontFam={fonts.light}
          fontWeight="400"
          size={14}
          color={theme.colors.text}
        />
      </View>
    );
  };

  return (
    <>
      <SafeAreaView
        edges={["top"]}
        style={{ flex: 1, backgroundColor: theme.colors.background,
          paddingTop: verticalScale(Platform.OS=="ios"?5: 20),

         }}
      >
        <View
          style={{
            flex: 1,
            paddingHorizontal: moderateScale(20),
          }}
        >
          <View
            style={{
              flex: 1,
              gap: verticalScale(11),
            }}
          >
            <Header label="Change Password" />
            <View
              style={{
                paddingTop: verticalScale(20),
                gap: verticalScale(4),
              }}
            >
              <CustomText
                label={"You can use the same email"}
                fontFam={fonts.light}
                fontWeight="400"
                size={14}
                color={theme.colors.text}
              />
              <View style={{ ...appStyles.row, gap: scale(3) }}>
                <CustomText
                  label={"vondoe@brainbattle.co"}
                  size={14}
                  fontFam={fonts.medium}
                  fontWeight="600"
                  color={theme.colors.text}
                />
                <CustomText
                  label={"and password to log in"}
                  fontFam={fonts.light}
                  fontWeight="400"
                  size={14}
                  color={theme.colors.text}
                />
              </View>
            </View>

            <FormField
              placeholder="New Password"
              inputStyle={{ color: theme.colors.text }}
              textStyle={{ color: theme.colors.text }}
              value={""}
              placeholderTextColor={theme.colors.text}
              leftIcon={{ color: theme.colors.text, size: 24, name: "lock" }}
              rightIcon={{ color: theme.colors.text, size: 24, name: "eye" }}
              textStyles="ml-4 mb-2"
              // handleChangeText={(value) => handleInputChange('email', value)}
              bgColor={theme.colors.white}
            />

            <FormField
              placeholder="Retype New password"
              inputStyle={{ color: theme.colors.text }}
              textStyle={{ color: theme.colors.text }}
              value={""}
              placeholderTextColor={theme.colors.text}
              leftIcon={{ color: theme.colors.text, size: 24, name: "lock" }}
              rightIcon={{ color: theme.colors.text, size: 24, name: "eye" }}
              textStyles="ml-4 mb-2"
              // handleChangeText={(value) => handleInputChange('email', value)}
              bgColor={theme.colors.white}
            />

            <CustomText
              label={"Your password must include"}
              size={14}
              color={theme.colors.text}
            />
            <PasswordValidate title="At least 8 characters" />
            <PasswordValidate title="At least one letter" />
            <PasswordValidate title="At least one number" />

            <View
        style={{
          ...styles.boxContainer,
          alignItems: "center",
          flexDirection: "row",
          gap: verticalScale(15),
          borderRadius: moderateScale(20),
          backgroundColor:"#312E2920"
        }}
      >
           <Image
             style={{
               width: moderateScale(20),
               height: moderateScale(20),
               tintColor:theme.colors?.text
             }}
             source={images.info}
           />
           <CustomText
             label={"Avoid using spaces, your name, email or passwords you have used before"}
             size={14}
             color={theme.colors.text}
           />

        
      </View>
          </View>

          <View style={{ paddingBottom: verticalScale(50) }}>
            <CustomButton
              textStyle={{ color: theme.colors.white }}
              containerStyles={`rounded-full w-full`}
              title="Create Password"
              handlePress={() => {
                // setIsConfirmPurcheaseModal(true)
              }}
            />
          </View>
        </View>
      </SafeAreaView>
      {isCountryDropDown && (
        <CountryDropDown
          top={verticalScale(200)}
          setIsCountryDropDown={setIsCountryDropDown}
          right={moderateScale(20)}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
      )}
    </>
  );
};
export default ChangePassword;

const styles = StyleSheet.create({
  boxContainer: {
    width: "100%",
    paddingHorizontal: moderateScale(20),
    paddingVertical: verticalScale(15),
  },
  profileImg: {
    width: moderateScale(110),
    height: moderateScale(110),
    borderRadius: moderateScale(100),
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    marginTop: verticalScale(20),
  },
  pencilContainer: {
    width: moderateScale(35),
    height: moderateScale(35),
    borderRadius: moderateScale(100),
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    right: moderateScale(-7),
  },
});
