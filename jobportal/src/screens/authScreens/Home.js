import React from 'react'
import { View, Text } from "react-native"
import {
    Header
} from "../../components"

const Home = ({navigation}) => {
    return (
        <View>
            <Header navigation={navigation}/>
            {/* <Text>Home</Text> */}
        </View>
    )
}

export default Home
