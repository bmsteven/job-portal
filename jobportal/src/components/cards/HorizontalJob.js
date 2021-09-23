import React, { useState, useEffect } from 'react'
import {Text, View, Image, TouchableHighlight, TouchableOpacity} from "react-native"
import {SIZES, COLORS, FONTS, icons} from "../../constants"
import {BACKEND} from "../../utils/api"
import {checkFavourite, toggleFavourite} from "../../context/actions/jobs"
import {useAuthState} from "../../context/auth"
import {useAlertDispatch} from "../../context/alert"
import {Date} from "../"

const HorizontalJob = ({job, index, length}) => {
    const {id, company, name, location, closeDate, jobType} = job
    let logo = BACKEND + "/api" + company?.logo?.split("api")[1]
    let lastItem = index === length
    const {user} = useAuthState()
    const dispatch = useAlertDispatch()
    const [loading, setLoading] = useState(true)
    const [favourite, setFavourite] = useState(false)

    useEffect(() => {
        let isMounted = true
        if (isMounted)
            checkFavourite({
                setLoading,
                setFavourite,
                id,
                userId: user.id
            })
        return () => {
            isMounted = false
        }
    }, [])

    return (
        <View style={{
                alignSelf: "flex-end",
                marginRight: lastItem ? SIZES.padding : 0,
            }}
        >
        <TouchableHighlight 
            activeOpacity={0.8}
            underlayColor="transparent"
            onPress={() => {}}
            >
        <View style={{
                backgroundColor: index === 1? COLORS.primary : index % 2 === 0 ? COLORS.border_primary_alert : COLORS.border_success_alert,
                padding: SIZES.padding,
                minWidth: 200,
                maxWidth: 260,
                borderRadius: SIZES.radius,
                marginLeft: SIZES.padding,
            }}
        >
        <>
            {/* render company info */}
            <View style={{
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
            }}>
                <View style={{
                    height: 70,
                    width: 70,
                    backgroundColor: index === 1? COLORS.bg_primary_alert : index % 2 === 0 ? COLORS.bg_primary_alert : COLORS.bg_success_alert,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: SIZES.radius,
                    shadowColor: "rgba(0,0,0,0.5)",
                    shadowOffset: {
                    width: 10,
                    height: 5,
                    },
                    shadowOpacity: 0.01,
                    shadowRadius: 5,
                    elevation: 5,
                }}>
                    <Image source={{uri: logo}} style={{
                            height: 50,
                            width: 50,
                            resizeMode: "contain",
                        }}
                    />
                </View>

                {/* favourite */}
                {!loading && <TouchableOpacity style={{
                    backgroundColor: COLORS.transparentWhite2,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: SIZES.radius,
                    height: 40,
                    width: 40,
                }}
                onPress={() => {
                    toggleFavourite({
                        id, setFavourite, dispatch, favourite
                    })
                }}
                >
                    <Image source={favourite ? icons.love : icons.favourite} style={{
                        height: 30,
                        width: 30,
                        tintColor: favourite ? COLORS.red : index === 1? COLORS.lightGray1 : index % 2 === 0 ? COLORS.darkGray : COLORS.gray, 
                    }} />
                </TouchableOpacity>}
            </View>

            {/* company */}
            <View style={{
                    marginTop: SIZES.padding
                }}>
                    {company?.name && <Text numberOfLines={1} style={{
                        ...FONTS.body3,
                            color: index === 1? COLORS.white2 : index % 2 === 0 ? COLORS.color_primary_alert : COLORS.color_success_alert,
                             marginBottom: 2
                    }}>{company.name}</Text>}
                    {location ? <Text numberOfLines={1} style={{
                            ...FONTS.body4,
                            color: index === 1? COLORS.gray2 : index % 2 === 0 ? COLORS.gray : COLORS.gray
                        }}  >{location}</Text>: <Text>
                        {company?.location}
                    </Text>}
                </View>

            {/* render jobType */}
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: SIZES.padding / 1.6,
            }}>
            {jobType && <View style={{
                backgroundColor: COLORS.transparentWhite2,
                paddingHorizontal: 2,
                paddingVertical: 2,
                borderRadius: SIZES.radius / 2,
                width: 80,
                justifyContent: "center", 
                alignItems: "center"
            }}>
                <Text style={{
                    ...FONTS.body4,
                    color: index === 1? COLORS.lightGray1 : index % 2 === 0 ? COLORS.darkGray : COLORS.border_success_alert,
                }}>{jobType}</Text>
            </View>}
            <Date date={closeDate} textStyle={{
                    ...FONTS.body4,
                    color: index === 1 ? COLORS.white2 : index % 2 === 0 ? COLORS.color_primary_alert : COLORS.color_success_alert
                }}
            />
            </View>

            {/* render job title */}
            {name && <View style={{
                marginTop: SIZES.padding / 1.6,
            }}>
                <Text numberOfLines={2} style={{
                    ...FONTS.body2,
                    color: index === 1? COLORS.white2 : index % 2 === 0 ? COLORS.color_primary_alert : COLORS.color_success_alert
                }}>{name}</Text>
            </View>}
            </>
            </View>
        </TouchableHighlight>
    </View>
    )
}

export default HorizontalJob
