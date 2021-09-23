import React from 'react'
import {Text, View, Image, TouchableHighlight} from "react-native"
import {SIZES, COLORS, FONTS, icons} from "../../constants"
import {BACKEND} from "../../utils/api"
import {capitalizeSentence} from "../../utils/capitalizeSentence"

const HorizontalCompany = ({index, company, length}) => {
    let {id, name, logo, location} = company
    logo = BACKEND + "/api" + logo?.split("api")[1]
    let lastItem = index === length
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
                        backgroundColor: COLORS.white,
                        padding: SIZES.padding,
                        minWidth: 200,
                        maxWidth: 300,
                        borderRadius: SIZES.radius,
                        marginLeft: SIZES.padding,
                    }}
                >
                    {/* render company info */}
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
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
                            {name && <Text numberOfLines={1} style={{
                                ...FONTS.body3,
                                    color: COLORS.black,
                                    marginBottom: 2
                            }}>{capitalizeSentence(name)}</Text>}

                        {/* render location */}
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: SIZES.padding / 5
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
                        {location && <Text style={{
                                ...FONTS.body4,
                                color: COLORS.gray, 
                            }}>{location}
                        </Text>}
                        </View>
                        </View>
                   </View>
                </View>
            </TouchableHighlight>
        </View>
    )
}

export default HorizontalCompany
