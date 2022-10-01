import React,{useState} from 'react';
import { Logo } from '../../Styles/Forms.styled';
import { ContentAndItems, ContentPart, VerifiedUserHeader,ControlFlex, VerifiedUserHeaderContent,VerifiedUserHeaderSection, VerifiedUserHeaderSection1 } from '../../Styles/LandingPage.styled';
import {CloseOutlined, DownOutlined, ExpandOutlined, SearchOutlined, UserSwitchOutlined,UsergroupAddOutlined, WechatOutlined, RiseOutlined, FileSearchOutlined} from '@ant-design/icons'
import { DomainNameContainer, SecondSection,ListItem, DropDown, PerformQuery } from '../../Styles/Header.styled';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutInitiate } from '../../redux/action';


function Header(){
  const [isOpen,setIsOpen]=useState(false)
  const [userName,setUserName]=useState('')

  let {name}= useSelector((state)=> state.user)
  const {currentUser} =useSelector((state)=>state.user)
  const dispatch = useDispatch();
  name = currentUser?.displayName;
   console.log(name)
  const handleAuth=()=>{
     if(currentUser){
      dispatch(logoutInitiate())
     }
  }

  const toggleDown=()=>setIsOpen(!isOpen);


   
      


    return(
     <React.Fragment>
    
     <VerifiedUserHeader>

        <VerifiedUserHeaderContent>
          <Link to="/verified"><Logo src="./images/amalitech.png" alt="annex"  className="header_logo"/> </Link> 
          
      
             <VerifiedUserHeaderSection1 >
            <SecondSection left={50}>
            <Link to="/domain" style={{listStyle:'none',textDecoration:'none'}}><li>Domain Name</li> </Link>    
            </SecondSection>

            <SecondSection >
                  <Link to="/verify-email" style={{listStyle:'none',textDecoration:'none'}}><li>Email Finder</li></Link>
            </SecondSection>

         </VerifiedUserHeaderSection1>

         <VerifiedUserHeaderSection>
        <Logo src="./images/avatar.png" alt="profile" onClick={toggleDown} />  
           <h3>{currentUser?.displayName}</h3>
           
           
           </VerifiedUserHeaderSection>

        </VerifiedUserHeaderContent>
    </VerifiedUserHeader>
   
       {isOpen &&(
             <Link to="/load">
             <DropDown onClick={handleAuth}>
               <p>Logout</p>
            </DropDown>
            </Link>
           
          )}


    {/* <PerformQuery>
      <Link to="/domain">Domain</Link>
      <Link to="/">Email Finder</Link>
    </PerformQuery> */}


   
    </React.Fragment>
 
    )
}


export default Header