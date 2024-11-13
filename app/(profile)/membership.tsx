import {
    StyleSheet,
    TouchableOpacity,
    View,
    Image,
    ScrollView,
  } from "react-native";
  import { useState } from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale,verticalScale } from "@/utils/Mertics";
import { colors } from "@/utils/colors";
import CustomText from "@/components/CustomText";
import { fonts } from "@/utils/fonts";
import { isiPad } from "@/utils/CommonFun";
import images from "@/constants/images";
import { appStyles } from "@/utils/appStyles";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
  
  const Membership = ({ navigation }: any) => {
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
      { txt: "Unlimited Public Game Entry", icon: images.tick },
      { txt: "Play, Rewards, Leaderboard Features ", icon: images.tick },
      { txt: "Create Private Matches With Friends", icon: images.redCross },
      { txt: "In-Depth Game Review", icon: images.redCross },
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
              gap: verticalScale(40),
            }}
          >
            <Header />
  
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                ...styles.boxContainer,
                backgroundColor: "#2D2D2D",
              }}
            >
              <View
                style={{
                  paddingVertical: verticalScale(10),
                  flexDirection: "row",
                  alignItems: "center",
                  gap: moderateScale(10),
                  alignSelf: "center",
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
                    width: moderateScale(32),
                    height: moderateScale(32),
                  }}
                  source={images.battle}
                />
              </View>
  
              <View
                style={{
                  height: verticalScale(0.5),
                  width: "100%",
                  backgroundColor: "#766D48",
                }}
              />
  
              {ProPlainsData.map((item, index) => {
                return (
                  <View>
                    <View
                      style={{ ...appStyles.row, padding: moderateScale(20) }}
                    >
                      <Image
                        style={{
                          width: moderateScale(item.isCommingSoon ? 45 : 32),
                          height: moderateScale(item.isCommingSoon ? 45 : 32),
                        }}
                        source={item.icon}
                        resizeMode="contain"
                      />
  
                      <View
                        style={{ gap: verticalScale(10), alignItems: "center" }}
                      >
                        <CustomText
                          fontFam={fonts.medium}
                          fontWeight="600"
                          text={item.txt}
                          style={{ marginLeft: moderateScale(isiPad ? 20 : 15) }}
                          size={18}
                          color={"#DEDEDE"}
                        />
                        {item?.isCommingSoon && (
                          <CustomText
                            fontFam={fonts.medium}
                            fontWeight="600"
                            text={item.isCommingSoon}
                            style={{
                              marginLeft: moderateScale(isiPad ? 20 : 15),
                            }}
                            size={15}
                            color={"#B0B0B0"}
                          />
                        )}
                      </View>
                    </View>
                    <View
                      style={{
                        height: verticalScale(0.5),
                        width: "100%",
                        backgroundColor: "#766D48",
                      }}
                    />
                  </View>
                );
              })}
  
              <View
                style={{ ...appStyles.rowjustify, padding: moderateScale(20) }}
              >
                  <CustomButton
                  containerStyles="bg-black rounded-full px-5 min-h-[45px] border border-white"
                  textStyles='text-light'
                bgColor={colors.black}
                title="Unlock"
              />
                
  
                <CustomText
                  fontFam={fonts.medium}
                  fontWeight="600"
                  label={"$ 12 / Month"}
                  size={22}
                  color={"#A48A00"}
                />
              </View>
  
              {/* <Image
                        style={{
                          width: moderateScale(32),
                          height: moderateScale(32),
                        }}
                        source={item.icon}
                      /> */}
            </TouchableOpacity>
  
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                ...styles.boxContainer,
                backgroundColor: colors.white,
              }}
            >
              <View
                style={{
                  paddingVertical: verticalScale(10),
                  flexDirection: "row",
                  alignItems: "center",
                  gap: moderateScale(10),
                  alignSelf: "center",
                }}
              >
                <CustomText
                  fontFam={fonts.medium}
                  fontWeight="600"
                  label={"Free"}
                  size={25}
                  color={"#959494"}
                />
                <Image
                  style={{
                    width: moderateScale(32),
                    height: moderateScale(32),
                  }}
                  source={images.battle}
                />
              </View>
  
              <View
                style={{
                  height: verticalScale(0.5),
                  width: "100%",
                  backgroundColor: "#7B7B7B",
                }}
              />
  
              {FreePlainsData.map((item, index) => {
                return (
                  <View>
                    <View
                      style={{ ...appStyles.row, padding: moderateScale(20) }}
                    >
                      {/* <Image
                        style={{
                          width: moderateScale(item.isCommingSoon ? 45 : 32),
                          height: moderateScale(item.isCommingSoon ? 45 : 32),
                        }}
                        source={item.icon}
                        resizeMode="contain"
                      /> */}
  
                      <View
                        style={{ gap: verticalScale(10), alignItems: "center" }}
                      >
                        <CustomText
                          fontFam={fonts.medium}
                          fontWeight="600"
                          text={item.txt}
                          style={{ marginLeft: moderateScale(isiPad ? 20 : 15) }}
                          size={18}
                          color={"#747B76"}
                        />
                        {/* {item?.isCommingSoon && (
                          <CustomText
                            fontFam={fonts.medium}
                            fontWeight="600"
                            text={item.isCommingSoon}
                            style={{
                              marginLeft: moderateScale(isiPad ? 20 : 15),
                            }}
                            size={15}
                            color={"#B0B0B0"}
                          />
                        )} */}
                      </View>
                    </View>
                    <View
                      style={{
                        height: verticalScale(0.5),
                        width: "100%",
                        backgroundColor: "#7B7B7B",
                      }}
                    />
                  </View>
                );
              })}
  
              <View
                style={{ ...appStyles.rowjustify, padding: moderateScale(20) }}>

                <CustomButton
                  containerStyles="bg-white rounded-full px-5 min-h-[45px] border border-black"
                bgColor={colors.black}
                title="Unlock"
              />
                <CustomText
                  fontFam={fonts.medium}
                  fontWeight="600"
                  label={"$ 0 / Month"}
                  size={22}
                  color={"#A48A00"}
                />
              </View>
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
      borderRadius: moderateScale(20),
    },
  });
  