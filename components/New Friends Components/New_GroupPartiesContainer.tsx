import { Image, View } from "react-native";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import CustomText from "../CustomText";
import { colors } from "@/utils/colors";
import { deviceType, DeviceType } from "expo-device";

const GroupPartiesContainer = ({ navigation, item }: any) => {
  const isTablet = deviceType === DeviceType.TABLET;

  return (
    <View
      style={{
        flexDirection: 'row',
        gap: isTablet ? scale(20) : scale(30),
        marginVertical: verticalScale(10),
        alignSelf: 'flex-start',
        alignItems: 'flex-start',
      }}
    >
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#51B5FD',
            paddingVertical: verticalScale(4),
            borderRadius: moderateScale(22),
            paddingLeft: scale(2),
            justifyContent: 'center', 
            alignItems: 'center', 
          }}
        >
          {item?.Parties.slice(0, 4).map((it: any, index: any) => (
            <View
              key={index}
              style={[
                {
                  width: moderateScale(47),
                  height: moderateScale(47),
                  borderRadius: 999,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: moderateScale(3),
                  borderColor: colors.black,
                  overflow: 'hidden',
                },
                index > 0
                  ? {
                      marginHorizontal: isTablet ? scale(-15) : scale(-25),
                    }
                  : {},
              ]}
            >
              <Image source={it.img} style={{ width: '100%', height: '100%' }} />
            </View>
          ))}

          <CustomText
            size={15}
            fontFam={"ClashDisplaySemibold"}
            fontWeight="600"
            style={{
              marginLeft: isTablet ? scale(20) : scale(35),
              marginRight: scale(10),
            }}
            color={colors.white}
            text={"+5"}
          />
        </View>
      </View>

      <View
        style={{
          gap: verticalScale(10),
        }}
      >
        <CustomText size={17} color={colors.gray} text={item?.title} />
        <CustomText size={15} color={colors.gray} text={item?.des} />
      </View>
    </View>
  );
};

export default GroupPartiesContainer;
