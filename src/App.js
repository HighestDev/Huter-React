import React,{useState} from 'react';
import {ThemeProvider} from 'styled-components';
import GlobalStyles from './Styles/Global'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SignIn from './Components/Forms/SignIn';
import SignUp from './Components/Forms/SignUp';
import VerifiedUserView from './Pages/VerifiedUser';
import Domain from './Pages/Searches/Domain';
import ForgotPassword from './Components/Forms/ForgotPassword';
import axios from 'axios';
import EmailVerify from './Pages/Searches/EmailVerify';
import LoadingToRiderect from './Components/LoadingToRiderect';




const theme={
  colors:{
    secondary:'#0070ba',
    darkBlue:'#012169',
    primary:'#fff',
    tertiary:'#ebc999',
    base:'#fff',
    brown_shade:'#ebc999',
    tinter:'#9da3a6'
  },
}



function App() {
   const [information,setInformation]=useState([])


   const getData=async()=>{
    const {data}= await axios.get(`https://api.hunter.io/v2/domain-search?domain=$?{searchValues}&api_key=910a9f37a9ca45ff91d58fa30867e09646f7296f`)
     setInformation(data)
   }


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
       <BrowserRouter>
         <Routes>
          <Route path='/' element={<SignIn/>}/>
          <Route path='register' element={<SignUp/>}/>
          <Route path="verified" element={<VerifiedUserView/>}/>
          <Route path="domain" element={<Domain/>}/>
          <Route path="forgotPass" element={<ForgotPassword/>}/>
          <Route path="verify-email" element={<EmailVerify/>}/>
          <Route path='load' element={<LoadingToRiderect/>} />

         </Routes>
       </BrowserRouter>
      </ThemeProvider>
  )
}

export default App