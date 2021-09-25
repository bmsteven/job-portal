import React from 'react'
import { View, FlatList } from "react-native"
import {SIZES, COLORS} from "../../constants"
import AnimatedView from "./AnimatedView"

const CompanyLoader = () => {

    let arr = [1,2,3]
    return (
        <View style={{
            marginBottom: SIZES.padding * 6,
        }}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: SIZES.padding * 1.5,
                paddingHorizontal: SIZES.padding
            }}>
                <View style={{
                    width: SIZES.width - 150
                }}>
                    <AnimatedView delay={300} customStyle={{
                        backgroundColor: COLORS.gray2,
                    }}/>
                </View>
                <View style={{
                    width: 50
                }}>
                    <AnimatedView delay={100} duration={1000} customStyle={{
                        backgroundColor: COLORS.transparentBlack1,
                    }}/>
                </View>
            </View>

            <FlatList
                data={arr}
                horizontal
                keyExtractor={item => `${item}`}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                    <CardLoader index={index + 1} length={arr.length}/>
                )}
            />

        </View>
    )
}

export default CompanyLoader

const CardLoader = ({index, length}) => {
    let lastItem = index === length
    return (
        <View style={{
                marginRight: lastItem ? SIZES.padding : 0,
        }}>
            <View style={{
                        backgroundColor: COLORS.white,
                        padding: SIZES.padding,
                        minWidth: 200,
                        maxWidth: 300,
                        borderRadius: SIZES.radius,
                        marginLeft: SIZES.padding,
                    }}
            >
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                    <View style={{
                        height: 40,
                        width: 40,
                        marginRight: SIZES.padding
                    }}>
                        <AnimatedView delay={100} duration={1200} customStyle={{
                            backgroundColor: COLORS.gray2,
                            height: 40,
                        }}/>
                    </View>
                    <View>
                        <View style={{
                            width: "60%"
                        }}>
                            <AnimatedView delay={100} duration={1200} customStyle={{
                                backgroundColor: COLORS.transparentBlack2,
                                height: 18,
                            }}/>
                        </View>
                        <View style={{
                            marginTop: SIZES.padding / 3,
                            width: 180,
                        }}>
                           <AnimatedView delay={100} duration={1200} customStyle={{
                                backgroundColor: COLORS.transparentBlack1,
                                height: 13,
                            }}/>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
