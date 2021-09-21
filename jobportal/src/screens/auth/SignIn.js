import React, {useState} from "react"
import { View, Text, ScrollView, Button } from "react-native"
import { images, SIZES, FONTS,COLORS } from "../../constants"
import { TextButton, FormInput } from "../../components"
import AuthLayout from "./AuthLayout"

const SignIn = ({navigation}) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

const [errors, setErrors] = useState({})

const [loading, setLoading] = useState(false)

  const handleChange = (e, field) => {
    console.log(e)
    setFormData({
      ...formData,
      [field]: e
    })
  }

  console.log(formData);

  return (
    <AuthLayout title="Lets Sign You In" subtitle="Welcome back, please login to your account">
      <FormInput label="Username or email" placeholder="email@example.com" handleChange={handleChange} autoComplete="email" value={formData.username} name="username"/>
      <FormInput label="Password" placeholder="email@example.com" handleChange={handleChange} autoComplete="password" secureTextEntry={true} value={formData.password} name="password" />
      <TextButton label="Sign in" containerStyle={{
              height: 40,
              borderRadius: SIZES.radius,
              marginVertical: SIZES.padding
            }}/>

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
      <TextButton label="Dont have an account?" containerStyle={{
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