import React from 'react'
import { View, Text } from "react-native"
import {
    Header
} from "../../components"
import {COLORS, SIZES, FONTS} from "../../constants"

const Jobs = ({navigation}) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.bg,
            borderRadius: 32
        }}>
            <Header navigation={navigation}/>
            <Text>Jobs</Text>
        </View>
    )
}

export default Jobs
