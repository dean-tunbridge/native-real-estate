import { useGlobalContext } from '@/lib/global-provider'
import { ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function AppLayout() {
  const { loading, isLoggedIn } = useGlobalContext()
}
