import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, FlatList} from "react-native"
import {PrimaryHeader} from "../"
import {VerticalCompany} from "../"
import { COLORS, FONTS, SIZES } from "../../constants"
import {fetchCompanies} from "../../context/actions/company"
import {VerticalCompanyLoader} from "../loaders"
import {useAlertDispatch} from "../../context/alert"


const FeaturedCompanies = () => {
    const [companies, setCompanies] = useState([])
    const [loading, setLoading] = useState(false) 
    const dispatch = useAlertDispatch()
    useEffect(() => {
        fetchCompanies({
            setLoading, setItems: setCompanies, dispatch
        })
    }, [])

    return (
        <>{loading ? <>
            <VerticalCompanyLoader />
        </> : 

         <View style={{
            marginVertical: SIZES.padding,
            marginBottom: SIZES.padding * 6,
        }}>
        {companies?.length > 0 && <>
            <View style={{
            }}>
                <PrimaryHeader customStyle={{
                    ...FONTS.h2,
                }} label="· Companies"/>
            </View>

            {/* render companies */}
            <FlatList
                data={companies}
                keyExtractor={item => `${item.id}`}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                    <VerticalCompany company={item} index={index + 1} length={companies?.length} />
                )}
            />
            </>
}
        </View>}
        </>
    )
}

export default FeaturedCompanies
