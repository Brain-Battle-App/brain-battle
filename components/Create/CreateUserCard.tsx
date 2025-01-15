import { Image, TouchableOpacity, View, StyleSheet } from "react-native";
import { isiPad } from "@/utils/CommonFun";
import { colors } from "@/utils/colors";
import { fonts } from "@/utils/fonts";
import CustomText from "../CustomText";
import { moderateScale, horizontalScale, verticalScale } from "@/utils/Mertics";
import images from "@/constants/images";
import { appStyles } from "@/utils/appStyles";
import { useTheme } from "@/Theme/ThemeProvider";

const CreateUserCard = ({
  navigation,
  item,

  selectedLeaderBoardUser,
  setSelectedLeaderBoardUser,
  index,
}: any) => {
  const { theme }: any = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => setSelectedLeaderBoardUser(index)}
      style={{
        ...appStyles.row,
        ...styles.main,

        backgroundColor:
          selectedLeaderBoardUser == index
            ? theme.colors?.primary + "10"
            : theme.colors.white,
      }}
    >
      <View
        style={{
          ...appStyles.row,
          gap: isiPad ? horizontalScale(10) : horizontalScale(10),
        }}
      >
        <View
          style={{
            ...styles.count,
            borderWidth: 1.2,
            borderColor: "#1C1D20",
          }}
        >
          <CustomText size={10} color={theme.colors.text} text={item.count} />
        </View>
        <View>
          <View style={styles.img}>
            <Image
              style={{ width: "100%", height: "100%" }}
              resizeMode="contain"
              source={item.image}
            />
          </View>
          <View
           style={{
            width: moderateScale(25),
            height: moderateScale(25),
            position: "absolute",
            right: horizontalScale(-5),
            bottom: verticalScale(-6),
            alignItems:"center",
            justifyContent:'center',
            borderRadius:moderateScale(999),
            backgroundColor:theme.colors?.background
          }}
          >
              <Image
            style={{
              width: "80%",
              height: "80%",
            
            }}
            resizeMode="contain"
            source={item.rooseveltBadge}
          />

          </View>

        
        </View>

        <View style={{ gap: verticalScale(isiPad ? 17 : 8) }}>
          <View style={{ ...appStyles.row, gap: horizontalScale(5) }}>
            <CustomText
              size={14}
              fontFam={fonts.medium}
              fontWeight={"600"}
              color={theme.colors.text}
              text={item.name}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          gap: verticalScale(10),
          marginRight: moderateScale(10),
          flexDirection: "row",
        }}
      >
        {selectedLeaderBoardUser == index && (
          <View
            style={{
              ...appStyles.row,
              gap: moderateScale(5),
              paddingHorizontal: moderateScale(6),
              paddingVertical: verticalScale(4),
              backgroundColor: theme.colors.primary,
              borderRadius: moderateScale(999),
            }}
          >
            <Image
              style={{
                width: moderateScale(15),
                height: moderateScale(15),
                tintColor: theme.colors.white,
              }}
              resizeMode="contain"
              source={images.send}
            />
            <CustomText size={14} color={theme.colors.white} text={"share"} />
          </View>
        )}

        <CustomText
          size={13}
          color={theme.colors.text}
          fontFam={fonts.medium}
          fontWeight={"600"}
          text={item.points}
        />
      </View>
    </TouchableOpacity>
  );
};
export default CreateUserCard;

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: horizontalScale(10),
    paddingHorizontal: moderateScale(10),

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
