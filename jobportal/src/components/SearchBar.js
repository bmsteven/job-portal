import React, {useState} from 'react'
import {View, Text, TextInput, Image, TouchableOpacity} from "react-native"
import {icons, COLORS, SIZES, FONTS} from "../constants"

const SearchBar = ({customStyle}) => {
    return (
        <View style={{
            ...customStyle,
            // backgroundColor: "red"
        }}>
            <View style={{
                    backgroundColor: COLORS.white2,
                    paddingHorizontal: SIZES.padding / 1.5,
                    paddingLeft: SIZES.padding * 2,
                    paddingVertical: SIZES.padding / 1.5,
                    borderRadius: SIZES.radius,
                }} 
            >
                <Text style={{
                    ...FONTS.body4,
                    color: COLORS.gray2
                }}>type to search...</Text>
            </View>
            <View style={{
                position: "absolute",
                left: 0,
                top: 0,
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                width: 50
            }}>
                <Image source={icons.search} style={{
                    height: 25,
                    width: 25
                }} />
            </View>
        </View>
    )
}

export default SearchBar
