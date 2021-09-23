import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, FlatList} from "react-native"
import { VerticalJob, SecondaryHeader } from "../"
import { COLORS, FONTS, SIZES } from "../../constants"
import {fetchJobs} from "../../context/actions/jobs"
import {useAuthState} from "../../context/auth"

const RecentJobs = () => {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetchJobs({
            setItems: setJobs,
            setLoading,
        })
    }, [])

    return (
        <>{!loading && 
        <View style={{
            marginVertical: SIZES.padding,
            paddingBottom: SIZES.padding * 5
        }}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: SIZES.padding * 1.5,
                paddingHorizontal: SIZES.padding
            }}>
                <SecondaryHeader label="Recent Jobs" />
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
                        <VerticalJob job={item} />
                    )}
                />
             </View>
        </View>
}</>
    )
}

export default RecentJobs
