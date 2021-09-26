import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"
import Animated from "react-native-reanimated"
import { BottomTabsScreen, Search, Job, Company } from "../MainScreens"
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
        <Stack.Screen name="Search" children={(props) => {
          return <Search {...props} />
        }} />
        <Stack.Screen name="Job" children={(props) => {
          return <Job {...props} />
        }} />
        <Stack.Screen name="Company" children={(props) => {
          return <Company {...props} />
        }} />
      </Stack.Navigator>
    </Animated.View>
  )
}

export default MainLayout
