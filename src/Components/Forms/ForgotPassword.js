import React,{useState} from 'react';
import { SignInContainer, ParagraphContent, Logo, ForgetPasswordContainer } from '../../Styles/Forms.styled';
import {SignUpButton,LoginButton} from '../../Styles/Buttons.styled'
import {Link,useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetPasswordInitiate } from '../../redux/action';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function ForgotPassword() {
  const [state,setState]=useState({
    email:""
  })

  const {email}=state;

  const dispatch=useDispatch();

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(resetPasswordInitiate(email))
    setState({email:''})
  }


  const onChangeSubmit=(e)=>{
    let {name,value}=e.target;
    setState({...state,[name]:value})
  }


  return (
    <SignInContainer>
     <ForgetPasswordContainer>
     <Link to="/"><Logo src="./images/amalitech.png" left={55} alt="" top={5} /></Link>
        <h1>Need help with your password?</h1>
         <p>Enter the email you used in creating your account and we'll help you create new password. </p>
        <form onSubmit={handleSubmit}>
          <input type="email" name='email' placeholder='Enter your email' value={email} onChange={onChangeSubmit} required/>

          <LoginButton width={400} height={50} disabled={!email}
          bgc={'#0070ba'} color={'#fff'} top={60}>    
          <span>Next</span>
           </LoginButton>
 
         <ParagraphContent>
          <Link to="/"><p className='returnLogin'>Return to Login</p></Link>
          </ParagraphContent>

        </form>
     </ForgetPasswordContainer>
        <ToastContainer
        />
    </SignInContainer>
  )
}

export default ForgotPassword