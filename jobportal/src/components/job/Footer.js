import React, {useState, useEffect} from 'react'
import {View, Text} from "react-native"
import {useAuthState} from "../../context/auth"
import {useAlertDispatch} from "../../context/alert"
import {Favourite, Application} from "./"
import {COLORS, SIZES} from "../../constants"

const Footer = ({id, setOpenModal}) => {
    
    const {user, isAuthenticated} = useAuthState()
    const dispatch = useAlertDispatch()

    return (
        <View>
            {/* display login if isAuthenticated is false */}
            {isAuthenticated ? <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: SIZES.padding,
                backgroundColor: COLORS.white2,
                width: "100%",
                shadowColor: "rgba(0,0,0,0.7)",
                shadowOffset: {
                    width: 10,
                    height: 5,
                },
                shadowOpacity: 0.1,
                shadowRadius: 10,
                elevation: 5,
            }}>
                <Favourite id={id} userId={user?.id} isAuthenticated={isAuthenticated} dispatch={dispatch}/>
                <Application id={id} userId={user?.id} isAuthenticated={isAuthenticated} dispatch={dispatch} setOpenModal={setOpenModal}/>
            </View> : <View>
                
            </View>}
        </View>
    )
}

export default Footer
