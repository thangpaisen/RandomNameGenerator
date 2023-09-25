import { createSlice } from '@reduxjs/toolkit'

interface NavigationState {
  token: string | undefined
  userInfo: any | undefined
  language: string
  historyName: Array<string>
}

const initialState: NavigationState = {
  token: undefined,
  userInfo: undefined,
  language: 'en',
  historyName: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload
    },
    setLanguage: (state, action) => {
      state.language = action.payload
    },

    clearHistory: (state) => {
      state.historyName = []
    },
    addNewName: (state, action) => {
      console.log('action.payload: ', action.payload)
      const newList = [action.payload, ...state?.historyName]
      console.log('newList: ', newList)
      state.historyName = newList
    },
    clearUser: (state) => {
      state.token = undefined
      state.userInfo = undefined
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUserInfo, setToken, clearUser, setLanguage, clearHistory, addNewName } =
  userSlice.actions
