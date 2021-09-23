import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import { API } from "../../utils/api"
import {catchError} from "./auth"
// import {CATEGORIES, CATEGORIES_FAIL} from "../types"

export const fetchFeaturedCompanies = async ({setItems, setLoading}) => {
     setLoading(true)
  axios
    .get(
      `${API}/companies?pageSize=6&fields=name,id,location,logo`
    )
    .then((res) => {
      setItems(res.data.companies)
      setLoading(false)
    })
    .catch((err) => {
      setLoading(false)
    })
}