import React from  "react"
import {View, Text, TouchableOpacity, Image} from "react-native"
import {createDrawerNavigator} from "@react-navigation/drawer"
import {MainLayout} from "../screens"
import CustomDrawerContent from "./CustomDrawerContent"
import {COLORS} from "../constants"

const Drawer = createDrawerNavigator()

const CustomDrawer = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.primary
        }}>
            <Drawer.Navigator
                drawerType="slide"
                overlayColor="transparent"
                drawerStyle={{
                    flex: 1,
                    width: "70%",
                    backgroundColor: "transparent"
                }}
                sceneContainerStyle={{
                    backgroundColor: "transparent"
                }}
                initialRouteName="MainLayout"
                drawerContent={props => {
                    return (
                        <CustomDrawerContent navigation={props.navigation} />
                    )
                }}
            >
                <Drawer.Screen name="MainLayout">
                    {props => <MainLayout {...props} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    )
}

export default CustomDrawer