import { Stack } from 'expo-router'

const ProfileLayout = () => {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="profile" />
            <Stack.Screen name="settings" />
            <Stack.Screen name="details" />
            <Stack.Screen name="editProfile" />
            <Stack.Screen name="preferences" />
            <Stack.Screen name="chestRewards" />
            <Stack.Screen name="membership" />

            

        </Stack>
    )
}

export default ProfileLayout;
