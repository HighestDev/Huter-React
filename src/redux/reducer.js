import * as types from './actionTypes';

const initialState={
    name: null,
  loading:false,
  currentUser:null,
  error:null,
};

const userReducer=(state=initialState,action)=>{
   switch(action.type){
    case types.REGISTER_START:
    case types.LOGIN_START:
    case types.LOGOUT_START:
    case types.FORGOT_PASSWORD_START:
        return {
            ...state,
            loading:true,
            
        };
    case types.LOGOUT_SUCCESS:
        return{
            ...state,
            currentUser:null,
        };  
    case types.SET_USER:
        return{
            ...state,
            loading:false,
            currentUser:action.payload
        } 
    case types.REGISTER_SUCCESS:
    case types.LOGIN_SUCCESS:
        return {
            ...state,
            loading:false,
          
            currentUser:action.payload,
        };
    case types.FORGOT_PASSWORD_SUCCESS:
        return{
            ...state,
            loading:false,
            error:false
        }
    case types.REGISTER_FAIL:
    case types.LOGIN_FAIL:
    case types.LOGOUT_FAIL:
    case types.FORGOT_PASSWORD_FAIL:
        return{
            ...state,
            loading:false,
            error:action.payload
        };
    default:
        return state;
   }
};

export default userReducer;