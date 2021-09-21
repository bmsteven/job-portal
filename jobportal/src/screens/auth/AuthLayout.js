import React from "react"
import { View, Text, Image,  } from "react-native"
import { images, SIZES, FONTS,COLORS } from "../../constants"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"

const AuthLayout = ({title, subtitle, titleContainerStyle, children}) => {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: SIZES.padding,
        backgroundColor: COLORS.white
      }}
    >
    <KeyboardAwareScrollView 
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
            // flex: 1,
            paddingHorizontal: SIZES.padding
        }}
    >
        {/* app icon */}
        <View style={{
            alignItems: "center"
        }}>
            <Image 
                source={images.logo} 
                resizeMode="contain"
                style={{
                width: SIZES.width * 0.4,
                height: SIZES.width * 0.3,
                }}
            />
        </View>

        {/* texts */}
        <View style={{
            marginTop: SIZES.padding,
            ...titleContainerStyle
        }}>
            <Text  style={{
                textAlign: "center",
                ...FONTS.h2
            }}>{title}</Text>
            <Text style={{
                textAlign: "center",
                marginTop: SIZES.base,
                color: COLORS.darkGray,
                ...FONTS.body3
            }}>{subtitle}</Text>
        </View>
      {children}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AuthLayout;