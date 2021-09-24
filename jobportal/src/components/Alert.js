import React, {useEffect} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from "react-native"
import {COLORS, SIZES, FONTS} from "../constants"
import {useAlertState, useAlertDispatch} from "../context/alert"
import {REMOVE} from "../context/types"

const Alert = () => {
    const {alert} = useAlertState()
    const dispatch = useAlertDispatch()

    const close = () => {
        dispatch({
            type: REMOVE
        })
    }

    let timeout = () => {
        setTimeout(() => {
        close()
        }, 7000)
    }

    useEffect(() => {
        timeout
        return () => clearTimeout(timeout)
    }, [])

    let customAlertStyle, customTextStyle

    if(alert?.type === "success") {
        customAlertStyle = {
            backgroundColor: COLORS.bg_success_alert,
            borderColor: COLORS.border_success_alert,
        }
        customTextStyle = {
            color: COLORS.color_success_alert
        }
    }
    if(alert?.type === "danger") {
        customAlertStyle = {
            backgroundColor: COLORS.bg_danger_alert,
            borderColor: COLORS.border_danger_alert,
        }
        customTextStyle = {
            color: COLORS.color_danger_alert
        }
    }
    if(alert?.type === "primary") {
        customAlertStyle = {
            backgroundColor: COLORS.bg_primary_alert,
            borderColor: COLORS.border_primary_alert,
        }
        customTextStyle = {
            color: COLORS.color_primary_alert
        }
    }
    if(alert?.type === "secondary") {
        customAlertStyle = {
            backgroundColor: COLORS.bg_secondary_alert,
            borderColor: COLORS.border_secondary_alert,
        }
        customTextStyle = {
            color: COLORS.color_secondary_alert
        }
    }
    if(alert?.type === "info") {
        customAlertStyle = {
            backgroundColor: COLORS.bg_info_alert,
            borderColor: COLORS.border_info_alert,
        }
        customTextStyle = {
            color: COLORS.color_info_alert
        }
    }
    if(alert?.type === "warning") {
        customAlertStyle = {
            backgroundColor: COLORS.bg_warning_alert,
            borderColor: COLORS.border_warning_alert,
        }
        customTextStyle = {
            color: COLORS.color_warning_alert
        }
    }

    return (
        <View style={styles.container}>
            <View style={[customAlertStyle, styles.alertContainer]}>
                <View style={styles.messageContainer}>
                    <Text style={[customTextStyle, styles.textStyle]}>
                        {alert.message && alert.message}
                    </Text>
                </View>
                <TouchableOpacity style={
                    styles.close
                    }
                    onPress={close}
                >
                    {alert?.children ? <View></View> : <Text>Close</Text>}
                </TouchableOpacity>
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
        paddingHorizontal: 10
    },
    alertContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },
    messageContainer: {
        paddingVertical:  SIZES.padding / 2,
        paddingHorizontal: SIZES.padding,
    },
    textStyle: {
        ...FONTS.body4,  
    },
    close: {
        width: 60,
        height: "100%",
        backgroundColor: COLORS.transparentWhite4,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Alert
