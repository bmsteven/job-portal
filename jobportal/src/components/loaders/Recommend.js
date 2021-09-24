import React from 'react'
import { View, FlatList } from "react-native"
import {SIZES, COLORS} from "../../constants"
import AnimatedView from "./AnimatedView"

const Recommend = () => {

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
                        backgroundColor: COLORS.transparentBlack2,
                    }}/>
                </View>
                <View style={{
                    width: 50
                }}>
                    <AnimatedView delay={100} duration={1000} customStyle={{
                        backgroundColor: COLORS.transparentBlack2,
                    }}/>
                </View>
            </View>

            <FlatList
                data={arr}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                    <CardLoader item={item} index={index + 1} length={arr?.length} />
                )}
            />

        </View>
    )
}

export default Recommend

const CardLoader = ({item, length, index}) => {
    let lastItem = index === length
    return (
        <View style={{
                alignSelf: "flex-end",
                marginRight: lastItem ? SIZES.padding : 0,
        }}>
            <View style={{
                    backgroundColor: index === 1? COLORS.primary : index % 2 === 0 ? COLORS.border_primary_alert : COLORS.border_success_alert,
                    padding: SIZES.padding,
                    minWidth: 200,
                    maxWidth: 260,
                    borderRadius: SIZES.radius,
                    marginLeft: SIZES.padding,
                }}
            >
                 <View style={{
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                }}>
                    <View style={{
                        height: 50,
                        width: 50,
                    }}>
                        <AnimatedView delay={100} duration={1000} customStyle={{
                            height: 50,
                            borderRadius: SIZES.radius / 2,
                            backgroundColor: index === 1? COLORS.bg_primary_alert : index % 2 === 0 ? COLORS.bg_primary_alert : COLORS.bg_success_alert,
                        }}/>
                    </View>
                    <View style={{
                        height: 30,
                        width: 30,
                    }}>
                        <AnimatedView delay={100} duration={1000} customStyle={{
                            height: 30,
                            backgroundColor: COLORS.transparentWhite2,
                            borderRadius: SIZES.radius / 2
                        }}/>
                    </View>
                </View>
                <View style={{
                    marginTop: SIZES.padding,
                    width: "60%"
                }}>
                    <AnimatedView delay={100} duration={1000} customStyle={{
                            height: 20,
                            backgroundColor: COLORS.transparentWhite4,
                            borderRadius: SIZES.radius / 2
                        }}/>
                </View>
                <View style={{
                    marginTop: SIZES.padding,
                    width: "100%"
                }}>
                    <AnimatedView delay={100} duration={1000} customStyle={{
                            height: 30,
                            backgroundColor: COLORS.transparentWhite4,
                            borderRadius: SIZES.radius / 2
                        }}/>
                </View>
            </View>
        </View>
    )
}
