import React, {useState, useEffect} from 'react'
import {View, Text, FlatList} from "react-native"
import {JobLoader} from "../loaders"
import {VerticalJob, PrimaryHeader} from "../"
import {FONTS,SIZES} from "../../constants"
import {fetchRecommendedJobs} from "../../context/actions/jobs"
import {useAlertDispatch} from "../../context/alert"

const RelatedJobs = ({job, setJob, navigation, name}) => {
    const [loading, setLoading] = useState(true)
    const [meassage, setMessage] = useState(null)
    const dispatch = useAlertDispatch()

    useEffect(() => {
        let isMounted = true
        if(isMounted && job?.jobs === undefined) {
            fetchRecommendedJobs({
                setMessage,
                setItems: setJob,
                setLoading,
                dispatch,
                params: {
                    keyword: job?.name,
                    location: job?.location
                },
                id: job?.id
            })
        } else {
            setLoading(false)
        }
        return () => {
            isMounted = false
        }
    }, [])

    return (
        <View style={{
            marginVertical: SIZES.padding,
            // marginBottom: SIZES.padding * 6,
        }}>
            {loading ? <JobLoader /> : 
            <View>
                <PrimaryHeader customStyle={{
                    ...FONTS.h2,
                    marginBottom: SIZES.radius
                }} label="· Related Jobs"/>
                {/* renderJobs */}
                <FlatList
                    data={job?.jobs}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item, index}) => (
                        <VerticalJob job={item} screen="jobs" navigation={navigation} route={name} />
                    )}
                />
            </View>
            }
        </View>
    )
}

export default RelatedJobs
