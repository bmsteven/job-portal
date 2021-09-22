import React from 'react'
import {View, Text, StyleSheet} from "react-native"
import {COLORS, SIZES, FONTS} from "../constants"
import {useAlertState} from "../context/alert"

const Alert = () => {
    const {alert} = useAlertState()
    return (
        <View style={styles.container}>
            <View style={styles.alertContainer}>
                <Text>
                    {alert.message && alert.message}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: SIZES.padding * 2,
        zIndex: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
    },
    alertContainer: {
        backgroundColor: "lightgray",
        paddingHorizontal: SIZES.padding,
        paddingVertical:  SIZES.padding / 2
    }
})

export default Alert
