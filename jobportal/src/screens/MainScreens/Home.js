import React from 'react'
import { View, SafeAreaView, FlatList } from "react-native"
import {
 PrimaryHeader
} from "../../components"
import {
    Search,
    Recommends,
    Categories,
    RecentJobs,
    FeaturedCompanies
} from "../../components/home"
import {COLORS, SIZES, FONTS} from "../../constants"

const Home = ({navigation}) => {
    const emptyData = [];

    const renderNullItem = () => null;

    const ListFooterComponent = (
        <>
            {/* headline */}
            <View style={{
                    paddingVertical: SIZES.padding,
                }}
            >
                <PrimaryHeader label="Land to your destiny job today" />
            </View>

            {/* search component */}
            <Search />

            {/* recommends */}
            <Recommends />

            {/* categories */}
            <Categories />

            {/* recent jobs */}
            <RecentJobs />

            {/* companies */}
            <FeaturedCompanies />
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

export default Home
