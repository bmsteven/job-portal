import React from 'react'
import {View, Text, TouchableOpacity} from "react-native"
import {SecondaryHeader} from "../"
import { COLORS, FONTS, SIZES } from "../../constants"

const FeaturedCompanies = () => {
    return (
         <View style={{
            marginVertical: SIZES.padding,
        }}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: SIZES.padding * 6,
                paddingHorizontal: SIZES.padding 
            }}>
                <SecondaryHeader label="Featured Companies" />
                <TouchableOpacity>
                    <Text style={{
                        ...FONTS.body4,
                        color: COLORS.primary,
                    }}>
                        View All
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FeaturedCompanies
