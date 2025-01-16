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

import { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale, horizontalScale } from "@/utils/Mertics";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { useTheme } from "@/Theme/ThemeProvider";
import Header from "@/components/Header";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { scale } from "react-native-size-matters";
import { router } from "expo-router";
import CustomText from "@/components/CustomText";
import CustomBottomSheet from "@/components/CustomBottomSheet";
import DropDownSheetModal from "@/components/Profile/DropDownSheetModal";
import { fonts } from "@/utils/fonts";

const EditProfile = ({ navigation }: any) => {
  const { theme }: any = useTheme();
  const countryBottomSheetModalRef = useRef<any>(null);
  const [school, setSchool] = useState();
  const SchoolContainer = ({ icon, title, onPress }: any) => {
    return (
      <View style={{ gap: verticalScale(8) }}>
        <CustomText
          label={"School"}
          size={16}
          color={theme.colors.text}
        />

        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.5}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: scale(15),
            height: verticalScale(57),
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
      </View>
    );
  };

  return (
    <>
      <SafeAreaView
        edges={["top"]}
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
          paddingTop: verticalScale(Platform.OS == "ios" ? 5 : 20),
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1,
            backgroundColor: theme.colors.background,
            marginBottom: verticalScale(40),
          }}
        >
          <View
            style={{
              paddingTop: verticalScale(10),
              paddingHorizontal: moderateScale(20),
              gap: verticalScale(20),
            }}
          >
            <Header label="Edit Profile" />
            <View
              style={{
                alignSelf: "center",
              }}
            >
              <View style={styles.profileImg}>
                <Image style={styles.profileImg} source={images.user3} />
              </View>
              <TouchableOpacity
                activeOpacity={0.5}
                style={{
                  ...styles.pencilContainer,
                  backgroundColor: theme.colors.primary,
                }}
              >
                <Image
                  style={{ width: "60%", height: "60%" }}
                  source={icons.edit}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, gap: verticalScale(10) }}>
              <FormField
                label="Name"
                placeholder="Your name"
                inputStyle={{ color: theme.colors.text }}
                textStyle={{ color: theme.colors.text }}
                value={"vondoe@brainbattle.co"}
                // handleChangeText={(value) => handleInputChange('email', value)}
                textStyles="ml-4 mb-2"
                bgColor={theme.colors.white}
                keyboardType="email-address"
                leftIcon={{ color: theme.colors.text, size: 24, name: "user" }}
              />

              <FormField
                label="Username"
                placeholder="Your username"
                inputStyle={{ color: theme.colors.text }}
                textStyle={{ color: theme.colors.text }}
                value={"vondoe"}
                // handleChangeText={(value) => handleInputChange('email', value)}
                textStyles="ml-4 mb-2"
                bgColor={theme.colors.white}
                keyboardType="email-address"
                leftIcon={{ color: theme.colors.text, size: 24, name: "user" }}
              />
              <FormField
                label="Email"
                placeholder="Your email"
                inputStyle={{ color: theme.colors.text }}
                textStyle={{ color: theme.colors.text }}
                value={"vondoe@brainbattle.co"}
                // handleChangeText={(value) => handleInputChange('email', value)}

                textStyles="ml-4 mb-2"
                bgColor={theme.colors.white}
                keyboardType="email-address"
                leftIcon={{ color: theme.colors.text, size: 24, name: "mail" }}
              />
              <SchoolContainer
                onPress={() => countryBottomSheetModalRef.current.present()}
              />

              <FormField
                label="Grade"
                placeholder="Your grade"
                inputStyle={{ color: theme.colors.text }}
                textStyle={{ color: theme.colors.text }}
                value={"11th"}
                // handleChangeText={(value) => handleInputChange('email', value)}
                textStyles="ml-4 mb-2"
                bgColor={theme.colors.white}
                keyboardType="email-address"
                leftIcon={{ color: theme.colors.text, size: 24, name: "mail" }}
              />
            </View>

            <View
              style={{ gap: verticalScale(20), paddingTop: verticalScale(50) }}
            >
              <CustomButton
                textStyle={{ color: theme.colors.primary }}
                iconName={"lock"}
                iconSize={24}
                iconColor={theme.colors.primary}
                containerStyle={{
                  backgroundColor: theme.colors.white,
                  gap: scale(10),
                }}
                containerStyles={`rounded-full w-full`}
                title="Change Password"
                handlePress={() => {
                  router.push("/ChangePassword");

                  // setIsConfirmPurcheaseModal(true)
                }}
              />

              <CustomButton
                textStyle={{ color: theme.colors.white }}
                containerStyles={`rounded-full w-full`}
                title="Save Changes"
                handlePress={() => {
                  // setIsConfirmPurcheaseModal(true)
                }}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <CustomBottomSheet bottomSheetModalRef={countryBottomSheetModalRef}>
        <DropDownSheetModal 
        sheetRef={countryBottomSheetModalRef}
        selected={school} setSelected={setSchool} />
      </CustomBottomSheet>
    </>
  );
};
export default EditProfile;

const styles = StyleSheet.create({
  profileImg: {
    width: moderateScale(110),
    height: moderateScale(110),
    borderRadius: moderateScale(100),
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  pencilContainer: {
    width: moderateScale(35),
    height: moderateScale(35),
    borderRadius: moderateScale(100),
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    right: moderateScale(-7),
  },
});
