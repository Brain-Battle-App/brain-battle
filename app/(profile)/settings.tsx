import {
  FlatList,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { verticalScale, moderateScale } from "@/utils/Mertics";
import { appStyles } from "@/utils/appStyles";
import CustomText from "@/components/CustomText";
import { fonts } from "@/utils/fonts";
import { isiPad } from "@/utils/CommonFun";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { router } from "expo-router";
import Header from "@/components/Header";
import { useTheme } from "@/Theme/ThemeProvider";
import { scale } from "react-native-size-matters";
import LogoutSheetModal from "@/components/Profile/LogoutSheetModal";
import { useState } from "react";

const Settings = ({ navigation }: any) => {
  const { theme }: any = useTheme();
  const [isLogoutVisible,setIsLogoutVisible]=useState(false)

  const settingData = [
    {
      txt: "App preferences",
      icon: icons.preferences,
      onPress: () => {
        router.push("/preferences");
      },
    },
    { txt: "Help and Support", icon: icons.help, onPress: () => {} },
    { txt: "Give feedback", icon: icons.feedback, onPress: () => {} },
    { txt: "Terms and Conditions", icon: icons.terms, onPress: () => {} },
    { txt: "Privacy Policy", icon: icons.policy, onPress: () => {} },
    { txt: "Logout", icon: icons.logout, onPress: () => {} },
  ];

  const SettingContainer = ({
    onPress,
    icon,
    text,
    color,
    desableArrow,
    isCountry,
  }: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={{
          ...styles.boxContainer,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: verticalScale(20),
          borderRadius: moderateScale(20),
          backgroundColor: theme.colors.white,
        }}
      >
        <View style={{ ...appStyles.row, gap: scale(10) }}>
          <Image
            style={{
              width: moderateScale(25),
              height: moderateScale(25),
              tintColor: color || theme.colors.text,
            }}
            source={icon}
          />
          <CustomText
            label={text}
            fontFam={fonts.medium}
            fontWeight="600"
            size={18}
            color={color || theme.colors.text}
          />
        </View>

        <View style={{ ...appStyles.row, gap: scale(5) }}>
          {isCountry && (
            <View style={{ ...appStyles.row, gap: scale(6) }}>
              <Image
                style={{
                  width: moderateScale(20),
                  height: moderateScale(20),
                }}
                source={images.unitedStates}
              />
              <CustomText
                label={"United States"}
                size={14}
                color={color || theme.colors.text}
              />
            </View>
          )}

          {!desableArrow && (
            <Image
              style={{
                width: moderateScale(25),
                height: moderateScale(25),
                tintColor: color || theme.colors.text,
              }}
              source={icons.arrow_up_right}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>

<SafeAreaView
      edges={["top"]}
      style={{ flex: 1, backgroundColor: theme.colors.background }}
    >
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
          marginBottom: verticalScale(20),
        }}
      >
        <View
          style={{
            paddingTop: verticalScale(10),
            paddingHorizontal: moderateScale(20),
            gap: verticalScale(20),
          }}
        >
          <Header label="Settings" />
          {/* <Header /> */}
          <View
            style={{
              ...styles.boxContainer,
              alignItems: "center",
              gap: verticalScale(10),
              borderRadius: moderateScale(25),
              backgroundColor: theme.colors.white,
            }}
          >
            <View style={styles.profileImg}>
              <Image
                style={{ width: "90%", height: "90%", borderRadius: 999 }}
                source={images.user3}
              />
            </View>
            <View style={{ gap: moderateScale(8) }}>
              <View style={{ gap: moderateScale(1) }}>
                <CustomText
                  fontFam={fonts.medium}
                  fontWeight="600"
                  label="Von Doe"
                  size={20}
                  color={theme.colors.text}
                />
                <CustomText
                  label="vondoe@brainbattle.co"
                  size={14}
                  color={theme.colors.text}
                />
              </View>

              <View style={{ gap: moderateScale(5) }}>
                <View style={{ ...appStyles.row, gap: scale(10) }}>
                  <Image
                    style={{
                      width: moderateScale(25),
                      height: moderateScale(25),
                    }}
                    source={images.roosevelt}
                    resizeMode="contain"
                  />
                  <View>
                    <CustomText
                      fontFam={fonts.medium}
                      fontWeight="600"
                      label="11th"
                      size={15}
                      color={theme.colors.text}
                    />
                    <CustomText
                      label="Grade"
                      size={15}
                      color={theme.colors.text}
                    />
                  </View>

                  <TouchableOpacity
                    activeOpacity={0.4}
                    onPress={() => {
                      router.push("/editProfile");
                    }}
                    style={{
                      ...styles.editProfileContainer,
                      backgroundColor: theme.colors.primary + "10",
                    }}
                  >
                    <CustomText
                      label={"Edit Profile"}
                      size={12}
                      color={theme.colors.primary}
                    />
                    <Image
                      style={{
                        width: moderateScale(12),
                        height: moderateScale(12),
                        tintColor: theme.colors.primary,
                      }}
                      source={images.next_arrow}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => router.push("/editProfile")}
                style={{
                  width: moderateScale(25),
                  height: moderateScale(25),
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  style={{ width: "90%", height: "90%" }}
                  source={icons.pencil}
                  resizeMode="contain"
                />
              </TouchableOpacity> */}
            </View>
            {/* s */}
          </View>
          <View
            style={{ gap: verticalScale(10), paddingTop: verticalScale(20) }}
          >
            <SettingContainer
            onPress={()=>
              router.push("/preferences")}
             text="App Preferences" icon={icons.preferences} />
            <SettingContainer text="Country" isCountry icon={icons.global} />
            <SettingContainer text="Help and Support" icon={icons.help} />
            <SettingContainer text="Give Feedback" icon={icons.feedback} />
            <SettingContainer text="Terms and Conditions" icon={icons.terms} />
            <SettingContainer text="Privacy Policy" icon={icons.security} />
            <SettingContainer
              text="Logout"
              desableArrow={true}
              onPress={()=>setIsLogoutVisible(true)}
              color={theme.colors.red}
              icon={icons.logout}
            />
            <CustomText
              label={"Version 9.23.5 (12124)"}
              size={13}
              color={theme.colors.text}
            />
          </View>
          {/* {settingData.map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={item.onPress}
                key={index.toString()}
                style={{
                  ...styles.boxContainer,
                  alignItems: "center",
                  flexDirection: "row",
                  gap: verticalScale(20),
                  borderRadius: moderateScale(20),
                  backgroundColor:
                    item.txt == "Logout" ? "#51B5FD" : "#C4C4C430",
                }}
              >
                <Image
                  style={{
                    width: moderateScale(32),
                    height: moderateScale(32),
                  }}
                  source={item.icon}
                />
                <CustomText
                  fontFam={fonts.medium}
                  fontWeight="600"
                  label={item.txt}
                  size={18}
                  color={colors.black}
                />
              </TouchableOpacity>
            );
          })} */}
        </View>
      </ScrollView>
    </SafeAreaView>
    <LogoutSheetModal
    modalVisible={isLogoutVisible}
    setModalVisible={setIsLogoutVisible}
    />
    </>
    
  );
};
export default Settings;

const styles = StyleSheet.create({
  boxContainer: {
    width: "100%",
    padding: moderateScale(15),
    flexDirection: "row",
    alignItems: "center",
  },
  profileImg: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: 999,
  },
  editProfileContainer: {
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: scale(5),
  },
});
