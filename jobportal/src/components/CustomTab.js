import React from "react"
import { View, TouchableWithoutFeedback, Pressable } from "react-native"
import Animated from "react-native-reanimated"
import { COLORS, SIZES, FONTS } from "../constants"
import { useUIDispatch } from "../context/UI"
import { SELECTED } from "../context/types"

const CustomTab = ({
  label,
  icon,
  isSelected,
  outerStyle,
  textStyle,
  outerContainerStyle,
  innerContainerStyle,
  tintColorStyle,
  navigation,
}) => {
  const dispatch = useUIDispatch()
  return (
    <Animated.View
      style={[
        {
          justifyContent: "center",
          alignItems: "center",
        },
        outerStyle,
      ]}
    >
      <Pressable
        onPress={() => {
          dispatch({
            type: SELECTED,
            payload: label,
          })
        }}
        delayPressIn={0}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Animated.View
            style={[
              {
                padding: SIZES.padding / 3,
                justifyContent: "center",
                alignItems: "center",
              },
              outerContainerStyle,
            ]}
          >
            <Animated.View
              style={[
                {
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
                  backgroundColor: isSelected ? COLORS.primary : "transparent",
                },
                innerContainerStyle,
              ]}
            >
              <Animated.Image
                source={icon}
                style={[
                  {
                    height: 28,
                    width: 28,
                    resizeMode: "contain",
                    tintColor: COLORS.primary,
                  },
                  tintColorStyle,
                ]}
              />
            </Animated.View>
          </Animated.View>
          <Animated.Text
            numberOfLines={1}
            style={[
              {
                ...FONTS.body4,
                marginVertical: 5,
                color: COLORS.white2,
              },
              textStyle,
            ]}
          >
            {label}
          </Animated.Text>
        </View>
      </Pressable>
    </Animated.View>
  )
}

export default CustomTab
