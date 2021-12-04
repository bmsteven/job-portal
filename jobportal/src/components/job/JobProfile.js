import React from "react"
import { View, Text, Image } from "react-native"
import { Date, PrimaryHeader } from "../"
import { Template } from "./"
import { COLORS, SIZES, icons, FONTS } from "../../constants"
import { capitalizeSentence } from "../../utils/capitalizeSentence"
import Company from "../Company"

const JobProfile = ({ job, logo }) => {
  let { name, company, location, closeDate, jobType } = job
  return (
    <Template>
      {/* render title */}
      <View
        style={{
          marginBottom: SIZES.padding / 2,
        }}
      >
        <PrimaryHeader
          label={capitalizeSentence(name)}
          containerStyle={{
            paddingHorizontal: 0,
            paddingVertical: 0,
            // width:
          }}
        />
      </View>

      {/* render location */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: SIZES.padding / 3,
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
        {location ? (
          <Text
            numberOfLines={1}
            style={{
              ...FONTS.body3,
              color: COLORS.darkGray,
            }}
          >
            {capitalizeSentence(location)}
          </Text>
        ) : (
          <Text>{capitalizeSentence(company.location)}</Text>
        )}
      </View>

      {/* render company and location */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: SIZES.padding / 1.5,
        }}
      >
        <Company
          logo={logo}
          name={capitalizeSentence(company?.name)}
          verified={company?.verified}
          jobType={jobType}
          dueDate={
            <Date
              date={closeDate}
              textStyle={{
                ...FONTS.body4,
                color: COLORS.gray,
              }}
            />
          }
        />
      </View>
    </Template>
  )
}

export default JobProfile
