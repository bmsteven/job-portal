import React from 'react'
import {View, TouchableOpacity} from "react-native"
import {SearchBar} from "../"
import {SIZES} from "../../constants"

const Search = ({navigation}) => {
    return (
        <View style={{
            marginVertical: 8,
            paddingHorizontal: SIZES.padding
        }}>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <SearchBar navigation={navigation}/>
            </TouchableOpacity>
        </View>
    )
}

export default Search
