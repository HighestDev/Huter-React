import React,{useState,useEffect} from 'react'
import { LoginButton,SignUpButton} from '../../Styles/Buttons.styled';
import { SignInContainer,InnerSignInContaienr, LinesAndWords, LeftLine, Logo } from '../../Styles/Forms.styled';
import {Link, useNavigate} from 'react-router-dom';
import { loginInitiate } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignIn() {
  const [state,setState]=useState({
    email:'',
    password:'',
  
  })


  const {currentUser,error} = useSelector((state)=>state.user);
 
  const dispatch=useDispatch();
  const navigate=useNavigate();

// const {email,password,displayName,passwordConfirm}=state

  useEffect(()=>{
     if(currentUser){
      navigate('/verified')
     }
  },[currentUser,navigate])


  const {email,password}=state

  const handleChange=(e)=>{
    let {name,value}=e.target;
    setState({...state,[name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!email ||!password ){
      return;
    }

    dispatch(loginInitiate(email,password));
    setState({email:"",password:""})
  }

  return (
    <React.Fragment>
    <SignInContainer>
      <InnerSignInContaienr>
          <Link to="/"><Logo src="./images/amalitech.png" alt="" top={40} /></Link>
          <LeftLine width={80} top={33}/>


        <form onSubmit={handleSubmit}>      
          <input type="email" id="inputEmail" name='email' placeholder='highest@gmail.com' value={email} onChange={handleChange} required/><br/>
          <input  type="password" id="inputPassword" name='password' placeholder='Enter your password' value={password} onChange={handleChange} required/><br/>
          <Link to="/forgotPass"><p className="forgotPassText">Forgot password?</p></Link>
          <LoginButton top={10} height={40}
           width={350} bgc={'#0070ba'} color={'#fff'}>
            login
            </LoginButton>


           <LinesAndWords>
               <LeftLine width={40} className="left_line"/>
               <p>or</p>
               <LeftLine width={40} className="right_line"/>       
           </LinesAndWords>


          <Link to="/register">
          <SignUpButton>       
          <span>SignUp </span>
           </SignUpButton>
           </Link>
         
        </form>
             <ToastContainer/>
        </InnerSignInContaienr>
      </SignInContainer>
      </React.Fragment>
  )
}

export default SignIn