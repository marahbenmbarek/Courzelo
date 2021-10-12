import ACTIONS from '../actions/'

 
const certifications =[];
const certificationReducer = (state = certifications , action) => {
    switch(action.type){

      
        case ACTIONS.CREATE_CERTIFICATION:
             return [...certifications, action.payload];
        default:
            return state;
    }
}


export default certificationReducer