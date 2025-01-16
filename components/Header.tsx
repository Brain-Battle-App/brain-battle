import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { horizontalScale, moderateScale, verticalScale } from "@/utils/Mertics";
import { appStyles } from "@/utils/appStyles";
import { colors } from "@/utils/colors";
import CustomText from "@/components/CustomText";
import { fonts } from "@/utils/fonts";
import { isiPad } from "@/utils/CommonFun";
import images from "@/constants/images";
import { router } from "expo-router";
import { scale } from "react-native-size-matters";
import { useTheme } from "@/Theme/ThemeProvider";
const Header = ({label}:any) => {
  const { theme }: any = useTheme();

  return (
    <>
      <View style={{ ...appStyles.row, gap: scale(10) }}>
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
            style={{ width: "40%", height: "40%" }}
            source={images.profile_back}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <CustomText label={label} size={20} 
        fontFam={fonts.medium}
        fontWeight="600"
        color={theme.colors.text} />
      </View>
    </>
  );
};
export default Header;

const styles = StyleSheet.create({
  qrcodeBox: {
    width: moderateScale(50),
    height: moderateScale(50),
    backgroundColor: colors.white,
    borderRadius: moderateScale(8),
    elevation: 5,
    shadowColor: colors.black,
    shadowOffset: { width: 2, height: isiPad ? 4 : 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  planBox: {
    paddingHorizontal: moderateScale(5),
    height: moderateScale(25),
    backgroundColor: colors.white,
    borderRadius: moderateScale(8),
    elevation: 5,
    shadowColor: colors.black,
    shadowOffset: { width: 2, height: isiPad ? 4 : 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  onlineBox: {
    paddingHorizontal: moderateScale(10),
    height: moderateScale(30),
    backgroundColor: "#D3CCCC",
    borderRadius: moderateScale(10),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: moderateScale(5),
  },
  profileImg: {
    width: moderateScale(120),
    height: moderateScale(120),
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
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

  satContainer: {
    height: moderateScale(90),
    width: "47%",
    borderRadius: moderateScale(20),

    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    borderRadius: moderateScale(20),
    padding: moderateScale(15),
    gap: verticalScale(15),
  },
  rankingBadContainer: {
    width: moderateScale(60),
    height: moderateScale(60),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    marginBottom: verticalScale(7),
  },
});
