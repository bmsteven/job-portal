import React, { useEffect } from "react"
import { createStackNavigator } from "@react-navigation/stack"
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
import { useAuthDispatch, useAuthState } from "./src/context/auth"
import { useAlertState } from "./src/context/alert"
import { FAILED, AUTH, LOAD_DP } from "./src/context/types"
import { Alert } from "./src/components"
import {BACKEND} from "./src/utils/api"

const Stack = createStackNavigator()

const App = () => {
  const { loading, user, isAuthenticated } = useAuthState()
  const { alert } = useAlertState()
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
    AsyncStorage.getItem("dp", (err, value) => {
      if (value) {
        dispatch({
          type: LOAD_DP,
          payload: value,
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
              <Stack.Screen name="SignIn" component={SignIn} />

              <Stack.Screen name="Home" component={CustomDrawer} />
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

              <Stack.Screen name="Home" component={CustomDrawer} />
            </Stack.Navigator>
          )}
        </>
      )}
      {alert.message ? <Alert /> : null}
    </NavigationContainer>
  )
}

export default App
