import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, FlatList} from "react-native"
import {SecondaryHeader} from "../"
import {HorizontalCompany} from "../"
import { COLORS, FONTS, SIZES } from "../../constants"
import {fetchFeaturedCompanies} from "../../context/actions/company"
import {CompanyLoader} from "../loaders"

const FeaturedCompanies = () => {
    const [companies, setCompanies] = useState([])
    const [loading, setLoading] = useState(false) 

    useEffect(() => {
        fetchFeaturedCompanies({
            setLoading, setItems: setCompanies
        })
    }, [])

    return (
        <>{loading ? <>
            <CompanyLoader />
        </> : 

         <View style={{
            marginVertical: SIZES.padding,
            marginBottom: SIZES.padding * 6,
        }}>
        {companies?.length > 0 && <>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: SIZES.padding,
                paddingBottom: SIZES.padding * 1.5, 
            }}>
                <SecondaryHeader label="Featured Companies" />
                <TouchableOpacity>
                    <Text style={{
                        ...FONTS.body4,
                        color: COLORS.primary,
                    }}>
                        View All
                    </Text>
                </TouchableOpacity>
            </View>

            {/* render companies */}
            <FlatList
                data={companies}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                    <HorizontalCompany company={item} index={index + 1} length={companies?.length} />
                )}
            />
            </>
}
        </View>}
        </>
    )
}

export default FeaturedCompanies
