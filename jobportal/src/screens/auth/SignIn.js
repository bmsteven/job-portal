import React, { useState, useEffect } from "react"
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import { SIZES, FONTS, COLORS } from "../../constants"
import { TextButton, FormInput } from "../../components"
import AuthLayout from "./AuthLayout"
import { login } from "../../context/actions/auth"

const SignIn = ({ navigation }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const { username, password } = formData

  const [usernameErr, setUsernameErr] = useState(null)
  const [passwordErr, setPasswordErr] = useState(null)

  const [error, setError] = useState(null)

  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)

  const handleChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e
    })
    setError(null)
    if(field === "username" && e.trim().length === 0) { 
      setUsernameErr("This field shouldn't be empty")
    }
    if(field === "password" && e.trim().length === 0) { 
      setPasswordErr("This field shouldn't be empty")
    }
  }

  const submit = () => {
    if(username.trim().length === 0) { 
      setUsernameErr("This field shouldn't be empty")
      setError("There are errors in your form")
      return
    }
    if(password.trim().length === 0) {
      setPasswordErr("This field shouldn't be empty")
      setError("There are errors in your form")
      return
    }
    login({
      setLoading,
      setError,
      formData,
      navigation
    })
  }

  useEffect(() => {
    if(error || usernameErr || passwordErr || username.trim().length === 0 || password.trim().length === 0) {
      setDisabled(true)
    } else if(loading) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [formData, loading])

  return (
    <AuthLayout title="Lets Sign You In" subtitle="Welcome back, please login to your account">
      <FormInput label="Username or email" handleChange={handleChange} autoComplete="email" value={username} name="username" error={usernameErr && usernameErr}/>
      <FormInput label="Password" handleChange={handleChange} autoComplete="password" secureTextEntry={true} value={password} name="password" error={passwordErr && passwordErr} />
      <TouchableOpacity
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          textAlign: "right",
          marginVertical: SIZES.padding / 2
        }}
        onPress={() => navigation.navigate("ForgotPassword")}
      >
        <Text 
         style={{
           ...FONTS.body4,
           color: COLORS.gray,
         }}
        >
          Forgot password?
        </Text>
      </TouchableOpacity>
      <TextButton 
        label={loading ? "Please Wait..." : "Sign in"} 
        containerStyle={{
          height: 40,
          borderRadius: SIZES.radius,
          backgroundColor: disabled ? COLORS.transparentPrimray : COLORS.secondary
        }}
        disabled={disabled}
        onPress={submit}
      />
      <View style={{
        alignItems: "center",
        marginVertical: SIZES.padding
      }}>
        <View style={{
          backgroundColor: COLORS.bg,
          height: 2,
          width: SIZES.width * 0.5,
        }}/>
      </View>
      <TextButton 
        label="Dont have an account?" 
        containerStyle={{
          height: 40,
          borderRadius: SIZES.radius,
          marginVertical: SIZES.padding,
          backgroundColor: COLORS.bg
        }}
        labelStyle={{
          color: COLORS.gray,
        }}
        onPress={() => navigation.navigate("SignUp")}
      />
      <TextButton 
        label="Skip" 
        onPress={() => navigation.navigate("Home")}
        containerStyle={{
          backgroundColor: null
        }}
        labelStyle={{
          color: COLORS.gray,
        }}
      />
    </AuthLayout>
  );
};

export default SignIn;