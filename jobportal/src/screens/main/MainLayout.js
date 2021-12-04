import React from "react"
import Animated from "react-native-reanimated"
import { BottomTabsScreen } from "../MainScreens"

const MainLayout = ({ navigation, drawerAnimationStyle }) => {
  return (
    <Animated.View
      style={{
        flex: 1,
      }}
    >
      <BottomTabsScreen navigation={navigation} />
    </Animated.View>
  )
}

export default MainLayout
