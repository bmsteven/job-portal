import React from "react"
import { View, Text, Image } from "react-native"
import { SIZES, COLORS, FONTS, icons } from "../constants"
import { capitalizeSentence } from "../utils/capitalizeSentence"

const Company = ({
  logo,
  name,
  location,
  dueDate,
  jobType,
  verified,
  customStyles,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: SIZES.padding / 1.5,
        ...customStyles,
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
            {verified && (
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
            )}
          </View>
        )}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: SIZES.padding / 5,
          }}
        >
          {location && (
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
          )}
          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.gray,
            }}
          >
            {location ?? jobType ?? ""}
          </Text>
          {dueDate && <Text> - </Text>}
          {dueDate && dueDate}
        </View>
      </View>
    </View>
  )
}

export default Company
