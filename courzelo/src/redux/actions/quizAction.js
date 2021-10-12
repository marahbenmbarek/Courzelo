
import axios from 'axios'
import ACTIONS from './index'

export const addQuiz = (token,post) => async (dispatch) => {
  try {
    const { data } = await axios.post('/quiz',post,{headers: {Authorization: token}});
    

    return dispatch({ type: ACTIONS.CREATE_QUIZ, payload: data });
  } catch (error) {
    
    console.log('error');
  }
};
export const getQuizs = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/quiz');
    
    return dispatch({ type: ACTIONS.FETCH_ALL_QUIZ, payload: data });
  } catch (error) {
    

  }
};
export const deleteQuiz = (id) => async (dispatch) => {
  try {
  
     await axios.delete(`/quiz/delete/${id}`);

    return dispatch({ type: ACTIONS.DELETE_QUIZ, payload:id });
  } catch (error) {
   
  }
};