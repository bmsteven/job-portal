import React, {useState} from 'react'
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

    // working on search url
    let urlBreak = url?.split("&")

    let input = urlBreak?.filter((el) => {
        return el.includes("name")
    })

    const handleChange = (e, field) => {
        setSearch({
            ...search,
            name: e
        })

        if (e.trim().length == 0) {
            setUrl(
                url.replace(
                url?.split("&")?.find((el) => el.includes("name")),
                    ``
                )
            )
        }
        if (e.trim().length > 0 && input) {
            setUrl(
                url.replace(
                url?.split("&")?.find((el) => el.includes("name")),
                    `&filter=name:ilike:${e}`
                )
            )
        }
        if (e.trim().length > 0 && (input === undefined || input?.length === 0)) {
            setUrl(url + `&filter=name:ilike:${e}`)
        }
    }

    return <Card label="Keyword" value={search?.name} handleChange={handleChange} />
}

const Location = ({search, setSearch, url, setUrl}) => {

    // working on search url
    let urlBreak = url?.split("&")

    let input = urlBreak?.filter((el) => {
        return el.includes("location")
    })

    const handleChange = (e, field) => {
        setSearch({
            ...search,
            location: e
        })
        if (e.trim().length == 0) {
            setUrl(
                url.replace(
                url?.split("&")?.find((el) => el.includes("location")),
                    ``
                )
            )
        }
        if (e.trim().length > 0 && input) {
            setUrl(
                url.replace(
                url?.split("&")?.find((el) => el.includes("location")),
                    `&filter=location:ilike:${e}`
                )
            )
        }
        if (e.trim().length > 0 && (input === undefined || input?.length === 0)) {
            setUrl(url + `&filter=location:ilike:${e}`)
        }
    }
    return <Card label="Location" value={search?.location} handleChange={handleChange}/>
}

const Card = ({label, handleChange, value}) => {
    return <View style={{
        paddingHorizontal: SIZES.padding 
    }}>
        {/* <SecondaryHeader label={label} showLine={false}/> */}
        <View>
            <FormInput label={label} handleChange={handleChange} value={value} name={label} />
        </View>
    </View>
}
