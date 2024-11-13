import {
    StyleSheet,
    TouchableOpacity,
    View,
    Image,
    ScrollView,
  } from "react-native";
  import { useState } from "react";
import {   SafeAreaView, } from "react-native-safe-area-context";
import { horizontalScale,
    moderateScale,
    verticalScale
 } from "@/utils/Mertics";
import { appStyles } from "@/utils/appStyles";
import { colors } from "@/utils/colors";
import CustomText from "@/components/CustomText";
import { fonts } from "@/utils/fonts";
import { isiPad } from "@/utils/CommonFun";
import images from "@/constants/images";
import CustomButton from "@/components/CustomButton";
import { BadgesData, friendData, rankingData, userHistoryData  } from "@/utils/Data";
import QrCodeModal from "@/components/Profile/QrCodeModal";
import UsersHistoryContainer from "@/components/Profile/UsersHistoryContainer";
import { router } from "expo-router";
  const Profile = ({ navigation }: any) => {
    const [selectedTab, setSelected] = useState("Courses");
    const [isQrCodeModal,setIsQrCodeModal]=useState(false)
  
    const Header = () => {
      return (
        <View style={appStyles.rowjustify}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => router.back()}
            style={{
              width: moderateScale(20),
              height: moderateScale(20),
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

          <TouchableOpacity
          activeOpacity={0.4}
          onPress={()=>router.push("/settings")}
            style={{
              width: moderateScale(30),
              height: moderateScale(30),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ width: "90%", height: "90%" }}
              source={images.setting}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      );
    };
  
    return (
      <>
        <  SafeAreaView
      edges={["top"]}
       style={{ flex: 1, backgroundColor: colors.white }}>
        <View
          style={{
            paddingTop: verticalScale(10),
            paddingHorizontal: moderateScale(20),
            // backgroundColor:"red"
          }}
        >
          <Header />
          <View
            style={{
              ...appStyles.rowjustify,
              marginHorizontal: moderateScale(isiPad ? 70 : 30),
            }}
          >
            <View
              style={{
                gap: verticalScale(5),
                alignItems: "center",
                marginBottom: verticalScale(40),
              }}
            >
              <CustomText
                fontFam={fonts.medium}
                fontWeight="600"
                label="Your QR Code"
                size={8}
                // style={{ marginBottom: verticalScale(10) }}
                color={"#454545"}
              />
              <TouchableOpacity
              activeOpacity={0.5}
              onPress={()=>setIsQrCodeModal(true)}
              
               style={styles.qrcodeBox}>
                <Image
                  style={{ width: "90%", height: "90%" }}
                  source={images.qrcode}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center", gap: verticalScale(10),}}>
              <CustomButton
                bgColor={colors.white}
                containerStyles="
                w-20  // Increase width
                min-h-[14px]
                // h-05  // Decrease height
                bg-white 
                font-semibold 
                rounded-full 
                absolute 
                z-50 
                -top-3 
                text-base 
                border 
                border-black 
                text-black"
               
                title="1235"
             
              />
  
              <View style={styles.profileImg}>
                <Image
                  style={{ width: "90%", height: "90%", borderRadius: 999 }}
                  source={images.user3}
                />
              </View>
  
              <View style={styles.onlineBox}>
                <View
                  style={{
                    width: moderateScale(7),
                    height: moderateScale(7),
                    borderRadius: 999,
                    backgroundColor: "#6FCF97",
                  }}
                />
  
                <CustomText
                  label="Online"
                  size={13}
                  // style={{ marginBottom: verticalScale(10) }}
                  color={colors.black}
                />
              </View>
            </View>
  
            <View
              style={{
                alignItems: "center",
                gap: verticalScale(5),
                marginBottom: verticalScale(40),
              }}
            >
              <CustomText
                fontFam={fonts.medium}
                fontWeight="600"
                label="Free  Plan"
                size={9}
                color={"#454545"}
              />
              <Image
                style={{ width: moderateScale(35), height: moderateScale(35) }}
                source={images.battle}
              />
              <TouchableOpacity 
              activeOpacity={0.5}
              onPress={()=>router.push("/membership")}
              style={styles.planBox}>
                <CustomText
                  fontFam={fonts.medium}
                  fontWeight="600"
                  label="Upgrade"
                  size={10}
                  color={"#606060"}
                />
              </TouchableOpacity>
            </View>
          </View>
  
          <View
            style={{
              ...appStyles.row,
              gap: moderateScale(10),
              alignSelf: "center",
              paddingVertical: verticalScale(5),
            }}
          >
            <Image
              style={{ width: moderateScale(40), height: moderateScale(40) }}
              source={images.roosevelt}
              resizeMode="contain"
            />
            <CustomText
              fontFam={fonts.medium}
              fontWeight="600"
              label="SARAHM."
              size={22}
              color={"#454D51"}
            />
            <Image
              style={{ width: moderateScale(35), height: moderateScale(35) }}
              source={images.ukflag}
              resizeMode="contain"
            />
          </View>
  
          <View
            style={{
              ...appStyles.row,
              gap: moderateScale(70),
              alignSelf: "center",
              paddingVertical: verticalScale(15),
            }}
          >
            <View style={{ alignItems: "center", gap: verticalScale(5) }}>
              <CustomText
                fontFam={fonts.bold}
                fontWeight="700"
                label="38"
                size={25}
                color={colors.bluelight}
              />
              <CustomText label="Friends" size={13} color={colors.black} />
            </View>
  
            <View style={{ alignItems: "center", gap: verticalScale(5) }}>
              <CustomText
                fontFam={fonts.bold}
                fontWeight="700"
                label="1235"
                size={25}
                color={colors.bluelight}
              />
              <CustomText label="Overall ELO" size={13} color={colors.black} />
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "#EDF3FB",
            borderTopLeftRadius: moderateScale(30),
            borderTopRightRadius: moderateScale(30),
          }}
        >
          <ScrollView
          showsVerticalScrollIndicator={false}
           style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: moderateScale(15) }}>
              <View
                style={{
                  ...appStyles.row,
  
                  gap: horizontalScale(30),
  
                  alignSelf: "center",
                }}
              >
                {["Courses", "History"].map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      activeOpacity={0.5}
                      onPress={() => setSelected(item)}
                      style={
                        isiPad
                          ? {
                              ...styles.isPadTabContainer,
                              borderWidth: selectedTab == item ? 1 : -1,
                            }
                          : {
                              ...styles.tabContainer,
                              borderWidth: selectedTab == item ? 1 : -1,
                            }
                      }
                    >
                      <CustomText
                        fontFam={selectedTab == item ? fonts.bold : fonts.medium}
                        fontWeight={selectedTab == item ? "700" : "600"}
                        label={item}
                        size={16}
                        color={selectedTab == item ? colors.black : "#8F8F8F"}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
              {
                 selectedTab=="History"?(
  
                  <>
                  <View style={{marginTop:verticalScale(15)}}>
                  {userHistoryData.map((item, index) => {
                  return (
                    <View >
                    <UsersHistoryContainer  item={item}/>   
                    </View>
                  );
                })}
  
                  </View>
              
                  </>
  
                 ):(
  
                  <View
                  style={{
                    ...appStyles.row,
                    gap: horizontalScale(40),
                    paddingVertical: verticalScale(30),
                    alignSelf: "center",
                  }}
                >
                 <View
                      style={{ ...styles.satContainer, shadowColor: "#FF000040" }}
                    >
                      <Image
                        style={{ width: "80%", height: "80%" }}
                        source={images.act}
                        resizeMode="contain"
                      />
                    </View>
                 
                  <View
                    style={{
                      ...styles.satContainer,
                      shadowColor: "#0090FF40",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      style={{ width: "100%", height: "100%" }}
                      source={images.sat}
                    />
                  </View>
                </View>
                  
                 )
              }
             
  
              <CustomText
                fontFam={fonts.medium}
                fontWeight="600"
                label={`Rankings    (${rankingData.length})`}
                size={18}
                // style={{ marginBottom: verticalScale(10) }}
                color={colors.black}
              />
              <View
                style={{
                  ...appStyles.row,
                  gap: moderateScale(20),
                  paddingBottom: verticalScale(15),
                  paddingTop: verticalScale(10),
                }}
              >
                {rankingData.map((item:any, index:any) => {
                  return (
                    <View style={{ alignItems: "center" }}>
                      <View>
                        <Image
                          style={{
                            width: moderateScale(45),
                            height: moderateScale(45),
                          }}
                          source={item?.image}
                          resizeMode="contain"
                        />
                        {item.sat == "SAT in" && (
                          <View
                            style={{
                              position: "absolute",
                              alignItems: "center",
                              justifyContent: "center",
                              height: "100%",
                              right: moderateScale(13),
                            }}
                          >
                            <CustomText
                              fontFam={fonts.medium}
                              fontWeight="600"
                              label={item.id}
                              size={10}
                              color={colors.black}
                            />
                          </View>
                        )}
                      </View>
                      {item.sat == "SAT at" && (
                        <CustomText
                          fontFam={fonts.medium}
                          fontWeight="600"
                          label={item.id}
                          size={12}
                          color={colors.black}
                        />
                      )}
                      <CustomText
                        fontFam={fonts.medium}
                        fontWeight="600"
                        label={item.sat}
                        style={{ marginVertical: verticalScale(2) }}
                        size={12}
                        color={colors.black}
                      />
                      <CustomText
                        fontFam={fonts.medium}
                        fontWeight="600"
                        label={item.name}
                        size={12}
                        color={colors.black}
                      />
                    </View>
                  );
                })}
              </View>
              <View style={{...appStyles.row,gap:moderateScale(20)}}>
              <CustomText
                fontFam={fonts.medium}
                fontWeight="600"
                label={`Badges    (${BadgesData.length})`}
                size={18}
                // style={{ marginBottom: verticalScale(10) }}
                color={colors.black}
              />
  
  <CustomButton
    containerStyles="bg-transparent text-base font-semibold rounded-full px-5 min-h-[14px] border"
    handlePress={()=>router.push("/chestRewards")}

                bgColor={"transparent"}
                title="See collection"
              
              />
  
              </View>
  
             
              <View
                style={{
                  ...appStyles.row,
                  gap: moderateScale(20),
                  paddingBottom: verticalScale(15),
                  paddingTop: verticalScale(10),
                }}
              >
                {BadgesData.map((item:any, index:any) => {
                  return (
                    <View style={{ alignItems: "center" }}>
                      <View>
                        <Image
                          style={{
                            width: moderateScale(45),
                            height: moderateScale(45),
                          }}
                          source={item?.image}
                          resizeMode="contain"
                        />
                      </View>
                    </View>
                  );
                })}
              </View>
  
              <CustomText
                fontFam={fonts.medium}
                fontWeight="600"
                label={`Friends    (${friendData.length})`}
                size={18}
                // style={{ marginBottom: verticalScale(10) }}
                color={colors.black}
              />
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View
                  style={{
                    ...appStyles.row,
                    gap: moderateScale(20),
                    paddingBottom: verticalScale(15),
                    paddingTop: verticalScale(10),
                  }}
                >
                  {friendData.map((item:any, index:any) => {
                    return (
                      <View style={{ alignItems: "center" }}>
                        <View>
                          <View
                            style={{
                              ...appStyles.elevation,
  
                              width: moderateScale(50),
                              height: moderateScale(50),
                              borderRadius: moderateScale(50),
                              overflow: "hidden",
                            }}
                          >
                            <Image
                              style={{ width: "100%", height: "100%" }}
                              source={item?.image}
                            />
                          </View>
                          <View
                            style={{
                              width: moderateScale(15),
                              height: moderateScale(15),
                              backgroundColor: "#49D65B",
                              borderRadius: moderateScale(15),
                              position: "absolute",
                              bottom: verticalScale(5),
                              right: horizontalScale(-3),
                              zIndex: 999,
                            }}
                          />
                        </View>
                      </View>
                    );
                  })}
                </View>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
      <QrCodeModal
      modalVisible={isQrCodeModal}
      setModalVisible={setIsQrCodeModal}
      />
      </>
    
    );
  };
  export default Profile;
  
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
      width: moderateScale(105),
      height: moderateScale(105),
      borderRadius: 999,
      borderWidth: 2.5,
      borderColor: colors.bluelight,
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
    isPadTabContainer: {
      paddingHorizontal: horizontalScale(15),
      paddingVertical: verticalScale(7),
      borderRadius: moderateScale(10),
      alignItems: "center",
      justifyContent: "center",
    },
    tabContainer: {
      paddingHorizontal: horizontalScale(20),
      paddingVertical: verticalScale(6),
      borderRadius: moderateScale(10),
      alignItems: "center",
      justifyContent: "center",
    },
  
    satContainer: {
      height: moderateScale(90),
      width: moderateScale(90),
      backgroundColor: colors.white,
      borderRadius: moderateScale(20),
      elevation: 5,
      shadowOffset: { width: 0, height: isiPad ? 4 : 2 },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  