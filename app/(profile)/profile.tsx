import {
    StyleSheet,
    TouchableOpacity,
    View,
    Image,
    ScrollView,
    ImageBackground,
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
import { useTheme } from "@/Theme/ThemeProvider";
import { scale } from "react-native-size-matters";
import LivePopupModal from "@/components/Profile/LivePopupModal";
  const Profile = ({ navigation }: any) => {
    const [selectedTab, setSelected] = useState("Courses");
    const [isQrCodeModal,setIsQrCodeModal]=useState(false)
    const [isLivePopupModal,setIsLivePopupModal]=useState(false)

    const {theme}:any = useTheme();
    const tab  =[
      {title:"Courses",icon:images.course},
      {title:"History",icon:images.clock},

    ]
  
    const Header = () => {
      return (
        <View style={{...appStyles.rowjustify,}}>
          <View
          style={{...appStyles.row,gap:scale(10)}}
          >
            <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => router.back()}
            style={{
              width: moderateScale(47),
              height: moderateScale(47),
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:theme.colors.white,
              borderRadius:moderateScale(19)
            }}
          >
            <Image
              style={{ width: "40%", height: "40%" }}
              source={images.profile_back}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <CustomText
                  label="Profile"
                  size={20}
                  color={ theme.colors.text}
                />

          </View>
          <View
          style={{...appStyles.row,gap:scale(10)}}
          >
            <TouchableOpacity
            activeOpacity={0.4}
            onPress={()=>setIsLivePopupModal(true)}
            >
            <ImageBackground
              style={{  width: moderateScale(28),
                height: moderateScale(28),
                alignItems:"center",
                justifyContent:"center"
              }}
              source={images.heart}
              resizeMode="contain"
            >
              <CustomText
                  label="4"
                  size={11}
                  color={ theme.colors.white}
                />
              </ImageBackground>
            
            </TouchableOpacity>
          <TouchableOpacity
          activeOpacity={0.4}
          onPress={()=>router.push("/settings")}
            style={{
              width: moderateScale(32),
              height: moderateScale(32),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ width: "100%", height: "100%",tintColor:theme.colors.text }}
              source={images.setting}
              resizeMode="contain"
            />
          </TouchableOpacity>
          </View>

        </View>
      );
    };
  
    return (
      <>
        <SafeAreaView
      edges={["top"]}
       style={{ 
        flex: 1, 
        backgroundColor:theme.colors.background,
        paddingTop: verticalScale(5),
        paddingHorizontal: moderateScale(20),
        // gap:verticalScale(30)
        }}>
           <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom:verticalScale(30)}}
          >
            <View
             style={{ 
              flex: 1 ,
              gap:verticalScale(30),
              // backgroundColor:"red"
  
             }}
            >

       
          <Header />
          <View
          style={{...styles.box,
            backgroundColor:theme.colors.white,

          }}
          >

