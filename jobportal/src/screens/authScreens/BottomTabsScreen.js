import React from 'react'
import { View, Text, TouchableOpacity } from "react-native"
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"
import {Home, Companies, Jobs} from "./"
import {BottomTabs} from "../../components"
const Stack = createStackNavigator()
const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
};
import {COLORS, SIZES, FONTS} from "../../constants"

const BottomTabsScreen = ({navigation}) => {
    return (
        <>
            {/* navigator children */}
            <Stack.Navigator 
           screenOptions={{
                headerShown: false,
                ...TransitionScreenOptions,
                cardStyle: {
                  backgroundColor: COLORS.bg,
                  borderRadius: 32
                },
              }}
              initialRouteName={"Home"}
            >
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Companies" component={Companies}/>
            <Stack.Screen name="Jobs" component={Jobs}/>
            </Stack.Navigator>
            {/* floating bottom tabs */}
            <BottomTabs navigation={navigation}/>
        </>
    )
}

export default BottomTabsScreen
