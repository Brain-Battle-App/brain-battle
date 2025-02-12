import {
  Image,
  SafeAreaView,
  Text,
  Pressable,
  View,
} from "react-native";
import { appStyles } from "@/utils/appStyles";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
// import { images } from "../../src/assets";
import icons from "@/constants/icons";
import CustomText from "../CustomText";
import { fonts } from "@/utils/fonts";
import { colors } from "@/utils/colors";
import { deviceType, DeviceType } from "expo-device";
import images from "@/constants/images";

const FindFriendsContainer = ({ navigation, item }: any) => {
  const isTablet = (deviceType == DeviceType.TABLET);

  return (
    <View
      style={{
        ...appStyles.row,
        marginVertical: verticalScale(10),
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingLeft: scale(10),
        //   backgroundColor:"red"
      }}
    >
      <View
        style={{
          ...appStyles.row,
          gap: isTablet ? scale(10) : scale(10),
        }}
      >
        <View>
          <View
            style={{
              width: moderateScale(50),
              height: moderateScale(50),
              borderRadius: moderateScale(50),

              overflow: "hidden",
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              resizeMode="contain"
              source={item.image}
            />
          </View>
          {item.monsterBadge && (
           
                      <Image
              style={{
                width: moderateScale(35),
                height: moderateScale(35),
                position: "absolute",
                left: scale(-10),
                bottom: verticalScale(-14),
             
                
              }}
              resizeMode="contain"
              source={item.monsterBadge}
            />
            // <View
            // style={{
            //     elevation: 5,
            //     shadowColor:  "#bf90db",
            //     shadowOffset: { width: 0, height: 30 },
            //     shadowOpacity: 0.5,
            //     shadowRadius: 3,
            // }}
            // >
            //          <Image
            //   style={{
            //     width: moderateScale(35),
            //     height: moderateScale(35),
            //     position: "absolute",
            //     left: scale(-10),
            //     bottom: verticalScale(-14),
             
                
            //   }}
            //   resizeMode="contain"
            //   source={item.monsterBadge}
            // />
            //     </View>
       
          )}

          {item?.tagBadge && (
            <View
              style={{
                width: moderateScale(25),
                height: moderateScale(25),
                position: "absolute",
                left: isTablet ? scale(-8) : scale(-10),
                bottom: verticalScale(-8),
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                // resizeMode="contain"
                source={item.tagBadge}
              />
              <View
                style={{
                  position: "absolute",
                  bottom: verticalScale(5),
                  left: isTablet ? scale(5) : scale(6),
                }}
              >
                <CustomText
                  size={7}
                  fontFam="ClashDisplayRegular"
                  fontWeight="400"
                  color={colors.black}
                  text={"#52"}
                />
              </View>
            </View>
          )}
          <Image
            style={{
              width: moderateScale(30),
              height: moderateScale(30),
              position: "absolute",
              right: scale(-8),
              bottom: verticalScale(-12),
            }}
            resizeMode="contain"
            source={item.rooseveltBadge}
          />
        </View>

        <View style={{ gap: verticalScale(5) }}>
          <View style={{ ...appStyles.row, gap: scale(5) }}>
            <CustomText
              size={14}
              fontFam={"ClashDisplaySemibold"}
              // font="font-clashsemibold"
              fontWeight="600"
              color={colors.black}
              text={"Community Name here"}
            />
            <Image
              style={{ width: moderateScale(15), height: moderateScale(15) }}
              resizeMode="contain"
              source={images.verified}
            />
          </View>

          <CustomText
            size={15}
            fontWeight="400"
            color={colors.black}
            text={"1.1M followers"}
          />
        </View>
      </View>
      <Image
        style={{ width: moderateScale(15), height: moderateScale(15) }}
        resizeMode="contain"
        source={images.add}
      />
    </View>
  );
};
export default FindFriendsContainer;
