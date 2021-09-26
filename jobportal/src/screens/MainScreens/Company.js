import React, {useState} from 'react'
import {View, Text} from "react-native"
import {PageHeader} from "../../components" 

const Company = ({navigation, route}) => {
    // console.log(route.params?.id);

    return (
        <View style={{
            flex: 1,
        }}>
            <PageHeader label="Company" navigation={navigation}/>
        </View>
    )
}

export default Company
