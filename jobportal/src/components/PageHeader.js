import React from 'react'
import {View, Text} from "react-native"
import {BackHeader} from "./"
import {SIZES, COLORS, FONTS} from "../constants"

const PageHeader = ({label, navigation}) => {

    return (
        <BackHeader navigation={navigation}>
            <View style={{
                position: "absolute",
                left: 60,
                paddingHorizontal: SIZES.padding
            }}>
                <Text style={{
                    ...FONTS.body2, 
                    color: COLORS.black
                }}>
                    {label}
                </Text>
            </View>
        </BackHeader>
    )
}

export default PageHeader
