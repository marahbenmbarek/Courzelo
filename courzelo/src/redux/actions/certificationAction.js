
import axios from 'axios'
import ACTIONS from './index'

export const addCertification = (token,post) => async (dispatch) => {
  try {
    const { data } = await axios.post('/certification',post,{headers: {Authorization: token}});
    
    return dispatch({ type: ACTIONS.CREATE_CERTIFICATION, payload: data });
  } catch (error) {
    
  }
};

