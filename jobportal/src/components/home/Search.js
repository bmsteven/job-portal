import React from 'react'
import {View} from "react-native"
import {SearchBar} from "../"
import {SIZES} from "../../constants"

const Search = () => {
    return (
        <View style={{
            marginVertical: 8,
            paddingHorizontal: SIZES.padding
        }}>
            <SearchBar />
        </View>
    )
}

export default Search
