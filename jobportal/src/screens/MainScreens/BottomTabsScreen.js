import React from 'react'
import { View, Text, TouchableOpacity } from "react-native"
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"
import {Home, Companies, Jobs} from "./"
import {BottomTabs, Header} from "../../components"
const Stack = createStackNavigator()
const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
};
import {COLORS, SIZES, FONTS} from "../../constants"

const BottomTabsScreen = ({navigation}) => {
    return (
         <View 
          style={{
            backgroundColor: COLORS.bg,
            flex: 1,
          }}
        >
            <Header navigation={navigation}/>
            
            {/* navigator children */}
            <Stack.Navigator 
              screenOptions={{
                headerShown: false,
                ...TransitionScreenOptions,
                cardStyle: {
                  backgroundColor: COLORS.bg,
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
        </View>
    )
}

export default BottomTabsScreen
