import { Image, TouchableOpacity, View, StyleSheet } from "react-native";
import { isiPad } from "@/utils/CommonFun";
import { colors } from "@/utils/colors";
import { fonts } from "@/utils/fonts";
import CustomText from "../CustomText";
import { moderateScale,horizontalScale,verticalScale } from "@/utils/Mertics";

const CreateUserRakingCard = ({
    image,
    name,
    points,
    madel,
    rightImage,
  }: any) => {
    return (
      <View
        style={{
          gap: verticalScale(10),
          width: "100%",
          alignSelf: "center",
          marginBottom:verticalScale(5)
        }}
      >
        <View>
          <View
            style={{
              width: moderateScale(60),
              height: moderateScale(60),
              borderRadius: moderateScale(65),

              overflow: "hidden",
              alignSelf: "center",
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              resizeMode="contain"
              source={image}
            />
          </View>

          <Image
            style={{
              width: moderateScale(35),
              height: moderateScale(35),
              position: "absolute",
              top: horizontalScale(isiPad ? -20 : -25),
              left: horizontalScale(isiPad ? 23 : 30),
            }}
            resizeMode="contain"
            source={madel}
          />

          <Image
            style={{
              width: moderateScale(25),
              height: moderateScale(25),
              position: "absolute",
              right: horizontalScale(12),
              bottom: verticalScale(-1),
            }}
            resizeMode="contain"
            source={rightImage}
          />
        </View>

        <CustomText
       
          label={name}
          style={{ textAlign: "center" }}
          size={14}
          color={colors.black}
        />
        <View
          style={{
            width: "80%",
            alignSelf: "center",

            paddingVertical: verticalScale(10),
            backgroundColor: "#F0F0F0",
            borderRadius: moderateScale(10),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CustomText
            label={points}
            style={{ textAlign: "center" }}
            size={12}
            color={colors.black}
          />
        </View>
      </View>
    );
  };
export default CreateUserRakingCard;

const styles = StyleSheet.create({
  main: {
    marginBottom: verticalScale(20),
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: horizontalScale(10),
    paddingHorizontal: moderateScale(5),

    borderRadius: moderateScale(13),
  },
  count: {
    borderRadius: moderateScale(30), // This value is sufficiently large to ensure a perfect circle

    alignItems: "center",
    justifyContent: "center",
    width: moderateScale(30), // Add fixed width
    height: moderateScale(30), // Add fixed height
  },
  img: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(50),
    overflow: "hidden",
  },
});
