import React from 'react'
import { View, Text, Image, TouchableOpacity } from "react-native"
import {icons, images, COLORS, SIZES, FONTS} from "../constants"
import {useAuthState} from "../context/auth"

const Header = ({
    back, navigation
}) => {
    const {user, isAuthenticated} = useAuthState()
    return (
        <View style={{
            paddingVertical: SIZES.padding / 2,
        }}>
        <View style={{
            backgroundColor: COLORS.bg,
            flexDirection: "row",
            paddingHorizontal: SIZES.padding,
            paddingVertical: SIZES.padding / 3,
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            shadowColor: "rgba(0,0,0,0.7)",
            shadowOffset: {
            width: 3,
            height: 2,
            },
            shadowOpacity: 0.01,
            shadowRadius: 5,
            elevation: 5,

        }}>
            {/* menu */}
            {back ? <TouchableOpacity onPress={() => navigation.goBack()}  style={{
                    width: 45,
                    height: 45,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: COLORS.white2,
                    borderRadius: SIZES.radius,
                    shadowColor: "rgba(0,0,0,0.3)",
                    shadowOffset: {
                    width: 3,
                    height: 2,
                    },
                    shadowOpacity: 0.01,
                    shadowRadius: 5,
                    elevation: 5,
                }}>
                <Image source={icons.back} style={{
                    width: 35,
                    height: 35,
                    resizeMode: "contain",
                    tintColor: COLORS.gray
                }}/>
            </TouchableOpacity> : <TouchableOpacity onPress={() => navigation.openDrawer()}
                style={{
                    width: 45,
                    height: 45,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: COLORS.white2,
                    borderRadius: SIZES.radius,
                    shadowColor: "rgba(0,0,0,0.3)",
                    shadowOffset: {
                    width: 3,
                    height: 2,
                    },
                    shadowOpacity: 0.01,
                    shadowRadius: 5,
                    elevation: 5,
                }}
            >
                <Image source={icons.menu} style={{
                    width: 35,
                    height: 35,
                    resizeMode: "contain",
                    tintColor: COLORS.gray
                }} />
            </TouchableOpacity>}

            {/* logo */}
            <View>
                <Image source={images.logo} style={{
                    height: 40,
                    width: 100,
                    resizeMode: "contain"
                }} />
            </View>

            {/* profile */}
            {isAuthenticated ? <TouchableOpacity style={{
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
                <Image source={{ uri: user?.dp}} style={{
                height: 45,
                width: 45,
                borderRadius: SIZES.radius / 2,
            }}/>
            </TouchableOpacity>: <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                <Text style={{
                    ...FONTS.body3
                }}>Sign In</Text>
            </TouchableOpacity> }
    </View>
        </View>
    )
}

export default Header
