import React, {useEffect, useState} from 'react'
import {View, FlatList} from "react-native"
import {
    PrimaryHeader
} from "../"
import {FONTS,SIZES} from "../../constants"
import {JobLoader} from "../loaders"
import {fetchJobs} from "../../context/actions/jobs"
import { VerticalJob } from "../"
import {useAlertDispatch} from "../../context/alert"

const JobsList = ({navigation}) => {
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
        <View style={{
            marginVertical: SIZES.padding,
            marginBottom: SIZES.padding * 6,
        }}>
        {loading ? <JobLoader /> : 
            <View>
                <PrimaryHeader customStyle={{
                    ...FONTS.h2,
                    marginBottom: SIZES.radius
                }} label="· Recent Jobs"/>
                {/* renderJobs */}
                <FlatList
                    data={jobs}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item, index}) => (
                        <VerticalJob job={item} screen="jobs" navigation={navigation} />
                    )}
                />
            </View>
            }
        </View>
    )
}

export default JobsList
