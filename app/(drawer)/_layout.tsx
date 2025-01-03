import { View, Text } from 'react-native'
import React from 'react'
import Drawer from 'expo-router/drawer'
import { Ionicons } from '@expo/vector-icons'
import CustomDrawer from '@/components/shared/CustomDrawer'

const DrawerLayout = () => {
  return (
    <Drawer 
      drawerContent={CustomDrawer}
      screenOptions={{drawerActiveTintColor: 'indigo', overlayColor: 'rgba(0,0,0,0.4)', headerShadowVisible: false, sceneStyle: {backgroundColor: 'white'}}}>
      <Drawer.Screen
        name="(tabs)" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Tabs + Stack',
          title: 'tabs + stack',
          headerShown: false,
          drawerIcon: ({color, size}) => (
            <Ionicons name='albums-outline' size={size} color={color}></Ionicons>
          )
        }}
      />
      <Drawer.Screen
        name="user/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Home',
          title: 'overview',
          drawerIcon: ({color, size}) => (
            <Ionicons name='person-circle-outline' size={size} color={color}></Ionicons>
          )
        }}
      />
      <Drawer.Screen
        name="schedule/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'User',
          title: 'overview',
          drawerIcon: ({color, size}) => (
            <Ionicons name='calendar-outline' size={size} color={color}></Ionicons>
          )
        }}
      />
    </Drawer>
  )
}

export default DrawerLayout