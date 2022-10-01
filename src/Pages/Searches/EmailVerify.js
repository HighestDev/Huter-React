import axios from 'axios'
import React,{useState,useRef} from 'react'
import { ButtonContainer, EmailDropDown, EmailVerifyContainer,EmailVerifyInput,SearchBarContainer,SearchInputContainer,SectionBarContainer,EmailStructure, VerifyInputName, CompanyInputName, EmailDataRender} from '../../Styles/Search.styled'
import Header from '../VerifiedUser/Header'


function EmailVerify() {
  const [information,setInformation]=useState([])
  const firstName=useRef()
  const lastName=useRef()
  const companyName=useRef()
  
console.log(information)
  const verifyDomainMail=()=>{
    const firstNameValues=firstName.current.value;
    const companyNameValue=companyName.current.value;

    if(firstNameValues.trim() && companyNameValue.trim()){
       const getData=async()=>{
          const {data} = await axios.get(`https://api.hunter.io/v2/email-finder?domain=${companyNameValue}&first_name=${firstNameValues}&last_name=${firstNameValues}&api_key=eeb32005ae22988ad427cb8d3043d266fca17386`)
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
    <EmailVerifyContainer>
      <Header/>    
        <EmailStructure>
          <VerifyInputName placeholder="Highest Billy" ref={firstName}  />
          <button>@</button>
          <CompanyInputName placeholder="company" ref={companyName}/>
         <button onClick={verifyDomainMail}>
          search
          </button>
            </EmailStructure>


{information.length !==0 &&(
    <EmailDataRender>
    <h3>{information.data?.company}</h3> 
    <p><span>Name: </span>{information.data?.first_name} {" "}{information.data?.last_name}</p> 
    <p><span>Email: </span>{information.data?.email}</p> 
    <p><span>Position: </span>{information.data?.position}</p> 
    <p><span>Date joined: </span>{information.data?.verification.date}</p> 
</EmailDataRender>
)}
   
 
         
      

       </EmailVerifyContainer>
  )
}

export default EmailVerify