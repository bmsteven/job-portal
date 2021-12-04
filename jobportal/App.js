import React, { useEffect } from "react"
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { NavigationContainer } from "@react-navigation/native"
import CustomDrawer from "./src/navigation/CustomDrawer"
import {
  OnBoarding,
  SignIn,
  SignUp,
  ForgotPassword,
  Loader,
} from "./src/screens/index"
import { Search, Job, Company } from "./src/screens/MainScreens"

import { useAuthDispatch, useAuthState } from "./src/context/auth"
import { useAlertState } from "./src/context/alert"
import { FAILED, AUTH } from "./src/context/types"
import { Alert } from "./src/components"

const Stack = createStackNavigator()

const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
}

const App = () => {
  const { loading, user, isAuthenticated } = useAuthState()
  const { alert } = useAlertState()
  const dispatch = useAuthDispatch()

  useEffect(() => {
    getUserDetails()
  }, [])

  const getUserDetails = async () => {
    await AsyncStorage.getItem("user", (err, value) => {
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
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            ...TransitionScreenOptions,
          }}
          initialRouteName={
            isAuthenticated && user ? "CustomDrawer" : "OnBoarding"
          }
        >
          <Stack.Screen name="CustomDrawer" children={CustomDrawer} />

          <Stack.Screen name="OnBoarding" component={OnBoarding} />

          <Stack.Screen name="SignIn" component={SignIn} />

          <Stack.Screen name="SignUp" component={SignUp} />

          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

          <Stack.Screen name="Search" component={Search} />

          <Stack.Screen name="Job" component={Job} />

          <Stack.Screen name="Company" component={Company} />
        </Stack.Navigator>
      )}
      {alert.message ? <Alert /> : null}
    </NavigationContainer>
  )
}

export default App
