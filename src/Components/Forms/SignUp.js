import React,{useEffect, useRef,useState} from 'react';
import { LoginButton} from '../../Styles/Buttons.styled';
import { SignInContainer,InnerSignInContaienr, LeftLine, Logo,LinkToSignUpPage} from '../../Styles/Forms.styled';
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { registerInitiate } from '../../redux/action';



function SignUp() {

  const [state,setState]=useState({
   
    email:'',
    password:'',
    displayName:'',
    passwordConfirm:'',

  });

  const {currentUser} = useSelector((state)=>state.user);
 
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const {email,password,displayName,passwordConfirm}=state

  useEffect(()=>{
     if(currentUser){
      navigate('/verified')
     }
  },[currentUser,navigate])



  const handleSubmit=(e)=>{
    e.preventDefault();
    if(password !== passwordConfirm){
      return;
    }

    dispatch(registerInitiate(email,password,displayName));
    setState({email:"",displayName:"",password:"",passwordConfirm:""})
  };


  const handleChange=(e)=>{
    let {name,value}=e.target;
    setState({...state,[name]:value})
  }

    return (
        <SignInContainer>
          <InnerSignInContaienr>
          
         <Link to="/"><Logo src="./images/amalitech.png" alt="" top={40}/></Link>
              <LeftLine width={80} top={33}/>

        <form className='register_container' onSubmit={handleSubmit} >      
          <input  type="text" placeholder='Name' name="displayName"value={displayName} onChange={handleChange} required /><br/>
          <input  type="email" placeholder='highestgee@gmail.com' name="email" value={email} onChange={handleChange} required/><br/>
          <input  type="password" placeholder='Enter your password' name="password" value={password} onChange={handleChange} required/><br/>
          <input  type="password" placeholder='Confirm password' name='passwordConfirm' value={passwordConfirm} onChange={handleChange} required/><br/>
          
          <LoginButton top={10} height={40}
           width={350} bgc={'#0070ba'} color={'#fff'}
          >
            Register
            </LoginButton>

           <LinkToSignUpPage>
           Already have an account?<Link to="/"><span>SignIn</span></Link>
           </LinkToSignUpPage>
        </form>
        </InnerSignInContaienr>
      </SignInContainer>
  )
}

export default SignUp