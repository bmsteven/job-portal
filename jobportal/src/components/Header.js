import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { icons, images, COLORS, SIZES, FONTS } from "../constants"
import { useAuthState } from "../context/auth"

const Header = ({ navigation }) => {
  const { user, isAuthenticated } = useAuthState()
  return (
    <View
      style={
        {
          // marginTop: SIZES.padding,
        }
      }
    >
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: SIZES.padding / 2,
          paddingVertical: SIZES.padding / 3,
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* menu */}
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={{
            width: 45,
            height: 45,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={icons.menu}
            style={{
              width: 35,
              height: 35,
              resizeMode: "contain",
              tintColor: COLORS.black,
            }}
          />
        </TouchableOpacity>

        {/* logo */}
        <View>
          <Image
            source={images.logo}
            style={{
              height: 40,
              width: 100,
              resizeMode: "contain",
            }}
          />
        </View>

        {/* profile */}
        {isAuthenticated ? (
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.bg,
              height: 45,
              width: 45,
              borderRadius: SIZES.radius / 2,
              shadowColor: "rgba(0,0,0,0.8)",
              shadowOffset: {
                width: 3,
                height: 2,
              },
              shadowOpacity: 0.01,
              shadowRadius: 5,
              elevation: 5,
            }}
            onPress={() => navigation.openDrawer()}
          >
            <Image
              source={{ uri: user?.dp }}
              style={{
                height: 45,
                width: 45,
                borderRadius: SIZES.radius / 2,
              }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Text
              style={{
                ...FONTS.body3,
              }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default Header
