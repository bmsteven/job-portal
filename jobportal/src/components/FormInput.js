import React, { useState, useEffect, createRef } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Platform
} from 'react-native';
import Animated, { Clock, useCode, interpolateNode, EasingNode, Value, set } from 'react-native-reanimated';
import { COLORS, SIZES, FONTS } from "../constants"
import { timing } from "../utils/animationUtils"

const onExecution = (e, innerFunc, outerFunc) => {
  innerFunc && innerFunc(e);
  outerFunc && outerFunc(e);
}

const getAndoridExtraPadding = (_textInputFontSize) => {
  if (Platform.OS === "android") {
    let defaultPadding = 6;
    if (_textInputFontSize < 14) {
      defaultPadding = defaultPadding + (14 - _textInputFontSize)
    }
    return defaultPadding;
  }
  return 0;
}

const getLabelPositions = (style, labelStyle) => {
  const height = (style?.height || ((style?.paddingTop || 0) + (style?.paddingBottom || 0)) || style?.padding) || 0;
  const textInputFontSize = style?.fontSize || 13;
  const labelFontSize = labelStyle?.fontSize || 13;
  const fontSizeDiff = textInputFontSize - labelFontSize;
  let unfocused, focused;


  unfocused = height * 0.5 + fontSizeDiff * (Platform.OS === "android" ? 0.5 : 0.6 )+ getAndoridExtraPadding(textInputFontSize);
  focused = -labelFontSize * 0.5;
  return [unfocused, focused]
}

const FormInput = ({
  error,
  errorColor = "red",
  errorTextStyle,
  handleChange,
  name,
  textInputStyle,
  containerStyle,
  secureTextEntry,
  isKeyboardInput = true,
  editable = true,
  value = '',
  label = '',
  labelTextColor = '',
  customLabelStyles,
  activeColor = COLORS.gray,
  activeLabelColor = "#000",
  customInputStyles,
  onFocus,
  onBlur,
  ...props
}) => {

  const [focusedLabel, _onFocusLabel] = useState(!!value);
  const [focused, _onFocusTextInput] = useState(!!value);
  const [isPassword, setPassword] = useState(secureTextEntry ? true : false)
  const inputRef = createRef(null);
  const [animation, _] = useState(new Value(focusedLabel ? 1 : 0));
  const clock = new Clock();
//   const debouncedOnFocusTextInput = debounce(_onFocusLabel, 500, { 'leading': true, 'trailing': false });

      useCode(
    () => set(
      animation,
      timing({
        clock,
        animation,
        duration: 150,
        from: focusedLabel ? 0 : 1,
        to: focusedLabel ? 1 : 0,
        EasingNode: EasingNode.linear,
      })
    ),
    [focusedLabel]
  )

  

//   useEffect(
//     () => {
//       if (!focusedLabel && value) {
//         debouncedOnFocusTextInput(true)
//       }
//       if (focusedLabel && !value) {
//         debouncedOnFocusTextInput(false)
//       }
//     },
//     [value]
//   )

    const focusStyle = {
    top: interpolateNode(animation, {
      inputRange: [0, 1],
      outputRange: [...getLabelPositions((textInputStyle || styles.textInput), (customLabelStyles || styles.label))]
    }),
    fontSize: interpolateNode(animation, {
      inputRange: [0, 1],
      outputRange: [SIZES.body3, SIZES.body4]
    }),
    backgroundColor: (
      focusedLabel
        ? COLORS.white
        : 'transparent'
    ),
    color: labelTextColor  || COLORS.gray,
  }

   const shouldShowError = (!focused && error && errorColor);
  let textInputColorStyles;
  let labelColorStyles;

  if (focused) {
    textInputColorStyles = { borderColor: activeColor }
    labelColorStyles = { color: activeLabelColor }
  }
  else if (shouldShowError) {
    textInputColorStyles = { borderColor: errorColor }
  }

  return <TouchableOpacity style={[styles.container, containerStyle]} onPress={!isKeyboardInput && editable ? onPress : null} activeOpacity={!isKeyboardInput && editable ? 0.2 : 1}>
          {
            <Animated.Text style={[styles.label, focusStyle, customLabelStyles, labelColorStyles]} onPress={() => { !focused ? inputRef?.current?.focus() : null }}>{label}</Animated.Text>
          }
          <TextInput
            underlineColorAndroid={'rgba(0,0,0,0)'}
            {...props}
            placeholderTextColor="transparent"
            editable={isKeyboardInput && editable}
            style={[styles.textInput, textInputStyle, textInputColorStyles, customInputStyles]}
            value={value}
            secureTextEntry={isPassword}
            onChangeText={e => handleChange(e, field=name)}
            pointerEvents={isKeyboardInput ? "auto" : "none"}
            onFocus={(e) => onExecution(e, () => { _onFocusLabel(true); _onFocusTextInput(true) }, onFocus)}
            onBlur={(e) => onExecution(e, () => { _onFocusLabel(!!value); _onFocusTextInput(false) }, onBlur)}
            ref={inputRef}
          />

          {/* toggle password */}
         {secureTextEntry && 
           <TouchableOpacity style={styles.togglePasswordStyle} onPress={() => setPassword(!isPassword)}>
            <Text style={{
              color: isPassword ? COLORS.primary : COLORS.gray2,
              fontSize: SIZES.body5,
            }}>
              {isPassword ? "show" : "hide"}
            </Text>
          </TouchableOpacity>
         }

        {!focused && error ? <Text style={[styles.errorText, { color: errorColor }, errorTextStyle]}>{error}</Text> : null}
      </TouchableOpacity>
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginVertical: SIZES.padding / 2,
  },
  textInput: {
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 15,
    backgroundColor: COLORS.white2,
    color: COLORS.black,
    borderColor: COLORS.gray,
    borderRadius: SIZES.radius / 2,
    borderWidth: 1,
  },
  label: {
    position: 'absolute',
    left: 15,
    fontSize: 16,
    zIndex: 1,
    paddingHorizontal: 5
  },
  togglePasswordStyle: {
    position: 'absolute',
    right: 15,
    zIndex: 1,
    paddingHorizontal: 5,
    top: 18
  },
  errorText: {
    fontSize: 13,
    paddingVertical: 5,
  }
});

export default FormInput
