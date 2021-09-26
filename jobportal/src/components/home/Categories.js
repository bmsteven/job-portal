import React, {useState, useEffect} from 'react'
import {View, Text, FlatList} from "react-native"
import {useAuthState, useAuthDispatch} from "../../context/auth"
import {fetchCategories} from "../../context/actions/jobs"
import {SecondaryHeader} from "../"
import { COLORS, FONTS, SIZES } from "../../constants"
import {Category, SubCategory} from "./categories"
import {CategoryLoader} from "../loaders"

const Categories = ({navigation}) => {
    const [loading, setLoading] = useState(false)
    const [selected, setSelected] = useState(0)
    const {categories} = useAuthState()
    const dispatch = useAuthDispatch()
    const [filteredCategories, setFilteredCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)

    useEffect(() => {
        let isMounted = true
        if(isMounted)
            if (categories?.length <= 1 || categories === undefined ) {
                fetchCategories({dispatch, setLoading})
            }
        return () => {
            isMounted = false
        }
    }, [])

    useEffect(() => {
        setFilteredCategories(categories?.filter(el => el.children.length > 0))
    }, [categories])

    useEffect(() => {
        setSelectedCategory(filteredCategories?.find((el, index) => index === selected))
    }, [filteredCategories])

    useEffect(() => {
        let isMounted = true
        if(isMounted) setSelectedCategory(filteredCategories?.find((el, index) => index === selected))
        return () => {
            isMounted = false
        }
    }, [selected])

    return (
        <>{loading ? <>
            <CategoryLoader />
        </> : <>
        <View style={{
            marginVertical: SIZES.padding,
        }}>
            <View style={{
                paddingVertical: SIZES.padding * 1.5,
                paddingHorizontal: SIZES.padding 
            }}>
                <SecondaryHeader label="What are you looking for?" showLine={true} />
            </View>

            {/* render categories */}
            {filteredCategories?.length > 0 &&
                <FlatList
                    data={filteredCategories}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index}) => (
                        <Category category={item} index={index} setSelected={setSelected} selected={selected === index} lastItem={index === filteredCategories.length - 1} />
                    )}
                />
            }

            {/* render children */}
            {
                selectedCategory?.children?.length > 0 && <View style={{
                    marginTop: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                    flexDirection: "row",
                    flexWrap: "wrap"
                }}>
                    {selectedCategory.children.map((subcategory) => <SubCategory key={subcategory.id} subcategory={subcategory} category={selectedCategory} navigation={navigation} />)}
                </View>
            }

        </View>
        </>
}
</>
    )
}

export default Categories
