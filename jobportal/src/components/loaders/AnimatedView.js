import React, { useEffect } from "react"
import { View } from "react-native"
import Animated, {
  withRepeat,
  withDelay,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  useAnimatedProps,
} from "react-native-reanimated"
import {SIZES} from "../../constants"

const AnimatedView = ({ customStyle, delay = 0, duration = 2000 }) => {
  const progress = useSharedValue(0)

  useEffect(() => {
    progress.value = withDelay(delay, withRepeat(withTiming(1, { duration }), -1, true))
  }, [])

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${progress.value * 100}%`,
  }))

  return (
    <Animated.View
      style={[
        {
          height: 20,
          width: 0,
          backgroundColor: "white",
          borderRadius: SIZES.radius
        },
        animatedStyle,
        customStyle,
      ]}
    />
  )
}

export default AnimatedView
