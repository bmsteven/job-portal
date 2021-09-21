import React, {useState} from "react"
import { TouchableOpacity, Text, View, TextInput } from "react-native"
import { COLORS, SIZES, FONTS } from "../constants"
// import {Animated} from "react-native-reanimated"

const FormInput = ({
  label,
  containerStyle,
  placeholder,
  inputStyle,
  prependComponent,
  appendComponent,
  handleChange,
  secureTextEntry,
  keyboardType = "default",
  autoComplete = "off",
  autoCapitalize = "none",
  error = "",
}) => {

  const [isFocused, setFocused] = useState(false)
  const handleFocus = () => {
    setFocused(true)
  }

  const handleBlur = () => {
    setFocused(false)
  }

  const labelStyle = {
      position: 'absolute',
      left: 0,
      height: !isFocused ? 40 : 18,
      lineHeight: !isFocused ? 40 : 18,
      alignItems: "center",
      top: !isFocused ? 18 : 0,
      fontSize: !isFocused ? SIZES.body3 : SIZES.body4,
      color: !isFocused ? '#aaa' : '#000',
      zIndex: 2
    };

  return (
    <View
      style={{
        marginVertical: SIZES.padding * 0.8,
        ...containerStyle,
      }}
    >

      {/* input */}
      
      <View style={{
        paddingTop: 18,
        height: 40,
          alignItems: "center",
      }}>
      <Text
          style={{
            color: COLORS.gray,
            ...FONTS.body4,
            ...labelStyle,
          }}
        >
          {label}
        </Text>
        <TextInput 
        style={{
          height: 40,
          width: "100%",
          color: '#000', 
          backgroundColor: COLORS.white2,
          ...inputStyle,
        }} 
        placeholderTextColor={COLORS.gray}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoComplete={autoComplete}
        autoCapitalize={autoCapitalize}
        onChangeText={e => handleChange(e)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        />
      </View>

      {/* error/success message */}
    </View>
  )
}

export default FormInput
