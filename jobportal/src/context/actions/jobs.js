import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import { API } from "../../utils/api"
import {catchError} from "./auth"
import {CATEGORIES, CATEGORIES_FAIL, ADD} from "../types"

export const fetchJobs = async ({ setItems, setLoading, dispatch }) => {
  setLoading(true)
  axios
    .get(
      `${API}/jobs?pageSize=6&fields=name,company,closeDate,location,jobType,id,created`
    )
    .then((res) => {
      setItems(res.data.jobs)
      setLoading(false)
    })
    .catch((err) => {
      setLoading(false)
      catchError({err, dispatch})
    })
}

export const fetchJobDetails = async ({setItems, setLoading, setError, id}) => {
  setLoading(true)
  axios
    .get(
      `${API}/jobs/${id}?fields=description,attachment,email,created`
    )
    .then((res) => {
      setItems(prev => {
        return {
          ...prev, 
          ...res.data
        }
      })
      setLoading(false)
    })
    .catch((err) => {
      setLoading(false)
      displayError({err, setError})
    })
}

export const fetchRecommendedJobs = async ({setItems, setLoading, params, setMessage, dispatch, id}) => {
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
      `${API}/jobs?pageSize=6&fields=name,company,closeDate,location,jobType,id,created${url}`
    )
    .then((res) => {
      if(dispatch) {
        setItems(prev => {
          let jobs = res?.data?.jobs?.filter(el => el.id !== id )
          return {
              ...prev,
              jobs
            }
        })
      } else {
        setItems(res.data.jobs)
      }
      if(res?.data?.jobs?.length === 0) setMessage("No related job found")
      setLoading(false)
    })
    .catch((err) => {
      setLoading(false)
      if(dispatch) {
        catchError(err, dispatch)
      }
    })
  }
}

export const checkFavourite = async ({id, setFavourite, setLoading}) => {
    setLoading(true)
    let user = await AsyncStorage.getItem("user")
    let token = JSON.parse(user)?.token
    let userId = JSON.parse(user)?.id

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

export const checkApplicationStatus = async ({setLoading, setApplication, dispatch, id}) => {
  let user = await AsyncStorage.getItem("user")
  let token = JSON.parse(user)?.token
  let userId = JSON.parse(user)?.id

  let config = {
    headers: {
      Authorization: `Bearer ` + token,
    },
  }
  setLoading(true)
  axios
    .get(`${API}/jobs/${id}/applications/${userId}?fields=id?fields=accepted,rejected,interview`, config)
    .then((res) => {
      if(res?.data?.interview === true) {
        setApplication({
          status: "You were accepted!",
          date: res?.data?.date,
          location: res?.data?.location, 
          accepted: true
        })
      } else if (res?.data?.interview === false) {
        setApplication({
          status: "Sorry, you werr rejected!",
          rejected: true
        })
      } else {
        setApplication({
          status: "No response yet!",
          pending: true
        })
      }
      setLoading(false)
    })
    .catch((err) => {
      if(err?.response?.status === 404) {
        setApplication(false)
      }
      setLoading(false)
    })
}

export const apply = async ({id, dispatch, setLoading, setApplication}) => {
  let user = await AsyncStorage.getItem("user")
  let token = JSON.parse(user)?.token

  let config = {
    headers: {
      Authorization: `Bearer ` + token,
    },
  }
  setLoading(true)
  axios
    .post(`${API}/jobs/${id}/apply`, {}, config)
    .then((res) => {
      setLoading(false)
      setApplication({
        status: "No response yet",
        pending: true
      })
      dispatch({
        type: ADD,
        payload: {
          type: "success",
          message: "Your application was submitted successfully"
        }
      })
    })
    .catch((err) => {
      setLoading(false)
      catchError({err, dispatch})
    })
}

export const revoke = async ({id, dispatch, setLoading, setApplication, closeModal}) => {
  let user = await AsyncStorage.getItem("user")
  let token = JSON.parse(user)?.token

  let config = {
    headers: {
      Authorization: `Bearer ` + token,
    },
  }
  setLoading(true)
  axios
    .delete(`${API}/jobs/${id}/revoke`, config)
    .then((res) => {
      console.log(res)
      setLoading(false)
      setApplication(false)
      checkApplicationStatus({id, setApplication, setLoading, dispatch})
      dispatch({
        type: ADD,
        payload: {
          type: "success",
          message: "You revoked this application"
        }
      })
      closeModal()
    })
    .catch((err) => {
      setLoading(false)
      catchError(err, dispatch)
    })
}

export const accept  = async ({id, setLoading, setApplication, dispatch, closeModal}) => {
  let user = await AsyncStorage.getItem("user")
  let token = JSON.parse(user)?.token

  let config = {
    headers: {
      Authorization: `Bearer ` + token,
    },
  }
  // setLoading(true)
  setApplication({
    status: "You Accepted this offer"
  })
  dispatch({
    type: ADD,
    payload: {
      message: "You accepted the job",
      type: "success"
    }
  })
  closeModal()
}

export const fetchCategories = async ({dispatch, setLoading}) => {
  setLoading(true)
  axios
    .get(
      `${API}/jobCategories?fields=id,name,children[id, name]&filter=verified:eq:true`
    )
    .then((res) => {
      dispatch({
        type: CATEGORIES,
        payload: res?.data?.jobCategories,
      })
      setLoading(false)
    })
    .catch((err) => {
      setLoading(false)
      dispatch({
        type: CATEGORIES_FAIL
      })
    })
}

export const displayError = async ({setError, err}) => {
  if (err?.response) {
    setError(err?.response?.data?.message)
  } else if (err?.message) {
    if (err?.code === "ECONNREFUSED") {
      setError("Failed to connect, please try again")
    } else {
        setError(err?.message)
    }
  } else {
    setError("Internal server error, please try again")
  }
}