
import axios from 'axios'
import ACTIONS from './index'

export const addCourse = (token,post) => async (dispatch) => {
  try {
    const { data } = await axios.post('/panier',post,{headers: {Authorization: token}});
    
    return dispatch({ type: ACTIONS.CREATE_PANIER, payload: data });
  } catch (error) {
    
  }
};

export const getAllCoursesByUser = (idCourse , idUser, token) => async (dispatch) => {
  try {
    
    const { data } = await axios.get(`/panier/panierCoursebyuser/${idCourse}/${idUser}`,{headers: {Authorization: token}});
    return dispatch({ type: ACTIONS.FETCH_ALL_COURSE_BY_USER_PANIER, payload: data });
  } catch (error) {
    
   
  }
};
export const deleteCourse = (id) => async (dispatch) => {
  try {
  
     await axios.delete(`/panier/delete/${id}`);

    return dispatch({ type: ACTIONS.DELETE_COURSE_FROM_PANIER, payload:id });
  } catch (error) {
   
  }
};
export const getAllCoursesByUserPanier = (token) => async (dispatch) => {
  try {
    
    const { data } = await axios.get('/panier/panierCoursebyuserforMe',{headers: {Authorization: token}});
    return dispatch({ type: ACTIONS.FETCH_ALL_COURSE_BY_USER_for_PANIER, payload: data });
  } catch (error) {
    
   
  }
};