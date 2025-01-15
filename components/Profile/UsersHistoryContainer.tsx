import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import { appStyles } from "@/utils/appStyles";
import { verticalScale, horizontalScale, moderateScale } from "@/utils/Mertics";
import { colors } from "@/utils/colors";
import { isiPad } from "@/utils/CommonFun";
import images from "@/constants/images";
import CustomText from "../CustomText";
import { fonts } from "@/utils/fonts";
import CustomButton from "../CustomButton";
import { useTheme } from "@/Theme/ThemeProvider";
import { scale } from "react-native-size-matters";
import { router } from "expo-router";

const UsersHistoryContainer = ({ item }: any) => {
  const { theme, toggleTheme }: any = useTheme();

  return (
    <View
      style={{
        ...appStyles.rowjustify,
        paddingHorizontal: moderateScale(isiPad ? 10 : 8),
        paddingVertical: moderateScale(isiPad ? 7 : 5),
      }}
    >
      <View style={{ ...appStyles.row, gap: moderateScale(isiPad ? 25 : 13) }}>
        <View
          style={{
            ...styles.satContainer,
            backgroundColor: theme.colors.black_Shade,
          }}
        >
          <Image
            style={{
              width: "70%",
              height: "70%",
              tintColor: theme.colors.text,
            }}
            source={item.icon}
            resizeMode="contain"
          />
        </View>

        <View style={{ ...appStyles.row, gap: scale(5) }}>
          <View
            style={{
              alignItems: "center",
              gap: verticalScale(2),
              position: "absolute",
              alignSelf: "center",
              zIndex: 1,
              backgroundColor: theme.colors.black_Shade,
              padding: scale(4),
              borderRadius: moderateScale(100),
              right: "30%",
              top: verticalScale(4),
            }}
          >
            <CustomText text={"VS"} size={10} color={theme.colors.black_gray} />
            <CustomText text={"(3-2)"} size={10} color={theme.colors.text} />
          </View>
          <View style={{ alignItems: "center", gap: verticalScale(4) }}>
            <Image style={styles.profileImg} source={images.user12} />
            <CustomText text={"You"} size={12} color={theme.colors.text} />
          </View>

          <View style={{ alignItems: "center", gap: verticalScale(4) }}>
            <View>
              <Image style={styles.profileImg} source={images.user14} />
            </View>
            <CustomText text={"Vua"} size={12} color={theme.colors.text} />
          </View>
        </View>
      </View>
      <View style={{ gap: verticalScale(4) }}>
        <View
          style={{
            flexDirection: "row",
            gap: moderateScale(3),
            alignSelf: "flex-end",
          }}
        >
          <CustomText
            text={"win"}
            size={14}
            color={!item?.win ? colors.red200 : colors.lightGreen}
          />
          <CustomText
            text={item.points}
            style={{ marginTop: 2 }}
            size={14}
            color={!item?.win ? colors.red200 : colors.lightGreen}
          />
        </View>
        <TouchableOpacity
        activeOpacity={0.4}
        onPress={()=>{
          router.push("/GameReview");


        }}
          style={{
            ...styles.viewGameContainer,
            backgroundColor: theme.colors.primary + "20",
          }}
        >
          <CustomText
            label={"View Game"}
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
  );
};
export default UsersHistoryContainer;

const styles = StyleSheet.create({
  satContainer: {
    height: moderateScale(isiPad ? 55 : 50),
    width: moderateScale(isiPad ? 55 : 50),
    backgroundColor: colors.white,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.black,
    overflow: "hidden",
  },
  profileImg: {
    width: moderateScale(isiPad ? 55 : 45),
    height: moderateScale(isiPad ? 55 : 45),
    borderRadius: 999,
  },
  viewGameContainer: {
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: scale(5),
  },
});
