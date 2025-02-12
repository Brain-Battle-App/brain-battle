import { Image, SafeAreaView, Text, Pressable, View, StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { appStyles } from "@/utils/appStyles";
import CustomText from "../CustomText";
import { colors } from "@/utils/colors";
import { DeviceType, deviceType } from "expo-device";
import icons from "@/constants/tests";

const FrinedContainer = ({ navigation, item }: any) => {
  const isTablet = (deviceType == DeviceType.TABLET);

  return (
    <View className={`flex-row ${isTablet ? 'gap-[5px]' : 'gap-[10px]'} my-[5px] self-start items-start`}>
      
      <View className="relative">
        <View className="w-[50px] h-[50px] rounded-full overflow-hidden">
          <Image
            className="w-full h-full"
            source={item?.image}
          />
        </View>

        <View className="w-[17px] h-[17px] bg-[#49D65B] rounded-full absolute bottom-[5px] right-[-3px] z-[999]" />

        <View className="absolute top-[-8px] py-[1px] bg-[#E5E5E5] w-[53px] rounded-[30px] items-center">
          <CustomText
            size={11}
            fontFam={"ClashDisplayBold"}
            fontWeight="bold"
            color={colors.black}
            text={item?.friend}
          />
        </View>
      </View>

      <View className="gap-[10px] mt-[-5px] translate-y-[-10px] translate-x-[10px]">
  <CustomText
    size={17}
    color={colors.gray}
    text={item?.name}
  />

        <CustomText
          size={15}
          fontWeight="500"
          color={colors.gray}
          text={item?.des}
        />
      </View>

    </View>
  );
};

export default FrinedContainer;
