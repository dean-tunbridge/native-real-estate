import images from '@/constants/images'
import { Link } from 'expo-router'
import { Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Index() {
  return (
    <SafeAreaView>
      <Text className="bg-white h-full">Home</Text>
      <View className="px-5">
        <View className="flex flex-row items-center">
          <Image source={images.avatar} className="size-12 rounded-full" />
          <View className="flex flex-col items-start justify-center">
            <Text>Goof Morning</Text>{' '}
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
