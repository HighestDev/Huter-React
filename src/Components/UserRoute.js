import React from 'react';
import {Route} from 'react-router-dom';
import { useSelector} from 'react-redux';
import LoadingToRedirect from './LoadingToRiderect';


export default function UserRoute({children,...rest}) {
    const {currentUser} =useSelector((state)=>state.user)
    return  currentUser ? <Route {...rest}/>  :  <LoadingToRedirect />
        
        
}
   