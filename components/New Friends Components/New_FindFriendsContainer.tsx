import { Image, View } from "react-native";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import CustomText from "../CustomText";
import { colors } from "@/utils/colors";
import { deviceType, DeviceType } from "expo-device";
import images from "@/constants/images";
import { appStyles } from "@/utils/appStyles";

const FindFriendsContainer = ({ item }: any) => {
  const isTablet = deviceType == DeviceType.TABLET;

  return (
    <View className="flex-row my-[10px] items-center justify-between w-full pl-[10px]">
      <View className={`flex-row ${isTablet ? 'gap-[10px]' : 'gap-[10px]'}`}>

        {/* Avatar and badges */}
        <View className="relative">
          <View className="w-[50px] h-[50px] rounded-full overflow-hidden">
            <Image
              className="w-full h-full"
              resizeMode="contain"
              source={item.image}
            />
          </View>

          {/* Monster badge */}
          {item.monsterBadge && (
            <Image
              className="absolute left-[-10px] bottom-[-14px] w-[35px] h-[35px]"
              resizeMode="contain"
              source={item.monsterBadge}
            />
          )}

          {/* Tag badge */}
          {item?.tagBadge && (
            <View className="absolute left-[-10px] bottom-[-8px] w-[25px] h-[25px]">
              <Image
                className="w-full h-full"
                source={item.tagBadge}
              />
              <View className="absolute bottom-[5px] left-[6px]">
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

          {/* Roosevelt badge */}
          <Image
            className="absolute right-[-8px] bottom-[-12px] w-[30px] h-[30px]"
            resizeMode="contain"
            source={item.rooseveltBadge}
          />
        </View>

        {/* Text and Info Section */}
        <View className="gap-[5px]">
          <View className="flex-row gap-[0px]">
            <CustomText
              size={14}
              fontFam="ClashDisplaySemibold"
              fontWeight="600"
              color={colors.black}
              text={"Community Name here"}
            />
            <Image
              className="w-[15px] h-[15px]"
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

      {/* Add Button */}
      <Image
        className="w-[15px] h-[15px]"
        resizeMode="contain"
        source={images.add}
      />
    </View>
  );
};

export default FindFriendsContainer;
