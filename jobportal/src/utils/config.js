import { AsyncStorage } from "@react-native-async-storage/async-storage"

let stringUser = AsyncStorage.get("user")

let user = JSON.parse(stringUser)

let token = user?.token

export const config = {
  headers: {
    Authorization: `Bearer ` + token,
  },
}
