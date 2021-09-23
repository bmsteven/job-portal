import React, {useState} from 'react'
import {View, Text, TextInput, Image, TouchableOpacity} from "react-native"
import {icons, COLORS, SIZES, FONTS} from "../constants"

const SearchBar = () => {
    return (
        <TouchableOpacity style={{
        }}>
            <View style={{
                    backgroundColor: COLORS.white2,
                    paddingHorizontal: SIZES.padding / 1.5,
                    paddingVertical: SIZES.padding / 1.5,
                    borderRadius: SIZES.radius,
                }} 
            >
                <Text style={{
                    ...FONTS.body4,
                    color: COLORS.gray2
                }}>Type to search...</Text>
            </View>
            <View style={{
                position: "absolute",
                right: 0,
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
        </TouchableOpacity>
    )
}

export default SearchBar
