
import axios from 'axios'
import ACTIONS from './index'

export const addSubscribe = (token,post) => async (dispatch) => {
  try {
    const { data } = await axios.post('/subscribe',post,{headers: {Authorization: token}});
    
console.log('lalalal');
    return dispatch({ type: ACTIONS.CREATE_SUBSCRIBE, payload: data });
  } catch (error) {
    
    console.log('error');
  }
};
export const getAllSubscribe = (idCourse,idUser) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/subscribe/${idCourse}/${idUser}`);
    
    return dispatch({ type: ACTIONS.FETCH_ALLSUBSCRIBES, payload: data });
  } catch (error) {
    

  }
};

export const deleteSubscribe  = (id) => async (dispatch) => {
  try {
  
     await axios.delete(`/subscribe /delete/${id}`);

    return dispatch({ type: ACTIONS.DELETE_SUBSCRIBE, payload:id });
  } catch (error) {
   
  }
};