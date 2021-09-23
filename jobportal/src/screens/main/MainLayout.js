import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"
import Animated from "react-native-reanimated"
import { BottomTabsScreen } from "../MainScreens"
import {COLORS} from "../../constants"
const Stack = createStackNavigator()
const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
};

const MainLayout = ({navigation, drawerAnimationStyle}) => {
  return (
    <Animated.View 
    style={{
      flex: 1,
    }}
    >
      {/* pretty much everything else */}
      <Stack.Navigator screenOptions={{
          headerShown: false,
          ...TransitionScreenOptions
        }}
        initialRouteName={"BottomTabs"}
      >
        <Stack.Screen name="BottomTabs" children={(props) => { 
          return <BottomTabsScreen {...props} navigation={navigation}/>
        }}/>
      </Stack.Navigator>
    </Animated.View>
  )
}

export default MainLayout
