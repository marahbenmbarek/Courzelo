import ACTIONS from '../actions'

 
const quizs =[];
const quizsReducer = (state = quizs , action) => {
    switch(action.type){
        case ACTIONS.FETCH_ALL_QUIZ:
            return action.payload;
        case ACTIONS.CREATE_QUIZ:
             return [...quizs, action.payload];
        case ACTIONS.DELETE_QUIZ:
            return quizs.filter((quiz) => quiz._id !== action.payload);
        default:
            return state;
    }
}


export default quizsReducer