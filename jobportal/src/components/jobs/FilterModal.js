import React, {useState, useEffect} from 'react'
import {View, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Modal} from "react-native"
import {COLORS, SIZES, FONTS} from "../../constants"
import {FilterInputs, Categories, FilterCriteria} from "./"
import {PrimaryHeader, TextButton} from "../"

const FilterModal = ({isVisible, closeFilter, search, setSearch, url, setUrl}) => {

    const [filters, setFilters] = useState([])

    // set search url by applying filters
    const applyFilters = () => {
        closeFilter()
    }

    console.log(url);

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
                        <FilterInputs search={search} setSearch={setSearch} url={url} setUrl={setUrl} />

                        {/* categories */}
                        <Categories search={search} setSearch={setSearch} url={url} setUrl={setUrl} />

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
                        onPress={applyFilters}
                    />

                </View>
            </View>
        </Modal>
    )
}

export default FilterModal