<View
            style={{
              ...appStyles.rowjustify,
              marginHorizontal: moderateScale(isiPad ? 60 :20),
            }}
          >
             <TouchableOpacity
              activeOpacity={0.5}
              onPress={()=>setIsQrCodeModal(true)}
              
               >
                <Image
                  style={{ width: moderateScale(60),
                    height: moderateScale(60),}}
                  source={images.qrcode}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            <View style={{ alignItems: "center", gap: verticalScale(10),}}>
            <View style={{position:"absolute",bottom:verticalScale(0),
            flexDirection:"row",
            alignItems:"center",
            backgroundColor:theme.colors.white,
            borderRadius:moderateScale(10),
          paddingHorizontal:horizontalScale(8),
          paddingVertical:verticalScale(4),
          gap:scale(5),
          elevation: 5,
          shadowColor: colors.white,
          shadowOffset: { width: 2, height: isiPad ? 4 : 2 },
          shadowOpacity: 0.5,
          shadowRadius: 2,
          zIndex:1

          }}>
             <Image
                  style={{ width: moderateScale(20), height:  moderateScale(20), borderRadius: 999 }}
                  source={images.prodigy}
                />
                 <CustomText
                fontFam={fonts.medium}
                fontWeight="600"
                label="1140"
                size={12}
                color={"#EA9CDB"}
              />

            </View>
              <View style={styles.profileImg}>
                <Image
                  style={{ width: "90%", height: "90%", borderRadius: 999 }}
                  source={images.user3}
                />
              </View>
            </View>
  
  <TouchableOpacity
  activeOpacity={0.5}
  onPress={()=>router.push("/membership")}
  >
    <Image
                  style={{ width: moderateScale(60),
                    height: moderateScale(60),}}
                  source={images.roosevelt}
                  resizeMode="contain"
                />

  </TouchableOpacity>
            
          </View>
          <View style={{alignItems:"center"}}>
          <View
            style={{
              ...appStyles.row,
              gap: moderateScale(5),
              alignSelf: "center",
            }}
          >
           
            <CustomText
              fontFam={fonts.medium}
              fontWeight="600"
              label="Von Doe"
              size={25}
              color={"#454D51"}
            />
            <View style={{width:moderateScale(17),height:moderateScale(17),borderRadius:999,backgroundColor:theme.colors.green,marginBottom:verticalScale(5)}}/>
            
          </View>

           <CustomText
              fontFam={fonts.medium}
              fontWeight="600"
              label="Prodigy"
              size={15}
              color={"#EA9CDB"}
            />

          </View>
  
         
  
          <View
            style={{
              ...appStyles.rowjustify,
              // gap: moderateScale(70),
              // alignSelf: "center",
              paddingVertical: verticalScale(15),
              backgroundColor:theme.colors.blue,
              marginHorizontal:scale(5),
              paddingHorizontal:moderateScale(20),
              borderRadius:moderateScale(20)
            }}
          >
            <View style={{ alignItems: "center", gap: verticalScale(5) }}>
              <CustomText
                label="38"
                size={24}
                fontFam={fonts.medium}
                fontWeight="500"
                color={theme.colors.text}
              />
              <CustomText 
              label="Friends" 
              size={13}
              color={theme.colors.text}/>
            </View>
            <View
            style={{width:scale(1),height:"70%",backgroundColor:theme.colors.text+"40"}}
            />
  
  <View style={{ alignItems: "center", gap: verticalScale(5) }}>
              <CustomText
                label="1,342"
                size={24}
                fontFam={fonts.medium}
                fontWeight="500"
                color={theme.colors.text}
              />
              <CustomText 
              label="Overall ELO" 
              size={13}
              color={theme.colors.text}/>
            </View>
          </View>

          </View>

          <View
                    style={{
                      ...styles.box,
                      backgroundColor: theme.colors.white,
                      width:"100%",
                      borderWidth:1.2,
                      borderRadius:moderateScale(18),
                      borderColor: theme.colors.text,
                      flexDirection:"row",
                      justifyContent:"space-between"


                    }}
                  >
                    <View style={{...appStyles.row,gap:scale(10)}}>
                    <Image
              style={{ width: moderateScale(25), height: moderateScale(25),}}
              source={images.battle}
              resizeMode="contain"
            />
                    <CustomText 
              label="Free Plan" 
              size={17}
              color={theme.colors.text_Black}/>

                    </View>

                    <Image
              style={{ width: moderateScale(25), height: moderateScale(25),tintColor:theme.colors.text_Black}}
              source={images.next_arrow}
              resizeMode="contain"
            />
                    </View>
         
      
         

              <View 
              style={{
                 backgroundColor:theme.colors.white,
            borderRadius:moderateScale(20),
            padding:moderateScale(15),
            gap:verticalScale(15)
              }}
              >

              <View
                style={{
                  ...appStyles.row,
                  gap: horizontalScale(30),
                  borderBottomWidth:verticalScale(0.3),
                  borderBottomColor:"#EEEFF2",}}
              >
                {tab.map((item, index) => {
                  return (
                    <View style={{width:"45%",
                            paddingBottom:verticalScale(4)

                    }}>
                        <TouchableOpacity
                      key={index}
                      activeOpacity={0.5}
                      onPress={() => setSelected(item.title)}
                      style={
                        isiPad
                          ? {
                              ...styles.isPadTabContainer,
                              
                            }
                          : {
                              ...styles.tabContainer,
                            }
                      }
                    >
                      <Image
              style={{ width: moderateScale(19), height: moderateScale(19),tintColor:theme.colors.text }}
              source={item.icon}
              resizeMode="contain"
            />
                      <CustomText
                        fontFam={selectedTab == item.title ? fonts.medium : fonts.regular}
                        fontWeight={selectedTab == item?.title ? "600" : "500"}
                        label={item.title}
                        size={16}
                        color={selectedTab == item.title ? theme.colors.text : "#8F8F8F"}
                      />


                    </TouchableOpacity>
                    {
                      selectedTab == item?.title&&(
                        <View style={{width:"100%",position:"absolute",backgroundColor:"#51B5FD",height:verticalScale(1),bottom:0}}/>


                      )
                    }

                      
                      </View>
                  
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
                    ...appStyles.rowjustify,
                  }}
                >
                 <View
                      style={{ ...styles.satContainer,
                        backgroundColor: theme.colors.black_Shade,

                      }}
                    >
                      <Image
                        style={{ width: "60%", height: "60%",tintColor:theme.colors.text }}
                        source={images.sat_profile}
                        resizeMode="contain"
                      />
                    </View>
                 
                  <View
                    style={{
                      ...styles.satContainer,
                      backgroundColor: theme.colors.black_Shade,

                    }}
                  >
                    <Image
                        style={{ width: "60%", height: "60%",tintColor:theme.colors.text }}
                        source={images.act_profile}
                        resizeMode="contain"

                    />
                  </View>
                </View>
                  
                 )
              }

              </View>

             
              <View style={{gap:verticalScale(10)}}>
              <CustomText
                fontFam={fonts.medium}
                fontWeight="600"
                label={`Rankings(${rankingData.length})`}
                size={17}
                color={theme.colors.text}
              />
              <View
          style={{...styles.box,
            backgroundColor:theme.colors.white}}>
            
              <View
                style={{
                  ...appStyles.row,
                  gap: moderateScale(20),
                }}
              >
                {rankingData.map((item:any, index:any) => {
                  return (
                    <View style={{ alignItems: "center"}}>
                      <View
                      style={{...styles.rankingBadContainer,
                        backgroundColor: theme.colors.black_Shade,

                      }}
                      
                      >
                        <Image
                          style={{
                            width: moderateScale(40),
                            height: moderateScale(40),
                          }}
                          source={item?.image}
                          resizeMode="contain"
                        />
                         <View
                            style={{
                              position: "absolute",
                              alignItems: "center",
                              justifyContent: "center",
                              // height: "100%",
                              // right: moderateScale(13),
                              bottom:0,
                              backgroundColor:theme.colors.primary,
                              paddingHorizontal:moderateScale(10),
                              paddingVertical:verticalScale(4),
                              borderRadius:999
                            }}
                          >
                            <CustomText
                              fontFam={fonts.medium}
                              fontWeight="600"
                              label={item.id}
                              size={10}
                              color={theme.colors.white}
                            />
                          </View>
                      </View>
                     
                      <CustomText
                        fontFam={fonts.medium}
                        fontWeight="600"
                        label={item.sat}
                        style={{ marginVertical: verticalScale(2) }}
                        size={12}
                        color={theme.colors.text}
                        />
                      <CustomText
                        fontFam={fonts.medium}
                        fontWeight="600"
                        label={item.name}
                        size={12}
                        color={theme.colors.text}
                        />
                    </View>
                  );
                })}
              </View>
          </View>

              </View>


              <View style={{gap:verticalScale(10)}}>

              <View style={{...appStyles.rowjustify,gap:moderateScale(20)}}>
              <CustomText
                fontFam={fonts.medium}
                fontWeight="600"
                label={`Badges (${BadgesData.length})`}
                size={17}
                // style={{ marginBottom: verticalScale(10) }}
                color={theme.colors.text}
              />
              <TouchableOpacity
              onPress={()=>router.push("/chestRewards")}
              >

              <CustomText
                label={"See collection"}
                size={18}
                color={theme.colors.text}
              />

              </TouchableOpacity>

  
              </View>
              <View
                 style={{...styles.box,
                  backgroundColor:theme.colors.white}}
              >

  
             
              <View
                style={{
                  ...appStyles.row,
                  gap: moderateScale(20),
                }}
              >
                {BadgesData.map((item:any, index:any) => {
                  return (
                    <View style={{ alignItems: "center" }}>
                      <View
                        style={{...styles.rankingBadContainer,
                          backgroundColor: theme.colors.black_Shade,
  
                        }}
                      >
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

              </View>



</View>      
<View style={{gap:verticalScale(10)}}>

<CustomText
                fontFam={fonts.medium}
                fontWeight="600"
                label={`Friends  (${friendData.length})`}
                size={17}
                color={theme.colors.text}
              />
              <ScrollView 
              style={{...styles.box,
                backgroundColor:theme.colors.white}}
                contentContainerStyle={{paddingRight:scale(30)}}
              horizontal showsHorizontalScrollIndicator={false}>
                <View
                  style={{
                    ...appStyles.row,
                    gap: moderateScale(15),
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
                              width: moderateScale(17),
                              height: moderateScale(17),
                              backgroundColor: item?.onlineColor,
                              borderRadius: moderateScale(15),
                              position: "absolute",
                              bottom: verticalScale(1),
                              borderWidth:2,
                              borderColor:theme.colors.white,
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
  
             
        </View>

        </ScrollView>

      </SafeAreaView>
      <QrCodeModal
      modalVisible={isQrCodeModal}
      setModalVisible={setIsQrCodeModal}
      />
       <LivePopupModal
      modalVisible={isLivePopupModal}
      setModalVisible={setIsLivePopupModal}
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
      alignItems:"flex-start",
      flexDirection:"row",
      gap:scale(10)
      // justifyContent: "center",
    },
    tabContainer: {
      // paddingHorizontal: horizontalScale(20),
      paddingVertical: verticalScale(6),
      borderRadius: moderateScale(10),
      alignItems:"flex-start",
      flexDirection:"row",
      gap:scale(10)
    },
  
    satContainer: {
      height: moderateScale(90),
      width: "47%",
      borderRadius: moderateScale(20),
     
      alignItems: "center",
      justifyContent: "center",
    },
    box:{
      borderRadius:moderateScale(20),
      padding:moderateScale(15),
      gap:verticalScale(15)
    },
    rankingBadContainer:{
      width:moderateScale(60),
      height:moderateScale(60),
      alignItems:"center",
      justifyContent:"center",
      borderRadius:999,
      marginBottom:verticalScale(7),
    }
  });
  