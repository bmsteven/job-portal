import React from 'react'
import {View, Text} from "react-native"
import {FONTS, SIZES} from "../constants"

const SecondaryHeader = ({label, showLine, customStyle}) => {
    return (
        <View>
            <Text style={{
                ...FONTS.h3,
                width: SIZES.width - 120,
                ...customStyle
            }}>{label}</Text>
            {showLine && <View style={{
                position: "absolute",
                height: 2,
                width: 25,
                backgroundColor: "gray",
                bottom: -7
            }}/>}
        </View>
    )
}

export default SecondaryHeader
