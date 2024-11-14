import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, ScrollView, Animated, FlatList, Platform, Image, StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import GradientLayout from "@/components/GradientLayout";
import { colors } from "../../utils/colors";
import CustomText from "@/components/CustomText";
import { deviceType, DeviceType } from "expo-device";
import images from "@/constants/images";
import FriendContainer from "@/components/Friends/FriendContainer";
import GroupPartiesContainer from "@/components/Friends/GroupPartiesContainer";
import RequestChallengeContainer from "@/components/Friends/RequestChallengeContainer";
import CustomSearch from "../../components/CustomSearch";
import FindFriendsContainer from "../../components/Friends/FindFriendsContainer";
import { FindFriends, groupParties, onlineFriends } from "../../utils/Data";


import New_FriendContainer from "@/components/New Friends Components/New_FriendContainer";
import New_GroupPartiesContainer from "@/components/New Friends Components/New_GroupPartiesContainer";
import New_RequestChallengeContainer from "@/components/New Friends Components/New_RequestChallengeContainer";
import New_CustomSearch from "../../components/New Friends Components/New_Custom_Search";

const Friends = ({ navigation }: any) => {
  const isTablet = deviceType === DeviceType.TABLET;
  const [selectedTab, setSelected] = useState("All");
  const scrollY = useRef(new Animated.Value(0)).current;

  const renderFindFriendsList = ({ item, index }: any) => {
    return <FindFriendsContainer item={item} />;
  };

  return (
    <GradientLayout>
      <View className="flex-1 pl-[20px]">
        <View className="flex-row gap-[10px] my-[20px] pt-[10px]">
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setSelected("All")}
            className={`px-[15px] py-[5px] rounded-[10px] flex items-center justify-center ${selectedTab === "All" ? "bg-[#51B5FD]" : ""}`}
          >
            <CustomText
              fontFam="ClashDisplayMedium"
              fontWeight="600"
              label="All"
              size={16}
              color={selectedTab === "All" ? colors.white : colors.black}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setSelected("Find Friends")}
            className={`px-[15px] py-[5px] rounded-[10px] flex items-center justify-center ${selectedTab === "Find Friends" ? "bg-[#51B5FD]" : ""}`}
          >
            <CustomText
              fontFam="ClashDisplayMedium"
              fontWeight="600"
              label="Find Friends"
              size={16}
              color={selectedTab === "Find Friends" ? colors.white : colors.black}
            />
          </TouchableOpacity>
        </View>

        <View className="flex-1 bg-white rounded-tl-[25px] px-[15px] relative">
          {selectedTab === "All" && (
            <>
              <Animated.View className="absolute top-[-60px] right-0 w-[170px] h-[170px] z-10 overflow-hidden">
                <Animated.Image
                  resizeMode="contain"
                  style={styles.animatedImage(scrollY)}
                  source={images.brainWizard}
                />
              </Animated.View>

              <ScrollView
                showsVerticalScrollIndicator={false}
                onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                  { useNativeDriver: false }
                )}
              >
                <View className="pt-[20px]">
                  <CustomText
                    fontFam="ClashDisplayMedium"
                    fontWeight="600"
                    label="Online (2)"
                    size={18}
                    style={styles.sectionTitle}
                    color={colors.gray}
                  />
                  {onlineFriends.map((item, index) => (
                    <New_FriendContainer key={index} item={item} />
                  ))}
                </View>

                <View className="pt-[20px]">
                  <CustomText
                    fontFam="ClashDisplayMedium"
                    fontWeight="600"
                    label="Group Parties"
                    size={18}
                    style={styles.sectionTitle}
                    color={colors.gray}
                  />
                  {groupParties.map((item, index) => (
                    <New_GroupPartiesContainer key={index} item={item} />
                  ))}
                </View>

                <View className="pt-[20px]">
                  <CustomText
                    fontFam="ClashDisplayMedium"
                    fontWeight="600"
                    label="Request Challenge"
                    size={18}
                    style={styles.sectionTitle}
                    color={colors.gray}
                  />
                  <New_RequestChallengeContainer />
                </View>
              </ScrollView>
            </>
          )}

          {selectedTab === "Find Friends" && (
            <View className="flex-1 px-[20px] pt-[15px]">
              <New_CustomSearch placeholder="Search" />
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
    </GradientLayout>
  );
};

export default Friends;

const styles = StyleSheet.create({
  sectionTitle: {
    marginBottom: verticalScale(15),
  },
  findFriendsList: {
    gap: 10,
  },
  animatedImage: (scrollY: Animated.Value) => ({
    width: "100%",
    height: "100%",
    transform: [
      {
        translateY: scrollY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, -150],
          extrapolate: "clamp",
        }),
      },
    ],
  }),
});
