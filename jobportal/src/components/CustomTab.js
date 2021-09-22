import React from 'react'
import {View, Text, TouchableWithoutFeedback, StyleSheet, Image} from "react-native"
import Animated, {useSharedValue} from "react-native-reanimated"
import {COLORS, SIZES, FONTS, icons} from "../constants"
import {useUIDispatch} from "../context/UI"
import {SELECTED} from "../context/types"

const CustomTab = ({label, icon, isSelected, outerStyle, textStyle, outerContainerStyle, innerContainerStyle, tintColorStyle, navigation}) => {
    const dispatch = useUIDispatch()
    return (
        <Animated.View 
            style={[
                {
                    justifyContent: "center",
                    alignItems: "center",
                }, outerStyle
            ]}
                
        >
            <TouchableWithoutFeedback 
                onPress={() => {
                    dispatch({
                        type: SELECTED,
                        payload: label
                    })
                    navigation.navigate(label)
                }}
            >
                <View style={{
                        justifyContent: "center",
                        alignItems: "center",
                    }} 
                >
                    <Animated.View style={[
                        {
                            padding: SIZES.padding / 3,
                            justifyContent: "center",
                            alignItems: "center",
                        },
                        outerContainerStyle
                        ]}
                    >
                        <Animated.View style={[{
                            height: 45,
                            width: 45,
                            justifyContent: "center",
                            alignItems: "center",
                            shadowColor: isSelected ? "rgba(0,0,0,0.5)" : "transparent",
                            shadowOffset: {
                            width: 10,
                            height: 5,
                            },
                            shadowOpacity: 0.01,
                            shadowRadius: 5,
                            elevation: 5,
                            backgroundColor: isSelected ? COLORS.white2 : "transparent"
                        }, innerContainerStyle]}
                        >
                    <Animated.Image source={icon} style={[{
                        height: 28,
                        width: 28,
                        resizeMode: "contain",
                        tintColor: COLORS.primary
                    }, tintColorStyle]}/>
                </Animated.View>
                    </Animated.View>
                        <Animated.Text numberOfLines={1} style={[{
                            ...FONTS.body4,
                            marginVertical: 5,
                            color: COLORS.primary
                        }, textStyle]}>
                        {label}
                    </Animated.Text>
        </View>
        </TouchableWithoutFeedback>
    </Animated.View>
    )
}

export default CustomTab