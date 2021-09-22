import React, { useState, useEffect } from "react"
import { View, Text, Image, ScrollView, Button } from "react-native"
import { SIZES, FONTS,COLORS } from "../../constants"
import { TextButton, FormInput } from "../../components"
import checkMail, {checkEmailChange} from "../../utils/checkEmail"
import AuthLayout from "./AuthLayout"
import { forgotPassword } from "../../context/actions/auth"
import { useAlertDispatch } from "../../context/alert"

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [emailErr, setEmailErr] = useState(null)
  const [msg, setMsg] = useState("")
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const dispatch = useAlertDispatch()

  const handleChange = (e, field) => {
    setEmail(e)
    checkEmailChange(e, setEmailErr)
  }

  const submit = () => {
    if(emailErr) {
      setError("There are errors in your form")
      return
    }
    forgotPassword({
      setLoading,
      email,
      setError,
      navigation,
      dispatch
    })
  }

  checkMail(email, setEmailErr)

  useEffect(() => {
    if(error || emailErr || email.trim().length === 0) {
      setDisabled(true)
    } else if(loading) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [email, loading])

  return (
    <AuthLayout title="Forgot password?" subtitle="We've got you, enter your email and we will send you an email">
      <FormInput label="Email Address" handleChange={handleChange} autoComplete="email" value={email} name="email" error={emailErr && emailErr} />
      <TextButton 
        label={loading ? "Submitting..." : "Submit"} 
        containerStyle={{
          height: 40,
          borderRadius: SIZES.radius,
          marginVertical: SIZES.padding,
          backgroundColor: disabled ? COLORS.transparentPrimray : COLORS.secondary
        }}
        disabled={loading}
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
        label="Sign in instead?" 
        containerStyle={{
          height: 40,
          borderRadius: SIZES.radius,
          marginVertical: SIZES.padding,
          backgroundColor: COLORS.bg
        }}
        labelStyle={{
          color: COLORS.gray,
        }}
        onPress={() => navigation.navigate("SignIn")}
      />
      <TextButton 
        label="Skip" 
        onPress={() => navigation.navigate("CustomDrawer")}
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

export default ForgotPassword;