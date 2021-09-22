import React from "react"
import axios from "axios"
import { API } from "../../utils/api"
import { AUTH, FAILED, LOGIN, REGISTER, ADD } from "../types"

export const login = ({setLoading, setError, formData, navigation, dispatch, alertDispatch}) => {
    setLoading(true)
    setError(null)
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
        // navigation.navigate("Home")
      })
      .catch((err) => {
        catchError({err, setLoading, dispatch: alertDispatch})
      })
}

export const register = ({setLoading, setError, navigation, formData, dispatch}) => {
    setLoading(true)
    setError(null)     
    axios
      .post(`${API}/register`, formData)
      .then((res) => {
        setLoading(false)
        navigation.navigate("SignIn")
      })
      .catch((err) => {
        catchError({err, setLoading, dispatch})
      })
}

export const forgotPassword = ({ email, setLoading, setError, navigation, dispatch}) => {
    const body = {
        email
    }
}

export const logout = () => {
  
}

export const catchError = ({err, setLoading, dispatch}) => {
  setLoading(false)
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