import React from 'react'
import { View, Text, TouchableOpacity } from "react-native"
import {Home} from "./"
import {BottomTabs} from "../../components"

const BottomTabsScreen = ({navigation}) => {
    return (
        <>
            <Home navigation={navigation}/>
            {/* children */}
            {/* floating bottom tabs */}
            <BottomTabs navigation={navigation}/>
        </>
    )
}

export default BottomTabsScreen
