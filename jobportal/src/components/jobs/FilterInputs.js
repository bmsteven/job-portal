import React from 'react'
import {View, TextInput} from "react-native"
import {SecondaryHeader} from "../"
import { COLORS, FONTS, SIZES } from "../../constants"
import {FormInput} from "../"

const FilterInputs = ({search, setSearch, url, setUrl}) => {
    return (
        <View>
            {/* keyword */}
            <Keyword label="Keyword" search={search} setSearch={setSearch} url={url} setUrl={setUrl} />
        
            {/* location */}
            <Location label="Location" search={search} setSearch={setSearch} url={url} setUrl={setUrl} />

        </View>
    )
}

export default FilterInputs

const Keyword = ({search, setSearch, url, setUrl}) => {

    const handleChange = (e, field) => {
        setSearch({
            ...search,
            name: e
        })
    }

    return <Card label="Keyword" value={search?.name} handleChange={handleChange} />
}

const Location = ({search, setSearch, url, setUrl}) => {

    const handleChange = (e, field) => {
        setSearch({
            ...search,
            location: e
        })
    }
    return <Card label="Location" value={search?.location} handleChange={handleChange}/>
}

const Card = ({label, handleChange, value}) => {
    return <View style={{
        paddingHorizontal: SIZES.padding 
    }}>
        <View>
            <FormInput label={label} handleChange={handleChange} value={value} name={label} />
        </View>
    </View>
}
