import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, FlatList} from "react-native"
import { VerticalJob, SecondaryHeader } from "../"
import { COLORS, FONTS, SIZES } from "../../constants"
import {fetchJobs} from "../../context/actions/jobs"
import {useAlertDispatch} from "../../context/alert"
import {JobLoader} from "../loaders"

const RecentJobs = ({navigation}) => {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(false)
    const dispatch = useAlertDispatch()
    
    useEffect(() => {
        fetchJobs({
            setItems: setJobs,
            setLoading,
            dispatch
        })
    }, [])

    return (
        <>{loading ? <>
            <JobLoader />
        </> : 
        <>{jobs?.length > 0 && 
            <View style={{
                marginVertical: SIZES.padding,
            }}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: SIZES.padding * 1.5,
                paddingHorizontal: SIZES.padding
            }}>
                <SecondaryHeader showLine={true} label="Recent Jobs" />
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
            <View>
                <FlatList
                    data={jobs}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item, index}) => (
                        <VerticalJob job={item} navigation={navigation} />
                    )}
                />
             </View>
        </View>
}</>
}</>
    )
}

export default RecentJobs
