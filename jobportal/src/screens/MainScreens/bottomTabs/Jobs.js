import React, {useState} from 'react'
import { View, SafeAreaView, FlatList } from "react-native"
import {
 PrimaryHeader
} from "../../../components"
import {
    Search,
    JobsList,
    FilterModal
} from "../../../components/jobs"
import {SIZES} from "../../../constants"

const Jobs = ({navigation}) => {

    const [isVisible, setVisible] = useState(false)

    const [search, setSearch] = useState({
        name: "",
        location: "",
        categories: []
    })
    const [url, setUrl] = useState("")

    const openFilter = () => {
        setVisible(true)
    }

    const closeFilter = () => {
        setVisible(false)
    }

    const emptyData = [];

    const renderNullItem = () => null;

    const ListFooterComponent = (
        <>
            {/* headline */}
            <View style={{
                    paddingVertical: SIZES.padding,
                }}
            >
                <PrimaryHeader label="Lets find you a job" />

                {/* search */}
                <Search openFilter={openFilter}/>

                {/* jobs list */}
                <JobsList />

                {/* filter modal */}
                {isVisible && <FilterModal closeFilter={closeFilter} isVisible={isVisible} setSearch={setSearch} search={search} url={url} setUrl={setUrl} />}

            </View>
        </>
    )

    return (
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
    )
}

export default Jobs
