import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, Image} from "react-native"
import { COLORS, FONTS, SIZES, icons } from "../../../constants"

const SubCategory = ({subcategory, category, search, setSearch, url, setUrl}) => {
    const [checked, setChecked] = useState(false)
    const {id, name} = subcategory

    let searchCopy = search?.categories
    // checking if category exists in search state
    let categoryIndex = searchCopy?.findIndex((u) => u.id == category.id)

    let subCategoryIndex

    // searching if sub category exists in the category
    if (categoryIndex >= 0) {
        subCategoryIndex = searchCopy[categoryIndex].sub_categories?.findIndex(
        (u) => u.id == id
        )
    }

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

    // toggling sub category
    const toggleSubCategory = () => {
        // if category exists this run
        if (categoryIndex >= 0) {
            if (subCategoryIndex >= 0) {
                // remove sub_category function goes here
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
                } else if (category?.name === "Open To") {
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
                    url?.replace(
                        url?.split("&")?.find((el) => el.includes("eq")),
                        `filter=categories:eq:[${filterCategories}]`
                    )
                )
                }

                //   removing category in categories array
                if (searchCopy[categoryIndex].sub_categories.length === 0) {
                    searchCopy = searchCopy.filter((el) => el.id != category.id)
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
                        setUrl(
                            url?.replace(
                                url?.split("&")?.find((el) => el.includes("eq")),
                                `filter=categories:eq:[${filterCategories}]`
                            )
                        )
                        if (filterCategories?.length < 1) {
                            setUrl(
                                url?.replace(
                                    url?.split("&")?.find((el) => el.includes("eq")),
                                    ``
                                )
                            )
                        }
                    }
                }

                //   updating state with new categories
                setSearch({
                    ...search,
                    categories: searchCopy,
                })

                // uncheck the checkbox
                setChecked(false)
            }

            // if sub_category does not exists this run
            if (subCategoryIndex === -1) {
                searchCopy[categoryIndex] = {
                    ...searchCopy[categoryIndex],

                    sub_categories: searchCopy[categoryIndex].sub_categories.concat(subcategory),
                }

                if (category?.name === "Job Type") {
                    setUrl(
                        url?.replace(
                            url?.split("&")?.find((el) => el.includes("jobType")),
                            `filter=jobType:eq:${name}`
                        )
                    )
                } else if (category?.name === "Open To") {
                    setUrl(
                        url?.replace(
                            url?.split("&")?.find((el) => el.includes("openTo")),
                            `filter=openTo:eq:${name}`
                        )
                    )
                } else {
                    filterCategories.push(id)
                    setUrl(
                        url?.replace(
                            url?.split("&")?.find((el) => el.includes("eq")),
                            `filter=categories:eq:[${filterCategories}]`
                        )
                    )
                }

                setSearch({
                    ...search,
                    categories: searchCopy,
                })
                setChecked(true)
            }
        }

        // if categories do not exist in search
        if (categoryIndex === -1) {
            setSearch({
                ...search,
                categories: searchCopy.concat({
                    id: category.id,
                    name: category.name,
                    sub_categories: [subcategory],
                }),
            })
            if (category?.name === "Job Type") {
                setUrl(url + `&filter=jobType:eq:${name}`)
            } else if (category?.name === "Open To") {
                setUrl(url + `&filter=openTo:eq:${name}`)
            } else {
                filterCategories.push(id)
                filterCategories.push(category?.id)
                if (categoriesStr) {
                    setUrl(
                        url?.replace(
                            url?.split("&")?.find((el) => el.includes("eq")),
                            `filter=categories:eq:[${filterCategories}]`
                        )
                    )
                } else {
                    setUrl(url + `&filter=categories:eq:[${filterCategories}]`)
                }
            }

            setChecked(true)
        }
    }

    useEffect(() => {
        // updating UI when subcategory is removed from filter criteria
        if (subCategoryIndex === -1 || subCategoryIndex === undefined) {
            setChecked(false)
        } else {
            setChecked(true)
        }
    }, [search])


    return (
        <View style={{
            marginVertical: SIZES.padding / 4,
            marginRight: SIZES.padding,
        }}>
            <TouchableOpacity onPress={toggleSubCategory} style={{
                flexDirection: "row",
                alignItems: "center"
            }}>
                <View style={{
                    marginRight: SIZES.radius / 2
                }}>
                    <Image source={checked ? icons.check :icons.uncheck} style={{
                        tintColor: COLORS.primary,
                        height: 20,
                        width: 20,
                    }} />
                </View>
                <Text style={{
                    ...FONTS.body3,
                    color: COLORS.primary
                }}>{name}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SubCategory
