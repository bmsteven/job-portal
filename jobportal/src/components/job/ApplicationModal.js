import React, { useState } from "react"
import {
  View,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native"
import { COLORS, SIZES, FONTS, icons } from "../../constants"
import { FilterInputs, Categories, FilterCriteria } from "./"
import { PrimaryHeader, TextButton, SecondaryHeader } from "../"
import { capitalizeSentence } from "../../utils/capitalizeSentence"
import { revoke, accept } from "../../context/actions/jobs"
import dayjs from "dayjs"
import { useAuthState } from "../../context/auth"
import { useAlertDispatch } from "../../context/alert"
import Company from "../Company"

const ApplicationModal = ({
  isVisible,
  closeModal,
  application,
  setApplication,
  job,
  logo,
}) => {
  const { name, company, location } = job
  const { user } = useAuthState()
  const dispatch = useAlertDispatch()

  const [loading, setLoading] = useState(false)

  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.transparentBlack7,
        }}
      >
        {/* transparent background */}
        <TouchableWithoutFeedback onPress={() => closeModal()}>
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            }}
          />
        </TouchableWithoutFeedback>
        <View
          style={{
            position: "absolute",
            left: 0,
            top: "20%",
            width: "100%",
            height: "80%",
            paddingTop: SIZES.padding * 1.5,
            paddingHorizontal: SIZES.padding,
            borderTopRightRadius: SIZES.padding,
            borderTopLeftRadius: SIZES.padding,
            backgroundColor: COLORS.white,
          }}
        >
          <ScrollView
            style={{
              flex: 1,
            }}
          >
            {/* render company */}
            <Company
              name={company?.name}
              location={company?.location}
              logo={logo}
              verified={company?.verified}
              customStyles={{
                marginTop: 0,
              }}
            />

            {/* separator */}
            <View
              style={{
                marginTop: SIZES.padding,
                height: 1,
                width: "100%",
                backgroundColor: COLORS.transparentBlack3,
              }}
            />

            {/* render job name */}
            <PrimaryHeader
              label={job?.name}
              containerStyle={{
                paddingHorizontal: 0,
                marginVertical: SIZES.padding,
              }}
              customStyle={{
                ...FONTS.h2,
              }}
            />

            {/* render application status */}
            <View
              style={{
                marginVertical: SIZES.padding / 2,
              }}
            >
              <SecondaryHeader label="Application Status" showLine={true} />
              {application?.status && (
                <View
                  style={{
                    flexDirection: "row",
                    marginVertical: SIZES.padding,
                  }}
                >
                  <Text
                    style={{
                      ...FONTS.body3,
                      color: COLORS.darkGray,
                    }}
                  >
                    Status:{" "}
                  </Text>
                  <Text
                    style={{
                      ...FONTS.body3,
                    }}
                  >
                    {application.status}
                  </Text>
                </View>
              )}
              {application?.accepted && (
                <View>
                  <SecondaryHeader
                    label="Interview Schedule"
                    showLine={true}
                    customStyle={{
                      marginTop: SIZES.radius,
                    }}
                  />
                  {application?.date && (
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: SIZES.padding,
                      }}
                    >
                      <Text
                        style={{
                          ...FONTS.body3,
                          color: COLORS.darkGray,
                        }}
                      >
                        Date:{" "}
                      </Text>
                      <Text
                        style={{
                          ...FONTS.body3,
                        }}
                      >
                        {dayjs(application.date).format("MMM DD, YYYY HH:mm")}
                      </Text>
                    </View>
                  )}
                  {application?.location && (
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: SIZES.padding,
                      }}
                    >
                      <Text
                        style={{
                          ...FONTS.body3,
                          color: COLORS.darkGray,
                        }}
                      >
                        Address:{" "}
                      </Text>
                      <Text
                        style={{
                          ...FONTS.body3,
                        }}
                      >
                        {application?.location}
                      </Text>
                    </View>
                  )}
                </View>
              )}
            </View>

            {/* render application info */}
            {application?.pending && (
              <View>
                <SecondaryHeader
                  label="The following items were sent to the employer"
                  customStyle={{
                    width: "100%",
                  }}
                />
                <Text
                  style={{
                    ...FONTS.body3,
                    marginTop: SIZES.padding / 2,
                  }}
                >
                  · Your Profile details
                </Text>
                {(user?.cv || user?.cvlink) && (
                  <Text
                    style={{
                      ...FONTS.body3,
                      marginTop: SIZES.padding / 2,
                    }}
                  >
                    · Your Resume
                  </Text>
                )}
              </View>
            )}
          </ScrollView>
          {/* footer ie No ,ore interested? revoke, and close modal btn*/}
          <View
            style={{
              marginVertical: SIZES.padding / 2,
            }}
          >
            {application?.pending && (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TextButton
                  label="Close"
                  containerStyle={{
                    marginHorizontal: 0,
                    marginRight: SIZES.padding / 2,
                    width: 90,
                    height: 45,
                    backgroundColor: COLORS.transparent,
                    borderWidth: 1,
                    borderColor: COLORS.transparentBlack3,
                    marginVertical: SIZES.padding / 2,
                    borderRadius: SIZES.radius / 2,
                    paddingHorizontal: SIZES.radius,
                  }}
                  labelStyle={{
                    ...FONTS.body3,
                    color: COLORS.primary,
                  }}
                  onPress={() => {
                    closeModal()
                  }}
                />
                <TextButton
                  label={loading ? "Please wait" : "Revoke application"}
                  containerStyle={{
                    height: 45,
                    flex: 2,
                    marginVertical: SIZES.padding / 2,
                    borderRadius: SIZES.radius / 2,
                    paddingHorizontal: SIZES.radius,
                    backgroundColor: loading
                      ? COLORS.transparentPrimray
                      : COLORS.secondary,
                  }}
                  disabled={loading}
                  onPress={() => {
                    // revoke application
                    revoke({
                      id: job?.id,
                      setApplication,
                      setLoading,
                      dispatch,
                      closeModal,
                    })
                  }}
                />
              </View>
            )}
            {application?.accepted && (
              <View>
                <TextButton
                  label={loading ? "Please wait" : "Accept and Close"}
                  containerStyle={{
                    height: 45,
                    marginVertical: SIZES.padding / 2,
                    borderRadius: SIZES.radius / 2,
                    paddingHorizontal: SIZES.radius,
                    backgroundColor: loading
                      ? COLORS.transparentPrimray
                      : COLORS.secondary,
                  }}
                  onPress={() => {
                    // accept offer functionality
                    accept({
                      id: job?.id,
                      setApplication,
                      setLoading,
                      dispatch,
                      closeModal,
                    })
                  }}
                />
              </View>
            )}
            {application?.rejected && (
              <View>
                <TextButton
                  label="Close"
                  containerStyle={{
                    marginHorizontal: 0,
                    marginRight: SIZES.padding / 2,
                    height: 45,
                    backgroundColor: COLORS.transparent,
                    borderWidth: 1,
                    borderColor: COLORS.transparentBlack7,
                    marginVertical: SIZES.padding / 2,
                    borderRadius: SIZES.radius / 2,
                    paddingHorizontal: SIZES.radius,
                  }}
                  labelStyle={{
                    color: COLORS.primary,
                  }}
                  onPress={() => closeModal()}
                />
              </View>
            )}
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default ApplicationModal
