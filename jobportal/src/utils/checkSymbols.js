import React, { useEffect } from "react"

let format = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,<>\/?~]/

const checkSymbols = (name, setError) => {
  useEffect(() => {
    let isMounted = true
    if(isMounted){ 
      let chars = format.exec(name)
      if (format.test(name))
        setError("Your username contains reserved character(s)")
      if (chars)
        setError(`${chars[0]} is reserved character`)
    }
    return () => {
      isMounted = false
    } 
    }, [name])
  return null
}

export const checkChange = (name, setError) => {
  let chars = format.exec(name)
  if (!chars) setError(null)
  return null
}

export default checkSymbols
