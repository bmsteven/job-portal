import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, Image} from "react-native"
import {checkFavourite, toggleFavourite} from "../../context/actions/jobs"
import {icons, COLORS, SIZES} from "../../constants"

const Favourite = ({id, userId, isAuthenticated, dispatch}) => {
    const [loading, setLoading] = useState(true)
    const [favourite, setFavourite] = useState(false)

    useEffect(() => {
        let isMounted = true
        if(isMounted && isAuthenticated) {
            checkFavourite({
                id,
                userId,
                setLoading,
                setFavourite
            })
        }
    }, [])
    
    return (
        <View style={{
            flex: 1
        }}>
            {!loading && isAuthenticated && <TouchableOpacity style={{
                    backgroundColor: COLORS.white,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: SIZES.radius,
                    height: 40,
                    width: 40,
                    borderWidth: 1,
                    borderColor: COLORS.transparentBlack2
                }}
                onPress={() => {
                    toggleFavourite({
                        id, setFavourite, dispatch, favourite
                    })
                }}
                >
                <Image source={favourite ? icons.love : icons.favourite} style={{
                    height: 20,
                    width: 20,
                    tintColor: favourite ? COLORS.red : COLORS.gray
                }} />
            </TouchableOpacity>}
        </View>
    )
}

export default Favourite
