import { CREATE_AD_FAIL, CREATE_AD_REQUEST, CREATE_AD_SUCCESS, GET_AD_FAIL, GET_AD_REQUEST, GET_AD_SUCCESS } from '../constants/adConstants'
import axios from 'axios';




export const createPost = (id , title, category, price, image) => async (dispatch,getState) => {
  console.log("data ---",id,title, category, price, image)
    try {
      dispatch({
        type: CREATE_AD_REQUEST,
      })

      const {
        userLogin: { userInfo },
      } = getState()

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.post('/api/post/create',{ id, title, category, price, image },config);
  
      dispatch({
        type: CREATE_AD_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: CREATE_AD_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }





  export const getPost = (user) => async (dispatch,getState) => {
    console.log("in get post route")
    try {
      dispatch({
        type: GET_AD_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.get(
        `/api/post/${user._id}`,config
      )
  
      dispatch({
        type: GET_AD_SUCCESS,
        payload: data,
      })
  
    } catch (error) {
      dispatch({
        type: GET_AD_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }