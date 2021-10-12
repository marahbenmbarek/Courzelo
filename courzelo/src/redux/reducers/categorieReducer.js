import ACTIONS from '../actions'

 
const categories =[];
const categoriesReducer = (state = categories , action) => {
    switch(action.type){
        case ACTIONS.FETCH_ALLCATEGORIE:
            return action.payload;
    
        case ACTIONS.CREATE_CATEGORIE:
             return [...categories, action.payload];
        case ACTIONS.UPDATE_CATEGORIE:
                return categories.map((categorie) => (categorie._id === action.payload._id ? action.payload : categorie));
        case ACTIONS.DELETE_CATEGORIE:
            return categories.filter((categorie) => categorie._id !== action.payload);
        default:
            return state;
    }
}


export default categoriesReducer