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
import { router } from "expo-router";

const EditProfile = ({ navigation }: any) => {
  const { theme }: any = useTheme();

  const [isCountryDropDown, setIsCountryDropDown] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState({
    name: "Country",
    image: images.ukflag,
  });



  return (
    <>
      <SafeAreaView
        edges={["top"]}
        style={{ flex: 1, backgroundColor: theme.colors.background }}
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
            }}
          >
            <Header label="Edit Profile" />
            <View
              style={{
                alignSelf:"center"
              }}
            >
             <View style={styles.profileImg}>
                  <Image style={styles.profileImg} source={images.user3} />
                </View>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.goBack()}
                  style={{...styles.pencilContainer,backgroundColor:theme.colors.primary}}
                >
                  <Image
                    style={{ width: "60%", height: "60%" }}
                    source={icons.edit}
                    resizeMode="contain"
                  />
                </TouchableOpacity>

              
            </View>

            <FormField
              label="Name"
              placeholder="Your name"
              inputStyle={{ color: theme.colors.text }}
              textStyle={{ color: theme.colors.text }}
              value={"vondoe@brainbattle.co"}
              // handleChangeText={(value) => handleInputChange('email', value)}
              otherStyles="mt-7"
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
              otherStyles="mt-7"
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
              otherStyles="mt-7"
              textStyles="ml-4 mb-2"
              bgColor={theme.colors.white}
              keyboardType="email-address"
              leftIcon={{ color: theme.colors.text, size: 24, name: "mail" }}
            />

            <FormField
              label="Grade"
              placeholder="Your grade"
              inputStyle={{ color: theme.colors.text }}
              textStyle={{ color: theme.colors.text }}
              value={"11th"}
              // handleChangeText={(value) => handleInputChange('email', value)}
              otherStyles="mt-7"
              textStyles="ml-4 mb-2"
              bgColor={theme.colors.white}
              keyboardType="email-address"
              leftIcon={{ color: theme.colors.text, size: 24, name: "mail" }}
            />

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
               containerStyles={`rounded-[50%] w-[100%]`}
                title="Change Password"
                handlePress={() => {
                  router.push("/ChangePassword");

                  // setIsConfirmPurcheaseModal(true)
                }}
              />

              <CustomButton
                textStyle={{ color: theme.colors.white }}
                containerStyles={`rounded-[50%] w-[100%]`}
                title="Save Changes"
                handlePress={() => {
                  // setIsConfirmPurcheaseModal(true)
                }}
              />
            </View>
          </View>
        </ScrollView>
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
export default EditProfile;

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
    marginTop:verticalScale(20)
  },
  pencilContainer: {
    width: moderateScale(35),
    height: moderateScale(35),
    borderRadius:moderateScale(100),
    borderWidth:3,
    alignItems: "center",
    justifyContent: "center",
    position:"absolute",
    bottom:0,
    right:moderateScale(-7)
  },
});
