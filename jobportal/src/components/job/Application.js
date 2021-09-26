import React, {useState, useEffect} from 'react'
import {View, Text} from "react-native"
import {checkApplicationStatus, apply} from "../../context/actions/jobs"
import {COLORS, SIZES} from "../../constants"
import {TextButton} from "../"

const Application = ({id, isAuthenticated, dispatch, setOpenModal}) => {
    const [loading, setLoading] = useState(true)
    const [applied, setApplied] = useState(false)
    const [applyLoading, setApplyLoading] = useState(false)

    useEffect(() => {
        let isMounted = true
        if(isMounted && isAuthenticated) {
            checkApplicationStatus({
                setLoading,
                setApplied,
                dispatch,
                id
            })
        }
        return () => {
            isMounted = false
        }
    }, [])

    return (
        <View style={{
            flex: 4,
            justifyContent: "center",
        }}>
            {!loading && 
                <TextButton label={applied ? "View Application" : applyLoading ? "Please wait" : "Apply Now" } 
                    onPress={() => {
                        if(!applied) {
                            apply({
                                setLoading: setApplyLoading,
                                setApplied,
                                dispatch,
                                id
                            })
                        } else {
                            setOpenModal(true)
                        }
                    }}
                    disabled={applyLoading}
                    containerStyle={{
                        height: 40,
                        backgroundColor: applyLoading ? COLORS.transparentPrimray : COLORS.secondary,
                        marginVertical: SIZES.radius,
                        borderRadius: SIZES.radius / 2,
                        shadowColor: applyLoading ? "rgba(0,0,0,0)" : "rgba(0,0,0,0.7)",
                        shadowOffset: {
                            width: 10,
                            height: 5,
                        },
                        shadowOpacity: 0.1,
                        shadowRadius: 10,
                        elevation: applyLoading ? 0 : 5,
                    }}
                
                />
            }
        </View>
    )
}

export default Application
