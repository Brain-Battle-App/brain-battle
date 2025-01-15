import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/utils/colors";
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
import CustomButton from "@/components/CustomButton";
import LinkCopiedModal from "@/components/Profile/LinkCopiedModal";
import ReferalWorksSheetModal from "@/components/Profile/ReferalWorksSheetModal";

const ReferralProgram = ({ navigation }: any) => {
  const { theme }: any = useTheme();
  const [selectedTab, setSelected] = useState("Unique");
  const [isLinkCopiedModal, setIsLinkCopiedModal] = useState(false);
  const [isReferralWorkModal, setIsReferralWorkModal] = useState(false);

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

  const Header = () => {
    return (
      <View style={{ ...appStyles.rowjustify }}>
        <View
          style={{
            ...appStyles.row,
            gap: horizontalScale(10),
          }}
        >
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
              style={{ width: "50%", height: "50%" }}
              source={images.cross}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <CustomText
            label="Referral Program"
            size={20}
            color={theme.colors.text}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => setIsReferralWorkModal(true)}
          style={{
            width: moderateScale(47),
            height: moderateScale(47),
            alignItems: "flex-end",
            justifyContent: "center",
            borderRadius: moderateScale(19),
          }}
        >
          <Image
            style={{ width: "50%", height: "50%" }}
            source={images.info}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>

<SafeAreaView
      edges={["top"]}
      style={{ flex: 1, backgroundColor: theme.colors.background }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
          marginBottom: verticalScale(40),
          paddingHorizontal: moderateScale(20),
        }}
      >
        <View
          style={{
            gap: verticalScale(40),
            flex: 1,
          }}
        >
          <Header />

          <Image
            style={{
              width: moderateScale(180),
              height: moderateScale(180),
              alignSelf: "center",
            }}
            source={images.gift}
            resizeMode="contain"
          />
          <View style={{ alignItems: "center" }}>
            <Text style={styles.text}>
              For each friend referred receive{" "}
              <Text style={styles.redText}>3 lives</Text>. Receive a{" "}
              <Text style={styles.purpleText}>unique badge</Text> for referring{" "}
              <Text style={styles.blueText}>5 friends</Text>
            </Text>
          </View>

          <View
            style={{
              ...styles.boxContainer,
              backgroundColor: theme.colors.white,
            }}
          >
            <CustomText
              label="Use link as a referral code"
              size={17}
              color={theme.colors.text}
            />
            <View style={appStyles.rowjustify}>
              <CustomText
                label="app.brainbattle.com/us-en/i/SAMTAL"
                size={17}
                fontFam={fonts.medium}
                fontWeight="600"
                style={{ width: "75%" }}
                color={theme.colors.text}
              />

              <TouchableOpacity
                activeOpacity={0.4}
                onPress={() => {
                    setIsLinkCopiedModal(true)
                    setTimeout(() => {
                        setIsLinkCopiedModal(false)

                        
                    }, 1000);
                                }}
                style={{
                  ...styles.copyBtnContainer,
                  backgroundColor: theme.colors.background,
                }}
              >
                <Image
                  style={{
                    width: moderateScale(12),
                    height: moderateScale(12),
                    tintColor: theme.colors.primary,
                  }}
                  source={images.copy}
                  resizeMode="contain"
                />

                <CustomText
                  label={"Copy"}
                  size={12}
                  fontFam={fonts.bold}
                  fontWeight="600"
                  color={theme.colors.primary}
                />
              </TouchableOpacity>
            </View>
          </View>

          
        </View>

        <CustomButton
                title="Invite Friends"
                handlePress={() => router.push("/sign-in")}
                containerStyles='mt-6 rounded-[50%] '

                textStyles="text-lg text-white font-clashsemibold"
              />
            
      </View>
    </SafeAreaView>
      <LinkCopiedModal
      modalVisible={isLinkCopiedModal}
      setModalVisible={setIsLinkCopiedModal}
      />
       <ReferalWorksSheetModal
      modalVisible={isReferralWorkModal}
      setModalVisible={setIsReferralWorkModal}
      />
    </>
   
  );
};
export default ReferralProgram;

const styles = StyleSheet.create({
  boxContainer: {
    width: "100%",
    borderRadius: moderateScale(20),
    padding: scale(20),
    gap: verticalScale(10),
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
  text: {
    color: "#FFF", // White text
    fontSize: moderateScale(20),
    fontWeight: "500",
    textAlign: "center",
    fontFamily: fonts.regular,
    lineHeight: verticalScale(25),
  },
  redText: {
    color: "#FF3B6C", // Pinkish-red
    fontWeight: "600",
    fontFamily: fonts.medium,
  },
  purpleText: {
    color: "#9D00FF", // Purple
    fontWeight: "600",
    fontFamily: fonts.medium,
  },
  blueText: {
    color: "#007AFF", // Blue
    fontWeight: "600",
    fontFamily: fonts.medium,
  },
  copyBtnContainer: {
    padding: moderateScale(10),
    borderRadius: moderateScale(999),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: scale(6),
  },
});
