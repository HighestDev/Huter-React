import React, { Fragment, useState, useEffect } from 'react'
import axios from "axios"

const Demo = () => {

const [users, setUser] = useState({})

const endpoint = "https://api.hunter.io/v2/domain-search?domain=google.com&api_key=f0968a7349aa4d21c1ae365c803781eba104dc38"

useEffect(()=> {
  getData()
}, [])

const getData = async ()=> {
   const {data} = await axios.get(endpoint)
   setUser(data)
}

console.log("USER... ", users);



  return (
    <div>Demo Page

    
    <p>{users.data?.domain}</p>
    {users.data?.emails.map((mail,i)=>{
        return(
            <>
            <p>{mail.first_name} {""} {mail.last_name}</p>

            {mail.sources.map(source=>{
                return(
                 <a href="#">{source.domain}</a>
                )
            })}

            </>
        )
    })}

    </div>
  )
}

export default Demo


// import React,{useState,useRef} from 'react'
// import Header from '../VerifiedUser/Header'
// import { SearchInputContainer,SearchInput, SearchIcon,CloseIcon, SearchBarContainer, RenderData, RenderDataContent} from '../../Styles/Search.styled'
// import { CloseOutlined, SearchOutlined } from '@ant-design/icons'
// import axios from 'axios';



// const base_url='https://api.hunter.io/v2/domain-search?domain=${}&api_key=f0968a7349aa4d21c1ae365c803781eba104dc38'




// function Domain() {
//   const [information,setInformation]= useState({})
//   const [filteredData,setFilteredData]=useState([])
//   const searchDomain=useRef()


//   const handleFilter=()=>{
//     const searchValues=searchDomain.current.value
//     searchValues.toLowerCase()
    
//     if(searchValues.trim()){
      
//       const fetchSearchData=async()=>{
//         const {data}= await axios.get(`https://api.hunter.io/v2/domain-search?domain=${searchValues}.com&api_key=910a9f37a9ca45ff91d58fa30867e09646f7296f`)
//         setInformation(data)
    
//       }

//       try {
//         fetchSearchData()
//       } catch (error) {
//         console.log(error)
//       }

//     }
//    }

   
//   return (
//     <div>
//       <Header/>
//        <SearchBarContainer>

//         <SearchInputContainer>
//         <SearchIcon>
//              <SearchOutlined/>
//             </SearchIcon>

           
//           <SearchInput placeholder='Search for domain names' ref={searchDomain} onChange={handleFilter}/>


//           <CloseIcon>
//                 <CloseOutlined/>
//                 </CloseIcon> 

//         </SearchInputContainer>

//        </SearchBarContainer>



//        {filteredData.length !== 0 &&(

// <RenderData>
//  <RenderDataContent>
//   <img src="./images/3-pd.jpg" alt="company_image" />
//    <p>{information.data?.domain}</p>
//    <p>{information.data?.organization}</p>   
//    <p>{information.data?.state}</p> 
//    </RenderDataContent> 
//   </RenderData>
// )}

 
            
//     </div>
//   )
// }

// export default Domain