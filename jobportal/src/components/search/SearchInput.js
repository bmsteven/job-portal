import React, {useState} from 'react'
import {View, Text, TextInput, Image, TouchableOpacity} from "react-native"
import {icons, COLORS, SIZES, FONTS} from "../../constants"
import {BackHeader} from "../"

const SearchInput = ({value, handleChange, focused}) => {
    const [isFocused, setFocused] = useState(focused)
    return (
        <BackHeader isFocused={isFocused}>
            <TextInput 
                placeholder="Type to search..." 
                placeholderTextColor={COLORS.gray} 
                style={{
                    paddingRight: SIZES.padding + 50,
                    paddingVertical: SIZES.padding / 3,
                    paddingLeft: SIZES.radius,
                    ...FONTS.body4,
                    flex: 5,
                    height: "100%",
                }} 
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                value={value}
                onChange={e => handleChange(e)}
                autoFocus={isFocused}
            />
            <TouchableOpacity style={{
                justifyContent: "center",
                alignItems: "flex-end",
                flex: 1.5,
            }}>
                <Image source={icons.search} style={{
                    height: 25,
                    width: 25,
                    tintColor: COLORS.gray
                }} />
            </TouchableOpacity>
        </BackHeader>
    )
}

export default SearchInput
