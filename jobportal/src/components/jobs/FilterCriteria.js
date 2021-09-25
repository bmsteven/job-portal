import React from 'react'
import {View, Text, Image, TouchableOpacity} from "react-native"
import {SecondaryHeader} from "../"
import { COLORS, FONTS, SIZES, icons } from "../../constants"

const FilterCriteria = ({search, setSearch, url, setUrl}) => {
    return (
        <>{ (search?.name?.trim().length > 0 || search?.location?.trim().length > 0 || search?.categories?.length > 0) && 
            <View style={{
                paddingVertical: SIZES.padding,
                paddingHorizontal: SIZES.padding 
            }}>
                <SecondaryHeader label="Selected Criteria" showLine={false} customStyle={{
                    color: COLORS.primary
                }}/>

                {/* render criteria */}

                {/* keyword */}
                {search?.name?.trim().length > 0 && <FilterItem label="Keyword: " value={search.name} onDelete={() => {
                    setSearch({
                        ...search,
                        name: ""
                    })
                    setUrl(
                        url.replace(
                            url?.split("&")?.find((el) => el.includes("name")),
                            ``
                        )
                    )
                }} />}

                {/* location */}
                {search?.location?.trim().length > 0 && <FilterItem label="Location: " value={search.location} onDelete={() => {
                    setSearch({
                        ...search,
                        location: ""
                    })
                    setUrl(
                        url.replace(
                            url?.split("&")?.find((el) => el.includes("location")),
                            ``
                        )
                    )
                }} />}

                {search?.categories?.length > 0 && <FilterCategory search={search} setSearch={setSearch} url={url} setUrl={setUrl} />}

            </View>}
        </>
    )
}

export default FilterCriteria

const FilterItem = ({label, value, onDelete}) => {
    return <View style={{
        flexDirection: "row",
        paddingTop: SIZES.radius
    }}>
        <Text style={{
            ...FONTS.body3
        }}>{label}</Text>
        <Item onDelete={onDelete} value={value}/>
    </View>
}

const FilterCategory = ({search, setSearch, url, setUrl}) => {
    return <View>
        {search?.categories?.map((category) => <Category category={category} key={category.id} setSearch={setSearch} search={search} url={url} setUrl={setUrl} />)}
    </View>
}

const Category = ({category, search, setSearch, url, setUrl}) => {
    return <View style={{
        flexDirection: "row",
        paddingTop: SIZES.radius
    }}>
        <Text numberOfLines={1} style={{
            ...FONTS.body3,
            maxWidth: 130,
        }}>{category?.name}</Text>
        <Text>: </Text>
        <View style={{
            flexDirection: "row",
            flexWrap: "wrap"
        }}>
            {category?.sub_categories?.map((sub) => <SubCategory key={sub.id} sub={sub} search={search} setSearch={setSearch} category={category} url={url} setUrl={setUrl}/>)}
        </View>
    </View>
}

const SubCategory = ({sub, search, setSearch, category, url, setUrl }) => {
    let { name, id } = sub

    
    // working on search url
    let urlBreak = url?.split("&")

    let categoriesArray = []

    let filterCategories = []

    let categoriesStr = urlBreak?.find((el) => {
        return el.includes("categories")
    })

    if (categoriesStr) {
        categoriesArray = categoriesStr?.split(":")
        categoriesArray = categoriesArray[categoriesArray?.length - 1]
        categoriesArray = categoriesArray?.split("[")
        categoriesArray = categoriesArray[1]?.split("]")
        if (categoriesArray[0]?.length > 1) {
        categoriesArray = categoriesArray[0]?.split(",")
        }
        filterCategories = categoriesArray
    }

    const removeCriteria = () => {
        //   categories copy
        let searchCopy = search?.categories

        // checking category index in categories array
        let categoryIndex = searchCopy?.findIndex((u) => u.id == category.id)

        // checking if subcategory exists
        let SubCategoryIndex = searchCopy[categoryIndex]?.sub_categories?.findIndex(
            (u) => u.id == id
        )

        if (SubCategoryIndex >= 0) {
            // removing sub category in sub categories array
            searchCopy[categoryIndex].sub_categories = searchCopy[
                categoryIndex
            ].sub_categories.filter((el) => el.id !== id)

            if (category?.name === "Job Type") {
                setUrl(
                    url?.replace(
                        url?.split("&")?.find((el) => el.includes("jobType")),
                        `filter=jobType:eq:${name}`
                    )
                )
            } else if (category?.name === "Job Type") {
                setUrl(
                    url?.replace(
                        url?.split("&")?.find((el) => el.includes("openTo")),
                        `filter=openTo:eq:${name}`
                    )
                )
            } else {
                filterCategories = filterCategories.filter((el) => {
                    return el !== id
                })

                setUrl(
                    url.replace(
                        url?.split("&")?.find((el) => el.includes("eq")),
                        `filter=categories:eq:[${filterCategories}]`
                    )
                )
            }

            //   removing category in categories array
            if (searchCopy[categoryIndex].sub_categories.length === 0) {
                if (category?.name === "Job Type") {
                    setUrl(
                        url?.replace(
                            url?.split("&")?.find((el) => el.includes("jobType")),
                            ``
                        )
                    )
                } else if (category?.name === "Open To") {
                    setUrl(
                        url?.replace(
                            url?.split("&")?.find((el) => el.includes("openTo")),
                            ``
                        )
                    )
                } else {
                    filterCategories = filterCategories.filter((el) => {
                        return el !== category?.id
                    })

                    if (filterCategories?.length === 0) {
                        setUrl(
                            url.replace(
                                url?.split("&")?.find((el) => el.includes("eq")),
                                ``
                            )
                        )
                    } else {
                        setUrl(
                            url.replace(
                                url?.split("&")?.find((el) => el.includes("eq")),
                                `filter=categories:eq:[${filterCategories}]`
                            )
                        )
                    }
                }
                searchCopy = searchCopy.filter((el) => el.id != category.id)
            }
            //   updating state with new categories
            setSearch({
                ...search,
                categories: searchCopy,
            })
        }
    }

    return <Item value={name} numberOfLines={1} onDelete={removeCriteria} />
}


const Item = ({onDelete, value, numberOfLines}) => {
    return <View style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.transparentBlack1,
        paddingVertical: SIZES.radius / 2,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
        margin: SIZES.radius,
        marginHorizontal: SIZES.radius / 2,
        marginTop: 0,
        maxWidth: numberOfLines ? "100%" : "70%",
    }}>
            <Text numberOfLines={numberOfLines} style={{
                ...FONTS.body4,
                maxWidth: "80%"
            }}>{value}</Text>
            <TouchableOpacity onPress={onDelete} style={{
                paddingLeft: SIZES.padding / 2,
            }}>
                <Image source={icons.bin} style={{
                    height: 20,
                    width: 20,
                    tintColor: COLORS.red
                }} />
            </TouchableOpacity>
    </View>
}