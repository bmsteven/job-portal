import React from 'react'
import {View, Text, TouchableOpacity} from "react-native"
import { COLORS, FONTS, SIZES } from "../../../constants"

const Category = ({index, selected, category, setSelected, lastItem}) => {
    const {id, name} = category
    return (
        <View style={{
            marginLeft: SIZES.padding,
            marginRight: lastItem ? SIZES.padding : 0
        }}>
            <TouchableOpacity
                onPress={() => setSelected(index)}
                style={{
                    paddingHorizontal: SIZES.padding,
                    paddingVertical: SIZES.padding / 2,
                    backgroundColor: selected ? COLORS.primary : COLORS.bg_primary_alert,
                    borderRadius: SIZES.padding * 2
                }}
            >
                <Text style={{
                    ...FONTS.body3,
                    color: selected ? COLORS.white2 : COLORS.darkGray, 
                }}>{name}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Category
