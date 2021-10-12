
import axios from 'axios'
import ACTIONS from './index'

export const addCourse = (token,post) => async (dispatch) => {
  try {
    const { data } = await axios.post('/course',post,{headers: {Authorization: token}});
    
console.log('lalalal');
    return dispatch({ type: ACTIONS.CREATE_COURSE, payload: data });
  } catch (error) {
    
    console.log('error');
  }
};
export const getCourses = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/course');
    
    return dispatch({ type: ACTIONS.FETCH_ALL, payload: data });
  } catch (error) {
    

  }
};
export const getAllCoursesByUser = (token) => async (dispatch) => {
  try {
    
    const { data } = await axios.get('/course/coursebyuser',{headers: {Authorization: token}});
    return dispatch({ type: ACTIONS.FETCH_ALL_COURSE_BY_USER, payload: data });
  } catch (error) {
    

  }
};
export const getAllCoursesById = (id) => async (dispatch) => {
  try {
    
    const { data } = await axios.get(`/course/coursebyid/${id}`);
    return dispatch({ type: ACTIONS.FETCH_ALL_COURSE_BY_ID, payload: data });
  } catch (error) {
    

  }
};
export const getAllCoursesByCategory = (token) => async (dispatch) => {
  try {
    
    const { data } = await axios.get('/course/getAllCoursesByCategory',{headers: {Authorization: token}});
    return dispatch({ type: ACTIONS.FETCH_ALL_COURSE_BY_CATEGORIE, payload: data });
  } catch (error) {
    

  }
};
export const updateCourse = (id, editCourse) => async (dispatch) => {
  try {
  
    const { data } = await axios.patch(`/course/updateCourse/${editCourse._id}`,editCourse);

    return dispatch({ type: ACTIONS.UPDATE_COURSE, payload: data });
  } catch (error) {
    
  }
};
export const updateCoursesubscribe = (id, editCourse) => async (dispatch) => {
  try {
  
    const { data } = await axios.patch(`/course/updateCourse/${editCourse._id}`,editCourse.subscribe);

    return dispatch({ type: ACTIONS.UPDATE_COURSE, payload: data });
  } catch (error) {
    
  }
};
export const deleteCourse = (id) => async (dispatch) => {
  try {
  
     await axios.delete(`/course/delete/${id}`);

    return dispatch({ type: ACTIONS.DELETE_COURSE, payload:id });
  } catch (error) {
   
  }
};