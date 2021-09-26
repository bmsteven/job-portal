import React from 'react'
import {View, Text, TouchableOpacity} from "react-native"
import { COLORS, FONTS, SIZES } from "../../../constants"

const SubCategory = ({subcategory, category, navigation}) => {
    const {id, name} = subcategory
    return (
        <View style={{
            marginTop: SIZES.padding / 2,
            marginRight: SIZES.padding
        }}>
            <TouchableOpacity>
                <Text style={{
                    ...FONTS.body2,
                    color: COLORS.darkGray2
                }}>{name}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SubCategory
