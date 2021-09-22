import React from 'react'
import {Text, View, Image} from "react-native"
import {SIZES, COLORS, FONTS, icons} from "../../constants"
import {BACKEND} from "../../utils/api"

const HorizontalJob = ({job, lastItem}) => {
    const {id, company, name, location, closeDate, jobType} = job
    let logo = BACKEND + "/api" + company?.logo?.split("api")[1]
    return (
        <View style={{
            marginRight: lastItem ? SIZES.padding : 0,
        }}>
        <View style={{
            backgroundColor: COLORS.white2,
            padding: SIZES.padding,
            minWidth: 250,
            maxWidth: 300,
            minHeight: 200,
            borderRadius: SIZES.radius,
            marginLeft: SIZES.padding,
            shadowColor: "rgba(0,0,0,0.5)",
            shadowOffset: {
            width: 10,
            height: 5,
            },
            shadowOpacity: 0.01,
            shadowRadius: 5,
            elevation: 5,
        }}>
            {/* render company info */}
            <View style={{
                flexDirection: "row",
                alignItems: "center"
            }}>
                <View style={{
                    height: 70,
                    width: 70,
                    backgroundColor: COLORS.bg,
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
                            height: 50,
                            width: 50,
                            resizeMode: "contain",
                            borderRadius: SIZES.radius,
                        }}
                    />
                </View>
                <View>
                    {company?.name && <Text numberOfLines={1} style={{
                        ...FONTS.body3,
                            color: COLORS.black,
                             marginBottom: 2
                    }}>{company.name}</Text>}
                    {location ? <Text numberOfLines={1} style={{
                            ...FONTS.body4,
                            color: COLORS.gray
                        }}  >{location}</Text>: <Text>
                        {company?.location}
                    </Text>}
                </View>
            </View>

            {/* render jobType */}
            {jobType && <View style={{
                marginTop: SIZES.padding / 1.6,
                backgroundColor: COLORS.bg,
                    paddingHorizontal: 2,
                    width: 90,
                    justifyContent: "center", 
                    alignItems: "center"
            }}>
                <Text style={{
                    ...FONTS.body4,
                    color: COLORS.gray, 

                }}>{jobType}</Text>
            </View>}

            {/* render job title */}
            {name && <View style={{
                marginTop: SIZES.padding / 1.6,
            }}>
                <Text numberOfLines={1} style={{
                    ...FONTS.body2
                }}>{name}</Text>
            </View>}
            </View>
        </View>
    )
}

export default HorizontalJob
