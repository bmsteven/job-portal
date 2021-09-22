import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import {logout} from "../../context/actions/auth"
import {useAuthDispatch} from "../../context/auth"

const MainLayout = ({navigation}) => {
  const dispatch = useAuthDispatch()
  const clicked = () => {
    logout({
      dispatch,
      navigation
    })
  }
  return (
    <View style={{
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // backgroundColor: "white"
    }}>
      <TouchableOpacity onPress={clicked} style={{zIndex: 3}}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MainLayout
