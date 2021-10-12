
import axios from 'axios'
import ACTIONS from './index'

export const addCategorie = (token,post) => async (dispatch) => {
  try {
    const { data } = await axios.post('/categorie',post,{headers: {Authorization: token}});
    

    return dispatch({ type: ACTIONS.CREATE_CATEGORIE, payload: data });
  } catch (error) {
    

  }
};
export const getCategories = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/categorie');
    
    return dispatch({ type: ACTIONS.FETCH_ALLCATEGORIE, payload: data });
  } catch (error) {
    

  }
};

export const updateCategorie = (id, editCategorie) => async (dispatch) => {
  try {
  
    const { data } = await axios.patch(`/categorie/updateCategorie/${editCategorie._id}`,editCategorie);

    return dispatch({ type: ACTIONS.UPDATE_CATEGORIE, payload: data });
  } catch (error) {
    
  }
};
export const deleteCategorie = (id) => async (dispatch) => {
  try {
  
     await axios.delete(`/categorie/deleteCategorie/${id}`);

    return dispatch({ type: ACTIONS.DELETE_CATEGORIE, payload:id });
  } catch (error) {
   
  }
};