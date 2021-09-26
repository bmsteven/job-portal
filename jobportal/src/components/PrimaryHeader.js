import React from 'react'
import {View, Text} from "react-native"
import {SIZES, FONTS} from "../constants"

const PrimaryHeader = ({label, customStyle, containerStyle}) => {
    return (
        <View style={{
                marginVertical: SIZES.radius,
                paddingHorizontal: SIZES.padding,
                ...containerStyle
            }}>
                <Text style={{
                    ...FONTS.h1,
                    ...customStyle,
                }}>
                {label}
                </Text>
            </View>
    )
}

export default PrimaryHeader
