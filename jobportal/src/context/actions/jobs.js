import axios from "axios"
import { API } from "../../utils/api"

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
  keyword = keyword.split(" ")
  location = location.split(" ")
  let url = ""
  keyword?.forEach(el => {
    url = url + `&filter=name:ilike:${el}`
  });
  location?.forEach(el => {
    url = url + `&filter=location:ilike:${el}`
  })
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
