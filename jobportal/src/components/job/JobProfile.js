import React from 'react'
import {View, Text, Image} from "react-native"
import {Date, PrimaryHeader} from "../"
import {Template} from "./"
import {COLORS, SIZES, icons, FONTS} from "../../constants"
import {capitalizeSentence} from "../../utils/capitalizeSentence"

const JobProfile = ({job, logo}) => {
    let {name, company, location, closeDate, jobType} = job
    console.log(company?.verified, "here");
    return (
        <Template>
            {/* render title */}
            <View style={{
                marginBottom: SIZES.padding / 2,
            }}>
                <PrimaryHeader label={capitalizeSentence(name)} containerStyle={{
                    paddingHorizontal: 0,
                    paddingVertical: 0,
                    // width: 
                }} />
            </View>

            {/* badge */}
            {company?.verified && <View style={{
                width: 100,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: SIZES.radius / 2,
                borderRadius: SIZES.radius, 
                backgroundColor: COLORS.primary
            }}>
                <Text style={{
                    ...FONTS.body4,
                    color: COLORS.white2,
                    marginRight: SIZES.radius / 2
                }}>Verified</Text>
                <Image source={icons.verified} style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.white2
                }} />
            </View>}

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
                            ...FONTS.body3,
                            color: COLORS.darkGray
                        }}  >{capitalizeSentence(location)}</Text>: <Text>
                        {capitalizeSentence(company.location)}
                    </Text>}
            </View>

            {/* render company and location */}
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
                        ...FONTS.h3,
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
                            color: COLORS.darkGray, 

                    }}>{jobType} - </Text>}
                    <Date date={closeDate} textStyle={{
                        ...FONTS.body4,
                        color: COLORS.darkGray, 
                    }}
                    />
                    </View>
                </View>
            </View>

        </Template>
    )
}

export default JobProfile
