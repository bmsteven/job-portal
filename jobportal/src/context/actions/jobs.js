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
      console.log(err)
      setLoading(false)
    })
}
