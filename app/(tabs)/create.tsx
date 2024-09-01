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
import CreateUserCard from "@/components/Create/CreateUserCard";
import { colors } from "@/utils/colors";
import { verticalScale,
    horizontalScale,
  moderateScale,
 } from "@/utils/Mertics";
import images from "@/constants/images";
import CustomText from "@/components/CustomText";
import { isiPad } from "@/utils/CommonFun";
import { windowWidth,windowHeight } from "@/utils/Dimensions";
import { createUserData } from "@/utils/Data";
import CreateUserRakingCard from "@/components/Create/CreateUserRakingCard";


const create = ({ navigation }: any) => {
  const [seletedLeaderboard, setSeletedLeaderboard] = useState(1);
  const [selectedLeaderBoardUser, setSelectedLeaderBoardUser] = useState(4);

 


  const leaderBoardData = [
    { name: "High School", img: images.roosevelt },
    { name: "Country", img: images.ukFlagCircle },
    { name: "State", img: images.map2 },
  ];


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
      <View
        style={{
          backgroundColor: colors.white,
          alignItems: "center",
          flex: 1,
        }}
      >
        <ScrollView
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 0,
            width: "100%",
            paddingTop: verticalScale(
              isiPad ? 40 : Platform.OS == "ios" ? 70 : 20
            ),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              gap: moderateScale(30),
              alignSelf: "center",
              marginVertical: verticalScale(15),
            }}
          >
            {leaderBoardData.map((item, index) => {
              return (
                <View
                  style={{
                    width: moderateScale(90),
                    height:
                      seletedLeaderboard == index
                        ? moderateScale(97)
                        : verticalScale(80),
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <TouchableOpacity
                    key={index.toString()}
                    onPress={() => {
                      setSeletedLeaderboard(index);
                    }}
                    style={{
                      width: moderateScale(80),
                      height: moderateScale(80),
                      alignItems: "center",
                      opacity: seletedLeaderboard == index ? 1 : 0.5,
                      marginTop:
                        seletedLeaderboard == index ? verticalScale(-20) : 0,
                    }}
                  >
                    <View
                      style={{
                        width:
                          seletedLeaderboard == index
                            ? moderateScale(80)
                            : moderateScale(50),
                        height:
                          seletedLeaderboard == index
                            ? moderateScale(80)
                            : moderateScale(50),
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
                  </TouchableOpacity>

                  <CustomText
                 
                    label={item?.name}
                    style={{ textAlign: "center" }}
                    size={14}
                    color={
                      seletedLeaderboard == index ? colors.black : "#676767"
                    }
                  />
                </View>
              );
            })}
          </View>

          <View style={{ width: windowWidth, height: windowHeight }}>
            <View
              style={{
                width: "95%",
                height: 1.5,
                backgroundColor: "#E4E4E4",
                alignSelf:"center"
                
              }}
            />
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
                  style={{width:moderateScale(100),height:verticalScale(isiPad ? 190 : 180)}}
                  source={images.rank2}
                  />

                </View>
                <View
                  style={{
                    marginBottom: verticalScale(50),
                    height: verticalScale(300),
                    alignItems: "center",
                  }}
                >
                  <CreateUserRakingCard
                    name="Jon Garcia"
                    points="2,569 ELO"
                    image={images.user19}
                    
                    rightImage={images.highSchoolMedal}
                    madel={images.medal}
                  />
                     <Image
                  style={{width:moderateScale(120),height:verticalScale(isiPad ? 190 : 200),marginHorizontal:moderateScale( -19)}}
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
                  style={{width:moderateScale(100),height:verticalScale(isiPad ? 190 : 180)}}
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
                    paddingTop: verticalScale(isiPad ? 30 : 20),
                    marginTop: verticalScale(isiPad ? 30 : 20),
                    backgroundColor: colors.white,
                  }}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(item, index) => index.toString()}
                  contentContainerStyle={{
                    marginHorizontal: moderateScale(10),
                  }}
                  renderItem={renderFindFriendsList}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
     
    </>
  );
};
export default create;

const styles = StyleSheet.create({});
