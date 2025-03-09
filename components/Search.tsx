import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams, usePathname } from 'expo-router'

const Search = () => {
  const path = usePathname()
  const params = useLocalSearchParams()
  const [search, setSearch] = useState(params.query)

  const handleSearch = (text: string) => {
    setSearch(text)
  }

  return (
    <View>
      <Text>search</Text>
    </View>
  )
}

export default Search
