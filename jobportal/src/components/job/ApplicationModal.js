import React, {useState, useEffect} from 'react'
import {View, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Modal} from "react-native"
import {COLORS, SIZES, FONTS} from "../../constants"
import {FilterInputs, Categories, FilterCriteria} from "./"
import {PrimaryHeader, TextButton} from "../"

const ApplicationModal = ({isVisible, closeModal, application, job}) => {
    console.log(application, job);
    return <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
        >
            <View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.transparentBlack7
                }}
            >
            {/* transparent background */}
                <TouchableWithoutFeedback
                    onPress={() => closeModal()}
                >
                    <View style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0
                    }}/>
                </TouchableWithoutFeedback>
                <View style={{
                    position: "absolute",
                    left: 0,
                    top: "20%",
                    width: "100%",
                    height: "80%",
                    paddingTop: SIZES.padding,
                    borderTopRightRadius: SIZES.padding,
                    borderTopLeftRadius: SIZES.padding,
                    backgroundColor: COLORS.white,
                }}>
                    <PrimaryHeader label="Application details" customStyle={{
                            ...FONTS.h2
                        }}/>
                </View>
            </View>
        </Modal>
}

export default ApplicationModal