import React from 'react'
import { View, FlatList } from "react-native"
import {SIZES, COLORS} from "../../constants"
import AnimatedView from "./AnimatedView"

const CategoryLoader = () => {
    const arr = [1,2,3]
    return (
        <View>
            <View style={{
                paddingVertical: SIZES.padding * 1.5,
                paddingHorizontal: SIZES.padding,
                width: "80%" 
            }}>
                <AnimatedView delay={100} duration={1000} customStyle={{
                    backgroundColor: COLORS.gray2,
                }}/>
            </View>
             <FlatList
                data={arr}
                keyExtractor={item => `${item}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                    <Category index={index} lastItem={index === arr.length - 1} />
                )}
            />
            <View style={{
                marginTop: SIZES.padding,
                paddingHorizontal: SIZES.padding,
                flexDirection: "row",
                flexWrap: "wrap"
            }}>
                {arr.map((item) => <SubCategory key={item} />)}
            </View>
        </View>
    )
}

export default CategoryLoader

const Category = ({index, lastItem}) => {
    return <View style={{
            marginLeft: SIZES.padding,
            marginRight: lastItem ? SIZES.padding : 0
        }}>
            <View style={{
                borderRadius: SIZES.padding * 2,
                width: 150
            }}>
                 <AnimatedView delay={100} duration={1000} customStyle={{
                    height: 25,
                    backgroundColor: index === 0 ? COLORS.primary : COLORS.bg_primary_alert,
                }}/>
            </View>
    </View>
}

const SubCategory = () => {
    return <View style={{
                marginTop: SIZES.padding / 2,
                marginRight: SIZES.padding,
                width: 100
        }}>
        <AnimatedView delay={100} duration={1000} customStyle={{
            height: 20,
            backgroundColor: COLORS.gray2,
        }}/>
    </View>
}
