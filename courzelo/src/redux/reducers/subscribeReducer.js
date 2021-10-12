import ACTIONS from '../actions'

 
const subscribes =[];
const subscribeReducer = (state = subscribes , action) => {
    switch(action.type){
        case ACTIONS.FETCH_ALLSUBSCRIBES:
            return action.payload;
        case ACTIONS.CREATE_SUBSCRIBE:
                return [...subscribes, action.payload];
       case ACTIONS.DELETE_SUBSCRIBE:
            return subscribes.filter((subscribe) => subscribe._id !== action.payload);
        default:
            return state;
    }
}


export default subscribeReducer