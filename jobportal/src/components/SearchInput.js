import React, {useState} from 'react'
import {View, Text, TextInput, Image, TouchableOpacity} from "react-native"
import {icons, COLORS, SIZES, FONTS} from "../constants"

const SearchInput = ({value, handleChange}) => {
    const [isFocused, setFocused] = useState(false)
    return (
        <View style={{
        }}>
            <TextInput placeholder="Type to search..." placeholderTextColor={isFocused ? COLORS.gray : COLORS.gray2} style={{
                backgroundColor: isFocused ? COLORS.white : COLORS.white2,
                paddingHorizontal: SIZES.padding / 2,
                paddingVertical: SIZES.padding / 3,
                borderRadius: SIZES.radius,
                ...FONTS.body4
            }} 
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />
            <TouchableOpacity style={{
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
            </TouchableOpacity>
        </View>
    )
}

export default SearchInput
