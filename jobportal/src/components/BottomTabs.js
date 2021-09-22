import React, {useEffect} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image} from "react-native"
import Animated, {useSharedValue, useAnimatedStyle, withTiming} from "react-native-reanimated"
import {COLORS, SIZES, FONTS, icons} from "../constants"
import {useUIState} from "../context/UI"
import {CustomTab} from "./"

const BottomTabs = ({navigation}) => {
    const { selected } = useUIState()

    // reanimate shared value
    // home
    const HomeTabBackground = useSharedValue(COLORS.white2)
    const HomeTabHeight = useSharedValue(28)
    const HomeTabMarginTop = useSharedValue(0)
    const HomeTabBorderRadius = useSharedValue(0)
    const HomeTabTintColor = useSharedValue(COLORS.primary)
    const HomeTabFlex = useSharedValue(1)
    const HomeTabTextHeight = useSharedValue(0)
    
    // jobs
    const JobsTabBackground = useSharedValue(COLORS.white2)
    const JobsTabHeight = useSharedValue(55)
    const JobsTabMarginTop = useSharedValue(-20)
    const JobsTabBorderRadius = useSharedValue(30)
    const JobsTabTintColor = useSharedValue(COLORS.secondary)
    const JobsTabFlex = useSharedValue(1)
    const JobsTabTextHeight = useSharedValue(0)

    // companies
    const CompaniesTabBackground = useSharedValue(COLORS.white2)
    const CompaniesTabHeight = useSharedValue(55)
    const CompaniesTabMarginTop = useSharedValue(-20)
    const CompaniesTabBorderRadius = useSharedValue(30)
    const CompaniesTabTintColor = useSharedValue(COLORS.secondary)
    const CompaniesTabFlex = useSharedValue(1)
    const CompaniesTabTextHeight = useSharedValue(0)

    // reanimate animated styles
    // home
    const homeTabOuterStyleOuter = useAnimatedStyle(() => {
        return {
            flex: HomeTabFlex.value
        }
    })

    const homeTabOuterStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: HomeTabBackground.value,
            marginTop: HomeTabMarginTop.value,
            height: HomeTabHeight.value,
            borderRadius: HomeTabBorderRadius.value,
        }
    })

    const homeTabInnerStyle = useAnimatedStyle(() => {
        return {
            borderRadius: HomeTabBorderRadius.value
        }
    })

    const homeTabTintColorStyle = useAnimatedStyle(() => {
        return {
            tintColor: HomeTabTintColor.value
        }
    })

    const homeTextStyle = useAnimatedStyle(() => {
        return {
            height: HomeTabTextHeight.value
        }
    })

    // jobs
     const jobsTabOuterStyleOuter = useAnimatedStyle(() => {
        return {
            flex: JobsTabFlex.value
        }
    })

    const jobsTabOuterStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: JobsTabBackground.value,
            marginTop: JobsTabMarginTop.value,
            height: JobsTabHeight.value,
            borderRadius: JobsTabBorderRadius.value
        }
    })

    const jobsTabInnerStyle = useAnimatedStyle(() => {
        return {
            borderRadius: JobsTabBorderRadius.value
        }
    })

    const jobsTabTintColorStyle = useAnimatedStyle(() => {
        return {
            tintColor: JobsTabTintColor.value
        }
    })

    const jobsTextStyle = useAnimatedStyle(() => {
        return {
            height: JobsTabTextHeight.value
        }
    })

    // companies
     const companiesTabOuterStyleOuter = useAnimatedStyle(() => {
        return {
            flex: CompaniesTabFlex.value
        }
    })

   const companiesTabOuterStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: CompaniesTabBackground.value,
            marginTop: CompaniesTabMarginTop.value,
            height: CompaniesTabHeight.value,
            borderRadius: CompaniesTabBorderRadius.value
        }
    })

    const companiesTabInnerStyle = useAnimatedStyle(() => {
        return {
            borderRadius: CompaniesTabBorderRadius.value
        }
    })

    const companiesTabTintColorStyle = useAnimatedStyle(() => {
        return {
            tintColor: CompaniesTabTintColor.value
        }
    })

    const companiesTextStyle = useAnimatedStyle(() => {
        return {
            height: CompaniesTabTextHeight.value
        }
    })

    useEffect(() => {
        if(selected === "Home") {
            HomeTabBackground.value = withTiming(COLORS.white, { duration: 400 })
            HomeTabMarginTop.value = withTiming(-20, { duration: 400 })
            HomeTabHeight.value = withTiming(55, { duration: 400 })
            HomeTabBorderRadius.value = withTiming(30, { duration: 400 })
            HomeTabTintColor.value = withTiming(COLORS.secondary, { duration: 400 })
            HomeTabFlex.value = withTiming(1.5, { duration: 400 })
            HomeTabTextHeight.value = withTiming(30, {duration: 200})
        } else {
            HomeTabBackground.value = withTiming(COLORS.white2, { duration: 400 })
            HomeTabMarginTop.value = withTiming(0, { duration: 400 })
            HomeTabHeight.value = withTiming(28, { duration: 400 })
            HomeTabBorderRadius.value = withTiming(0, { duration: 400 })
            HomeTabTintColor.value = withTiming(COLORS.primary, { duration: 400 })
            HomeTabFlex.value = withTiming(1, { duration: 400 })
            HomeTabTextHeight.value = withTiming(0, {duration: 200})
        }

        // jobs
        if(selected === "Jobs") {
            JobsTabBackground.value = withTiming(COLORS.white, { duration: 400 })
            JobsTabMarginTop.value = withTiming(-20, { duration: 400 })
            JobsTabHeight.value = withTiming(55, { duration: 400 })
            JobsTabBorderRadius.value = withTiming(30, { duration: 400 })
            JobsTabTintColor.value = withTiming(COLORS.secondary, { duration: 400 })
            JobsTabFlex.value = withTiming(1.5, { duration: 400 })
            JobsTabTextHeight.value = withTiming(30, {duration: 200})
        } else {
            JobsTabBackground.value = withTiming(COLORS.white2, { duration: 400 })
            JobsTabMarginTop.value = withTiming(0, { duration: 400 })
            JobsTabHeight.value = withTiming(28, { duration: 400 })
            JobsTabBorderRadius.value = withTiming(0, { duration: 400 })
            JobsTabTintColor.value = withTiming(COLORS.primary, { duration: 400 })
            JobsTabFlex.value = withTiming(1, { duration: 400 })
            JobsTabTextHeight.value = withTiming(0, {duration: 200})
        }

        // companies
        if(selected === "Companies") {
            CompaniesTabBackground.value = withTiming(COLORS.white, { duration: 400 })
            CompaniesTabMarginTop.value = withTiming(-20, { duration: 400 })
            CompaniesTabHeight.value = withTiming(55, { duration: 400 })
            CompaniesTabBorderRadius.value = withTiming(30, { duration: 400 })
            CompaniesTabTintColor.value = withTiming(COLORS.secondary, { duration: 400 })
            CompaniesTabFlex.value = withTiming(1.5, { duration: 400 })
            CompaniesTabTextHeight.value = withTiming(30, {duration: 200})
        } else {
            CompaniesTabBackground.value = withTiming(COLORS.white2, { duration: 400 })
            CompaniesTabMarginTop.value = withTiming(0, { duration: 400 })
            CompaniesTabHeight.value = withTiming(28, { duration: 400 })
            CompaniesTabBorderRadius.value = withTiming(0, { duration: 400 })
            CompaniesTabTintColor.value = withTiming(COLORS.primary, { duration: 400 })
            CompaniesTabFlex.value = withTiming(1, { duration: 400 })
            CompaniesTabTextHeight.value = withTiming(0, { duration: 400 })
        }
    }, [selected])

    return (
        <View style={styles.container}>
            <View style={[styles.alertContainer]}>
              <CustomTab label="Jobs" icon={icons.jobs} isSelected={selected === "Jobs" ? true : false} outerContainerStyle={jobsTabOuterStyle} innerContainerStyle={jobsTabInnerStyle} tintColorStyle={jobsTabTintColorStyle} outerStyle={jobsTabOuterStyleOuter} textStyle={jobsTextStyle} navigation={navigation}/>
              <CustomTab label="Home" icon={icons.home} isSelected={selected === "Home" ? true : false} outerContainerStyle={homeTabOuterStyle} innerContainerStyle={homeTabInnerStyle} tintColorStyle={homeTabTintColorStyle} outerStyle={homeTabOuterStyleOuter} textStyle={homeTextStyle} navigation={navigation} />
              <CustomTab label="Companies" icon={icons.companies} isSelected={selected === "Companies" ? true : false} outerContainerStyle={companiesTabOuterStyle} innerContainerStyle={companiesTabInnerStyle} tintColorStyle={companiesTabTintColorStyle} outerStyle={companiesTabOuterStyleOuter} textStyle={companiesTextStyle} navigation={navigation}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: SIZES.padding,
        zIndex: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
    },
    alertContainer: {
        paddingHorizontal: SIZES.padding,
        paddingVertical:  SIZES.padding / 2,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: COLORS.white2,
        width: "80%",
        maxWidth: 300,
        height: 50,
        borderRadius: SIZES.radius,
        shadowColor: "rgba(0,0,0,0.7)",
        shadowOffset: {
            width: 10,
            height: 5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
})

export default BottomTabs
