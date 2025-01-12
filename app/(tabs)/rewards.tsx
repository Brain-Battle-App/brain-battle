import {
	Image,
	Platform,
	SafeAreaView,
	Text,
	TouchableOpacity,
	View,
	StyleSheet,
	ScrollView,
} from 'react-native';
import { colors } from '@/utils/colors';
import { isiPad } from '@/utils/CommonFun';
import {
	horizontalScale,
	moderateScale,
	verticalScale,
} from '@/utils/Mertics';
import { appStyles } from '@/utils/appStyles';
import CustomText from '@/components/CustomText';
import images from '@/constants/images';
import icons from '@/constants/icons';
import RewardProgress from '@/components/Rewards/RewardsProgress';
import { useState } from 'react';
import RewardDetailModal from '@/components/Rewards/RewardDetailModal';
import MonthlyProgressGraph from '@/components/Rewards//MonthlyProgressGraph';
import AllTimeProgressGraph from '@/components/Rewards/AllTimeProgressGraph';
import DailyProgressGraph from '@/components/Rewards/DailyProgressGraph';
import React from 'react';

const Rewards = ({ navigation }: any) => {
	const [selectectedRedwardsRankIndex, setSelectectedRedwardsRankIndex] =
		useState(0);
	const [selectectedRewarsRank, setSelectectedRewarsRank] = useState({});
	const [isSelectectedRewarsRank, setIsSelectectedRewarsRank] = useState(false);
	const [selectedProgressTab, setSelectedProgressTab] = useState('Monthly');

	return (
		<>
			<ScrollView>
				<SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
					<View
						style={{
							flex: 1,
							paddingTop: isiPad
								? verticalScale(10)
								: Platform.OS == 'android'
								? verticalScale(40)
								: 0,
						}}
					>
						<View
							style={{
								paddingHorizontal: moderateScale(20),
								gap: verticalScale(10),
							}}
						>
							<View style={appStyles.rowjustify}>
								<CustomText
									label='April 21, Friday'
									size={17}
									fontFam={'ClashDisplayMedium'}
									fontWeight='600'
									style={{ marginTop: verticalScale(25) }}
									color={'#87777780'}
								/>

								<View
									style={{
										alignSelf: 'flex-end',
										gap: horizontalScale(12),
										...appStyles.row,
									}}
								>
									<View
										style={{
											borderWidth: 1,
											borderColor: colors.black,
											borderRadius: 50,
											paddingHorizontal: horizontalScale(17),
											paddingVertical: verticalScale(3),
											flexDirection: 'row',
											alignItems: 'center',
											gap: horizontalScale(7),
											backgroundColor: colors.white,
											elevation: 5,
											shadowColor: colors.black,
											shadowOffset: { width: 0, height: isiPad ? 5 : 2 },
											shadowOpacity: 0.5,
											shadowRadius: 3,
										}}
									>
										<Image
											resizeMode='contain'
											style={{
												width: moderateScale(25),
												height: moderateScale(25),
											}}
											source={images.user1}
										/>
										<CustomText
											size={18}
											fontFam={'ClashDisplayMedium'}
											color={colors.black}
											text={'1235'}
										/>
									</View>

									<View>
										<Image
											resizeMode='contain'
											style={{
												width: moderateScale(23),
												height: moderateScale(23),
											}}
											source={icons.notifications}
										/>
										<View
											style={{
												width: moderateScale(22),
												height: moderateScale(22),
												borderRadius: 999,
												backgroundColor: colors.red,
												position: 'absolute',
												top: verticalScale(-8),
												right: horizontalScale(-7),
												alignItems: 'center',
												justifyContent: 'center',
											}}
										>
											<CustomText size={12} color={colors.white} text={'12'} />
										</View>
									</View>
								</View>
							</View>
							<View
								style={{
									height: verticalScale(1),
									backgroundColor: '#321C1C13',
								}}
							/>
						</View>

						<View
							style={{
								padding: moderateScale(20),
								gap: verticalScale(10),
							}}
						>
							<View
								style={{
									// F0BDCC
									flexDirection: 'row',
									justifyContent: 'space-between',
								}}
							>
								<View style={{ width: '50%' }}>
									<Image
										resizeMode='contain'
										style={{
											width: moderateScale(150),
											height: moderateScale(150),
										}}
										source={images.brainJester}
									/>
								</View>
								<View style={{}}>
									<CustomText
										label='You’re almost'
										size={21}
										fontFam={'ClashDisplayMedium'}
										fontWeight='600'
										color={'#321C1C'}
									/>
									<CustomText
										label='there!'
										size={21}
										fontFam={'ClashDisplayMedium'}
										fontWeight='600'
										color={'#321C1C'}
									/>
									<CustomText
										text='14'
										size={19}
										fontFam={'ClashDisplaySemibold'}
										fontWeight='bold'
										style={{ marginTop: verticalScale(10) }}
										color={'#15A000'}
									/>
									<View style={{ marginRight: moderateScale(100) }}>
										<CustomText
											label='ELO left for ELITE rank and a reward box upgrade!'
											size={15}
											style={{ marginRight: isiPad ? '40%' : '30%' }}
											fontFam={'ClashDisplaySemibold'}
											lineHeight={isiPad ? 45 : 23}
											color={'#877777'}
										/>
									</View>
								</View>
							</View>

							<RewardProgress
								selectectedRedwardsRankIndex={selectectedRedwardsRankIndex}
								setSelectectedRedwardsRankIndex={
									setSelectectedRedwardsRankIndex
								}
								selectectedRewarsRank={selectectedRewarsRank}
								setSelectectedRewarsRank={setSelectectedRewarsRank}
								isSelectectedRewarsRank={isSelectectedRewarsRank}
								setIsSelectectedRewarsRank={setIsSelectectedRewarsRank}
							/>
							<View
								style={{
									width: '100%',
									backgroundColor: colors.white,
									height: '100%',
									padding: moderateScale(10),
									borderRadius: moderateScale(17),
									marginTop: isiPad ? verticalScale(20) : 0,

									elevation: 10,
									shadowColor: colors.black,
									shadowOffset: { width: 0, height: isiPad ? 5 : 2 },
									shadowOpacity: 0.5,
									shadowRadius: 2,
								}}
							>
								<CustomText
									fontFam={'ClashDisplaySemibold'}
									fontWeight='600'
									label={'Your Progress'}
									style={{ textAlign: 'center' }}
									size={16}
									color={colors.black}
								/>
								<View
									style={{
										...appStyles.rowjustify,
										marginVertical: isiPad
											? verticalScale(20)
											: Platform.OS == 'ios'
											? verticalScale(17)
											: verticalScale(20),
										gap: horizontalScale(10),
										paddingVertical: verticalScale(3),
										paddingHorizontal: moderateScale(10),
										borderRadius: moderateScale(999),

										backgroundColor: '#E6E1D8',
									}}
								>
									{['Daily', 'Monthly', 'All time'].map((item, index) => {
										return (
											<TouchableOpacity
												key={index}
												activeOpacity={0.5}
												onPress={() => setSelectedProgressTab(item)}
												style={
													isiPad
														? {
																...styles.isPadTabContainer,
																backgroundColor:
																	selectedProgressTab == item
																		? colors.white
																		: 'transparent',
														  }
														: {
																...styles.tabContainer,
																backgroundColor:
																	selectedProgressTab == item
																		? colors.white
																		: 'transparent',
														  }
												}
											>
												<CustomText
												fontWeight='600'
													fontFam={
														selectedProgressTab == item
															? 'ClashDisplaySemibold'
															: 'ClashDisplayMedium'
													}
													label={item}
													size={16}
													color={colors.black}
												/>
											</TouchableOpacity>
										);
									})}
								</View>

								<View
									style={{
										...appStyles.rowjustify,
										marginBottom: verticalScale(20),
										marginTop: verticalScale(10),
									}}
								>
									<View style={{ width: '50%', gap: verticalScale(10) }}>
										<CustomText
											fontFam={'ClashDisplayMedium'}
											fontWeight='600'
											label={'Average Daily Changes'}
											size={13}
											color={colors.gray300}
										/>
										<View
											style={{ flexDirection: 'row', alignItems: 'center' }}
										>
											<CustomText
												fontFam={'ClashDisplayMedium'}
												fontWeight='600'
												label={'+32'}
												size={18}
												color={colors.green}
											/>

											<CustomText
												fontFam={'ClashDisplayMedium'}
												fontWeight='600'
												style={{
													marginTop: verticalScale(10),
													marginLeft: moderateScale(5),
												}}
												label={'ELO'}
												size={13}
												color={colors.gray300}
											/>
										</View>
									</View>
									<View
										style={{
											width: 1,
											height: '100%',
											backgroundColor: '#8E8E93',
										}}
									/>

									<View
										style={{
											width: '50%',
											gap: verticalScale(10),
											marginLeft: moderateScale(10),
										}}
									>
										<CustomText
											fontFam={'ClashDisplayMedium'}
											fontWeight='600'
											label={'Highest Recorded ELO'}
											size={13}
											color={colors.gray300}
										/>
										<View
											style={{ flexDirection: 'row', alignItems: 'center' }}
										>
											<CustomText
												fontFam={'ClashDisplayMedium'}
												label={'1,248'}
												fontWeight='600'
												size={18}
												color={colors.black}
											/>

											<CustomText
												fontFam={'ClashDisplayMedium'}
												style={{
													marginTop: verticalScale(10),
													marginLeft: moderateScale(5),
												}}
												label={'ELO'}
												size={13}
												color={colors.gray300}
											/>
										</View>
									</View>
								</View>

								<View
									style={{
										...appStyles.rowjustify,
										marginBottom: verticalScale(10),
									}}
								>
									<TouchableOpacity
										activeOpacity={0.4}
										style={styles.bactActions}
									>
										<Image
											resizeMode='contain'
											style={{
												width: moderateScale(12),
												height: moderateScale(12),
											}}
											source={icons.backArrow}
										/>
									</TouchableOpacity>

									<CustomText
										fontFam={'ClashDisplayMedium'}
										label={'June , 2024'}
										size={16}
										color={colors.gray300}
									/>
									<TouchableOpacity
										activeOpacity={0.4}
										style={styles.bactActions}
									>
										<Image
											resizeMode='contain'
											style={{
												width: moderateScale(12),
												height: moderateScale(12),
											}}
											source={icons.nextArrow}
										/>
									</TouchableOpacity>
								</View>
								{selectedProgressTab == 'Daily' && (
									<>
										<DailyProgressGraph />
									</>
								)}
								{selectedProgressTab == 'Monthly' && (
									<>
										<MonthlyProgressGraph />
									</>
								)}
								{selectedProgressTab == 'All time' && (
									<>
										<AllTimeProgressGraph />
									</>
								)}
							</View>
						</View>
					</View>
				</SafeAreaView>
			</ScrollView>

			<RewardDetailModal
				modalVisible={isSelectectedRewarsRank}
				selectectedRewarsRank={selectectedRewarsRank}
				setModalVisible={setIsSelectectedRewarsRank}
			/>
		</>
	);
};
export default Rewards;

const styles = StyleSheet.create({
	isPadTabContainer: {
		paddingHorizontal: horizontalScale(13),
		paddingVertical: verticalScale(4),
		borderRadius: moderateScale(999),
		alignItems: 'center',
		justifyContent: 'center',
	},
	tabContainer: {
		paddingHorizontal: horizontalScale(18),
		paddingVertical: verticalScale(4),
		borderRadius: moderateScale(999),

		alignItems: 'center',
		justifyContent: 'center',
	},
	bactActions: {
		width: moderateScale(25),
		height: moderateScale(25),
		alignItems: 'center',
		justifyContent: 'center',
	},
});
