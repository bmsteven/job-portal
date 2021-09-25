import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, Image} from "react-native"
import { COLORS, FONTS, SIZES, icons } from "../../../constants"

const SubCategory = ({subcategory, category, search, setSearch}) => {
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

    // toggling sub category
    const toggleSubCategory = () => {
        // if category exists this run
        if (categoryIndex >= 0) {
        if (subCategoryIndex >= 0) 
            // remove sub_category function goes here
            searchCopy[categoryIndex].sub_categories = searchCopy[
                categoryIndex
            ].sub_categories.filter((el) => el.id !== id)

            //   removing category in categories array
            if (searchCopy[categoryIndex].sub_categories.length === 0)
                searchCopy = searchCopy.filter((el) => el.id != category.id)

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

            setSearch({
                ...search,
                categories: searchCopy,
            })
            setChecked(true)
        
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
