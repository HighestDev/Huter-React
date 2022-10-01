import React from 'react';
import Footer from '../../Components/Footer/Footer';
import { VerifiedUserViewContainer } from '../../Styles/LandingPage.styled';
import Body from './Body';
import Header from './Header';



function VerifiedUserView() {
  return (
      <VerifiedUserViewContainer>
       <Header/>
       <Body/>
       <Footer/>
       
      </VerifiedUserViewContainer>
  )
}

export default VerifiedUserView