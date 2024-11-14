import { Image, View } from "react-native";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import tests from "@/constants/tests";
import CustomText from "../CustomText";
import { colors } from "@/utils/colors";
import { deviceType, DeviceType } from "expo-device";

const RequestChallengeContainer = ({ navigation, item }: any) => {
  const isTablet = deviceType === DeviceType.TABLET;

  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: verticalScale(15),
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <View style={{ flexDirection: 'row', gap: isTablet ? scale(20) : scale(30) }}>
        {/* User Profile */}
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
            source={tests.profile}
          />
        </View>

        {/* User Info */}
        <View style={{ gap: verticalScale(10) }}>
          <CustomText
            size={17}
            fontFam="ClashDisplayMedium"
            fontWeight="500"
            color={colors.gray}
            text="Zakerrrr"
          />
          <CustomText
            size={15}
            color={colors.gray}
            text="@zakerr"
          />
        </View>
      </View>

      {/* VS and Score Section */}
      <View style={{ gap: verticalScale(10), marginRight: "20%", alignItems: "center" }}>
        {/* VS Label */}
        <View
          style={{
            paddingHorizontal: scale(22),
            backgroundColor: "#E5E5E5",
            paddingVertical: verticalScale(10),
            borderRadius: moderateScale(30),
          }}
        >
          <CustomText
            size={17}
            fontFam="ClashDisplayMedium"
            fontWeight="600"
            color={colors.black}
            text="VS"
          />
        </View>

        {/* Score */}
        <View
          style={{
            paddingVertical: scale(1),
            backgroundColor: "#E5E5E5",
            width: moderateScale(60),
            borderRadius: scale(30),
            alignItems: "center",
          }}
        >
          <CustomText
            size={13}
            fontFam="ClashDisplayMedium"
            fontWeight="600"
            color={colors.black}
            text="4-2"
          />
        </View>
      </View>
    </View>
  );
};

export default RequestChallengeContainer;
