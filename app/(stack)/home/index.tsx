import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import CustomButton from '@/components/shared/CustomButton'

const HomeScreen = () => {
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

      </View>
    </SafeAreaView>
  )
}

export default HomeScreen