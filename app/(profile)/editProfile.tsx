import {
    FlatList,
    Platform,
    StyleSheet,
    TouchableOpacity,
    View,
    Image,
    ScrollView,
    TextInput,
  } from "react-native";

  import { useState } from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale,verticalScale,horizontalScale } from "@/utils/Mertics";
import { colors } from "@/utils/colors";
import CustomText from "@/components/CustomText";
import { fonts } from "@/utils/fonts";
import { isiPad } from "@/utils/CommonFun";
import images from "@/constants/images";
import CountryDropDown from "@/components/CountryDropDown";
import icons from "@/constants/icons";
import { router } from "expo-router";
  
  const EditProfile = ({ navigation }: any) => {
      const [isCountryDropDown, setIsCountryDropDown] = useState(false);
      const [isEditCountryDropDown, setIsEditCountryDropDown] = useState(false);
  
      const [selectedCountry, setSelectedCountry] = useState({
          name: "Country",
          image: images.ukflag,
        });
  
    const [editProfileData, setEditProfileData] = useState([
      {
        label: "Username",
        placeholder: "Username",
        txt: "SarahM",
        isEdit: false,
      },
      {
        label: "Password",
  
        placeholder: "*********",
        secureTextEntry: true,
        txt: "1233455666",
        isEdit: false,
      },
      {
        label: "Email",
  
        placeholder: "Email",
        txt: "sarahm@gmail.com",
        isEdit: false,
      },
      {
        label: "School",
  
        placeholder: "School",
        txt: "Roosevelt HS MO)",
        isEdit: false,
      },
      {
        label: "Grade",
  
        placeholder: "Grade",
        txt: "11th Grade",
        isEdit: false,
      },
    ]);
  
    const Header = () => {
      return (
        <View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => router.back()}
            style={{
              width: moderateScale(25),
              height: moderateScale(25),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ width: "90%", height: "90%" }}
              source={images.back_profile}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={{ padding: moderateScale(20), gap: verticalScale(3) }}>
            <CustomText
              fontFam={fonts.medium}
              fontWeight="600"
              label="Edit"
              size={18}
              color={colors.bluelight}
            />
            <CustomText
              fontFam={fonts.bold}
              fontWeight="700"
              label="Profile"
              size={22}
              color={colors.black}
            />
          </View>
        </View>
      );
    };
  
    return (
      <>
      <SafeAreaView
        edges={["top"]}
        style={{ flex: 1, backgroundColor: colors.white }}
      >
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: colors.white,
            marginBottom: verticalScale(20),
          }}
        >
          <View
            style={{
              paddingTop: verticalScale(10),
              paddingHorizontal: moderateScale(20),
              gap: verticalScale(10),
            }}
          >
            <Header />
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                alignSelf: "flex-end",
                marginRight: "10%",
                marginBottom: verticalScale(30),
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  gap: moderateScale(5),
                  alignItems: "flex-end",
                }}
              >
                <View style={styles.profileImg}>
                  <Image style={styles.profileImg}
                   source={images.user3} />
                </View>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => navigation.goBack()}
                  style={styles.pencilContainer}
                >
                  <Image
                    style={{ width: "90%", height: "90%" }}
                    source={icons.pencil}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
  
              <View
                style={{
                  alignItems: "center",
                  gap: verticalScale(5),
                  width: moderateScale(isiPad ? 200 : 100),
                }}
              >
                  <TouchableOpacity
                  disabled={isEditCountryDropDown}
                  style={{  alignItems: "center",
                  gap: verticalScale(5),}}
                  activeOpacity={0.6}
                  onPress={()=>setIsCountryDropDown(!isCountryDropDown)}
                  >
  
                <CustomText label={selectedCountry.name} size={10} color={colors.black} />
                <Image
                  style={{
                    width: moderateScale(27),
                    height: moderateScale(22),
                  }}
                  source={selectedCountry.image}
                  resizeMode="contain"
  
                />
                                </TouchableOpacity>
  
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => {
                      setIsEditCountryDropDown(!isEditCountryDropDown)
  
                  }}
                  style={{
                    ...styles.pencilContainer,
                    marginLeft: moderateScale(35),
                  }}
                >
                  <Image
                    style={{ width: "90%", height: "90%" }}
                    source={icons.pencil}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
            </View>
            {editProfileData.map((item, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.6}
                  key={index.toString()}
                  style={{
                    ...styles.boxContainer,
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    width: "100%",
                    gap: verticalScale(20),
                    borderRadius: moderateScale(15),
                    backgroundColor: "#C4C4C430",
                  }}
                >
                  <View style={{ gap: verticalScale(6), flex: 1 }}>
                    <CustomText
                      fontWeight="600"
                      label={item.label}
                      size={13}
                      color={colors.black}
                    />
  
                    <TextInput
                      value={item.txt}
                      editable={item.isEdit}
                      style={{
                        fontSize: moderateScale(17),
                        alignItems: "center",
                        padding: -1,
                        fontFamily: fonts.semiBold,
                        fontWeight: "700",
                        color: colors.black,
                      }}
                      placeholder={item.placeholder}
                      secureTextEntry={item.secureTextEntry}
                      placeholderTextColor={colors.black}
                      onChangeText={(txt) => {
                        const data = [...editProfileData];
  
                        data[index].txt = txt;
  
                        setEditProfileData(data);
                      }}
                      autoCapitalize="none"
                    />
                  </View>
  
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                      const data = [...editProfileData];
  
                      data[index].isEdit = !item.isEdit;
  
                      setEditProfileData(data);
                    }}
                    style={styles.pencilContainer}
                  >
                    <Image
                      style={{ width: "90%", height: "90%" }}
                      source={icons.pencil}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
       {isCountryDropDown && (
          <CountryDropDown
          top={verticalScale(200)}
          setIsCountryDropDown={setIsCountryDropDown}
          right={moderateScale(20)}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        )}
      </>
      
    );
  };
  export default EditProfile;
  
  const styles = StyleSheet.create({
    boxContainer: {
      width: "100%",
      paddingHorizontal: moderateScale(20),
      paddingVertical: verticalScale(15),
    },
    profileImg: {
      width: moderateScale(90),
      height: moderateScale(90),
      borderRadius: 999,
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
    pencilContainer: {
      width: moderateScale(27),
      height: moderateScale(27),
      alignItems: "center",
      justifyContent: "center",
    },
  });
  