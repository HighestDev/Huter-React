import * as types from './actionTypes';
import {auth} from '../firebase';
import {toast} from 'react-toastify';


const registerStart=()=>({
    type:types.REGISTER_START
});

const registerSuccess=(user)=>({
    type:types.REGISTER_SUCCESS,
    payload:user,
});


const registerFail=(error)=>({
    type:types.REGISTER_FAIL,
    payload:error,
});



const loginStart=()=>({
    type:types.LOGIN_START
});


const loginSuccess=(user)=>({
    type:types.LOGIN_SUCCESS,
    payload:user,
});


const loginFail=(error)=>({
    type:types.LOGIN_FAIL,
    payload:error,
});


const logoutStart=()=>({
    type:types.LOGOUT_START
});

const logoutSuccess=()=>({
    type:types.LOGOUT_SUCCESS
});


const logoutFail=(error)=>({
    type:types.LOGOUT_FAIL,
    payload:error
})



const forgotPasswordStart=()=>({
    type:types.FORGOT_PASSWORD_START
});

const passwordResetSuccess=()=>({
    type:types.FORGOT_PASSWORD_SUCCESS,
   
});

const passwordResetFail=(error)=>({
    type:types.FORGOT_PASSWORD_FAIL,
    payload:error
})


export const SET_USER=(user)=>({
    type:types.SET_USER,
    payload:user
});




export const registerInitiate=(email,password,displayName)=>{
   return function(dispatch){
    dispatch(registerStart());
    auth.createUserWithEmailAndPassword(email,password).then(({user})=>{
        user.updateProfile({
            displayName
        })
        dispatch(registerSuccess(user))
    }).catch((error)=>{dispatch(passwordResetFail(error.message));toast.error(error.message)})
   }
}


export const loginInitiate=(email,password)=>{
    return function(dispatch){
     dispatch(loginStart());
     auth
     .signInWithEmailAndPassword(email,password)
     .then(({user})=>{
  
         dispatch(loginSuccess(user))
     })
     .catch((error)=>{dispatch(passwordResetFail(error.message));toast.error(error.message)}).catch((error)=>dispatch(loginFail(error.message)))
    }
 }





export const logoutInitiate=()=>{
    return function(dispatch){
     dispatch(logoutStart());
     auth
     .signOut()
     .then((res)=>
  
         dispatch(logoutSuccess())
     )
     .catch((error)=>{dispatch(passwordResetFail(error.message));toast.error(error.message)}).catch((error)=>{dispatch(logoutFail(error.message));toast.error(error.message)})
    }
 }


 export const resetPasswordInitiate=(email)=>{
    return function(dispatch){
        dispatch(forgotPasswordStart());
        auth.sendPasswordResetEmail(email)
        .then(()=>{
            toast.success('Check your mail to reset password!(Check spam to see your email)')
        }).catch((error)=>{dispatch(passwordResetFail(error.message));toast.error(error.message)})
    }
 }