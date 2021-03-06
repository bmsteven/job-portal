import React from "react"
import axios from "axios"
import { API } from "../../utils/api"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { AUTH, FAILED, LOGIN, REGISTER, ADD, LOGOUT } from "../types"

export const login = async ({setLoading, formData, navigation, dispatch, alertDispatch, isAuthenticated}) => {
    setLoading(true)
    if(isAuthenticated) {
      logout({dispatch, navigation, isAuthenticated, setLoading, formData})
    } else {
      signin({setLoading, formData, navigation, alertDispatch, dispatch})
    }
}

export const register = ({setLoading, navigation, formData, dispatch}) => {
    setLoading(true)
    axios
      .post(`${API}/users/register`, formData)
      .then((res) => {
        setLoading(false)
        dispatch({
          type: ADD,
          payload: {
            type: "success",
            message: `You have successfully registered, an email was sent to you for account verification`
          }
        })
        navigation.navigate("SignIn")
      })
      .catch((err) => {
        setLoading(false)
        catchError({err, dispatch})
      })
}

export const forgotPassword = ({ email, setLoading, setError, navigation, dispatch}) => {
    const body = {
        email
    }
}

export const logout = async ({dispatch, navigation, isAuthenticated, alertDispatch, formData, setLoading}) => {
      let user = await AsyncStorage.getItem("user")
      let token = JSON.parse(user)?.token

      let config = {
          headers: {
            Authorization: `Bearer ` + token,
          },
        }

      axios(`${API}/logout`, config)
        .then((res) => {
          dispatch({
            type: LOGOUT,
          })
          if(isAuthenticated) {
            signin({setLoading, formData, navigation, dispatch, alertDispatch, navigation})
          } else {
            navigation.navigate("SignIn")
            alertDispatch({
              type: ADD,
              payload: {
                type: "success",
                message: "Logged out successfully"
              }
            })
          }
        })
        .catch((err) => {
          catchError({err, dispatch})
        })
}

const signin = async ({setLoading, formData, dispatch, alertDispatch, navigation}) => {
      axios
      .post(`${API}/login`, formData)
      .then((res) => {
        dispatch({
          type: LOGIN,
          payload: res.data,
        })
        alertDispatch({
          type: ADD,
          payload: {
            type: "success",
            message: `Logged in as ${res.data?.username}`
          }
        })
        setLoading(false)
        navigation.navigate("CustomDrawer")
      })
      .catch((err) => {
        setLoading(false)
        catchError({err, dispatch: alertDispatch})
      })
    }

export const catchError = ({err, dispatch}) => {
  if (err?.response) {
    dispatch({
      type: ADD,
      payload: {
        type: "danger",
        message: err?.response?.data?.message
      }
    })
  } else if (err?.message) {
    if (err?.code === "ECONNREFUSED") {
      dispatch({
        type: ADD,
        payload: {
          type: "danger",
          message: "Failed to connect, please try again"
        }
      })
    } else {
        dispatch({
          type: ADD,
          payload: {
            type: "danger",
            message: err?.message
          }
        })
    }
  } else {
    dispatch({
      type: ADD,
      payload: {
        type: "danger",
        message: "Internal server error, please try again"
      }
    })
  }
}