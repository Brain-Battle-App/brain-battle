import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from "@/utils/Mertics";
import { colors } from "@/utils/colors";
import CustomText from "@/components/CustomText";
import { fonts } from "@/utils/fonts";
import { isiPad } from "@/utils/CommonFun";
import images from "@/constants/images";
import { appStyles } from "@/utils/appStyles";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import { useTheme } from "@/Theme/ThemeProvider";
import { scale } from "react-native-size-matters";

const Membership = ({ navigation }: any) => {
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
  const [FreePlainsData, setFreePlainsData] = useState([
    { txt: "Unlimited Public Game Entry", icon: images.checkmark_circle },
    {
      txt: "Play, Rewards, Leaderboard Features ",
      icon: images.checkmark_circle,
    },
    {
      txt: "Create Private Matches With Friends",
      icon: images.membership_cross,
    },
    { txt: "In-Depth Game Review", icon: images.membership_cross },
  ]);

  const Header = () => {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => router.back()}
          style={{
            width: moderateScale(47),
            height: moderateScale(47),
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme.colors.white,
            borderRadius: moderateScale(19),
          }}
        >
          <Image
            style={{ width: "60%", height: "60%" }}
            source={images.cross}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView
      edges={["top"]}
      style={{ flex: 1, backgroundColor: theme.colors.background }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
          marginBottom: verticalScale(20),
          gap: verticalScale(10),
        }}
      >
        <View
          style={{
            paddingTop: verticalScale(10),
            paddingHorizontal: moderateScale(20),
            gap: verticalScale(30),
          }}
        >
          <Header />
          <CustomText
            fontFam={fonts.medium}
            fontWeight="600"
            label={"Upgrade your plan"}
            size={25}
            style={{ textAlign: "center" }}
            color={theme.colors.text_Black}
          />

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
                  size={20}
                  style={{ alignSelf: "flex-end" }}
                  color={theme.colors.text}
                />
              </View>
            </View>

            <View
              style={{
                height: verticalScale(0.5),
                width: "100%",
                backgroundColor: "#766D48",
                marginBottom: verticalScale(10),
              }}
            />

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

            <CustomButton
              containerStyles="bg-black rounded-full px-5  border border-white"
              textStyles="text-light"
              bgColor={colors.black}
              title="Unlock"
            />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              ...styles.boxContainer,
              backgroundColor: theme.colors.white,

              padding: scale(20),
            }}
          >
            <View
              style={{
                ...appStyles.rowjustify,
                paddingVertical: verticalScale(10),
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
                  label={"Free"}
                  size={25}
                  color={theme.colors?.black_gray}
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
                  label={"$0"}
                  style={{ alignSelf: "flex-end" }}
                  size={32}
                  color={theme.colors?.black_gray}
                />
                <CustomText
                  label={"/ Month"}
                  size={20}
                  style={{ alignSelf: "flex-end" }}
                  color={theme.colors.text}
                />
              </View>
            </View>

            <View
              style={{
                height: verticalScale(0.5),
                width: "100%",
                backgroundColor: "#7B7B7B",
                marginBottom: verticalScale(10),
              }}
            />

            {FreePlainsData.map((item, index) => {
              return (
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
                    source={item.icon}
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
                  </View>
                </View>
              );
            })}

            <CustomButton
              containerStyles="bg-white rounded-full px-5 min-h-[45px] border border-black"
              bgColor={colors.black}
              title="Continue"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Membership;

const styles = StyleSheet.create({
  boxContainer: {
    width: "100%",
    elevation: 5,
    shadowColor: colors.black + "50",
    shadowOffset: { width: 2, height: isiPad ? 4 : 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    borderRadius: moderateScale(30),
  },
});
