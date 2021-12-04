import React from "react"
import { View } from "react-native"
import { Home, Companies, Jobs } from "./"
import { BottomTabs, Header } from "../../components"
import { useUIState } from "../../context/UI"

const BottomTabsScreen = ({ navigation }) => {
  const { selected } = useUIState()
  return (
    <View
      style={{
        backgroundColor: "#efefef",
        flex: 1,
      }}
    >
      <Header navigation={navigation} />
      {selected === "Home" && <Home navigation={navigation} />}
      {selected === "Jobs" && <Jobs navigation={navigation} />}
      {selected === "Companies" && <Companies navigation={navigation} />}
      <BottomTabs navigation={navigation} />
    </View>
  )
}

export default BottomTabsScreen
