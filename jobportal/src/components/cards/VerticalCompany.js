import React from "react"
import { Text, View, Image, TouchableHighlight } from "react-native"
import { SIZES, COLORS, FONTS, icons } from "../../constants"
import { BACKEND } from "../../utils/api"
import { capitalizeSentence } from "../../utils/capitalizeSentence"

const VerticalCompany = ({ company, navigation }) => {
  let { id, name, logo, location } = company
  logo = BACKEND + "/api" + logo?.split("api")[1]
  return (
    <View
      style={{
        marginHorizontal: SIZES.padding,
        marginVertical: SIZES.padding / 2,
      }}
    >
      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor="transparent"
        onPress={() => {
          navigation.navigate("Company", {
            id,
            company,
            logo,
          })
        }}
      >
        <View
          style={{
            backgroundColor: COLORS.white,
            padding: SIZES.padding,
            width: "100%",
            borderRadius: SIZES.radius,
          }}
        >
          {/* render company info */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
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
                marginRight: SIZES.padding,
              }}
            >
              <Image
                source={{ uri: logo }}
                style={{
                  height: 40,
                  width: 40,
                  resizeMode: "contain",
                }}
              />
            </View>
            <View>
              {name && (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text
                    numberOfLines={1}
                    style={{
                      ...FONTS.body3,
                      color: COLORS.black,
                      marginBottom: 2,
                    }}
                  >
                    {capitalizeSentence(name)}
                  </Text>
                  <View
                    style={{
                      marginLeft: SIZES.padding / 4,
                    }}
                  >
                    <Image
                      source={icons.verified}
                      style={{
                        tintColor: COLORS.primary,
                        height: 16,
                        width: 16,
                      }}
                    />
                  </View>
                </View>
              )}

              {/* render location */}
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: SIZES.padding / 5,
                }}
              >
                <View
                  style={{
                    marginRight: SIZES.padding / 4,
                  }}
                >
                  <Image
                    source={icons.location}
                    style={{
                      tintColor: COLORS.gray,
                      height: 16,
                      width: 16,
                    }}
                  />
                </View>
                {location && (
                  <Text
                    style={{
                      ...FONTS.body4,
                      color: COLORS.gray,
                    }}
                  >
                    {location}
                  </Text>
                )}
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  )
}

export default VerticalCompany
