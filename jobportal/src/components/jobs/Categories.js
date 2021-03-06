import React, {useState, useEffect} from 'react'
import {View, Text, FlatList} from "react-native"
import {useAuthState, useAuthDispatch} from "../../context/auth"
import {fetchCategories} from "../../context/actions/jobs"
import {SecondaryHeader} from "../"
import { COLORS, FONTS, SIZES } from "../../constants"
import {Category, SubCategory} from "./categories"
import {CategoryLoader} from "../loaders"

const Categories = ({search, setSearch, url, setUrl}) => {
    const [loading, setLoading] = useState(true)
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
            } else {
                setLoading(false)
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
        <View>
            <View style={{
                paddingVertical: SIZES.padding / 2,
                paddingHorizontal: SIZES.padding 
            }}>
                <SecondaryHeader label="Categories" showLine={false}/>
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
                    marginTop: SIZES.padding / 2,
                    paddingHorizontal: SIZES.padding,
                    flexDirection: "row",
                    flexWrap: "wrap"
                }}>
                    {selectedCategory.children.map((subcategory) => <SubCategory key={subcategory.id} subcategory={subcategory} category={selectedCategory} search={search} setSearch={setSearch} url={url} setUrl={setUrl} />)}
                </View>
            }

        </View>
        </>
}
</>
    )
}

export default Categories
