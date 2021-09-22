import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import {useAuthDispatch} from "../../context/auth"

const MainLayout = ({ navigation }) => {
  const dispatch = useAuthDispatch()
  const logout = () => {
        dispatch({
          type: "LOGOUT",
        })
        navigation.navigate("SignIn")
  }
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity
        onPress={logout}
      >
        <Text>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default MainLayout
