import {
    StyleSheet,
    TouchableOpacity,
    View,
    Image,
    ScrollView,
  } from "react-native";
  import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/utils/colors";
import { verticalScale,moderateScale } from "@/utils/Mertics";
import CustomText from "@/components/CustomText";
import { fonts } from "@/utils/fonts";
import { isiPad } from "@/utils/CommonFun";
import images from "@/constants/images";
import { appStyles } from "@/utils/appStyles";
import { rareBadgeData,commanBadgeData,uncommanBadgeData,uniqueBadgeData } from "@/utils/Data";
import { router } from "expo-router";
  
  const ChestRewards = ({ navigation }: any) => {
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
  
          <CustomText
            fontFam={fonts.medium}
            fontWeight="600"
            label={"Your Badges"}
            size={25}
            style={{ textAlign: "center" }}
            color={"#5B5B5B"}
          />
        </View>
      );
    };
  
    return (
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
              gap: verticalScale(20),
            }}
          >
            <Header />
  
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                ...styles.boxContainer,
                backgroundColor: colors.black,
                paddingHorizontal: moderateScale(20),
  
              }}
            >
  
              <View
                style={{
                  paddingBottom: verticalScale(10),
                  flexDirection: "row",
                  alignItems: "center",
                  gap: moderateScale(10),
                  alignSelf: "center",
                }}
              >
                <CustomText
                  fontFam={fonts.medium}
                  fontWeight="600"
                  label={"Unique"}
                  size={22}
                  color={"#D1D1D1"}
                />
                <Image
                  style={{
                    width: moderateScale(32),
                    height: moderateScale(32),
                  }}
                  source={images.uniqueBadge}
                />
              </View>
  
              <View style={{ ...appStyles.rowjustify, flexWrap: "wrap" }}>
                {uniqueBadgeData.map((item, index) => {
                  return (
                    <View
                    key={index.toString()}
  
                    >
                      <View
                        style={{ gap: verticalScale(5), alignItems: "center" }}
                      >
                        <Image
                          style={{
                            width: moderateScale(52),
                            height: moderateScale(52),
                          }}
                          source={item.icon}
                          resizeMode="contain"
                        />
  
                        <CustomText
                          fontFam={fonts.medium}
                          fontWeight="600"
                          text={item.name}
                          size={12}
                          color={colors.white}
                        />
                      </View>
                    </View>
                  );
                })}
              </View>
  
            </TouchableOpacity>
  
  
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                ...styles.boxContainer,
                backgroundColor: "#AF0100"+"30",
                
              }}
            >
              <View
                style={{
                  paddingBottom: verticalScale(10),
                  flexDirection: "row",
                  alignItems: "center",
                  gap: moderateScale(10),
                  alignSelf: "center",
                }}
              >
                <CustomText
                  fontFam={fonts.medium}
                  fontWeight="600"
                  label={"Rare"}
                  size={22}
                  color={"#830000"}
                />
                <Image
                  style={{
                    width: moderateScale(27),
                    height: moderateScale(27),
                  }}
                  source={images.rareBadge}
                />
              </View>
  
              <View style={{ ...appStyles.rowjustify, flexWrap: "wrap",alignSelf:"center",paddingHorizontal:moderateScale(20)}}>
                {rareBadgeData.map((item, index) => {
                  return (
                    <View 
                    key={index.toString()}
  
                     style={{alignItems:"center",alignSelf:"center",width:moderateScale(50),paddingVertical:verticalScale(5)}}>
                      <View
                        style={{ gap: verticalScale(3), alignItems: "center" }}
                      >
                        <Image
                          style={{
                            width: moderateScale(45),
                            height: moderateScale(45),
                          }}
                          source={item.icon}
                          resizeMode="contain"
                        />
  
                        <CustomText
                        
                          text={item.name}
                          size={10}
                          color={colors.black}
                        />
                      </View>
                    </View>
                  );
                })}
              </View>
            </TouchableOpacity>
  
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                ...styles.boxContainer,
                backgroundColor: "#94CBFF"+"50",
              }}
            >
              <View
                style={{
                  paddingBottom: verticalScale(10),
                  flexDirection: "row",
                  alignItems: "center",
                  gap: moderateScale(10),
                  alignSelf: "center",
                }}
              >
                <CustomText
                  fontFam={fonts.medium}
                  fontWeight="600"
                  label={"Uncommon"}
                  size={20}
                  color={"#007CD6"}
                />
                <Image
                  style={{
                    width: moderateScale(27),
                    height: moderateScale(27),
                  }}
                  source={images.uncommanBadge}
                />
              </View>
  
              <View style={{ ...appStyles.row, flexWrap: "wrap",alignSelf:"center",paddingHorizontal:moderateScale(20)}}>
                {uncommanBadgeData.map((item, index) => {
                  return (
                    <View  
                    key={index.toString()}
  
                    style={{alignItems:"center",alignSelf:"center",width:moderateScale(50),paddingVertical:verticalScale(5)}}>
                      <View
                        style={{ gap: verticalScale(3), alignItems: "center" }}
                      >
                        <Image
                          style={{
                            width: moderateScale(45),
                            height: moderateScale(45),
                          }}
                          source={item.icon}
                          resizeMode="contain"
                        />
  
                      
                      </View>
                    </View>
                  );
                })}
              </View>
            </TouchableOpacity>
  
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                ...styles.boxContainer,
                backgroundColor: "#D9D9D9"+"20",
              }}
            >
              <View
                style={{
                  paddingBottom: verticalScale(10),
                  flexDirection: "row",
                  alignItems: "center",
                  gap: moderateScale(10),
                  alignSelf: "center",
                }}
              >
                <CustomText
                  fontFam={fonts.medium}
                  fontWeight="600"
                  label={"Common"}
                  size={20}
                  color={colors.black}
                />
                <Image
                  style={{
                    width: moderateScale(27),
                    height: moderateScale(27),
                  }}
                  source={images.commanBadage}
                />
              </View>
  
              <View style={{ ...appStyles.row, flexWrap: "wrap",alignSelf:"center",paddingHorizontal:moderateScale(20)}}>
                {commanBadgeData.map((item, index) => {
                  return (
                    <View 
                    key={index.toString()}
                     style={{alignItems:"center",alignSelf:"center",width:moderateScale(50),paddingVertical:verticalScale(5)}}>
                      <View
                        style={{ gap: verticalScale(3), alignItems: "center" }}
                      >
                        <Image
                          style={{
                            width: moderateScale(45),
                            height: moderateScale(45),
                          }}
                          source={item.icon}
                          resizeMode="contain"
                        />
  
                      
                      </View>
                    </View>
                  );
                })}
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  export default ChestRewards;
  
  const styles = StyleSheet.create({
    boxContainer: {
      width: "100%",
      // elevation: 5,
      shadowColor: colors.black + "50",
      shadowOffset: { width: 2, height: isiPad ? 4 : 2 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      borderRadius: moderateScale(30),
      paddingVertical: verticalScale(10),
    },
  });
  