import React, {useState} from  "react"
import {View, Text, TouchableOpacity, Image} from "react-native"
import {createDrawerNavigator} from "@react-navigation/drawer"
import Animated from 'react-native-reanimated';
import {MainLayout} from "../screens"
import CustomDrawerContent from "./CustomDrawerContent"
import {COLORS, SIZES} from "../constants"

const Drawer = createDrawerNavigator()

const CustomDrawer = () => {
    const [progress, setProgress] = useState(new Animated.Value(0))
    
    const scale = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.85]
    })

    const borderRadius = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [0, 32]
    })

    const animatedStyle = {borderRadius, transform: [{scale}]}
    
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
                    width: "80%",
                    backgroundColor: "transparent"
                }}
                sceneContainerStyle={{
                    backgroundColor: "transparent"
                }}
                initialRouteName="MainLayout"
                drawerContent={props => {
                    setTimeout(() => {
                        setProgress(props.progress)
                    }, 0);
                    return (
                        <CustomDrawerContent navigation={props.navigation} />
                    )
                }}
            >
                <Drawer.Screen name="MainLayout">
                    {props => <MainLayout {...props} drawerAnimationStyle={animatedStyle} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    )
}

export default CustomDrawer