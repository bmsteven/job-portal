import React from 'react'
import { View, FlatList } from "react-native"
import {SIZES, COLORS} from "../../constants"
import AnimatedView from "./AnimatedView"

const VerticalCompanyLoader = () => {

    let arr = [1,2,3]
    return (
        <View style={{
            marginBottom: SIZES.padding * 6,
            paddingHorizontal: SIZES.padding
        }}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: SIZES.padding * 1.5,
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

export default VerticalCompanyLoader

const CardLoader = () => {
    return (
        <View style={{
            marginVertical: SIZES.radius
        }}>
            <View style={{
                    backgroundColor: COLORS.white,
                    padding: SIZES.padding,
                    width: "100%",
                    borderRadius: SIZES.radius,
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
