import { FeaturedCard } from '@/components/Cards'
import Search from '@/components/Search'
import icons from '@/constants/icons'
import images from '@/constants/images'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Index() {
  return (
    <SafeAreaView>
      <Text className="bg-white h-full">Home</Text>
      <View className="px-5">
        <View className="flex flex-row items-center">
          <Image source={images.avatar} className="size-12 rounded-full" />
          <View className="flex flex-col items-start justify-center">
            <Text className="text-xs font-rubik text-black-100">
              Good Morning
            </Text>
            <Text className="text-base font-rubik-medium text-black-300">
              Bonson Guy
            </Text>
          </View>
          <Image source={icons.bell} className="size-6" />
        </View>

        <Search />

        <View className="px-5">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-xl font-rubik-bold text-black-300">
              Featured
            </Text>
            <TouchableOpacity>
              <Text className="text-base font-rubik-bold text-primary-300">
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-row gap-5 mt-5">
            <FeaturedCard
              item={{
                $id: '',
                $collectionId: '',
                $databaseId: '',
                $createdAt: '',
                $updatedAt: '',
                $permissions: [],
              }}
            />
            <FeaturedCard
              item={{
                $id: '',
                $collectionId: '',
                $databaseId: '',
                $createdAt: '',
                $updatedAt: '',
                $permissions: [],
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
