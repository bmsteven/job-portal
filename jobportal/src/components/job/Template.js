import React from 'react'
import {View} from "react-native"
import {SIZES, COLORS} from "../../constants"

const Template = ({children}) => {
    return (
        <View style={{
            padding: SIZES.padding,
            backgroundColor: COLORS.white2,
            margin: SIZES.padding,
            borderRadius: SIZES.radius
        }}>
            {children}
        </View>
    )
}

export default Template
