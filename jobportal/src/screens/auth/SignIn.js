import React from "react"
import { View, Text, Image, ScrollView, Button } from "react-native"
import { images, SIZES, FONTS,COLORS } from "../../constants"
import { TextButton, FormInput } from "../../components"
import AuthLayout from "./AuthLayout"

const SignIn = ({navigation}) => {
  const handleChange = e => {
    
  }
  return (
    <AuthLayout title="Lets Sign You In" subtitle="Welcome back, please login to your account">
      <FormInput label="Username or email" placeholder="email@example.com" handleChange={handleChange} autoComplete="email" />
      <FormInput label="Password" placeholder="email@example.com" handleChange={handleChange} autoComplete="email" />
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