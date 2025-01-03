import { View, Text } from 'react-native'
import React from 'react'
import { DrawerActions, StackActions } from '@react-navigation/native'
import { router, Stack, useNavigation } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const StackLayout = () => {

  const navigation = useNavigation()

  const onHeadLeftClick = (canGoBack?: boolean) => {
    if(canGoBack){
      router.back()
      return
    }
    navigation.dispatch(DrawerActions.toggleDrawer)
    
  }

  return (
    <Stack 
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: 'white'
        },
        headerLeft: ({tintColor, canGoBack}) => <Ionicons name={canGoBack ? 'arrow-back-outline' : 'grid-outline' } className='mr-5'size={20} onPress={() => onHeadLeftClick(canGoBack)}></Ionicons>
      }}
    >
      <Stack.Screen name='home/index' options={{
        title: 'Home'
      }}/>

    <Stack.Screen name='products/index' options={{
        title: 'Products Screen'
      }}/>

    <Stack.Screen name='settings/index' options={{
        title: 'Settings Screen'
      }}/>

    <Stack.Screen name='profile/index' options={{
        title: 'Profile Screen'
      }}/>
    </Stack>
  )
}

export default StackLayout