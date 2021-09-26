import React from 'react'
import {View} from "react-native"
import {SIZES, COLORS} from "../../constants"
import AnimatedView from "./AnimatedView"

const JobDetailsLoader = () => {
    return (
        <View>
            <View style={{
                marginBottom: SIZES.padding
            }}>
                <View style={{
                    width: 100,
                    height: 20,
                    marginBottom: SIZES.radius
                }}>
                    <AnimatedView customStyle={{
                        backgroundColor: COLORS.transparentBlack1,
                    }}/>
                </View>
                <View style={{
                    width: "100%",
                    height: 30
                }}>
                    <AnimatedView customStyle={{
                        backgroundColor: COLORS.transparentBlack1,
                        height: 30
                    }}/>
                </View>
            </View>
            <View style={{
                marginBottom: SIZES.padding
            }}>
                <View style={{
                    width: 100,
                    height: 20,
                    marginBottom: SIZES.radius
                }}>
                    <AnimatedView delay={100} customStyle={{
                        backgroundColor: COLORS.transparentBlack1,
                        height: 20
                    }}/>
                </View>
                <View style={{
                    width: "100%",
                    height: 80
                }}>
                    <AnimatedView delay={100} customStyle={{
                        backgroundColor: COLORS.transparentBlack1,
                        height: 80
                    }}/>
                </View>
            </View>
        </View>
    )
}

export default JobDetailsLoader
