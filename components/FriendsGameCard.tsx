import { Text, Image, Pressable, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import React from 'react'
import { router } from 'expo-router'
import tests from '../constants/tests'

interface FriendsGameCardProps {
    picture: string;
    //picture: keyof typeof tests;
    style?: StyleProp<ViewStyle>;
}

const FriendsGameCard = ({picture, style}: FriendsGameCardProps) => {

    // const gameCardSource = tests[picture];

    return (
        <Pressable className="bg-light rounded-3xl shadow-sm shadow-gray-500" style={[style, styles.bevel]}>
            <Image source={{uri: picture}} className="w-full h-full rounded-3xl" resizeMode="contain" />
        </Pressable>
    )

}

export default FriendsGameCard;

const styles = StyleSheet.create({

    bevel: {
        width: scale(130),
        aspectRatio: 1/1.1,
    },

});
