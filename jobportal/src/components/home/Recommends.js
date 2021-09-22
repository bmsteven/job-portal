import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, FlatList} from "react-native"
import { HorizontalJob } from "../"
import { COLORS, FONTS, SIZES } from "../../constants"
import {fetchRecommendedJobs} from "../../context/actions/jobs"
import {useAuthState} from "../../context/auth"

const Recommends = () => {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(false)
    const {user, isAuthenticated} = useAuthState()
    useEffect(() => {
        fetchRecommendedJobs({
            setItems: setJobs,
            setLoading,
            params: {
                keyword: user?.title,
                location: user?.location
            }
        })
    }, [])

    return (
        <>{isAuthenticated && !loading && 
        <View style={{
            marginVertical: SIZES.padding
        }}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: SIZES.padding ,
                paddingHorizontal: SIZES.padding
            }}>
                <Text style={{
                    ...FONTS.h3,
                    width: SIZES.width - 120
                }}>Recommended for you</Text>
                <TouchableOpacity>
                    <Text style={{
                        ...FONTS.body4,
                        color: COLORS.primary,
                    }}>
                        View All
                    </Text>
                </TouchableOpacity>
            </View>
            
            {/* render jobs */}
            <View style={{
                // marginRight: SIZES.padding
            }}>
                <FlatList
                    data={jobs}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index}) => (
                        <HorizontalJob job={item} lastItem={index === jobs?.length - 1} />
                    )}
                />
             </View>
        </View>
}</>
    )
}

export default Recommends
