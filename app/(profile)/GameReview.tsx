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
import ViewQuestionsSheetModal from "@/components/Profile/ViewQuestionsSheetModal";

const GameReview = ({ navigation }: any) => {
  const [selectedTab, setSelected] = useState("Courses");
  const [isViewQuestionModal, setIsViewQuestionModal] = useState(false);
  const [isLivePopupModal, setIsLivePopupModal] = useState(false);

  const { theme }: any = useTheme();
  const reviews = [
    { name: "Algebra", time: "0:20s" },
    { name: "Algebra", time: "0:20s" },
    { name: "Algebra", time: "0:20s" },
    { name: "Algebra", time: "0:20s" },
    { name: "Algebra", time: "0:20s" },
    { name: "Algebra", time: "0:20s" },
    { name: "Algebra", time: "0:20s" },
    { name: "Algebra", time: "0:20s" },
    { name: "Algebra", time: "0:20s" },
    { name: "Algebra", time: "0:20s" },
    { name: "Algebra", time: "0:20s" },
    { name: "Algebra", time: "0:20s" },
    { name: "Algebra", time: "0:20s" },
    { name: "Algebra", time: "0:20s" },
    { name: "Algebra", time: "0:20s" },
    { name: "Algebra", time: "0:20s" },
    { name: "Algebra", time: "0:20s" },
    { name: "Algebra", time: "0:20s" },
  ];

  const Header = () => {
    return (
      <View style={{ ...appStyles.row, gap: scale(10) }}>
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
          label="SAT -English and Reading"
          size={20}
          color={theme.colors.text}
        />
      </View>
    );
  };

  const ProfileInfoContainer = ({
    points,
    pointsColor,
    pointIcon,
    label,
    labelColor,
  }: any) => {
    return (
      <View style={{ alignItems: "center", gap: verticalScale(10) }}>
        <View
          style={{
            position: "absolute",
            bottom: verticalScale(-30),
            gap: scale(5),
            zIndex: 1,
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: theme.colors.white,
              borderRadius: moderateScale(10),
              paddingHorizontal: horizontalScale(10),
              paddingVertical: verticalScale(5),
              gap: scale(5),
            }}
          >
            <Image
              style={{
                width: moderateScale(20),
                height: moderateScale(20),
                borderRadius: 999,
              }}
              source={pointIcon}
            />
            <CustomText
              fontFam={fonts.medium}
              fontWeight="600"
              label={points}
              size={12}
              color={pointsColor}
            />
          </View>

          <CustomText label={label} size={15} color={labelColor} />
        </View>

        <View
          style={{
            ...styles.profileImg,
            borderRadius: moderateScale(999),
            borderWidth: 1,
            borderColor: theme.colors.text,
          }}
        >
          <Image
            style={{ width: "95%", height: "95%", borderRadius: 999 }}
            source={images.user3}
          />
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
          backgroundColor: theme.colors.background,
          paddingTop: verticalScale(5),
          paddingHorizontal: moderateScale(20),
          // gap:verticalScale(30)
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: verticalScale(30) }}
        >
          <View
            style={{
              flex: 1,
              gap: verticalScale(30),
              // backgroundColor:"red"
            }}
          >
            <Header />

            <View style={{ alignItems: "center", gap: moderateScale(5) }}>
              <CustomText
                fontFam={fonts.medium}
                fontWeight="600"
                label="Game Review"
                size={25}
                color={theme.colors.text}
              />

              <CustomText
                label="Dec 12, 2024"
                size={15}
                color={theme.colors.text + "90"}
              />
            </View>

            <View
              style={{
                ...appStyles.rowjustify,
              }}
            >
              <ProfileInfoContainer
                points="1140"
                pointsColor="#EA9CDB"
                pointIcon={images.prodigy}
                label="Win +36"
                labelColor={theme.colors?.green}
              />

              <Image
                style={{
                  width: moderateScale(60),
                  height: moderateScale(60),
                }}
                source={images.vs}
                resizeMode="contain"
              />

              <ProfileInfoContainer
                points="1208"
                pointsColor="#F7C376"
                pointIcon={images.prodigy}
                label="Loss -36"
                labelColor={theme.colors?.red}
              />
            </View>

            <View
              style={{
                ...styles.box,
                backgroundColor: "#F2AD0310",
                width: "100%",
                borderWidth: 1.2,
                borderColor: "#F2AD0370",

                marginTop: verticalScale(20),
              }}
            >
              {reviews.map((item, index) => {
                return (
                  <View 
                  key={index.toString()}
                  style={appStyles.rowjustify}>
                    <View
                      style={{ alignItems: "center", gap: verticalScale(5) }}
                    >
                      <View>
                        <View
                          style={{
                            width: moderateScale(45),
                            height: moderateScale(45),
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 999,
                            backgroundColor: theme.colors.white,
                          }}
                        >
                          <CustomText
                            text={"#1"}
                            size={13}
                            color={theme.colors.text_Black}
                          />

                          <CustomText
                            text={"2/7"}
                            size={13}
                            color={theme.colors.text_Black}
                          />
                        </View>
                        <Image
                          style={{
                            width: moderateScale(17),
                            height: moderateScale(17),
                            position: "absolute",
                            right: moderateScale(-3),
                          }}
                          source={images.checkmark_circle}
                        />
                      </View>
                      <View style={{ ...appStyles.row, gap: scale(5) }}>
                        <Image
                          style={{
                            width: moderateScale(17),
                            height: moderateScale(17),
                          }}
                          source={images.clock}
                          resizeMode="contain"
                        />
                        <CustomText
                          fontFam={fonts.medium}
                          fontWeight="600"
                          text={"0:20s"}
                          size={14}
                          color={theme.colors.text_Black}
                        />
                      </View>
                    </View>

                    <View
                      style={{ alignItems: "center", gap: verticalScale(5) }}
                    >
                      <CustomText
                        fontFam={fonts.medium}
                        fontWeight="600"
                        text={"Algebra"}
                        size={14}
                        color={theme.colors.text_Black}
                      />

                      <TouchableOpacity
                        activeOpacity={0.4}
                        onPress={() => {
                            setIsViewQuestionModal(true)
                        }}
                        style={{
                          ...styles.viewQuesContainer,
                          backgroundColor: theme.colors.white,
                        }}
                      >
                        <CustomText
                          label={"View Question"}
                          size={12}
                          color={theme.colors.yellow}
                        />
                        <Image
                          style={{
                            width: moderateScale(12),
                            height: moderateScale(12),
                            tintColor: theme.colors.yellow,
                          }}
                          source={images.next_arrow}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                    </View>

                    <View
                      style={{ alignItems: "center", gap: verticalScale(5) }}
                    >
                      <View>
                        <View
                          style={{
                            width: moderateScale(45),
                            height: moderateScale(45),
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 999,
                            backgroundColor: theme.colors.white,
                          }}
                        >
                          <CustomText
                            text={"#1"}
                            size={13}
                            color={theme.colors.text_Black}
                          />

                          <CustomText
                            text={"2/7"}
                            size={13}
                            color={theme.colors.text_Black}
                          />
                        </View>
                        <Image
                          style={{
                            width: moderateScale(17),
                            height: moderateScale(17),
                            position: "absolute",
                            right: moderateScale(-3),
                          }}
                          source={images.membership_cross}
                        />
                      </View>
                      <View style={{ ...appStyles.row, gap: scale(5) }}>
                        <Image
                          style={{
                            width: moderateScale(17),
                            height: moderateScale(17),
                          }}
                          source={images.clock}
                          resizeMode="contain"
                        />
                        <CustomText
                          fontFam={fonts.medium}
                          fontWeight="600"
                          text={"0:20s"}
                          size={14}
                          color={theme.colors.text_Black}
                        />
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <ViewQuestionsSheetModal
        modalVisible={isViewQuestionModal}
        setModalVisible={setIsViewQuestionModal}
      />
      <LivePopupModal
        modalVisible={isLivePopupModal}
        setModalVisible={setIsLivePopupModal}
      />
    </>
  );
};
export default GameReview;

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
    width: moderateScale(110),
    height: moderateScale(110),
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
    borderRadius: moderateScale(30),
    paddingHorizontal: moderateScale(20),
    paddingVertical: verticalScale(20),
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
  viewQuesContainer: {
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: scale(5),
  },
});
