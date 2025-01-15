import { View, Text, Image, ImageSourcePropType } from "react-native";
import { Tabs, Redirect } from "expo-router";
import React from "react";
import icons from "../../constants/icons";
import images from "@/constants/images";
import { moderateScale, verticalScale } from "@/utils/Mertics";
import { useTheme } from "@/Theme/ThemeProvider";
import CustomText from "@/components/CustomText";

interface TabIconProps {
  icon: ImageSourcePropType;
  name: string;
  focused: boolean;
  theme?: any;
}

const TabIcon: React.FC<TabIconProps> = ({ icon, name, focused, theme }) => {
  return (
    // Changing the opacity of the unfocused icons

    <View
      className={`items-center justify-center gap-2 mt-4 `}
    >
      <Image source={icon} 
      style={{tintColor:!focused ? theme.colors.text_gray : theme.colors.primary}}
      resizeMode="contain" className="w-7 h-7" />

      <CustomText
        text={name}
        size={12}
        color={!focused ? theme.colors.black_gray : theme.colors.primary}
      />
      {/* <Text
        className={`${focused ? "font-clashsemibold" : "font-clashregular"} text-xs`}
      >
        {name}
      </Text> */}
    </View>
  );
};

const TabsLayout = () => {
  const { theme }: any = useTheme();

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            height: verticalScale(85),
            borderTopWidth: -1,
            paddingHorizontal: moderateScale(20),
            backgroundColor: theme.colors.white,
            paddingBottom: verticalScale(35),
          },
        }}
      >
        <Tabs.Screen
          name="play"
          options={{
            title: "play",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={images.play}
                name="Play"
                theme={theme}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="rewards"
          options={{
            title: "rewards",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={images.reward}
                name="Rewards"
                theme={theme}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="friends"
          options={{
            title: "friends",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={images.group}
                name="Friends"
                theme={theme}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="leaderboard"
          options={{
            title: "leaderboard",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={images.ranking}
                name="Leaderboard"
                theme={theme}
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
