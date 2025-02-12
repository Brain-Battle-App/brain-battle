import { Text, Image, Pressable, StyleSheet } from 'react-native'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'
import React from 'react'
import { router } from 'expo-router'
import images from '../constants/images'
import tests from '../constants/tests'

interface PlayerAvatarProps {
    picture: string;
    elo: number;
}

const PlayerAvatar = ({picture, elo}: PlayerAvatarProps) => {

    // const avatarSource = tests[picture];

    return (
        <Pressable onPress={() => router.push("/profile")} className="flex flex-row items-center bg-light border-2 border-black rounded-full shadow-sm shadow-gray-500" style={styles.bevel}>
            <Image source={images.user1}  className="rounded-full" style={styles.picture} />
            <Text className="font-poppinssemibold" style={styles.rating}> {elo} </Text>
        </Pressable>
    )
    
}

export default PlayerAvatar;

const styles = StyleSheet.create({

    bevel: {
        paddingLeft: scale(8),
        paddingRight: scale(12),
        paddingVertical: verticalScale(2),
    },

    picture: {
        width: scale(36),
        aspectRatio: 1,
        marginRight: scale(6),
    },

    rating: {
        fontSize: moderateScale(16),
    }

});
