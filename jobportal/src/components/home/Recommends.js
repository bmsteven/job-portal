import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, FlatList } from "react-native"
import { HorizontalJob, SecondaryHeader } from "../"
import { COLORS, FONTS, SIZES } from "../../constants"
import {fetchRecommendedJobs} from "../../context/actions/jobs"
import {useAuthState} from "../../context/auth"
import {Recommend} from "../loaders"

const Recommends = ({navigation}) => {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(false)
    const {user, isAuthenticated} = useAuthState()
    useEffect(() => {
        let isMounted = true
        if(isAuthenticated && isMounted)
            fetchRecommendedJobs({
                setItems: setJobs,
                setLoading,
                params: {
                    keyword: user?.title,
                    location: user?.location
                }
            })
        return () => {isMounted = false}
    }, [user])

    return (
        <>{isAuthenticated && <> 
        {loading ? <>
            <Recommend />
        </> : <>
        {jobs?.length > 0 && 
             <View style={{
            marginVertical: SIZES.padding
        }}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: SIZES.padding * 1.5,
                paddingHorizontal: SIZES.padding
            }}>
                <SecondaryHeader showLine={true} label="For you" />
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
            <FlatList
                data={jobs}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                    <HorizontalJob job={item} index={index + 1} length={jobs?.length} navigation={navigation} />
                )}
            />
        </View>
}
        </>}
       
        </>
}</>
    )
}

export default Recommends
