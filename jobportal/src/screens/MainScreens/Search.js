import React, {useState} from 'react'
import {View, Text} from "react-native"
import {SearchInput} from "../../components/search" 

const Search = ({navigation}) => {
    const [keyword, setKeyword] = useState("")
    const handleChange = e => {
        setKeyword(e)
    }
    return (
        <View style={{
            flex: 1,
        }}>
            <SearchInput focused={true} value={keyword} handleChange={handleChange} navigation={navigation} />
        </View>
    )
}

export default Search
