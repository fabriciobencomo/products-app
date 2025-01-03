import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, router, useNavigation } from 'expo-router'
import CustomButton from '@/components/shared/CustomButton'
import Drawer from 'expo-router/drawer'
import { DrawerActions } from '@react-navigation/native'

const HomeScreen = () => {

  const navigation = useNavigation()

  const onToggleDrawer = () => {
    navigation.dispatch( DrawerActions.toggleDrawer )
  }

  return (
    <SafeAreaView>
      <View className='px-10 mt-5'>
        <CustomButton onPress={() => router.push('/products')}  className="mb-2">
          Products
        </CustomButton>

        <CustomButton color='secondary' onPress={() => router.push('/profile')} className="mb-2">
          Profile
        </CustomButton>

        <CustomButton color='tertiary' onPress={() => router.push('/settings')} className="mb-2">
          Settings
        </CustomButton>

        <Link href='/products' asChild>
          <CustomButton variant='text-only' className="mb-10">
            Productos
          </CustomButton>
        </Link>

        <CustomButton variant='text-only' className="mb-10" onPress={onToggleDrawer}>
          Open Menu
        </CustomButton>

      </View>
    </SafeAreaView>
  )
}

export default HomeScreen