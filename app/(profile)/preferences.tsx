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
import { moderateScale, verticalScale, horizontalScale } from "@/utils/Mertics";
import CustomText from "@/components/CustomText";
import icons from "@/constants/icons";
import { useTheme } from "@/Theme/ThemeProvider";
import Header from "@/components/Header";

const Preferences = ({ navigation }: any) => {
  const { theme, toggleTheme }: any = useTheme();
  const [isPushNotification, setIsPushNotification] = useState(false);
  const [isMusic, setIsMusic] = useState(true);
  const [isSound, setIsSound] = useState(false);
  const [isLeaderboards, setIsLeaderboards] = useState(true);
  const [isBadge, setIsBadge] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const PreferencesContainer = ({ text, color, isToggle }: any) => {
    return (
      <View
        style={{
          ...styles.boxContainer,

          backgroundColor: theme.colors.white,
        }}
      >
        <CustomText label={text} size={17} color={color || theme.colors.text} />
        <ToggleSwitch
          isOn={isToggle}
          thumbOnStyle={{width:moderateScale(25),height:moderateScale(25),borderRadius:9999,backgroundColor:theme.colors.white}}
          thumbOffStyle={{width:moderateScale(25),height:moderateScale(25),borderRadius:9999,backgroundColor:theme.colors.white}}
          trackOffStyle={{width:horizontalScale(50),height:verticalScale(29)}}
          trackOnStyle={{width:horizontalScale(50),height:verticalScale(29)}}

          onColor={theme.colors.green}
          
          offColor={theme.colors.background}
    
          
          labelStyle={{ color: "black", fontWeight: "900" }}
          onToggle={(isOn) => console.log("Dark Mode: ", isToggle)}
        />
      </View>
    );
  };

  return (
    <SafeAreaView
      edges={["top"]}
      style={{ flex: 1, backgroundColor: theme.colors.background,
        paddingTop: verticalScale(Platform.OS == "ios" ? 5 : 20),

       }}
    >
      <View
        style={{
          paddingHorizontal: moderateScale(20),
          gap: verticalScale(20),
          flex: 1,
        }}
      >
        <Header label="App Preferences" />

        <View style={{ gap: verticalScale(10) }}>
          <PreferencesContainer
            isToggle={isPushNotification}
            text="Push Notifications"
          />

          <PreferencesContainer text="Music" isToggle={isMusic} />
          <PreferencesContainer text="Sound" isToggle={isSound} />
          <PreferencesContainer
            text="Hide ELO from leaderboards"
            isToggle={isLeaderboards}
          />
          <PreferencesContainer text="Show Badge in Game" isToggle={isBadge} />
          <PreferencesContainer text="Dark Mode" isToggle={isDarkMode} />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Preferences;

const styles = StyleSheet.create({
  boxContainer: {
    width: "100%",
    paddingHorizontal: moderateScale(20),
    paddingVertical:verticalScale(15),
    gap: verticalScale(20),
    borderRadius: moderateScale(20),
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
