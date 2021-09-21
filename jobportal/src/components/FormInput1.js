import React, {useEffect, useState, useRef} from "react"
import { TouchableOpacity, Text, View, TextInput, Animated } from "react-native"
import { COLORS, SIZES, FONTS } from "../constants"
// import {} from "react-native-reanimated"

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
  value
}) => {

  const [isFocused, setFocused] = useState(false)
  // const position = 1

  const position = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (value !== "") {
        moveTextTop();
    } else if (value === "") {
        moveTextBottom();
    }
  }, [value])

  const handleFocus = () => {
    if(!isFocused) {
      if (value !== "") {
        moveTextTop();
        }
    }
  }

  const handleBlur = () => {
    if(isFocused && !value) {
      moveTextBottom();
    }
  }

   const moveTextTop = () => {
    Animated.timing(position, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const moveTextBottom = () => {
    Animated.timing(position, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const yVal = position.interpolate({
    inputRange: [0, 1],
    outputRange: [18, 0],
  });

  const returnAnimatedLabelStyle = () => {
    return {
      zIndex: 2,
      transform: [
      {
        translateY: yVal,
      },
    ],
      top: position.interpolate({
        inputRange: [0, 1],
        outputRange: [18, 0],
      }),
      fontSize: position.interpolate({
        inputRange: [0, 1],
        outputRange: [SIZES.body3, SIZES.body4],
      }),
      color: position.interpolate({
        inputRange: [0, 1],
        outputRange: ['#aaa', '#000'],
      }),
    }
  }

  const labelStyle = {
      position: 'absolute',
      left: 0,
      alignItems: "center",
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
      <Animated.View>
      <Animated.Text
          style={[{
            // color: COLORS.gray,
            ...labelStyle,
          },
            returnAnimatedLabelStyle()
          ]}
        >
          {label}
        </Animated.Text>
        </Animated.View>
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
          underlineColorAndroid="transparent"
          onBlur={handleBlur}
        />
      </View>

      {/* error/success message */}
    </View>
  )
}

export default FormInput
