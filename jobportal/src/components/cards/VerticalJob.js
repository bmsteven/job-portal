import React, { useState, useEffect } from 'react'
import {Text, View, Image, TouchableHighlight, TouchableOpacity} from "react-native"
import {SIZES, COLORS, FONTS, icons} from "../../constants"
import {BACKEND} from "../../utils/api"
import {checkFavourite, toggleFavourite} from "../../context/actions/jobs"
import {useAuthState} from "../../context/auth"
import {useAlertDispatch} from "../../context/alert"
import {Date} from "../"
import {capitalizeSentence} from "../../utils/capitalizeSentence"

const VerticalJob = ({job, screen}) => {
    const {id, company, name, location, closeDate, jobType} = job
    let logo = BACKEND + "/api" + company?.logo?.split("api")[1]
    const {user} = useAuthState()
    const dispatch = useAlertDispatch()
    const [loading, setLoading] = useState(true)
    const [favourite, setFavourite] = useState(false)

     useEffect(() => {
        let isMounted = true
        if (isMounted && screen === "jobs")
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
            marginHorizontal: SIZES.padding,
        }}>
            <TouchableHighlight 
                activeOpacity={0.6}
                underlayColor="transparent"
                onPress={() => {}}
            >
                <View style={{
                    backgroundColor: COLORS.transparentWhite5,
                    activeColor: "white",
                    padding: SIZES.padding,
                    width: "100%",
                    borderRadius: SIZES.radius,
                    marginBottom: SIZES.padding,
                }}>

                     {/* render job title */}
                     <View style={{
                         flexDirection: "row",
                         justifyContent: "space-between",
                         alignItems: "center"
                     }}>
                        {name && <View style={{
                            marginRight: SIZES.padding / 2
                        }}>
                            <Text numberOfLines={2} style={{
                                ...FONTS.body2
                            }}>{capitalizeSentence(name)}</Text>
                        </View>}
                        {!loading && screen === "jobs" && <TouchableOpacity style={{
                                backgroundColor: COLORS.white,
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: SIZES.radius,
                                height: 35,
                                width: 35,
                            }}
                            onPress={() => {
                                toggleFavourite({
                                    id, setFavourite, dispatch, favourite
                                })
                            }}
                            >
                            <Image source={favourite ? icons.love : icons.favourite} style={{
                                height: 24,
                                width: 24,
                                tintColor: COLORS.gray
                            }} />
                        </TouchableOpacity>}
                    </View>

            {/* render location */}
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: SIZES.padding / 3
            }}>
                <View style={{
                    marginRight: SIZES.padding / 4
                }}>
                <Image source={icons.location} style={{
                    tintColor: COLORS.gray,
                    height: 16,
                    width: 16
                }} />
                </View>
                {location ? <Text numberOfLines={1} style={{
                            ...FONTS.body4,
                            color: COLORS.gray
                        }}  >{capitalizeSentence(location)}</Text>: <Text>
                        {capitalizeSentence(company.location)}
                    </Text>}
            </View>

            {/* render job info */}
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: SIZES.padding / 1.5
            }}>
                <View style={{
                    height: 50,
                    width: 50,
                    backgroundColor: COLORS.white,
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
                    marginRight: SIZES.padding
                }}>
                    <Image source={{uri: logo}} style={{
                            height: 40,
                            width: 40,
                            resizeMode: "contain",
                        }}
                    />
                </View>
                <View>
                    {company?.name && <Text numberOfLines={1} style={{
                        ...FONTS.body3,
                            color: COLORS.black,
                             marginBottom: 2
                    }}>{capitalizeSentence(company.name)}</Text>}
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: SIZES.padding / 5
                    }}>
                     {/* render jobType */}
            {jobType && 
                <Text style={{
                    ...FONTS.body3,
                    color: COLORS.gray, 

                }}>{jobType} - </Text>}
                <Date date={closeDate} textStyle={{
                    ...FONTS.body4,
                    color: COLORS.gray, 
                }}
            />
                    </View>
                </View>
            </View>
                </View>
            </TouchableHighlight>
        </View>
    )
}

export default VerticalJob
