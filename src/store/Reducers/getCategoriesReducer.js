import {GET_CATEGORIES} from "../actionTypes";

const defaultState = []

export const getCategoriesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.payload
    default:
      return state
  }
}