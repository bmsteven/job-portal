import React from 'react'
import { View, Text } from "react-native"
import {
    
} from "../../components"
import {COLORS, SIZES, FONTS} from "../../constants"

const Companies = ({navigation}) => {
    return (
        <View style={{
            flex: 1,
            // backgroundColor: COLORS.bg,
            // borderRadius: 32
        }}>
            {/* <Header navigation={navigation}/> */}
            <Text>Companies</Text>
        </View>
    )
}

export default Companies
