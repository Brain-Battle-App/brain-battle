import { StyleSheet, Text, View,  } from 'react-native'
import {Stack} from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

const AuthLayout = () => {
  return (
    <>
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen 
          name='sign-in'
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name='sign-up'
          options={{
            headerShown: false
          }}
        />
      </Stack>
    </>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})