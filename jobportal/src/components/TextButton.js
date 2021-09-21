import React from "react"
import { TouchableOpacity, Text } from "react-native"
import { COLORS, FONTS, SIZES } from "../constants"

const TextButton = ({ containerStyle, label, labelStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.secondary,
        marginBottom: SIZES.padding,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: COLORS.white,
          ...FONTS.h3,
          ...labelStyle,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}

export default TextButton
