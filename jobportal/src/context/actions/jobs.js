import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import { API } from "../../utils/api"
import {catchError} from "./auth"

export const fetchJobs = ({ setItems, setLoading }) => {
  setLoading(true)
  axios
    .get(
      `${API}/jobs?pageSize=6&fields=name,company,closeDate,location,jobType,id`
    )
    .then((res) => {
      setItems(res.data.jobs)
      setLoading(false)
    })
    .catch((err) => {
      setLoading(false)
    })
}

export const fetchRecommendedJobs = ({setItems, setLoading, params}) => {
  let keyword = params?.keyword
  let location = params?.location
  keyword = keyword?.split(" ")
  location = location?.split(" ")
  let url = ""
  keyword?.forEach(el => {
    url = url + `&filter=name:ilike:${el}`
  });
  location?.forEach(el => {
    url = url + `&filter=location:ilike:${el}`
  })
  if(url) {
  setLoading(true)
   axios
    .get(
      `${API}/jobs?pageSize=6&fields=name,company,closeDate,location,jobType,id${url}`
    )
    .then((res) => {
      setItems(res.data.jobs)
      setLoading(false)
    })
    .catch((err) => {
      setLoading(false)
    })
  }
}

export const checkFavourite = async ({id, userId, setFavourite, setLoading}) => {
    setLoading(true)
    let user = await AsyncStorage.getItem("user")
    let token = JSON.parse(user)?.token

    let config = {
        headers: {
          Authorization: `Bearer ` + token,
        },
      }

    axios
      .get(`${API}/jobs/${id}/saves/${userId}`, config)
      .then((res) => {
        setLoading(false)
        setFavourite(true)
      })
      .catch((err) => {
        setLoading(false)
        setFavourite(false)
      })
}

export const toggleFavourite = async ({id, setFavourite, dispatch, favourite}) => {
    let user = await AsyncStorage.getItem("user")
    let token = JSON.parse(user)?.token

    let config = {
        headers: {
          Authorization: `Bearer ` + token,
        },
      }

  if (!favourite) {
      axios
        .post(`${API}/jobs/${id}/save`, {}, config)
        .then((res) => {
          setFavourite(true)
        })
        .catch((err) => {
          catchError({err, dispatch})
        })
    } else {
      axios
        .delete(`${API}/jobs/${id}/remove`, config)
        .then((res) => {
          setFavourite(false)
        })
        .catch((err) => {
          catchError({err, dispatch})
        })
    }
}