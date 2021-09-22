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
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: SIZES.padding
        }}>
            {/* menu */}
            {back ? <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={icons.back} style={{
                    width: 40,
                    height: 40,
                    resizeMode: "contain",
                    tintColor: COLORS.gray
                }}/>
            </TouchableOpacity> : <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image source={icons.menu} style={{
                    width: 40,
                    height: 40,
                    resizeMode: "contain",
                    tintColor: COLORS.gray
                }} />
            </TouchableOpacity>}

            {/* logo */}
            <View style={{
                marginBottom: -50
            }}>
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
                borderRadius: SIZES.radius / 2
            }}>
                <Image source={{ uri: user?.userDp}} />
            </TouchableOpacity>: <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                <Text style={{
                    ...FONTS.body3
                }}>Sign In</Text>
            </TouchableOpacity> }

        </View>
    )
}

export default Header
