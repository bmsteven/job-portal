import React, { createContext, useReducer, useContext } from "react"
import { ADD, REMOVE } from "./types"

const AlertStateContext = createContext()
const AlertDispatchContext = createContext()

const alertReducer = (state, action) => {
  let { type, payload } = action
  switch (type) {
    case ADD:
      let { message, type } = payload
      return {
        ...state,
        alert: {
          message,
          type,
        },
      }
    case REMOVE:
      return {
        ...state,
        alert: {
          message: "",
          type: "",
        },
      }
    default:
      return {
        state,
      }
  }
}

export const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, {
    alert: {
      message: "",
      type: "",
    },
  })
  return (
    <AlertDispatchContext.Provider value={dispatch}>
      <AlertStateContext.Provider value={state}>
        {children}
      </AlertStateContext.Provider>
    </AlertDispatchContext.Provider>
  )
}

export const useAlertState = () => useContext(AlertStateContext)
export const useAlertDispatch = () => useContext(AlertDispatchContext)
