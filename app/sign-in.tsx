import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import images from '@/constants/images'

const SignIn = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
