import { Image, TouchableOpacity, View, StyleSheet } from "react-native";
import { isiPad } from "@/utils/CommonFun";
import { colors } from "@/utils/colors";
import { fonts } from "@/utils/fonts";
import CustomText from "../CustomText";
import { moderateScale,horizontalScale,verticalScale } from "@/utils/Mertics";
import images from "@/constants/images";
import { appStyles } from "@/utils/appStyles";

const CreateUserCard = ({
  navigation,
  item,

  selectedLeaderBoardUser,
  setSelectedLeaderBoardUser,
  index,
}: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => setSelectedLeaderBoardUser(index)}
      style={{
        ...appStyles.row,
        ...styles.main,

        backgroundColor:
          selectedLeaderBoardUser == index ? "#E4FFE2" : colors.white,
      }}
    >
      <View
        style={{...appStyles.row,
            gap: isiPad ? horizontalScale(10) : horizontalScale(10),

        }}
      >
        <View
          style={{
            ...styles.count,
            borderWidth: selectedLeaderBoardUser == index ? 2 : 1.2,
            borderColor:
              selectedLeaderBoardUser == index ? colors.black : "#E6E6E6",
          }}
        >
          <CustomText
            size={10}
            color={
              selectedLeaderBoardUser == index ? colors.black : colors.gray200
            }
            text={item.count}
          />
        </View>
        <View>
          <View style={styles.img}>
            <Image
              style={{ width: "100%", height: "100%" }}
              resizeMode="contain"
              source={item.image}
            />
          </View>

          <Image
            style={{
              width: moderateScale(25),
              height: moderateScale(25),
              position: "absolute",
              right: horizontalScale(-5),
              bottom: verticalScale(-6),
            }}
            resizeMode="contain"
            source={item.rooseveltBadge}
          />
        </View>

        <View style={{ gap: verticalScale(isiPad ? 17 : 8) }}>
          <View style={{ ...appStyles.row, gap: horizontalScale(5) }}>
            <CustomText
              size={14}
              fontFam={selectedLeaderBoardUser == index?"ClashDisplayMedium":"ClashDisplayRegular"}
              fontWeight={selectedLeaderBoardUser == index?"600":"500"}
              color={colors.black}
              text={item.name}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          alignItems: "flex-end",
          gap: verticalScale(5),
          marginRight: moderateScale(10),
        }}
      >
        <CustomText
          size={13}
          color={colors.black}
          text={item.points}
        />
        {selectedLeaderBoardUser == index && (
          <View style={{ ...appStyles.row, gap: moderateScale(10) }}>
            <Image
              style={{
                width: moderateScale(17),
                height: moderateScale(17),
                alignSelf: "flex-end",
              }}
              resizeMode="contain"
              source={images.send}
            />
            <CustomText
              size={15}
              fontWeight="400"
              color={colors.black}
              text={"share"}
            />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};
export default CreateUserCard;

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
