import { Link, Redirect } from 'expo-router'
import { View, Text, SafeAreaView } from 'react-native'

const App = () => {
  // return <Redirect href='./home'/>
  return <Redirect href='/tabs'/>
  // return (
  //   <SafeAreaView className='bg-white flex-1'>
  //     <View className='mt-6 mx-2.5'>
  //       <Text className='text-4xl font-work-black text-primary z-10'>Appfdsfsdfsdfsdfdsfsdfdfsss</Text>
  //       <Text className='text-4xl font-work-black text-secondary-100 z-10'>Appfdsfsdfsdfsdfdsfsdfdfsss</Text>
  //       <Text className='text-4xl font-work-black text-secondary-default '>Appfdsfsdfsdfsdfdsfsdfdfsss</Text>
  //       <Text className='text-4xl font-work-black text-tertiary '>Appfdsfsdfsdfsdfdsfsdfdfsss</Text>
  //     </View>

  //     <Link href='/products/index'>Productos</Link>
  //   </SafeAreaView>
  // )
}

export default App