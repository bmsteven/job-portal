import React from 'react'
import {View, Text} from "react-native"
import {JobDetails, CompanyDetails, RelatedJobs} from "./"

const Details = ({job, selected, setJob, navigation, name}) => {
    return (
        <View>
            {selected === "Details" && <JobDetails job={job} setJob={setJob}/>}
            {selected === "Company" && <CompanyDetails company={job?.company}/>}
            {selected === "Related" && <RelatedJobs job={job} setJob={setJob} navigation={navigation} name={name}/>}
        </View>
    )
}

export default Details
