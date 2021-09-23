import React from 'react'
import {View, Text} from "react-native"
import {SIZES, FONTS} from "../constants"

const PrimaryHeader = ({label}) => {
    return (
        <View style={{
                marginVertical: SIZES.radius,
                paddingHorizontal: SIZES.padding
            }}>
                <Text style={{
                    ...FONTS.h1,
                }}>
                {label}
                </Text>
            </View>
    )
}

export default PrimaryHeader
