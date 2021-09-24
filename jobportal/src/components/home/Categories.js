import React, {useState, useEffect} from 'react'
import {View, Text, FlatList} from "react-native"
import {useAuthState, useAuthDispatch} from "../../context/auth"
import {fetchCategories} from "../../context/actions/jobs"
import {SecondaryHeader} from "../"
import { COLORS, FONTS, SIZES } from "../../constants"
import {Category, SubCategory} from "./categories"

const Categories = () => {
    const [loading, setLoading] = useState(false)
    const [selected, setSelected] = useState(0)
    const {categories} = useAuthState()
    const dispatch = useAuthDispatch()
    const [filteredCategories, setFilteredCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)

    useEffect(() => {
        if (categories?.length <= 2) {
            fetchCategories({dispatch, setLoading})
        }
    }, [])

    useEffect(() => {
        setFilteredCategories(categories.filter(el => el.children.length > 0))
    }, [categories])

    useEffect(() => {
        setSelectedCategory(filteredCategories.find((el, index) => index === selected))
    }, [filteredCategories])

    useEffect(() => {
        let isMounted = true
        if(isMounted) setSelectedCategory(filteredCategories.find((el, index) => index === selected))
        return () => {
            isMounted = false
        }
    }, [selected])

    return (
        <View style={{
            marginVertical: SIZES.padding,
        }}>
            <View style={{
                paddingVertical: SIZES.padding * 1.5,
                paddingHorizontal: SIZES.padding 
            }}>
                <SecondaryHeader label="What are you looking for?" />
            </View>

            {/* render categories */}
            <FlatList
                data={filteredCategories}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                    <Category category={item} index={index} setSelected={setSelected} selected={selected === index} lastItem={index === filteredCategories.length - 1} />
                )}
            />

            {/* render children */}
            {
                selectedCategory?.children?.length > 0 && <View style={{
                    marginTop: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                    flexDirection: "row",
                    flexWrap: "wrap"
                }}>
                    {selectedCategory.children.map((subcategory) => <SubCategory key={subcategory.id} subcategory={subcategory} category={selectedCategory} />)}
                </View>
            }

        </View>
    )
}

export default Categories
