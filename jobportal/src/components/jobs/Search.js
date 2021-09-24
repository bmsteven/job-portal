import React from 'react'
import {TouchableOpacity, View, Image} from "react-native"
import {SearchBar} from "../"
import {icons, SIZES, COLORS} from "../../constants"

const Search = ({openFilter}) => {
    return (
        <TouchableOpacity style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 8,
            paddingHorizontal: SIZES.padding,
        }}
            onPress={openFilter}
        >
            <SearchBar customStyle={{
                width: SIZES.width - 100,
            }}/>
            <View style={{
                height: 45,
                width: 45,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.radius
            }}>
                <Image source={icons.filter} style={{
                    height: 25,
                    width: 25,
                    tintColor: COLORS.transparentWhite7
                }} />
            </View>
        </TouchableOpacity>
    )
}

export default Search
