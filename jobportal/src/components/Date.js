import React from 'react'
import {View, Text} from "react-native"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import {COLORS} from "../constants"

dayjs.extend(relativeTime)

const DateTime = ({date, customStyle, textStyle}) => {
    let closeDate = date
    const now = new Date()
    let value = dayjs(now).to(date)
    let valueCheck = value.split(" ")
    value = valueCheck[1]  + " " + valueCheck[2] + " left"
    if (valueCheck[2] === "days" && parseInt(valueCheck[1], 10) <= 6) {
        valueCheck = true
    } else {
        valueCheck = false
    }
    return (
        <View style={{
            ...customStyle
        }}>
            <Text style={[textStyle, {
                fontWeight: valueCheck ? "bold" : "normal",
                color: valueCheck ? COLORS.red : textStyle.color
            }]}>
                {value}
            </Text>
        </View>
    )
}

export default DateTime
