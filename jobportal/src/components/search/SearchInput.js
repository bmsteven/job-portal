import React, { useState } from "react"
import { TextInput, Image, TouchableOpacity } from "react-native"
import { icons, COLORS, SIZES, FONTS } from "../../constants"
import { BackHeader } from "../"

const SearchInput = ({ navigation, value, handleChange, focused }) => {
  const [isFocused, setFocused] = useState(focused)

  // searching
  const searching = () => {
    // search either company or jobs depending on user choice or where user comes from
  }
  return (
    <BackHeader isFocused={isFocused} navigation={navigation}>
      <TextInput
        placeholder="Type to search..."
        placeholderTextColor={COLORS.gray}
        style={{
          paddingRight: SIZES.padding / 2,
          paddingVertical: SIZES.padding / 3,
          paddingLeft: SIZES.radius,
          ...FONTS.body4,
          flex: 5,
          height: "100%",
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        value={value}
        onChange={(e) => handleChange(e)}
        autoFocus={isFocused}
        returnKeyType="search"
        onSubmitEditing={searching}
      />
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "flex-end",
        }}
        onPress={searching}
      >
        <Image
          source={icons.search}
          style={{
            height: 25,
            width: 25,
            tintColor: COLORS.gray,
          }}
        />
      </TouchableOpacity>
    </BackHeader>
  )
}

export default SearchInput
