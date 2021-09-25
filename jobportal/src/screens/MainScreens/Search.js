import React, {useState} from 'react'
import {View, Text} from "react-native"
import {SearchInput} from "../../components/search" 

const Search = () => {
    const [keyword, setKeyword] = useState("")
    const handleChange = e => {
        setKeyword(e)
    }
    console.log(keyword);
    return (
        <View>
            <SearchInput focused={true} value={keyword} handleChange={handleChange} />
        </View>
    )
}

export default Search
