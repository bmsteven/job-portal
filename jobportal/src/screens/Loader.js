import React from "react"
import { View, ActivityIndicator, StyleSheet, Text } from "react-native"

const Loader = () => {
  return (
    <View style={styles.container}>
      <Text>Job Portal</Text>

      <ActivityIndicator
        style={styles.activityIndicator}
        size="large"
        color="#0000ff"
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
  },
})

export default Loader
