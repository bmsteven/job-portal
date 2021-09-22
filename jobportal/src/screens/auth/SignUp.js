import React, { useState, useEffect } from "react"
import { View, Text } from "react-native"
import { images, SIZES, FONTS,COLORS } from "../../constants"
import { TextButton, FormInput } from "../../components"
import AuthLayout from "./AuthLayout"
import checkSymbols, {checkChange} from "../../utils/checkSymbols"
import checkMail, {checkEmailChange} from "../../utils/checkEmail"
import { register } from "../../context/actions/auth"
import { useAlertDispatch } from "../../context/alert"

const SignUp = ({ navigation }) => {
  const [errors, setErrors] = useState(null)
  const [error, setError] = useState(null)
  const [emailErr, setEmailErr] = useState(null)
  const [usernameErr, setUsernameErr] = useState(null)
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
  })
  const { firstname, lastname, email, username, password } = formData
  const dispatch = useAlertDispatch()

  const handleChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e
    })

    setError(null)

    if (field === "email") checkEmailChange(e, setEmailErr)

    if (field === "username") checkChange(e, setUsernameErr)

    if (field === "lastname") {
      if (e.length < 2) {
        setErrors({ ...errors, lastname: "Atleast two(2) characters required" })
      } else {
        setErrors({
          ...errors,
          lastname: "",
        })
      }
    }
    if (field === "password") {
      if (e.length < 6) {
        setErrors({ ...errors, password: "Your password is weak" })
      } else {
        setErrors({
          ...errors,
          password: "",
        })
      }
    }

    if (field === "firstname") {
      if (e.length < 2) {
        setErrors({
          ...errors,
          firstname: "Atleast two(2) characters required",
        })
      } else {
        setErrors({
          ...errors,
          firstname: "",
        })
      }
    }
  }

  const submit = () => {
    if(username.trim().length < 3) { 
      setUsernameErr("This field shouldn't be empty")
      setError("There are errors in your form")
      return
    }
    if(password.trim().length < 6) {
      setErrors({ ...errors, password: "Your password is weak" })
      setError("There are errors in your form")
      return
    }
    if(firstname.trim().length < 2) {
      setErrors({
        ...errors,
        firstname: "Atleast two(2) characters required",
      })
      setError("There are errors in your form")
      return
    }
    if(lastname.trim().length < 2) {
      setErrors({
        ...errors,
        lastname: "Atleast two(2) characters required",
      })
      setError("There are errors in your form")
      return
    }
    if(email.trim().length < 3) {
      setEmailErr("Invalid email address")
      setError("There are errors in your form")
      return
    }
    register({
      setError,
      setLoading,
      formData,
      navigation, 
      dispatch
    })
  }

  checkMail(email, setEmailErr)
  checkSymbols(username, setUsernameErr)

  useEffect(() => {
    if(error || errors || usernameErr || emailErr || username.trim().length === 0 || password.trim().length === 0 || firstname.trim().length === 0 || lastname.trim().length === 0 || email.trim().length === 0 ) {
      setDisabled(true)
    } else if(loading) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [formData, loading])

  return (
    <AuthLayout 
      title="Getting Started" 
      subtitle="Create an account to continue"
    >
      <FormInput label="First name" handleChange={handleChange} autoComplete="name" value={firstname} name="firstname" error={errors?.firstname && errors.firstname} />
      <FormInput label="Last name" handleChange={handleChange} autoComplete="name" value={lastname} name="lastname" error={errors?.lastname && errors.lastname} />
      <FormInput label="Email" handleChange={handleChange} autoComplete="email" value={email} name="email" error={emailErr?.msg && emailErr.msg} />
      <FormInput label="Username" handleChange={handleChange} autoComplete="username" value={username} name="username" error={usernameErr?.msg && usernameErr.msg} />
      <FormInput label="Password" handleChange={handleChange} autoComplete="password" secureTextEntry={true} value={password} name="password" error={errors?.password && errors.password} />
      <TextButton 
        label={loading ? "Please Wait..." : "Sign Up"} 
        containerStyle={{
          height: 40,
          borderRadius: SIZES.radius,
          marginVertical: SIZES.padding,
          backgroundColor: disabled ? COLORS.transparentPrimray : COLORS.secondary
        }}
        disabled={loading}
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

export default SignUp;
