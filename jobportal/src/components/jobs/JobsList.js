import React from 'react'
import {View} from "react-native"
import {
    PrimaryHeader
} from "../"
import {FONTS,SIZES} from "../../constants"

const JobsList = () => {
    return (
        <View style={{
            paddingVertical: SIZES.padding

        }}>
            <PrimaryHeader customStyle={{
                ...FONTS.h2,
            }} label="· Recent Jobs"/>
        </View>
    )
}

export default JobsList
