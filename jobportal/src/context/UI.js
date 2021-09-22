import React, { createContext, useReducer, useContext } from "react"
import { SELECTED } from "./types"

const UIStateContext = createContext()
const UIDispatchContext = createContext()

const UIReducer = (state, action) => {
  let { type, payload } = action
  switch (type) {
    case SELECTED:
      return {
        selected: payload
      }
    default:
      return {
        state,
      }
  }
}

export const UIProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UIReducer, {
    selected: "Home"
  })
  return (
    <UIDispatchContext.Provider value={dispatch}>
      <UIStateContext.Provider value={state}>
        {children}
      </UIStateContext.Provider>
    </UIDispatchContext.Provider>
  )
}

export const useUIState = () => useContext(UIStateContext)
export const useUIDispatch = () => useContext(UIDispatchContext)
