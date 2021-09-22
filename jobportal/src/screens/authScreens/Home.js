import React from 'react'
import { View, Text, TouchableOpacity } from "react-native"

const Home = ({navigation}) => {
    return (
        <View>
            <Text>Home</Text>
            <TouchableOpacity onpress={() => navigation.navigate("Home")}>
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onpress={() => navigation.navigate("Jobs")}>
                <Text>Jobs</Text>
            </TouchableOpacity>
            <TouchableOpacity onpress={() => navigation.navigate("Companies")}>
                <Text>Companies</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home
