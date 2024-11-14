import { Image, TextInput, View } from "react-native";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { colors } from "@/utils/colors";
import { windowWidth } from "@/utils/Dimensions";
import icons from "@/constants/icons";

type Props = {
  label?: string;
  placeholder?: string;
  error?: string;
  isPassword?: boolean;
  source?: any;
  keyboard?: any;
  props?: any;
  value?: any;
  onChangeText?: any;
  onBlur?: any;
  isCenter?: boolean;
  onShowPassword?: any;
  editable?: boolean;
  color?: string;
  maxLength?: number;
  leftSource?: any;
  fontWeight?: any;
  marginTop?: any;
  multiline?: boolean;
  height?: any;
  dropdown?: boolean;
  items?: any;
  setItems?: any;
  dropdownValue?: any;
  setDropdownValue?: any;
  setOpen?: any;
  zIndex?: any;
  onOpen?: any;
  onClose?: any;
  disabled?: boolean;
  labelSize?: any;
};

const CustomSearch = ({
  label,
  placeholder,
  keyboard,
  isPassword,
  source,
  props,
  isCenter,
  fontWeight,
  marginTop,
  multiline,
  height,
  dropdown,
  open,
  value,
  onChangeText,
  onBlur,
  error,
  onShowPassword,
  editable,
  color,
  maxLength,
  leftSource,
  items,
  setItems,
  dropdownValue,
  setDropdownValue,
  setOpen,
  zIndex,
  onOpen,
  onClose,
  disabled,
  labelSize,
}: Props) => {
  return (
    <View style={{ ...props }}>
      <View
        className="flex-row justify-between px-3.5 h-16 items-center rounded-lg border border-lightBlue54"
        style={{
          borderRadius: moderateScale(8),
          borderWidth: moderateScale(1.2),
          borderColor: colors.lightBlue54,
        }}
      >
        <View className="flex-1">
          <TextInput
            className={`font-clashregular ${isCenter ? 'self-center' : ''}`}
            value={value}
            editable={editable}
            style={{
              fontSize: moderateScale(17),
              width: windowWidth / 1.2,
              fontFamily: "ClashDisplayRegular",
              fontWeight: fontWeight,
              color: color || colors.black,
            }}
            placeholder={placeholder}
            multiline={multiline}
            placeholderTextColor={colors.lightBlue}
            keyboardType={keyboard}
            maxLength={maxLength}
            secureTextEntry={isPassword || false}
            onChangeText={onChangeText}
            onBlur={onBlur}
            autoCapitalize="none"
          />
        </View>

        <Image
          className="w-5 h-5 pr-10"
          source={icons.search}
          resizeMode="center"
        />
      </View>
    </View>
  );
};

export default CustomSearch;
