import { ActivityIndicatorBase } from 'react-native'
import { Account, Avatars, Client, OAuthProvider } from 'react-native-appwrite'
import * as Linking from 'expo-linking'

export const config = {
  platform: 'com.real-estate',
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
}

export const client = new Client()
client
  .setEndpoint(config.endpoint!)
  .setProject(config.projectId!)
  .setPlatform(config.platform!)

export const avatar = new Avatars(client)
export const account = new Account(client)

export async function login() {
  try {
    const redirectUri = Linking.createURL('/')

    const response = await account.createOAuth2Token(
      OAuthProvider.Google,
      redirectUri
    )
  } catch (error) {
    console.error(error)
    return false
  }
}
