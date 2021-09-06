import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import {
  MainLayout,
  OnBoarding,
  SignIn,
  SignUp,
  ForgotPassword,
  Loader,
} from "./src/screens/index"

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Loader"}
      >
        <Stack.Screen name="Loader" component={Loader} />

        <Stack.Screen name="OnBoarding" component={OnBoarding} />

        <Stack.Screen name="SignIn" component={SignIn} />

        <Stack.Screen name="Signup" component={SignUp} />

        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

        <Stack.Screen name="Home" component={MainLayout} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
