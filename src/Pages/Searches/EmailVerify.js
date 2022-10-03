import axios from 'axios'
import React,{useState,useRef} from 'react'
import { ButtonContainer, EmailDropDown, EmailVerifyContainer,EmailVerifyInput,SearchBarContainer,SearchInputContainer,SectionBarContainer,EmailStructure, VerifyInputName, CompanyInputName, EmailDataRender} from '../../Styles/Search.styled'
import Header from '../VerifiedUser/Header'
import {Link} from 'react-router-dom';
import { Banner, DefaultBodyPage,DetailBodyContent, GetStartedButton } from '../../Styles/DefaultBody.styled';


function EmailVerify() {
  const [information,setInformation]=useState([])
  const firstName=useRef()
  const companyName=useRef()

const clearInput=()=>{
  setInformation([])
  firstName.current.value=""
  companyName.current.value=""
}  


  
console.log(information)
  const verifyDomainMail=()=>{
    const firstNameValues=firstName.current.value.toLowerCase();
    const companyNameValue=companyName.current.value.toLowerCase();

    if(firstNameValues.trim() && companyNameValue.trim()){
       const getData=async()=>{
          const {data} = await axios.get(`https://api.hunter.io/v2/email-finder?domain=${companyNameValue}&first_name=${firstNameValues}&last_name=${firstNameValues}&api_key=1989bbf3c39384b0ca6b7f7e5b98088da9464edb`)
          setInformation(data)
       }

       try {
         getData()
       } catch (error) {
         console.log(error.message)
       }
    }
  }
  return (
    <React.Fragment>

    <EmailVerifyContainer>
      
    <div className='width_header'>
      <Header/> 
      </div>   
        <EmailStructure>
          <VerifyInputName placeholder="Lupi fiasco" ref={firstName}  />
          <button onClick={clearInput}>@</button>
          <CompanyInputName placeholder="company.com" ref={companyName}/>
         <button onClick={verifyDomainMail}>
          search
          </button>
            </EmailStructure>


{information.length !==0 &&(
  <EmailDataRender>
    <h3>{information.data?.company}</h3> 
    <p><span>Name: </span>{information.data?.first_name} {" "}{information.data?.last_name }</p> 
    <p><span>Email: </span>{information.data?.email }</p> 
    <p><span>Position: </span>{information.data?.position}</p> 
    <p><span>Date joined: </span>{information.data?.verification.date }</p> 
    <p><span>Company Domain: </span>{information.data?.domain}</p> 
   <h4>Articles</h4>
   {information.data.sources.map((source,i)=>{
     return(
       <Link to={source.uri}>{source.uri}</Link>
       )
      })}

      <p className='error'>{information.data?.first_name ? '' :'Not found'}</p>

</EmailDataRender>
)}
             </EmailVerifyContainer>

<Banner>
   <li><Link to="/domain" style={{textDecoration:'none',color:'#fff',position:'relative',left:'10em'}}>Domain Name</Link></li>
   <li><Link to="/find-email" style={{textDecoration:'none',color:'#fff',position:'relative',left:'13em'}}>Email Verifier</Link></li>

 </Banner>
</React.Fragment>
  )
}

export default EmailVerify