import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import Animated from "react-native-reanimated"
import { BottomTabsScreen } from "../authScreens"

const MainLayout = ({navigation, drawerAnimationStyle}) => {
  return (
    <Animated.View style={{
      backgroundColor: "white",
      flex: 1,
      ...drawerAnimationStyle
    }}>
      {/* pretty muc everything else */}
      <BottomTabsScreen navigation={navigation} />
    </Animated.View>
  )
}

export default MainLayout
