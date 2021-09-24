import React, {useEffect} from 'react'
import {View} from "react-native"
import Animated, { set, useCode, Easing, withRepeat, withDelay, interpolateNode } from 'react-native-reanimated';

const AnimatedView = ({customStyle, delay=0}) => {
     const animation = new Animated.Value(0);
    //   useCode(
    //     () =>
    //     set(
    //         animation,
    //         withDelay(
    //             delay,
    //             withRepeat({
    //                 duration: 1000,
    //                 easing: Easing.inOut(Easing.ease),

    //                 boomerang: true,
    //                 autoStart: true,
    //             })
    //         )
    //     ),
    //     [animation]
    // );

    // const width = 40

    // const width = Animated.interpolateNode(animation,  {
    //     inputRange: [0, 1],
    //     outputRange: [0, "100%"]
    // })

    // console.log(
    //     width
    // );

    return (
        <Animated.View style={[
            customStyle, {
            height: 20,
            width: 0,
            backgroundColor: "white"
        }]}/>
    )
}

export default AnimatedView
