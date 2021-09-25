import React, {useState, useEffect} from 'react'
import {View, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Modal} from "react-native"
import {COLORS, SIZES, FONTS} from "../../constants"
import {FilterInputs, Categories, FilterCriteria} from "./"
import {PrimaryHeader, TextButton} from "../"

const FilterModal = ({isVisible, closeFilter, search, setSearch, url, setUrl}) => {

    const [filters, setFilters] = useState([])
    // apply filters
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

    // TODO: Break name and location values by splitting with (" ") to fetch more trustworthy data

    // add keyword
    useEffect(() => {
        let isMounted = true
        if(isMounted) {
            if(search?.name?.trim().length > 0) {
                console.log("name");
                let urlBreak = url?.split("&")

                let inputArr = urlBreak?.filter((el) => {
                    return el.includes("name")
                })

                if(inputArr?.length > 0) {
                    setUrl(
                        url.replace(
                        url?.split("&")?.find((el) => el.includes("name")),
                            `&filter=name:ilike:${search?.name}`
                        )
                    )
                } else {
                    setUrl(`${url}&filter=name:ilike:${search?.name}`)
                }
            } else {
                setUrl(url.replace(url?.split("&")?.find((el) => el.includes("name")),``))
            }
        }
        return () => {
            isMounted = false
        }
    }, [search])

    // add location
    useEffect(() => {
        let isMounted = true
        if(isMounted) {
            if(search?.location?.trim().length > 0) {
                let urlBreak = url?.split("&")

                let inputArr = urlBreak?.filter((el) => {
                    return el.includes("location")
                })
                if(inputArr?.length > 0) {
                    setUrl(
                        url.replace(
                        url?.split("&")?.find((el) => el.includes("location")),
                            `&filter=location:ilike:${search?.location}`
                        )
                    )
                } else {
                    setUrl(`${url}&location:ilike:${search?.location}`)
                }
            } else {
                setUrl(url.replace(url?.split("&")?.find((el) => el.includes("location")),``))
            }
        }
        return () => {
            isMounted = false
        }
    }, [search])

    useEffect(() => {
        let isMounted = true
        if(isMounted) {
            // add categories to filters
            search?.categories?.forEach(category => {
                if(category?.id != 12) {
                    filterCategories.push(category.id)
                    category?.sub_categories?.forEach(sub => {
                        filterCategories.push(sub.id)
                    })
                // } else {
                    // setUrl(
                    //     url?.replace(
                    //     url?.split("&")?.find((el) => el.includes("jobType")),
                    //         `filter=jobType:eq:${category.name}`
                    //     )
                    // )
                }
            })

            setFilters(filterCategories)
        }
        return () => {
            isMounted = false
        }
    }, [search])

    useEffect(() => {
        if(filters.length > 0) {
            setUrl(
                url?.replace(
                    url?.split("&")?.find((el) => el.includes("eq")),
                    `filter=categories:eq:[${filters}]`
                )
            )
        } else {
            setUrl(
                url?.replace(
                    url?.split("&")?.find((el) => el.includes("eq")),
                    ``
                )
            )
        }
    }, [filters])

    // set search url by applying filters
    const createSearchUrl = () => {
        closeFilter()
    }

    console.log(filters, url);

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
        >
            <View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.transparentBlack7
                }}
            >

                {/* transparent background */}
                <TouchableWithoutFeedback
                    onPress={() => closeFilter()}
                >
                    <View style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0
                    }}/>
                </TouchableWithoutFeedback>
            
                <View style={{
                    position: "absolute",
                    left: 0,
                    top: "20%",
                    width: "100%",
                    height: "80%",
                    paddingTop: SIZES.padding,
                    borderTopRightRadius: SIZES.padding,
                    borderTopLeftRadius: SIZES.padding,
                    backgroundColor: COLORS.white,
                }}>

                    <ScrollView style={{
                        flex: 1
                    }}>

                        <PrimaryHeader label="Filter your search" customStyle={{
                            ...FONTS.h2
                        }} />

                        {/* name and location inputs */}
                        <FilterInputs search={search} setSearch={setSearch} />

                        {/* categories */}
                        <Categories search={search} setSearch={setSearch} />

                        {/* criteria */}
                        <FilterCriteria search={search} setSearch={setSearch}/>
                    </ScrollView>

                    {/* button */}
                    <TextButton label="Apply Filters"  containerStyle={{
                            marginHorizontal: SIZES.padding,
                            height: 45,
                            marginVertical: SIZES.padding / 2,
                            borderRadius: SIZES.radius / 2
                        }}
                        onPress={createSearchUrl}
                    />

                </View>

            </View>
        </Modal>
    )
}

export default FilterModal
