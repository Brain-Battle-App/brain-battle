// Move the current leaderboard.tsx content here
// This becomes the main screen for the leaderboard tab
import {
  FlatList,
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import React from 'react';
import { appStyles } from '@/utils/appStyles';
import { colors } from '@/utils/colors';
import { horizontalScale, moderateScale, verticalScale } from '@/utils/Mertics';
import images from '@/constants/images';
import icons from '@/constants/icons';
import Header from '@/components/Header';
import CustomText from '@/components/CustomText';
import { useRef, useState } from 'react';
import CustomButton from '@/components/CustomButton';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { isiPad } from '@/utils/CommonFun';
import { windowHeight, windowWidth } from '@/utils/Dimensions';
import { FindFriends, createUserData } from '@/utils/Data';
import FindFriendsContainer from '@/components/Friends/FindFriendsContainer';
import LeaderBoadUserCard from '@/components/Leaderboard/LeaderBoardUserCard';
import CountryDropDown from '@/components/CountryDropDown';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import LeaderboardUserRakingCard from '@/components/Leaderboard/LeaderBoardUserRakingCard';

const Leaderboard = ({ navigation }: any) => {
  const [seletedLeaderboard, setSeletedLeaderboard] = useState(1);
  const [selectedRanking, setSelectedRanking] = useState('Country Rankings');
  const [selectedLeaderBoardUser, setSelectedLeaderBoardUser] = useState(2);
  const swiperRef = useRef<any>(null);
  const [regionalRanking, setRegionalRanking] = useState('St. Louis');
  const [countryRanking, setCountryRanking] = useState('USA');
  const [highSchoolRanking, setHighSchoolRanking] = useState('Roosevelt HS');

  const [selectedCountry, setSelectedCountry] = useState({
    name: 'United States',
    image: images.unitedStates,
  });
  const [isCountryDropDown, setIsCountryDropDown] = useState(false);

  const rankingData = [
    {
      dayButtonColor: colors.blue200,
      isMapRanking: true,
      map: images.blueMap,
      rankingBackground: images.rankBack,
      ranking: 'Country Rankings',
    },
    {
      dayButtonColor: colors.purple100,
      isMapRanking: true,
      map: images.map2,
      rankingBackground: images.rank2Back,
      ranking: 'Regional Rankings',
    },
    {
      dayButtonColor: '#FF4F4F70',
      isMapRanking: false,
      rankingBackground: images.rank3Back,
      ranking: 'High School Rankings',
    },
  ];

  const renderFindFriendsList = ({ item, index }: any) => {
    return (
      <>
        <View>
          <LeaderBoadUserCard
            index={index}
            selectedLeaderBoardUser={selectedLeaderBoardUser}
            setSelectedLeaderBoardUser={setSelectedLeaderBoardUser}
            item={item}
          />
        </View>
      </>
    );
  };

  // Function to handle index change on swipe
  const handleIndexChange = ({ item, index }: any) => {
    setSeletedLeaderboard(index + 1);
  };
  return (
    <SafeAreaView className='flex-1 justify-start items-center w-full'>
      <Header />
      <View
        style={{
          backgroundColor: colors.white,
          alignItems: 'center',
          flex: 1,
        }}
      >
        <ScrollView
          scrollEnabled={isCountryDropDown == false}
          contentContainerStyle={{
            paddingBottom: 0,
            width: '100%',
            paddingTop: verticalScale(
              isiPad ? 40 : Platform.OS == 'ios' ? 60 : 10
            ),
          }}
        >
          <View
            style={{
              ...appStyles.row,
              width: '100%',
              justifyContent: 'space-between',
              paddingHorizontal: '15%',
            }}
          >
            <Pressable
              style={{
                width: moderateScale(40),
                height: moderateScale(40),
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                style={{ width: moderateScale(20), height: moderateScale(20) }}
                source={icons.back}
              />
            </Pressable>
            <View style={{ ...appStyles.row, marginLeft: moderateScale(20) }}>
              <View
                style={{
                  gap: verticalScale(5),
                  width:
                    seletedLeaderboard == 1
                      ? '55%'
                      : seletedLeaderboard == 2
                        ? '65%'
                        : '55%',
                  flexWrap: 'wrap',
                  // backgroundColor: "red",
                  marginRight: moderateScale(10),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <View
                  style={{
                    ...appStyles.row,
                    gap: moderateScale(5),
                    width: '90%',
                    alignSelf: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CustomText
                    fontFam={'ClashDisplay-Semibold'}
                    label={
                      seletedLeaderboard == 1
                        ? countryRanking
                        : seletedLeaderboard == 2
                          ? regionalRanking
                          : highSchoolRanking
                    }
                    size={18}
                    fontWeight='700'
                    color={colors.black}
                  />
                  {seletedLeaderboard != 3 && (
                    <CustomText
                      // fontFam={"ClashDisplay-Medium"}
                      // fontWeight="600"
                      label='- SAT/ACT'
                      size={18}
                      color={colors.black}
                    />
                  )}
                </View>

                {seletedLeaderboard == 3 && (
                  <CustomText
                    fontFam={'ClashDisplay-Medium'}
                    fontWeight='600'
                    label='SAT/ACT'
                    size={18}
                    color={colors.black}
                  />
                )}
                <CustomText
                  fontFam={'ClashDisplay-Medium'}
                  fontWeight='600'
                  label='Leaderboard'
                  size={18}
                  color={colors.black}
                />
              </View>
              <Pressable
                style={{ ...appStyles.row, gap: moderateScale(10) }}
                disabled={seletedLeaderboard != 1}
                onPress={() => setIsCountryDropDown(!isCountryDropDown)}
              >
                <View
                  style={{
                    width:
                      seletedLeaderboard != 2
                        ? moderateScale(50)
                        : moderateScale(10),
                    height: moderateScale(50),
                  }}
                >
                  {seletedLeaderboard != 2 && (
                    <Image
                      style={{
                        width: moderateScale(50),
                        height: moderateScale(50),
                      }}
                      source={
                        seletedLeaderboard == 1
                          ? selectedCountry.image
                          : images.roosevelt
                      }
                    />
                  )}
                </View>

                <Image
                  resizeMode='contain'
                  style={{
                    width: moderateScale(20),
                    height: moderateScale(20),
                  }}
                  source={icons.dropdown}
                />
              </Pressable>
            </View>
          </View>
          <View
            style={{
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              gap: moderateScale(10),
              marginVertical: verticalScale(15),
            }}
          >
            <Pressable
              onPress={() => {
                swiperRef.current.scrollToIndex({ index: 1 - 1 });
                setSeletedLeaderboard(1);
              }}
              style={{
                width:
                  seletedLeaderboard == 1
                    ? moderateScale(16)
                    : moderateScale(14),
                height:
                  seletedLeaderboard == 1
                    ? moderateScale(16)
                    : moderateScale(14),
                borderRadius:
                  seletedLeaderboard == 1
                    ? moderateScale(16)
                    : moderateScale(14),
                backgroundColor:
                  seletedLeaderboard == 1 ? colors.blue100 : colors.gray100,
              }}
            />
            <Pressable
              onPress={() => {
                swiperRef.current.scrollToIndex({ index: 2 - 1 });
                setSeletedLeaderboard(2);
              }}
              style={{
                width:
                  seletedLeaderboard == 2
                    ? moderateScale(16)
                    : moderateScale(14),
                height:
                  seletedLeaderboard == 2
                    ? moderateScale(16)
                    : moderateScale(14),
                borderRadius:
                  seletedLeaderboard == 2
                    ? moderateScale(16)
                    : moderateScale(14),
                backgroundColor:
                  seletedLeaderboard == 2 ? colors.purple100 : colors.gray100,
              }}
            />

            <Pressable
              onPress={() => {
                swiperRef.current.scrollToIndex({ index: 3 - 1 });
                setSeletedLeaderboard(3);
              }}
              style={{
                width:
                  seletedLeaderboard == 3
                    ? moderateScale(16)
                    : moderateScale(14),
                height:
                  seletedLeaderboard == 3
                    ? moderateScale(16)
                    : moderateScale(14),
                borderRadius:
                  seletedLeaderboard == 3
                    ? moderateScale(16)
                    : moderateScale(14),
                backgroundColor:
                  seletedLeaderboard == 3 ? colors.red100 : colors.gray100,
              }}
            />
          </View>
          <SwiperFlatList
            ref={swiperRef}
            index={seletedLeaderboard}
            data={rankingData}
            onChangeIndex={handleIndexChange} // Callback when index changes
            renderItem={({ item, index }) => {
              return (
                <>
                  <View style={{ width: windowWidth, height: windowHeight }}>
                    <View
                      style={{
                        width: '70%',
                        alignSelf: 'center',
                        flexDirection: 'row',
                        alignItems: 'center',
                        alignContent: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <CustomButton
                        bgColor={item.dayButtonColor}
                        fontFamily={'ClashDisplay-Medium'}
                        textStyles={`font-semibold ${colors.black} bg-[${item.dayButtonColor}]`}
                        containerStyles={`${item.dayButtonColor} w-[40%]`}
                        title='Weekly'
                        handlePress={() => console.log('Weekly')}
                      />

                      <CustomButton
                        title='All Time'
                        bgColor={colors.white}
                        textStyles='#B9B4E4'
                        containerStyles={`w-[48%] bg-${colors.white}`}
                        handlePress={() => console.log('All Time')}
                      />
                    </View>

                    {item.isMapRanking && (
                      <View
                        style={{
                          width: '80%',
                          borderRadius: moderateScale(15),
                          backgroundColor: '#80BAFF15',
                          flexDirection: 'row',
                          alignItems: 'center',
                          padding: moderateScale(20),
                          alignSelf: 'center',
                          marginTop: verticalScale(20),

                          justifyContent: 'space-between',
                        }}
                      >
                        <View style={{ width: '60%' }}>
                          <CustomText
                            fontFam={'ClashDisplay-Medium'}
                            fontWeight='600'
                            lineHeight={isiPad ? 40 : 22}
                            label='You are the 890th ranked player in the USA!'
                            size={18}
                            color={colors.black}
                          />
                        </View>

                        <Image
                          style={{
                            width: moderateScale(110),
                            height: moderateScale(80),
                          }}
                          source={item?.map}
                          resizeMode='contain'
                        />
                      </View>
                    )}

                    <View style={{ marginTop: verticalScale(40) }}>
                      <View
                        style={{
                          marginHorizontal: moderateScale(20),
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <View
                          style={{
                            marginRight: moderateScale(-4),
                            height: verticalScale(300),
                            alignItems: 'center',
                          }}
                        >
                          <LeaderboardUserRakingCard
                            name='Clare Rich'
                            points='1,469 ELO'
                            image={images.user18}
                            // madel={images.medal}
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
                            alignItems: 'center',
                          }}
                        >
                          <LeaderboardUserRakingCard
                            name='Jon Garcia'
                            points='2,569 ELO'
                            image={images.user19}
                            rightImage={images.highSchoolMedal}
                            madel={images.medal}
                          />
                          <Image
                            style={{
                              width: moderateScale(120),
                              height: verticalScale(isiPad ? 190 : 200),
                              marginHorizontal: moderateScale(-19),
                            }}
                            source={images.rank1}
                            resizeMode='contain'
                          />
                        </View>
                        <View
                          style={{
                            marginTop: verticalScale(50),
                            height: verticalScale(300),
                            alignItems: 'center',
                          }}
                        >
                          <LeaderboardUserRakingCard
                            name='Craig Gouse'
                            points='1,053 ELO'
                            image={images.user20}
                            // madel={images.medal}
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
                          position: 'absolute',
                          top: verticalScale(isiPad ? 290 : 260),
                        }}
                      >
                        <ImageBackground
                          resizeMode='cover'
                          style={{
                            width: windowWidth,
                            height: windowHeight,
                            paddingTop: verticalScale(10),
                          }}
                          source={item.rankingBackground}
                        >
                          <FlatList
                            data={createUserData}
                            style={{
                              paddingTop: verticalScale(isiPad ? 30 : 20),
                              marginTop: verticalScale(isiPad ? 30 : 20),
                            }}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item, index) => index.toString()}
                            contentContainerStyle={{
                              marginHorizontal: moderateScale(20),
                            }}
                            renderItem={renderFindFriendsList}
                          />
                        </ImageBackground>
                      </View>
                    </View>
                  </View>
                </>
              );
            }}
          />
        </ScrollView>
      </View>
      {isCountryDropDown && (
        <CountryDropDown
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
      )}
    </SafeAreaView>
  );
};
export default Leaderboard;

const styles = StyleSheet.create({});
