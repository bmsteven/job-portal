import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity} from "react-native"
import {Template} from "./"
import {JobDetailsLoader} from "../loaders"
import {COLORS, SIZES, FONTS} from "../../constants"
import {useAlertDispatch} from "../../context/alert"
import {fetchJobDetails} from "../../context/actions/jobs"
import dayjs from "dayjs"

const JobDetails = ({job, setJob}) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const dispatch = useAlertDispatch()
    const {id, created, closeDate, location} = job

    useEffect(() => {
        let isMounted = true
        if(isMounted && !job?.description) {
            fetchJobDetails({
                setItems: setJob,
                id,
                setLoading,
                dispatch,
                setError
            })
        }
        return () => {
            isMounted = false
        }
    }, [])

    return (
        <Template>
            {loading ? <JobDetailsLoader /> : <>
                <View>
                    {created && <Card title="Posted" label={dayjs(created).format("MMM DD, YYYY")} />}
                    {job && <Card title="Application Deadline" label={dayjs(closeDate).format("MMM DD, YYYY HH:mm")} />}
                    {job?.email && <Card title="Email" label={job.email} isEmail={true}/>}
                    {job?.attachment && <Card title="Attachment" label={job.attachment} isPdf={true} />}
                    {job?.description && <Card title="Job Description" label={job.description} />}
                </View>
            </>}
        </Template>
    )
}

export default JobDetails

const Card = ({title, label, isEmail, isPdf}) => {
    return <View style={{
        marginBottom: SIZES.padding
    }}>
        <Text style={{
            ...FONTS.h3,
            marginBottom: SIZES.radius / 2
        }}>{title}</Text>
        {isEmail || isPdf ? <TouchableOpacity>     
        <Text style={{
            ...FONTS.body3,
            color: COLORS.primary
        }}>{label}</Text>
        </TouchableOpacity> :<Text style={{
            ...FONTS.body3,
        }}>{label}</Text>}
        
    </View>
}
