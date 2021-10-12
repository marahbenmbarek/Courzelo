import ACTIONS from '../actions/'

 
const courses =[];
const coursesReducer = (state = courses , action) => {
    switch(action.type){
        case ACTIONS.FETCH_ALL:
            return action.payload;
        case ACTIONS.FETCH_ALL_COURSE_BY_USER:
            return action.payload;
        case ACTIONS.FETCH_ALL_COURSE_BY_ID:
            return action.payload;
        case ACTIONS.FETCH_ALL_COURSE_BY_CATEGORIE:
                return action.payload;
        case ACTIONS.CREATE_COURSE:
             return [...courses, action.payload];
        case ACTIONS.UPDATE_COURSE:
                return courses.map((course) => (course._id === action.payload._id ? action.payload : course));
        case ACTIONS.DELETE_COURSE:
            return courses.filter((course) => course._id !== action.payload);
        default:
            return state;
    }
}


export default coursesReducer