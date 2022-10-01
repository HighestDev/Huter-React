import React,{useRef,useState} from 'react'
import Header from '../VerifiedUser/Header'
import { ButtonContainer, EmailDropDown, EmailVerifyContainer,EmailVerifyInput,SearchBarContainer,SearchInputContainer,SectionBarContainer} from '../../Styles/Search.styled'
import axios from 'axios';


function EmailFinder() {
  const [information,setInformation]=useState([])
  const [filteredData,setFilteredData]=useState([])
  const mailInput=useRef()
  

  const verifyEmail=()=>{
     const searchValues=mailInput.current.value;
     if(searchValues.trim()){
      async function getData(){
        const {data} = await axios.get(`https://api.hunter.io/v2/email-verifier?email=${searchValues}&api_key=11677590173a8f2c56a87298cbb99821dd60f4ed`)
        setFilteredData(data)
        console.log(data)
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
    <div>
         {filteredData.length !==0 &&(
            <EmailDropDown> 
                   <p>Email:{filteredData.data?.email}</p>
                   <div>
                   
                       {filteredData.data?.sources.map(source=>(
                        <div className='mail_verify'>
                        {/* <p><span>Domain:</span>{source.domain}</p> */}
                        <p>{source?.extracted_on}</p>
                        <a href={source.uri}>{source?.uri}</a>
                        </div>
                       ))}
                   </div>
            </EmailDropDown>
        )
      }
    </div>
  )
}

export default EmailFinder