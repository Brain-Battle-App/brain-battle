import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { horizontalScale, moderateScale, verticalScale } from "@/utils/Mertics";
import { appStyles } from "@/utils/appStyles";
import { colors } from "@/utils/colors";
import CustomText from "@/components/CustomText";
import { fonts } from "@/utils/fonts";
import { isiPad } from "@/utils/CommonFun";
import images from "@/constants/images";
import CustomButton from "@/components/CustomButton";
import {
  BadgesData,
  friendData,
  rankingData,
  userHistoryData,
} from "@/utils/Data";
import QrCodeModal from "@/components/Profile/QrCodeModal";
import UsersHistoryContainer from "@/components/Profile/UsersHistoryContainer";
import { router } from "expo-router";
import { useTheme } from "@/Theme/ThemeProvider";
import { scale } from "react-native-size-matters";
import LivePopupModal from "@/components/Profile/LivePopupModal";
import { LinearGradient } from "expo-linear-gradient";
import ConfirmPurcheaseModal from "@/components/Profile/ConfirmPurcheaseModal";
const ConfirmPurchease = ({ navigation }: any) => {
  const [selectedTab, setSelected] = useState("Courses");
  const [isQrCodeModal, setIsQrCodeModal] = useState(false);
  const [isConfirmPurcheaseModal, setIsConfirmPurcheaseModal] = useState(false);
  const [selectedLives, setSelectedLive] = useState(1);

  const { theme }: any = useTheme();
  const tab = [
    { title: "Courses", icon: images.course },
    { title: "History", icon: images.clock },
  ];

  const Header = () => {
    return (
      <View
        style={{
          ...appStyles.row,
          gap: scale(10),
          paddingHorizontal: moderateScale(20),
        }}
      >
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => router.back()}
          style={{
            width: moderateScale(47),
            height: moderateScale(47),
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme.colors.white,
            borderRadius: moderateScale(19),
          }}
        >
          <Image
            style={{ width: "40%", height: "40%" }}
            source={images.profile_back}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <CustomText
          label="Confirm Purchease"
          fontFam={fonts.medium}
          fontWeight="600"
          size={20}
          color={theme.colors.text}
        />
      </View>
    );
  };

  return (
    <>
      <SafeAreaView
        edges={["top"]}
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
          paddingTop: verticalScale(5),
          gap:verticalScale(20)
        }}
      >
        <View
          style={{
            flex: 1,
            gap: verticalScale(20),
          }}
        >
          <Header />

          <View style={{ gap: verticalScale(10) }}>
            <CustomText
              fontFam={fonts.medium}
              fontWeight="600"
              style={{ marginLeft: scale(20) }}
              label={"Lives"}
              size={17}
              color={theme.colors.text}
            />
            <ScrollView
              contentContainerStyle={{ paddingRight: scale(20) }}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              <View
                style={{
                  ...appStyles.row,
                  gap: moderateScale(15),
                  paddingLeft: scale(20),
                }}
              >
                {friendData.map((item: any, index: any) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={() => setSelectedLive(index)}
                    >
                      <View
                        style={{
                          backgroundColor: theme.colors.white,
                          borderRadius: moderateScale(25),
                          alignItems: "center",
                          paddingHorizontal: moderateScale(25),
                          paddingVertical: verticalScale(20),
                          gap: verticalScale(15),
                          borderColor: theme.colors.primary,
                          borderWidth: 1,
                        }}
                      >
                        <LinearGradient
                          colors={["#FF3A3110", "#FCB81010", "#55A2FF10"]} // Gradient colors
                          start={{ x: 0, y: 0 }} // Start at the top-left
                          end={{ x: 1, y: 1 }} // End at the bottom-right
                          style={{
                            backgroundColor: theme.colors.white,
                            borderRadius: moderateScale(40),
                            alignItems: "center",
                            padding: moderateScale(10),
                          }}
                        >
                          <ImageBackground
                            style={{
                              width: moderateScale(35),
                              height: verticalScale(35),
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                            source={images.heart}
                            resizeMode="contain"
                          >
                            <CustomText
                              label="0"
                              size={12}
                              color={theme.colors.white}
                            />
                          </ImageBackground>
                        </LinearGradient>
                      </View>
                      {selectedLives == index && (
                        <Image
                          style={{
                            width: moderateScale(23),
                            height: verticalScale(23),
                            alignItems: "center",
                            justifyContent: "center",
                            position: "absolute",
                            top: scale(4),
                            right: scale(-7),
                            tintColor: theme.colors.primary,
                          }}
                          source={images.checkmark_circle}
                          resizeMode="contain"
                        />
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>

            <LinearGradient
              colors={["#FF3A3120", "#FCB81020", "#55A2FF20"]} // Gradient colors
              start={{ x: 0, y: 0 }} // Start at the top-left
              end={{ x: 1, y: 1 }}
              style={{
                ...styles.box,
                backgroundColor: theme.colors.white,
                //   width:"100%",
                borderWidth: 1.2,
                borderRadius: moderateScale(25),
                borderColor: theme.colors.white,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginHorizontal: scale(20),
              }}
            >
              <View style={{ ...appStyles.row, gap: scale(10) }}>
                <View
                  // End at the bottom-right
                  style={{
                    backgroundColor: theme.colors.white,
                    borderRadius: moderateScale(999),
                    alignItems: "center",
                    padding: moderateScale(8),
                  }}
                >
                  <ImageBackground
                    style={{
                      width: moderateScale(25),
                      height: verticalScale(25),
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    source={images.heart}
                    resizeMode="contain"
                  >
                    <CustomText
                      label="0"
                      size={12}
                      color={theme.colors.white}
                    />
                  </ImageBackground>
                </View>
                <CustomText
                  label="Unlimted Lives"
                  size={17}
                  fontFam={fonts.medium}
                  fontWeight="600"
                  color={theme.colors.text_Black}
                />
              </View>

              <Image
                style={{
                  width: moderateScale(30),
                  height: moderateScale(30),
                  tintColor: theme.colors.black_gray,
                }}
                source={images.next_arrow}
                resizeMode="contain"
              />
            </LinearGradient>
          </View>
          <View style={{ flex: 1,paddingHorizontal:moderateScale(20),gap:verticalScale(20) }}>
            <View
              style={{
                gap: verticalScale(10),
              }}
            >
              <CustomText
                fontFam={fonts.medium}
                fontWeight="600"
                label={"Payment Method"}
                size={17}
                color={theme.colors.text}
              />

              <View
                style={{
                  paddingVertical: verticalScale(8),
                  paddingHorizontal: scale(10),
                  gap: verticalScale(15),
                  backgroundColor: theme.colors.white,
                  width: "100%",
                  borderWidth: 1.2,
                  borderRadius: moderateScale(20),
                  borderColor: theme.colors.white,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View style={{ ...appStyles.row, gap: scale(6) }}>
                  <View
                    // End at the bottom-right
                    style={{
                      backgroundColor: theme.colors.white,
                      borderRadius: moderateScale(999),
                      alignItems: "center",
                      padding: moderateScale(8),
                    }}
                  >
                    <View
                      style={{
                        paddingHorizontal: moderateScale(10),
                        paddingVertical: verticalScale(3),
                        borderRadius: scale(8),
                        backgroundColor: theme.colors.black_Shade,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        style={{
                          width: moderateScale(30),
                          height: verticalScale(30),
                        }}
                        source={images.visa}
                        //   resizeMode="contain"
                      />
                    </View>
                  </View>
                  <View style={{ gap: verticalScale(4) }}>
                    <CustomText
                      label="****0258"
                      size={14}
                      fontFam={fonts.medium}
                      fontWeight="600"
                      color={theme.colors.text_Black}
                    />

                    <CustomText
                      label="Default Payment Method"
                      size={15}
                      color={theme.colors.text_Black}
                    />
                  </View>
                </View>

                <Image
                  style={{
                    width: moderateScale(30),
                    height: moderateScale(30),
                    tintColor: theme.colors.black_gray,
                  }}
                  source={images.next_arrow}
                  resizeMode="contain"
                />
              </View>
            </View>

            <CustomText
              fontFam={fonts.medium}
              fontWeight="600"
              style={{ textAlign: "center" }}
              label={"Add Payment Method"}
              size={16}
              color={theme.colors.primary}
            />
            <View
              style={{
                gap: verticalScale(15),
              }}
            >
              <CustomText
                fontFam={fonts.medium}
                fontWeight="600"
                // style={{textAlign:"center"}}
                label={"Summary"}
                size={17}
                color={theme.colors.text}
              />
              <View style={appStyles.rowjustify}>
                <CustomText
                  label={"Subtotal - 12 lives"}
                  size={16}
                  color={theme.colors.text_Black}
                />

                <CustomText
                  label={"$8"}
                  size={16}
                  fontFam={fonts.medium}
                  fontWeight="600"
                  color={theme.colors.text_Black}
                />
              </View>

              <View style={appStyles.rowjustify}>
                <CustomText
                  label={"Discount"}
                  size={16}
                  color={theme.colors.text_Black}
                />

                <CustomText
                  label={"$0.00"}
                  size={16}
                  fontFam={fonts.medium}
                  fontWeight="600"
                  color={theme.colors.text_Black}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  height: verticalScale(1),
                  backgroundColor: theme.colors.white,
                }}
              />

              <View style={appStyles.rowjustify}>
                <CustomText
                  label={"Total"}
                  size={20}
                  color={theme.colors.text_Black}
                />

                <CustomText
                  label={"$8"}
                  size={16}
                  fontFam={fonts.medium}
                  fontWeight="600"
                  color={theme.colors.text_Black}
                />
              </View>
            </View>
          </View>

          <View
            style={{
              paddingBottom: verticalScale(40),
              paddingHorizontal: moderateScale(20),
            }}
          >
            <CustomButton
              textStyles={`font-semibold text-white`}
              // textStyles="text-lg text-white font-clashsemibold"
              containerStyles={`rounded-[50%] w-[100%]`}
              title="Confirm Purchease"
              handlePress={() => {
                setIsConfirmPurcheaseModal(true)
              
              }}
            />
          </View>
        </View>
      </SafeAreaView>
      <QrCodeModal
        modalVisible={isQrCodeModal}
      />
      <ConfirmPurcheaseModal
        modalVisible={isConfirmPurcheaseModal}
        setModalVisible={setIsConfirmPurcheaseModal}
      />
    </>
  );
};
export default ConfirmPurchease;

const styles = StyleSheet.create({
  qrcodeBox: {
    width: moderateScale(50),
    height: moderateScale(50),
    backgroundColor: colors.white,
    borderRadius: moderateScale(8),
    elevation: 5,
    shadowColor: colors.black,
    shadowOffset: { width: 2, height: isiPad ? 4 : 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  planBox: {
    paddingHorizontal: moderateScale(5),
    height: moderateScale(25),
    backgroundColor: colors.white,
    borderRadius: moderateScale(8),
    elevation: 5,
    shadowColor: colors.black,
    shadowOffset: { width: 2, height: isiPad ? 4 : 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  onlineBox: {
    paddingHorizontal: moderateScale(10),
    height: moderateScale(30),
    backgroundColor: "#D3CCCC",
    borderRadius: moderateScale(10),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: moderateScale(5),
  },
  profileImg: {
    width: moderateScale(120),
    height: moderateScale(120),
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  isPadTabContainer: {
    paddingVertical: verticalScale(7),
    borderRadius: moderateScale(10),
    alignItems: "flex-start",
    flexDirection: "row",
    gap: scale(10),
    // justifyContent: "center",
  },
  tabContainer: {
    // paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(6),
    borderRadius: moderateScale(10),
    alignItems: "flex-start",
    flexDirection: "row",
    gap: scale(10),
  },

  satContainer: {
    height: moderateScale(90),
    width: "47%",
    borderRadius: moderateScale(20),

    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    borderRadius: moderateScale(20),
    padding: moderateScale(15),
    gap: verticalScale(15),
  },
  rankingBadContainer: {
    width: moderateScale(60),
    height: moderateScale(60),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    marginBottom: verticalScale(7),
  },
});
