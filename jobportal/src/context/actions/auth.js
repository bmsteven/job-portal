import React from "react"
import axios from "axios"
import { API } from "../../utils/api"
import { AUTH, FAILED, LOGIN, REGISTER } from "../types"
import { useAuthDispatch } from "../auth"

export const login = ({setLoading, setError, formdata, navigation}) => {
    setLoading(true)
    const dispatch = useAuthDispatch()
    setError()
     axios
      .post(`${API}/login`, formData)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: LOGIN,
          payload: res.data,
        })
        setLoading(false)
        navigation.navigate("Home")
      })
      .catch((err) => {
        setLoading(false)
        if (err?.response) {
          setError(err?.response?.data?.message)
        } else if (err?.message) {
          if (err?.code === "ECONNREFUSED") {
            setError("Failed to connect, please try again")
          } else {
            setError(err?.message)
          }
        } else {
          setError("Internal server error, please try again")
        }
      })
}

export const register = ({setLoading, setError, navigation, formData}) => {
    setLoading(true)
    setError(null)
    const dispatch = useAuthDispatch()
     axios
      .post(`${API}/register`, formData)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: REGISTER,
          payload: res.data,
        })
        setLoading(false)
      })
      .catch((err) => {
        setLoading(false)
        if (err?.response) {
            setError(err?.response?.data?.message)
        } else if (err?.message) {
        if (err?.code === "ECONNREFUSED") {
            setError("Failed to connect, please try again")
        } else {
            setError(err?.message)
        }
        } else {
            setError("Internal server error, please try again")
        }
      })
}

export const forgotPassword = ({ email, setLoading, setError }) => {
    const body = {
        email
    }
}