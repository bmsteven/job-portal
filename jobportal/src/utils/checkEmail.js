import React, { useEffect } from "react"

let format = /^\S+@\S+\.\S+$/

export const checkEmailChange = (name, setError) => {
  let check = format.test(name)
  if (check) setError(null)
}

const checkMail = (name, setError) => {
  useEffect(() => {
    let isMounted = true
    if(isMounted)
      if (name) {
        let check = format.test(name)
        if (check) setError(null)
        if (!check)
          setError("Invalid email")
      }
    return () => {
      isMounted = false
    }
  }, [name])
  return null
}

export default checkMail
