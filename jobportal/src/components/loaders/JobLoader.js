import React from 'react'
import { View, FlatList } from "react-native"
import {SIZES, COLORS} from "../../constants"
import AnimatedView from "./AnimatedView"

const JobLoader = () => {

    let arr = [1,2,3]
    return (
        <View style={{
            marginVertical: SIZES.padding
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
                keyExtractor={item => `${item}`}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                    <CardLoader />
                )}
            />

        </View>
    )
}

export default JobLoader

const CardLoader = () => {
    return (
        <View style={{
                marginHorizontal: SIZES.padding,
        }}>
            <View style={{
                    backgroundColor: COLORS.transparentWhite5,
                    padding: SIZES.padding,
                    width: "100%",
                    borderRadius: SIZES.radius,
                    marginBottom: SIZES.padding,
                }}
            >
                <View style={{
                    marginRight: SIZES.padding / 2,
                    width: "100%"
                }}>
                    <AnimatedView delay={100} duration={1200} customStyle={{
                        backgroundColor: COLORS.transparentBlack1,
                    }}/>
                </View>

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: SIZES.padding / 1.5
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
