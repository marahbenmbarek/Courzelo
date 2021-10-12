import {combineReducers} from 'redux'
import auth from './authReducer'
import token from './tokenReducer'
import users from './usersReducer'
import courses from './courseReducer'
import categories from './categorieReducer'
import paniers from './panierReducer'
import subscribes from './subscribeReducer'
import quizs from './quizReducer'
import certifications from './certificationReducer'

export default combineReducers({
    auth,
    token,
    users,
    courses,
    categories,
    paniers,
    subscribes,
    quizs,
    certifications
})