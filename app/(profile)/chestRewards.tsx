import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { verticalScale, moderateScale, horizontalScale } from "@/utils/Mertics";
import CustomText from "@/components/CustomText";
import { fonts } from "@/utils/fonts";
import { isiPad } from "@/utils/CommonFun";
import images from "@/constants/images";
import { appStyles } from "@/utils/appStyles";
import { LinearGradient } from "expo-linear-gradient";

import {
  rareBadgeData,
  commanBadgeData,
  uncommanBadgeData,
  uniqueBadgeData,
  avatatData,
} from "@/utils/Data";
import { router } from "expo-router";
import { scale } from "react-native-size-matters";
import { useTheme } from "@/Theme/ThemeProvider";
import { useState } from "react";
import Header from "@/components/Header";

const ChestRewards = ({ navigation }: any) => {
  const { theme }: any = useTheme();
  const [selectedTab, setSelected] = useState("Unique");
  const [Badges, setBadges] = useState(uniqueBadgeData);

  const tab = [
    {
      title: "Unique",
      icon: images.uniqueBadge,
      color: "#9E00FF",
      badges: uniqueBadgeData,
    },
    {
      title: "Rare",
      icon: images.rareBadge,
      color: "#A20000",
      badges: rareBadgeData,
    },
    {
      title: "Uncommon",
      icon: images.uncommanBadge,
      color: theme.colors.primary,
      badges: uncommanBadgeData,
    },
    {
      title: "Common",
      icon: images.commanBadage,
      color: theme.colors.text,
      badges: commanBadgeData,
    },
    {
      title: "Avatar",
      icon: images.avatar,
      color: "#F77F00",
      badges: avatatData,
    },
  ];

  return (
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
            gap: verticalScale(20),
          }}
        >
          <View style={{ paddingHorizontal: moderateScale(20) }}>
            <Header label={"Badges"} />
          </View>

          <ScrollView
            contentContainerStyle={{ paddingHorizontal: horizontalScale(20) }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <View
              style={{
                ...appStyles.row,
                gap: horizontalScale(30),
                borderBottomWidth: verticalScale(1),
                borderBottomColor: theme.colors.white,
              }}
            >
              {tab.map((item, index) => {
                return (
                  <View
                    style={{
                      paddingBottom: verticalScale(4),
                    }}
                  >
                    <TouchableOpacity
                      key={index}
                      activeOpacity={0.5}
                      onPress={() => {
                        setBadges(item?.badges);
                        setSelected(item.title);
                      }}
                      style={
                        isiPad
                          ? {
                              ...styles.isPadTabContainer,
                            }
                          : {
                              ...styles.tabContainer,
                            }
                      }
                    >
                      <Image
                        style={{
                          width: moderateScale(25),
                          height: moderateScale(25),
                        }}
                        source={item.icon}
                        // resizeMode="contain"
                      />
                      <CustomText
                        label={item.title}
                        fontFam={
                          selectedTab == item.title
                            ? fonts.medium
                            : fonts.regular
                        }
                        fontWeight={selectedTab == item.title ? "600" : "500"}
                        size={17}
                        color={
                          selectedTab == item.title ? item?.color : "#8F8F8F"
                        }
                      />
                    </TouchableOpacity>
                    {selectedTab == item?.title && (
                      <View
                        style={{
                          width: "100%",
                          position: "absolute",
                          backgroundColor: "#51B5FD",
                          alignSelf: "center",
                          height: verticalScale(1),
                          bottom: 0,
                        }}
                      />
                    )}
                  </View>
                );
              })}
            </View>
          </ScrollView>
          <View style={{ flex: 1, paddingHorizontal: horizontalScale(20) }}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                ...styles.boxContainer,
                backgroundColor: theme.colors.white,
                gap: verticalScale(17),
              }}
            >
              <View
                style={{
                  ...appStyles.row,
                  flexWrap: "wrap",
                  gap: moderateScale(17),
                  justifyContent: "space-between",
                }}
              >
                {Badges.map((item, index) => {
                  return (
                    <View key={index.toString()}>
                      <View
                        style={{ gap: verticalScale(5), alignItems: "center" }}
                      >
                        <View
                          style={{
                            width: moderateScale(47),
                            height: moderateScale(47),

                            borderRadius: moderateScale(999),
                            padding: moderateScale(7),
                            backgroundColor: theme.colors?.black_Shade,
                          }}
                        >
                          <Image
                            style={{
                              width: "100%",
                              height: "100%",
                            }}
                            source={item.icon}
                            resizeMode="contain"
                          />
                        </View>

                        <CustomText
                          text={item.name}
                          size={10}
                          color={theme.colors.text}
                        />
                      </View>
                    </View>
                  );
                })}
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => router.push("/ReferralProgram")}
            style={{ paddingHorizontal: scale(20) }}
            activeOpacity={0.5}
          >
            <LinearGradient
              colors={["#8A00DF", "#5C287C", "#150021"]} // Gradient colors
              start={{ x: 0, y: 0 }} // Start at the top-left
              end={{ x: 1, y: 1 }} // End at the bottom-right
              style={{
                borderRadius: moderateScale(999),
                alignItems: "center",
                padding: moderateScale(10),
                height: verticalScale(45),
                justifyContent: "center",
              }}
            >
              <CustomText
                label="Get Free Unique Badge"
                size={18}
                color={theme.colors.white}
              />
            </LinearGradient>
          </TouchableOpacity>

          {/* <TouchableOpacity
            activeOpacity={0.6}
            style={{
              ...styles.boxContainer,
              backgroundColor: "#AF0100" + "30",
            }}
          >
            <View
              style={{
                paddingBottom: verticalScale(10),
                flexDirection: "row",
                alignItems: "center",
                gap: moderateScale(10),
                alignSelf: "center",
              }}
            >
              <CustomText
                fontFam={fonts.medium}
                fontWeight="600"
                label={"Rare"}
                size={22}
                color={"#830000"}
              />
              <Image
                style={{
                  width: moderateScale(27),
                  height: moderateScale(27),
                }}
                source={images.rareBadge}
              />
            </View>

            <View
              style={{
                ...appStyles.rowjustify,
                flexWrap: "wrap",
                alignSelf: "center",
                paddingHorizontal: moderateScale(20),
              }}
            >
              {rareBadgeData.map((item, index) => {
                return (
                  <View
                    key={index.toString()}
                    style={{
                      alignItems: "center",
                      alignSelf: "center",
                      width: moderateScale(50),
                      paddingVertical: verticalScale(5),
                    }}
                  >
                    <View
                      style={{ gap: verticalScale(3), alignItems: "center" }}
                    >
                      <Image
                        style={{
                          width: moderateScale(45),
                          height: moderateScale(45),
                        }}
                        source={item.icon}
                        resizeMode="contain"
                      />

                      <CustomText
                        text={item.name}
                        size={10}
                        color={colors.black}
                      />
                    </View>
                  </View>
                );
              })}
            </View>
          </TouchableOpacity> */}

          {/* <TouchableOpacity
            activeOpacity={0.6}
            style={{
              ...styles.boxContainer,
              backgroundColor: "#94CBFF" + "50",
            }}
          >
            <View
              style={{
                paddingBottom: verticalScale(10),
                flexDirection: "row",
                alignItems: "center",
                gap: moderateScale(10),
                alignSelf: "center",
              }}
            >
              <CustomText
                fontFam={fonts.medium}
                fontWeight="600"
                label={"Uncommon"}
                size={20}
                color={"#007CD6"}
              />
              <Image
                style={{
                  width: moderateScale(27),
                  height: moderateScale(27),
                }}
                source={images.uncommanBadge}
              />
            </View>

            <View
              style={{
                ...appStyles.row,
                flexWrap: "wrap",
                alignSelf: "center",
                paddingHorizontal: moderateScale(20),
              }}
            >
              {uncommanBadgeData.map((item, index) => {
                return (
                  <View
                    key={index.toString()}
                    style={{
                      alignItems: "center",
                      alignSelf: "center",
                      width: moderateScale(50),
                      paddingVertical: verticalScale(5),
                    }}
                  >
                    <View
                      style={{ gap: verticalScale(3), alignItems: "center" }}
                    >
                      <Image
                        style={{
                          width: moderateScale(45),
                          height: moderateScale(45),
                        }}
                        source={item.icon}
                        resizeMode="contain"
                      />
                    </View>
                  </View>
                );
              })}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              ...styles.boxContainer,
              backgroundColor: "#D9D9D9" + "20",
            }}
          >
            <View
              style={{
                paddingBottom: verticalScale(10),
                flexDirection: "row",
                alignItems: "center",
                gap: moderateScale(10),
                alignSelf: "center",
              }}
            >
              <CustomText
                fontFam={fonts.medium}
                fontWeight="600"
                label={"Common"}
                size={20}
                color={colors.black}
              />
              <Image
                style={{
                  width: moderateScale(27),
                  height: moderateScale(27),
                }}
                source={images.commanBadage}
              />
            </View>

            <View
              style={{
                ...appStyles.row,
                flexWrap: "wrap",
                alignSelf: "center",
                paddingHorizontal: moderateScale(20),
              }}
            >
              {commanBadgeData.map((item, index) => {
                return (
                  <View
                    key={index.toString()}
                    style={{
                      alignItems: "center",
                      alignSelf: "center",
                      width: moderateScale(50),
                      paddingVertical: verticalScale(5),
                    }}
                  >
                    <View
                      style={{ gap: verticalScale(3), alignItems: "center" }}
                    >
                      <Image
                        style={{
                          width: moderateScale(45),
                          height: moderateScale(45),
                        }}
                        source={item.icon}
                        resizeMode="contain"
                      />
                    </View>
                  </View>
                );
              })}
            </View>
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ChestRewards;

const styles = StyleSheet.create({
  boxContainer: {
    width: "100%",
    borderRadius: moderateScale(30),
    padding: moderateScale(20),
  },
  isPadTabContainer: {
    paddingVertical: verticalScale(7),
    borderRadius: moderateScale(10),
    alignItems: "flex-start",
    flexDirection: "row",
    gap: scale(10),
    // justifyContent: "center",
  },
  tabContainer: {
    // paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(6),
    borderRadius: moderateScale(10),
    alignItems: "flex-start",
    flexDirection: "row",
    gap: scale(10),
  },
});
