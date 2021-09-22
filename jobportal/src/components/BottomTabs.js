import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image} from "react-native"
import Animated, {useSharedValue} from "react-native-reanimated"
import {COLORS, SIZES, FONTS, icons} from "../constants"
import {useUIState, useUIDispatch} from "../context/UI"
import {SELECTED} from "../context/types"

const CustomTab = ({label, icon, isSelected}) => {
    const dispatch = useUIDispatch()
    return <TouchableOpacity style={{
        justifyContent: "center",
        alignItems: "center",
        maxWidth: 60
    }}
        onPress={() => dispatch({
            type: SELECTED,
            payload: label
        })}
    >
    <Animated.View style={{
        marginTop: isSelected ? -20 : 0,
        backgroundColor: isSelected ? COLORS.white : "transparent",
        padding: SIZES.padding / 3,
        height: isSelected ? 50 : 30,
        width:  isSelected ? 50 : 30,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: isSelected ? 30 : 0,
    }}>
    <Animated.View style={{
        borderRadius: isSelected ? 30 : 0,
        height: 45,
        width: 45,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: isSelected ? "rgba(0,0,0,0.7)" : "transparent",
        shadowOffset: {
        width: 10,
        height: 5,
        },
        shadowOpacity: 0.01,
        shadowRadius: 5,
        elevation: 5,
        backgroundColor: isSelected ? COLORS.white2 : "transparent"
    }}>
        <Animated.Image source={icon} style={{
            height: 28,
            width: 28,
            resizeMode: "contain",
            tintColor: isSelected ? COLORS.secondary : COLORS.primary
        }}/>
    </Animated.View>
    </Animated.View>
        {isSelected && <Animated.Text numberOfLines={1} style={{
            ...FONTS.body4,
            marginVertical: 5,
            color: COLORS.primary
        }}>
            {label}
        </Animated.Text>}
    </TouchableOpacity>
}

const BottomTabs = ({navigation}) => {
    const { selected } = useUIState()
    return (
        <View style={styles.container}>
            <View style={[styles.alertContainer]}>
              <CustomTab label="Jobs" icon={icons.jobs} isSelected={selected === "Jobs" ? true : false}/>
              <CustomTab label="Home" icon={icons.home} isSelected={selected === "Home" ? true : false}/>
              <CustomTab label="Companies" icon={icons.companies} isSelected={selected === "Companies" ? true : false}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: SIZES.padding,
        zIndex: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
    },
    alertContainer: {
        paddingHorizontal: SIZES.padding,
        paddingVertical:  SIZES.padding / 2,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: COLORS.white2,
        width: "80%",
        maxWidth: 250,
        height: 50,
        borderRadius: SIZES.radius,
        shadowColor: "rgba(0,0,0,0.7)",
        shadowOffset: {
            width: 10,
            height: 5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
})

export default BottomTabs
