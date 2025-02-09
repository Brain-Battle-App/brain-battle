import React, { useState, useRef } from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  Animated,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { colors } from '@/utils/colors';
import CustomText from '@/components/CustomText';
import { deviceType, DeviceType } from 'expo-device';
import FindFriendsContainer from '@/components/Friends/FindFriendsContainer';
import Header from '@/components/Header';
import { FindFriends, groupParties, onlineFriends } from '@/utils/Data';
import New_FriendContainer from '@/components/New Friends Components/New_FriendContainer';
import New_GroupPartiesContainer from '@/components/New Friends Components/New_GroupPartiesContainer';
import New_RequestChallengeContainer from '@/components/New Friends Components/New_RequestChallengeContainer';
import New_CustomSearch from '@/components/New Friends Components/New_Custom_Search';

const Friends = ({ navigation }: any) => {
  const isTablet = deviceType === DeviceType.TABLET;
  const [selectedTab, setSelected] = useState('All');
  const scrollY = useRef(new Animated.Value(0)).current;

  const renderFindFriendsList = ({ item, index }: any) => {
    return <FindFriendsContainer item={item} />;
  };

  return (
    <SafeAreaView className='flex-1 justify-start items-center w-full'>
      <Header />
      <View style={styles.container}>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setSelected('All')}
            style={[
              styles.tabButton,
              selectedTab === 'All' && styles.selectedTabButton,
            ]}
          >
            <CustomText
              fontFam='ClashDisplayMedium'
              fontWeight='600'
              label='All'
              size={16}
              color={selectedTab === 'All' ? colors.white : colors.black}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setSelected('Find Friends')}
            style={[
              styles.tabButton,
              selectedTab === 'Find Friends' && styles.selectedTabButton,
            ]}
          >
            <CustomText
              fontFam='ClashDisplayMedium'
              fontWeight='600'
              label='Find Friends'
              size={16}
              color={
                selectedTab === 'Find Friends' ? colors.white : colors.black
              }
            />
          </TouchableOpacity>
        </View>

        <View style={styles.contentContainer}>
          {selectedTab === 'All' && (
            <>
              <ScrollView>
                <View style={styles.section}>
                  <CustomText
                    fontFam='ClashDisplayMedium'
                    fontWeight='600'
                    label='Online (2)'
                    size={18}
                    style={styles.sectionTitle}
                    color={colors.gray}
                  />
                  {onlineFriends.map((item, index) => (
                    <New_FriendContainer key={index} item={item} />
                  ))}
                </View>

                <View style={styles.section}>
                  <CustomText
                    fontFam='ClashDisplayMedium'
                    fontWeight='600'
                    label='Group Parties'
                    size={18}
                    style={styles.sectionTitle}
                    color={colors.gray}
                  />
                  {groupParties.map((item, index) => (
                    <New_GroupPartiesContainer key={index} item={item} />
                  ))}
                </View>

                <View style={styles.section}>
                  <CustomText
                    fontFam='ClashDisplayMedium'
                    fontWeight='600'
                    label='Request Challenge'
                    size={18}
                    style={styles.sectionTitle}
                    color={colors.gray}
                  />
                  <New_RequestChallengeContainer />
                </View>
              </ScrollView>
            </>
          )}

          {selectedTab === 'Find Friends' && (
            <View style={styles.findFriendsContainer}>
              <New_CustomSearch placeholder='Search' />
              <FlatList
                data={FindFriends}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.findFriendsList}
                renderItem={renderFindFriendsList}
              />
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Friends;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: scale(20),
  },
  tabContainer: {
    flexDirection: 'row',
    gap: scale(10),
    marginVertical: verticalScale(20),
    paddingTop: verticalScale(10),
  },
  tabButton: {
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(5),
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedTabButton: {
    backgroundColor: '#51B5FD',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: moderateScale(25),
    paddingHorizontal: scale(15),
    position: 'relative',
  },
  section: {
    paddingTop: verticalScale(20),
  },
  sectionTitle: {
    marginBottom: verticalScale(15),
  },
  findFriendsContainer: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(15),
  },
  findFriendsList: {
    gap: moderateScale(10),
  },
});
