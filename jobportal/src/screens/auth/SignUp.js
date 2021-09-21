import React from "react"
import { View, Text, Image } from "react-native"
import { images, SIZES, FONTS,COLORS } from "../../constants"
import { TextButton, FormInput } from "../../components"
import AuthLayout from "./AuthLayout"

const SignUp = ({navigation}) => {

  const handleChange = e => {
    
  }

  return (
    <AuthLayout title="Getting Started" 
    subtitle="Create an account to continue"
    >
      <FormInput label="First name" placeholder="email@example.com" handleChange={handleChange} autoComplete="email" />
      <FormInput label="Last name" placeholder="email@example.com" handleChange={handleChange} autoComplete="email" />
      <FormInput label="Email" placeholder="email@example.com" handleChange={handleChange} autoComplete="email" />
      <FormInput label="Username" placeholder="email@example.com" handleChange={handleChange} autoComplete="email" />
      <FormInput label="Password" placeholder="email@example.com" handleChange={handleChange} autoComplete="email" />
      <TextButton label="Sign Up" containerStyle={{
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
      <TextButton label="Sign in instead?" containerStyle={{
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
