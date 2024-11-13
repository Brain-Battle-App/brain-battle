import {
    FlatList,
    Platform,
    StyleSheet,
    TouchableOpacity,
    View,
    Image,
    ScrollView,
  } from "react-native";

  import { useState } from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  import ToggleSwitch from "toggle-switch-react-native";
import { moderateScale,verticalScale,horizontalScale } from "@/utils/Mertics";
import { colors } from "@/utils/colors";
import CustomText from "@/components/CustomText";
import { fonts } from "@/utils/fonts";
import { isiPad } from "@/utils/CommonFun";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { router } from "expo-router";
  
  
  const Preferences = ({ navigation }: any) => {
    const [preferencesData, setPreferencesData] = useState([
      { txt: "Push Notifications", icon: icons.preferences, isActive: false },
      { txt: "Music", icon: icons.help, isActive: true },
      { txt: "Sound", icon: icons.feedback, isActive: false },
      { txt: "Hide ELO from leaderboards", icon: icons.terms, isActive: true },
    ]);
  
    const Header = () => {
      return (
        <View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => router.back()}
            style={{
              width: moderateScale(25),
              height: moderateScale(25),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ width: "90%", height: "90%" }}
              source={images.back_profile}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={{ padding: moderateScale(20), gap: verticalScale(3) }}>
            <CustomText
              fontFam={fonts.medium}
              fontWeight="600"
              label="App"
              size={18}
              color={colors.bluelight}
            />
            <CustomText
              fontFam={fonts.bold}
              fontWeight="700"
              label="Preference"
              size={22}
              color={colors.black}
            />
          </View>
        </View>
      );
    };
  
    return (
      <SafeAreaView
        edges={["top"]}
        style={{ flex: 1, backgroundColor: colors.white }}
      >
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: colors.white,
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
            <Header />
  
            {preferencesData.map((item, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.6}
                  key={index.toString()}
                  style={{
                    ...styles.boxContainer,
                    backgroundColor:
                      item.txt == "Logout" ? "#51B5FD" : "#C4C4C420",
                  }}
                >
                  <CustomText
                    fontFam={fonts.medium}
                    fontWeight="600"
                    label={item.txt}
                    size={18}
                    color={colors.black}
                  />
  
                  <ToggleSwitch
                    isOn={item?.isActive}
                    onColor={colors.bluelight}
                    offColor={"#D9D9D9"}
                    size="small"
                    onToggle={() => {
                      const data = [...preferencesData];
  
                      data[index].isActive = !item.isActive;
  
                      setPreferencesData(data);
                    }}
                    thumbOnStyle={{
                      width: moderateScale(17),
                      height: moderateScale(17),
                      borderRadius: 9999,
                      marginLeft: isiPad ? moderateScale(15) : moderateScale(5),
                    }}
                    thumbOffStyle={{
                      width: moderateScale(17),
                      height: moderateScale(17),
                      borderRadius: 9999,
                      marginLeft: moderateScale(5),
                    }}
                    trackOffStyle={{
                      width: moderateScale(46),
                      height: verticalScale(25),
                    }}
                    trackOnStyle={{
                      width: moderateScale(46),
                      height: verticalScale(25),
                    }}
                  />
                  {/* <Image
                      style={{
                        width: moderateScale(32),
                        height: moderateScale(32),
                      }}
                      source={item.icon}
                    /> */}
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  export default Preferences;
  
  const styles = StyleSheet.create({
    boxContainer: {
      width: "100%",
      padding: moderateScale(20),
      shadowColor: colors.black + "50",
      shadowOffset: { width: 2, height: isiPad ? 4 : 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      gap: verticalScale(20),
      borderRadius: moderateScale(15),
    },
  });
  