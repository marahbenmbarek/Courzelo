import ACTIONS from '../actions/'

 
const paniers =[];
const paniersReducer = (state = paniers , action) => {
    switch(action.type){

        case ACTIONS.FETCH_ALL_COURSE_BY_USER_PANIER:
            return action.payload;
        case ACTIONS.CREATE_PANIER:
             return [...paniers, action.payload];
        case ACTIONS.DELETE_COURSE_FROM_PANIER:
            return paniers.filter((panier) => panier._id !== action.payload);
        case ACTIONS.FETCH_ALL_COURSE_BY_USER_for_PANIER:
            return action.payload;
        default:
            return state;
    }
}


export default paniersReducer