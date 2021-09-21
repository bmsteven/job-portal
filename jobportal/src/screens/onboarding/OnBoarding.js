import React from "react"
import { View, Text, Image, ScrollView } from "react-native"
import { images, SIZES, FONTS,COLORS } from "../../constants"
import { TextButton } from "../../components"

const OnBoarding = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        width: SIZES.width,
        backgroundColor: "#ffffff",
      }}
    >
      <View
        style={{
          flex: 3,
        }}
      >
        <Image
          source={images.illustration}
          resizeMode="cover"
          style={{
            height: SIZES.height * 0.5,
            width: SIZES.width,
            opacity: 0.5,
            marginTop: SIZES.padding * 0.5,
          }}
        />
      </View>
      <ScrollView
        style={{
          paddingHorizontal: SIZES.padding * 0.9,
        }}
      >
        {/* render logo */}
        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}
        >
          <Image
            source={images.logo}
            resizeMode="contain"
            style={{
              width: SIZES.width * 0.4,
              height: SIZES.width * 0.3,
            }}
          />
        </View>

        {/* render texts */}
        <View
          style={{
            padding: SIZES.padding,
          }}
        >
          <Text
            style={{
              ...FONTS.h1,
              textAlign: "center",
              padding: SIZES.padding * 0.7,
            }}
          >
            Land to your destiny job today
          </Text>
          <Text
            style={{
              ...FONTS.body3,
              textAlign: "center",
            }}
          >
            Get started today, apply and save your favourite jobs, create company and start getting personels of your choice.
          </Text>
        </View>

        {/* render buttons */}
        <View style={{
          marginVertical: SIZES.padding
        }}>
          <TextButton
            label="Sign In"
            onPress={() => navigation.navigate("SignIn")}
            containerStyle={{
              height: 40,
              borderRadius: SIZES.radius
            }}
          />
          <TextButton 
            label="Sign Up"             
            onPress={() => navigation.navigate("SignUp")}
            containerStyle={{
              backgroundColor: COLORS.darkGray2,
              height: 40,
              borderRadius: SIZES.radius
            }}
          />
          <TextButton 
            label="Skip" 
            onPress={() => navigation.navigate("Home")}
            containerStyle={{
              backgroundColor: null
            }}
            labelStyle={{
              color: COLORS.gray,
            }}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default OnBoarding
