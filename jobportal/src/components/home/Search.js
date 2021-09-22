import React from 'react'
import {View} from "react-native"
import {SearchInput} from "../"
import {SIZES} from "../../constants"

const Search = () => {
    return (
        <View style={{
            marginVertical: 8,
            paddingHorizontal: SIZES.padding
        }}>
            <SearchInput />
        </View>
    )
}

export default Search
