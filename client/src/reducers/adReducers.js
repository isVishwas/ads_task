import {
    CREATE_AD_REQUEST,
    CREATE_AD_SUCCESS,
    CREATE_AD_FAIL,
    GET_AD_REQUEST,
    GET_AD_SUCCESS,
    GET_AD_FAIL

} from '../constants/adConstants'





export const createAdReducer = (state = {}, action) => {
    switch (action.type) {
      case CREATE_AD_REQUEST:
        return { loading: true }
      case CREATE_AD_SUCCESS:
        return { loading: false, posts: action.payload }
      case CREATE_AD_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

  export const getAdReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_AD_REQUEST:
        return { loading: true }
      case GET_AD_SUCCESS:
        return { loading: false, posts: action.payload }
      case GET_AD_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }