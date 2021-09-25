import React, {useState} from 'react'
import {View, Text, TextInput, Image, TouchableOpacity} from "react-native"
import {icons, COLORS, SIZES, FONTS} from "../../constants"

const SearchInput = ({value, handleChange, focused}) => {
    const [isFocused, setFocused] = useState(focused)
    return (
        <View style={{
        }}>
            <TextInput placeholder="Type to search..." 
                placeholderTextColor={COLORS.gray} style={{
                backgroundColor: isFocused ? COLORS.white : COLORS.white2,
                paddingHorizontal: SIZES.padding,
                paddingRight: SIZES.padding + 50,
                paddingVertical: SIZES.padding / 3,
                borderBottomWidth: isFocused ? 2 : 0,
                borderColor: COLORS.transparentBlack1,
                ...FONTS.body4
            }} 
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                value={value}
                onChange={e => handleChange(e)}
            />
            <TouchableOpacity style={{
                position: "absolute",
                right: 0,
                top: 0,
                height: "100%",
                justifyContent: "center",
                alignItems: "flex-end",
                width: 50,
                marginRight: SIZES.padding
            }}>
                <Image source={icons.search} style={{
                    height: 25,
                    width: 25,
                    tintColor: COLORS.gray
                }} />
            </TouchableOpacity>
        </View>
    )
}

export default SearchInput
