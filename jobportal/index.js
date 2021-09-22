import React from "react"
import { AppRegistry } from "react-native"
import App from "./App"
import { name as appName } from "./app.json"
import { AuthProvider } from "./src/context/auth"
import { AlertProvider } from "./src/context/alert"

const AppContainer = () => {
  return (
    <AuthProvider>
      <AlertProvider>
        <App />
      </AlertProvider>
    </AuthProvider>
  )
}

AppRegistry.registerComponent(appName, () => AppContainer)
