import { Texts } from '@/Constants'
import { HomeScreen, SplashScreen } from '@/Navigators/Stack'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { navigationRef } from './utils'
import HistoryScreen from '@/Containers/History/HistoryScreen'

const Stack = createStackNavigator()

const ApplicationNavigator = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Texts.HomeScreen}>
          <Stack.Screen name={Texts.Splash} component={SplashScreen} />
          <Stack.Screen name={Texts.HomeScreen} component={HomeScreen} />
          <Stack.Screen name={Texts.HistoryScreen} component={HistoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default ApplicationNavigator
