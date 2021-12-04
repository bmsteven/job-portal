import React from "react"
import { Text, View, Image, TouchableHighlight } from "react-native"
import { SIZES, COLORS, FONTS, icons } from "../../constants"
import { BACKEND } from "../../utils/api"
import { capitalizeSentence } from "../../utils/capitalizeSentence"
import Company from "../Company"

const HorizontalCompany = ({ index, company, length, navigation }) => {
  let { id, name, logo, location, verified } = company
  logo = BACKEND + "/api" + logo?.split("api")[1]
  let lastItem = index === length
  return (
    <View
      style={{
        alignSelf: "flex-end",
        marginRight: lastItem ? SIZES.padding : 0,
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
            minWidth: 200,
            maxWidth: 300,
            borderRadius: SIZES.radius,
            marginLeft: SIZES.padding,
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

export default HorizontalCompany
