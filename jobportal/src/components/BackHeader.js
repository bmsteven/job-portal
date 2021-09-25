import React, {useState} from 'react'
import {View, Text, TextInput, Image, TouchableOpacity} from "react-native"
import {icons, COLORS, SIZES, FONTS} from "../constants"

const BackHeader = ({isFocused, navigation, children}) => {
    return (
        <View style={{
            paddingRight: SIZES.padding,
            backgroundColor: isFocused ? COLORS.white : COLORS.white2,
            borderBottomWidth: isFocused ? 2 : 0,
            borderColor: COLORS.transparentBlack1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 50
        }}>
            {/* display back icon */}
            <TouchableOpacity style={{
                    backgroundColor: COLORS.transparentBlack1,
                    width: 60,
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%"
                }}
                onPress={() => navigation.goBack()}
            >
                <Image source={icons.back} style={{
                    height: 25,
                    width: 30,
                    resizeMode: "contain",
                    tintColor: COLORS.black,
                }} />
            </TouchableOpacity>
            {children}
        </View>
    )
}

export default BackHeader
