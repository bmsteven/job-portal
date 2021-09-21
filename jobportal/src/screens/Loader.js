import React from "react"
import { View, ActivityIndicator, StyleSheet, Image } from "react-native"
import { images, COLORS } from "../constants"

const Loader = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        resizeMode="contain"
        source={images.logo}
      />
      <ActivityIndicator
        style={styles.activityIndicator}
        size="large"
        color={COLORS.secondary}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  activityIndicator: {
    width: 100,
    height: 100,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  tinyLogo: {
    width: 130,
    height: 30,
  },
})

export default Loader
