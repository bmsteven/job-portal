import React, {useState} from 'react'
import { View, SafeAreaView, FlatList } from "react-native"
import {PageHeader, Nav} from "../../components"
import {Footer, JobProfile, Details, ApplicationModal} from "../../components/job"

let navItems = [
    {
        id: 1,
        label: "Details",
    },
    {
        id: 2,
        label: "Company",
    },
    {
        id: 3,
        label: "Related",
    },
]

const Job = ({navigation, route}) => {
    const [openModal, setOpenModal] = useState(false)
    const [isVisible, setVisible] = useState(false)
    const [application, setApplication] = useState(false)
    const [selected, setSelected] = useState("Details")
    const [job, setJob] = useState(route.params?.job)
    const logo = route.params?.logo

    const openApplicationModal = () => {
        setVisible(true)
    }

    const closeModal = () => {
        setVisible(false)
    }
    
    const emptyData = [];

    const renderNullItem = () => null;

    const ListFooterComponent = (
        <View style={{
            flex: 1,
        }}>
            {/* display profile details */}
            <JobProfile job={job} logo={logo} />

            {/* display job navigation */}
            <Nav navItems={navItems} setSelected={setSelected} selected={selected}/>

            {/* display details */}
            <Details selected={selected} job={job} setJob={setJob} navigation={navigation} />
        </View>
    )

    return (
        <View style={{
            flex: 1,
        }}>
            <PageHeader label="Job" navigation={navigation}/>
            <SafeAreaView
                style={{
                    flex: 1,
                }}
            >
                <FlatList
                    data={emptyData}
                    renderItem={renderNullItem}
                    ListFooterComponent={ListFooterComponent}
                />
            </SafeAreaView>

            {/* btns footer showing if not applied, show apply btn else show application details button */}
            <Footer id={route.params?.id} openModal={openApplicationModal} application={application} setApplication={setApplication} />
            
            {/* application modal */}
            {isVisible && <ApplicationModal closeModal={closeModal} isVisible={isVisible} application={application} job={job}/>}
        </View>
    )
}

export default Job
