import React from 'react'
import {View, Text, Image, TouchableOpacity} from "react-native"
import {DrawerContentScrollView} from "@react-navigation/drawer"
import {COLORS, FONTS, SIZES, icons} from "../constants"
import {useAuthState} from "../context/auth"

const CustomDrawerItem = ({icon, label, isSelected}) => {
    return <TouchableOpacity style={{
        marginVertical: SIZES.padding / 2.7,
        flexDirection: "row",
        alignItems: "center"
    }}>
        {icon && <View style={{
            marginRight: SIZES.padding
        }}>
            <Image source={icon} style={{
                tintColor: COLORS.white2,
                height: 20,
                width: 20
            }} />
        </View>}
        {label && <Text style={{
            color: COLORS.white2,
            ...FONTS.body3
        }}>{label}</Text>}
    </TouchableOpacity>
}

const CustomDrawerContent = ({ navigation }) => {
    const { user } = useAuthState()
    return (
        <View style={{
            flex: 1,
            padding: SIZES.padding
        }}>
            {/* close btn */}
            <View style={{
                alignItems: "flex-start",
                justifyContent: "center"
            }}>
                <TouchableOpacity onPress={() => navigation.closeDrawer()} style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: 35,
                    width: 35,
                    backgroundColor: "rgba(0,0,0,.2)",
                    borderRadius: SIZES.radius / 2
                }}>
                    <Image source={icons.cross} style={{
                        width: 25,
                        height: 25
                    }} />
                </TouchableOpacity>
            </View>

            {/* profile card */}
            <View>
                <TouchableOpacity style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginVertical: SIZES.padding
                }}>
                    <View style={{
                        backgroundColor: COLORS.gray,
                        height: 45,
                        width: 45,
                        borderRadius: SIZES.radius / 2
                    }}>
                        <Image source={{ uri: user?.userDp}} />
                    </View>
                    <View style={{
                        paddingHorizontal: SIZES.padding
                    }}>
                        <Text style={{
                            ...FONTS.body3,
                            color: COLORS.white,
                            marginBottom: 2
                        }}>{user?.firstname} {user?.lastname}</Text>
                        <Text style={{
                            ...FONTS.body4,
                            color: COLORS.gray2
                        }}>@{user?.username}</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <DrawerContentScrollView
                scrollEnabled={true}
                contentContainerStyle={{
                    flex: 1,
                }}
            >
                {/* user jobs */}
                <View style={{
                    // height: 300,
                    marginVertical: SIZES.padding
                }}>
                    <CustomDrawerItem label="My Applications" />
                    <CustomDrawerItem label="Saved Jobs" />
                </View>
                <View style={{
                    backgroundColor: COLORS.gray,
                    height: 1,
                    width: SIZES.width * 0.25,
                }}/>
                {/* user profile */}
                <View style={{
                    marginVertical: SIZES.padding,
                    flex: 2
                }}>
                    <CustomDrawerItem label="Profile" icon={icons.profile} />
                    <CustomDrawerItem label="Edit Profile" icon={icons.edit}/>
                    <CustomDrawerItem label="Setting" icon={icons.setting} />
                    <CustomDrawerItem label="Help" icon={icons.help} />
                </View>
                {/* <View style={{
                    backgroundColor: COLORS.gray,
                    height: 1,
                    width: SIZES.width * 0.25,
                }}/> */}
                {/* logout */}
                <View style={{
                    marginVertical: SIZES.padding
                }}>
                    <CustomDrawerItem label="Logout" icon={icons.logout}/>
                </View>

            </DrawerContentScrollView>
        </View>
    )
}

export default CustomDrawerContent
