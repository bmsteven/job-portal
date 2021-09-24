import React from 'react'
import {View, Text, Image, TouchableOpacity} from "react-native"
import {SecondaryHeader} from "../"
import { COLORS, FONTS, SIZES, icons } from "../../constants"

const FilterCriteria = ({search, setSearch}) => {
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
                {search?.name?.trim().length > 0 && <FilterItem label="Keyword: " value={search.name} onDelete={() => setSearch({
                    ...search,
                    name: ""
                })} />}

                {/* location */}
                {search?.location?.trim().length > 0 && <FilterItem label="Location: " value={search.location} onDelete={() => setSearch({
                    ...search,
                    location: ""
                })} />}

                {search?.categories?.length > 0 && <FilterCategory search={search} setSearch={setSearch} />}

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

const FilterCategory = ({search, setSearch}) => {
    return <View>
        {search?.categories?.map((category) => <Category category={category} key={category.id} setSearch={setSearch} search={search} />)}
    </View>
}

const Category = ({category, search, setSearch}) => {
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
            {category?.sub_categories?.map((sub) => <SubCategory key={sub.id} sub={sub} search={search} setSearch={setSearch} category={category} />)}
        </View>
    </View>
}

const SubCategory = ({sub, search, setSearch, category }) => {
    let { name, id } = sub

    const removeCriteria = () => {
        //   categories copy
        let searchCopy = search?.categories

        // checking category index in categories array
        let categoryIndex = searchCopy?.findIndex((u) => u.id == category.id)

        // checking if subcategory exists
        let SubCategoryIndex = searchCopy[categoryIndex]?.sub_categories?.findIndex((u) => u.id == id)

        if (SubCategoryIndex >= 0) 
            // removing sub category in sub categories array
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