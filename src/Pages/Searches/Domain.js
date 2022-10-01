import React,{useState, useRef} from 'react'
import Header from '../VerifiedUser/Header'
import {Link} from 'react-router-dom';
import { SearchInputContainer,SearchInput,BackgroundSegment, SearchIcon,CloseIcon, SearchBarContainer, RenderData,ContentDomainName, QueryInput,QueryContainer, QueryButton, QueryContent, EmailVerifyContainer} from '../../Styles/Search.styled'
import { CloseOutlined, SearchOutlined } from '@ant-design/icons'
import axios from 'axios';

import {useNavigate} from 'react-router-dom'
import EmailVerify from './EmailVerify';
import EmailFinder from './EmailFinder';


// const base_url='https://api.hunter.io/v2/domain-search?domain=${}&api_key=f0968a7349aa4d21c1ae365c803781eba104dc38'


//657b622701ddfb316ee2d50026c5ddfa3643110d

function Domain() {
  const [information,setInformation]= useState({})
  const [filteredData,setFilteredData]=useState([])
  const [ima, setIma]=useState('')
  const [detail,setDetail]=useState(false)



const revealDetail=()=>{
  setDetail((prevState)=>!prevState)
}

  const clearContent=()=>{
    setFilteredData([]) 
    searchDomain.current.value=""
    setDetail(false)

  }

  const searchDomain=useRef()

  const navigate=useNavigate()
  
  const searchData=()=>{
      const searchValues=searchDomain.current.value;
    if(searchValues.trim()){
      const getData=async()=>{
        const {data} = await axios.get(`https://api.hunter.io/v2/domain-search?domain=${searchValues}&api_key=eeb32005ae22988ad427cb8d3043d266fca17386`)
       const image = searchValues.trim();
         setIma(`https://logo.clearbit.com/${image}`)
      

        setInformation(data)
        setFilteredData(data)
        
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

      <div className='width_header'>
        <Header/>
      </div>

      <SearchBarContainer height={3.8} width={34}>
        <SearchInputContainer>
         <SearchIcon >
              <SearchOutlined/>
             </SearchIcon>

          <SearchInput placeholder='Search for domain names' ref={searchDomain} onChange={searchData} />

           <CloseIcon >
                <CloseOutlined onClick={clearContent}/>
                 </CloseIcon> 

         </SearchInputContainer>

        </SearchBarContainer>


   {filteredData.length !== 0 &&(
 <RenderData onClick={revealDetail}>
{ima?<img src={ima} alt="" className='search_img' />:''}
  <div className='base_content'>
   <p><span>Domain Name:{" "}</span>{filteredData.data?.domain}</p>
    <p className='organa'><span>Organization: </span>{filteredData.data?.organization}</p>   
    <p className='state'><span>State: </span>{filteredData.data?.state}</p> 
    </div>
   </RenderData>
 )}


{detail &&(
   <ContentDomainName>
   <QueryContent>
     <button>{filteredData.data?.domain}</button>
     <button>{filteredData.data?.organization}</button>
     {/* <button>{filteredData.data?.country}</button> */}
     {/* <button>{filteredData.data?.state?.disposable}</button> */}
     {filteredData.data?.emails.map((mail,i)=>(
       <div className='domain_details'>
         <p className="name"key={i}>{mail?.first_name} {" "} {mail?.last_name}</p>
         <p className='email'>Email:{mail?.value}</p>
 
       
          {mail.sources.map((source,index)=>{
           return(
             <Link to="/" key={index} href={source.uri} style={{marginBottom:'20px'}} >{source?.uri}</Link>
           )
          })}
 
       
       </div>
     ))}
   </QueryContent>  
 </ContentDomainName>
)}



      
    </div>
  )
}

export default Domain