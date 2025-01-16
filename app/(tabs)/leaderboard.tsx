import {
  FlatList,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CreateUserCard from "@/components/Create/CreateUserCard";
import { verticalScale, horizontalScale, moderateScale } from "@/utils/Mertics";
import images from "@/constants/images";
import CustomText from "@/components/CustomText";
import { isiPad } from "@/utils/CommonFun";
import { windowWidth, windowHeight } from "@/utils/Dimensions";
import { createUserData } from "@/utils/Data";
import CreateUserRakingCard from "@/components/Create/CreateUserRakingCard";
import { useTheme } from "@/Theme/ThemeProvider";
import { fonts } from "@/utils/fonts";
import { appStyles } from "@/utils/appStyles";
import { router } from "expo-router";
const leaderboard = ({ navigation }: any) => {
  const [seletedLeaderboard, setSeletedLeaderboard] = useState(1);
  const [selectedLeaderBoardUser, setSelectedLeaderBoardUser] = useState(4);
  const { theme }: any = useTheme();

  const leaderBoardData = [
    { name: "Country", img: images.ukFlagCircle },
    { name: "High School", img: images.roosevelt },

    { name: "State", img: images.sashBadge },
  ];

  const Header = ({ label }: any) => {
    const { theme }: any = useTheme();

    return (
      <>
        <View
          style={{
            ...appStyles.rowjustify,
            paddingHorizontal: moderateScale(20),
            paddingTop: verticalScale(Platform.OS=="ios"?5: 20),

          }}
        >
          <View style={{ ...appStyles.row, gap: horizontalScale(10) }}>
            <Image
              style={{ width: moderateScale(25), height: moderateScale(25) }}
              source={images.ranking}
              resizeMode="contain"
            />

            <CustomText
              label={"Leaderboards"}
              size={20}
              fontFam={fonts.medium}
              fontWeight="600"
              color={theme.colors.text}
            />
          </View>
          <View style={{ ...appStyles.row, gap: horizontalScale(13) }}>
            <TouchableOpacity
            onPress={()=>router.push("/profile")}>
               <Image
              style={{ width: moderateScale(30), height: moderateScale(30) }}
              source={images.user1}
              resizeMode="contain"
            />
            </TouchableOpacity>
            <View>
              <Image
                style={{
                  width: moderateScale(30),
                  height: moderateScale(30),
                  tintColor: theme.colors.text,
                }}
                source={images.notification}
                resizeMode="contain"
              />
              <View
                style={{
                  width: moderateScale(19),
                  height: moderateScale(19),
                  backgroundColor: theme.colors.red,
                  borderRadius: moderateScale(999),
                  borderWidth: moderateScale(2),
                  borderColor: theme.colors.text,
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  top: verticalScale(-1),
                  right: moderateScale(-2),
                }}
              >
                <CustomText label={"4"} size={9} color={theme.colors.white} />
              </View>
            </View>
          </View>
        </View>
      </>
    );
  };
  const renderFindFriendsList = ({ item, index }: any) => {
    return (
      <>
        <View>
          <CreateUserCard
            index={index}
            selectedLeaderBoardUser={selectedLeaderBoardUser}
            setSelectedLeaderBoardUser={setSelectedLeaderBoardUser}
            item={item}
          />
        </View>
      </>
    );
  };

  return (
    <>
      <SafeAreaView
        edges={["top"]}
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
          // gap:verticalScale(30)
        }}
      >
        <ScrollView
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 0,
            width: "100%",
            gap: verticalScale(20),
            
          }}
        >
          <Header />
          <View
            style={{
              flexDirection: "row",
              gap: moderateScale(30),
              justifyContent: "space-between",
              borderBottomWidth: 1,
              borderBottomColor: "white",
              marginHorizontal: moderateScale(20),

            }}
          >
            {leaderBoardData.map((item, index) => {
              return (
                <View
                  key={index.toString()}
                  style={{
                    alignItems: "center",
                    paddingBottom: verticalScale(12),
                  }}
                >
                  <TouchableOpacity
                    key={index.toString()}
                    onPress={() => {
                      setSeletedLeaderboard(index);
                    }}
                    style={{
                      alignItems: "center",
                      flexDirection: "row",
                      gap: horizontalScale(5),
                    }}
                  >
                    <View
                      style={{
                        width: moderateScale(20),
                        height: moderateScale(20),
                        alignSelf: "center",
                      }}
                    >
                      <Image
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                        resizeMode="contain"
                        source={item.img}
                      />
                    </View>

                    <CustomText
                      label={item?.name}
                      fontWeight={seletedLeaderboard == index ? "600" : "500"}
                      fontFam={
                        seletedLeaderboard == index
                          ? fonts.medium
                          : fonts.regular
                      }
                      style={{ textAlign: "center" }}
                      size={14}
                      color={theme.colors.text}
                    />
                  </TouchableOpacity>

                  {seletedLeaderboard == index && (
                    <View
                      style={{
                        width: "100%",
                        position: "absolute",
                        backgroundColor: "#51B5FD",
                        alignSelf: "center",
                        height: verticalScale(1),
                        bottom: verticalScale(-1),
                      }}
                    />
                  )}
                </View>
              );
            })}
          </View>

          <View style={{ width: windowWidth, height: windowHeight }}>
            {/* <View
              style={{
                width: "95%",
                height: 1.5,
                backgroundColor: "#E4E4E4",
                alignSelf: "center",
              }}
            /> */}
            <View style={{ marginTop: verticalScale(40) }}>
              <View
                style={{
                  marginHorizontal: moderateScale(20),
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    marginRight: moderateScale(-4),
                    height: verticalScale(300),
                    alignItems: "center",
                  }}
                >
                  <CreateUserRakingCard
                    name="Clare Rich"
                    points="1,469 ELO"
                    image={images.user18}
                    madel={images.medal}
                    rightImage={images.athletics}
                  />
                  <Image
                    style={{
                      width: moderateScale(100),
                      height: verticalScale(isiPad ? 190 : 180),
                    }}
                    source={images.rank2}
                  />
                </View>
                <View
                  style={{
                    marginBottom: verticalScale(50),
                    height: verticalScale(300),
                    alignItems: "center",
                  }}>
                  <CreateUserRakingCard
                    name="Jon Garcia"
                    points="2,569 ELO"
                    image={images.user19}
                    rightImage={images.highSchoolMedal}
                    madel={images.medal}
                  />
                  <Image
                    style={{
                      width: moderateScale(125),
                      height: verticalScale(isiPad ? 190 : 200),
                      marginHorizontal: moderateScale(-19),
                    }}
                    source={images.rank1}
                    resizeMode="contain"
                  />
                </View>
                <View
                  style={{
                    marginTop: verticalScale(50),
                    height: verticalScale(300),
                    alignItems: "center",
                  }}
                >
                  <CreateUserRakingCard
                    name="Craig Gouse"
                    points="1,053 ELO"
                    image={images.user20}
                    madel={images.medal}
                    rightImage={images.roosevelt}
                  />
                  <Image
                    style={{
                      width: moderateScale(100),
                      height: verticalScale(isiPad ? 190 : 180),
                    }}
                    source={images.rank3}
                  />
                </View>
              </View>
              <View
                style={{
                  position: "absolute",
                  top: verticalScale(isiPad ? 290 : 280),
                }}
              >
                <FlatList
                  data={createUserData}
                  style={{
                    // paddingTop: verticalScale(isiPad ? 30 : 20),
                    // marginTop: verticalScale(isiPad ? 30 : 20),
                    backgroundColor:  theme.colors.background,
                  }}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(item, index) => index.toString()}
                  contentContainerStyle={{
                    marginHorizontal: moderateScale(20),
                    gap:verticalScale(5)
                  }}
                  renderItem={renderFindFriendsList}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default leaderboard;

const styles = StyleSheet.create({});
