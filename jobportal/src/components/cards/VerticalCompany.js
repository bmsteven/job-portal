import React from "react"
import { View, TouchableHighlight } from "react-native"
import { SIZES, COLORS } from "../../constants"
import { BACKEND } from "../../utils/api"
import { capitalizeSentence } from "../../utils/capitalizeSentence"
import Company from "../Company"

const VerticalCompany = ({ company, navigation }) => {
  let { id, name, logo, location, verified } = company
  logo = BACKEND + "/api" + logo?.split("api")[1]
  return (
    <View
      style={{
        marginHorizontal: SIZES.padding,
        marginVertical: SIZES.padding / 2,
      }}
    >
      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor="transparent"
        onPress={() => {
          navigation.navigate("Company", {
            id,
            company,
            logo,
          })
        }}
      >
        <View
          style={{
            backgroundColor: COLORS.white,
            padding: SIZES.padding,
            width: "100%",
            borderRadius: SIZES.radius,
          }}
        >
          <Company
            logo={logo}
            name={capitalizeSentence(name)}
            location={capitalizeSentence(location)}
            verified={verified}
          />
        </View>
      </TouchableHighlight>
    </View>
  )
}

export default VerticalCompany
