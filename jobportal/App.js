import React, { useEffect } from "react"
import { createStackNavigator } from "@react-navigation/stack"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { NavigationContainer } from "@react-navigation/native"
import {
  MainLayout,
  OnBoarding,
  SignIn,
  SignUp,
  ForgotPassword,
  Loader,
} from "./src/screens/index"
import { useAuthDispatch, useAuthState } from "./src/context/auth"
import { FAILED, AUTH } from "./src/context/types"

const Stack = createStackNavigator()

const App = () => {
  const { loading, user, isAuthenticated } = useAuthState()
  const dispatch = useAuthDispatch()

  useEffect(() => {
    getUserDetails()
  }, [])

  const getUserDetails = () => {
    AsyncStorage.getItem("user", (err, value) => {
      if (value) {
        dispatch({
          type: AUTH,
          payload: JSON.parse(value),
        })
      } else {
        dispatch({
          type: FAILED,
        })
      }
    })
  }

  return (
    <NavigationContainer>
      {loading ? (
        <Loader />
      ) : (
        <>
          {isAuthenticated && user && !loading ? (
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName={"Home"}
            >
              <Stack.Screen name="Home" component={MainLayout} />
            </Stack.Navigator>
          ) : (
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName={"OnBoarding"}
            >
              <Stack.Screen name="OnBoarding" component={OnBoarding} />

              <Stack.Screen name="SignIn" component={SignIn} />

              <Stack.Screen name="SignUp" component={SignUp} />

              <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

              <Stack.Screen name="Home" component={MainLayout} />
            </Stack.Navigator>
          )}
        </>
      )}
    </NavigationContainer>
  )
}

export default App
