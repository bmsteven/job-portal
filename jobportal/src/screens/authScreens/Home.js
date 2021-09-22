import React from 'react'
import { View, Text, ScrollView } from "react-native"
import {
    Header
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
    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.bg,
            borderRadius: 32
        }}>
            <Header navigation={navigation}/>
            <ScrollView
                style={{
                    flex: 1,
                    padding: SIZES.padding
                }}
            >
                {/* headline */}
                <View style={{
                    marginVertical: SIZES.radius
                }}>
                    <Text style={{
                        ...FONTS.h2,
                    }}>
                        Land to your destiny job today
                    </Text>
                </View>

                {/* search component */}
                <Search />

                {/* recommends */}
                {/* <Recommends /> */}

                {/* categories */}
                {/* <Categories /> */}

                {/* recent jobs */}
                {/* <RecentJobs /> */}

                {/* companies */}
                {/* <FeaturedCompanies /> */}

            </ScrollView>
        </View>
    )
}

export default Home
