import React, {useState} from 'react'
import {View, TextInput} from "react-native"
import {SecondaryHeader} from "../"
import { COLORS, FONTS, SIZES } from "../../constants"
import {FormInput} from "../"

const FilterInputs = ({search, setSearch}) => {
    return (
        <View>
            {/* keyword */}
            <Keyword label="Keyword" search={search} setSearch={setSearch} />
        
            {/* location */}
            <Location label="Location" search={search} setSearch={setSearch} />

        </View>
    )
}

export default FilterInputs

const Keyword = ({search, setSearch}) => {
    const handleChange = (e, field) => {
        setSearch({
            ...search,
            name: e
        })
    }
    return <Card label="Keyword" value={search?.name} handleChange={handleChange} />
}

const Location = ({search, setSearch}) => {
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
        paddingVertical: SIZES.padding / 2,
        paddingHorizontal: SIZES.padding 
    }}>
        {/* <SecondaryHeader label={label} showLine={false}/> */}
        <View>
            <FormInput label={label} handleChange={handleChange} value={value} name={label} />
        </View>
    </View>
}
