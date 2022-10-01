import React,{useRef,useState} from 'react'
import Header from '../VerifiedUser/Header'
import {SearchInput, SearchInputContainer,SearchInputButton, IconSize, AuthorContainer, SearchBarContainer, AuthorInput, AuthorButton, AuthorDataContent} from '../../Styles/Search.styled'
import { SearchOutlined } from '@ant-design/icons'
import axios from 'axios'


function Author() {
  const [information,setInformation]=useState([])
  const [filteredData,setFilteredData]=useState([])
 const inputRef=useRef()

  const authorSearch=()=>{
      const searchValues=inputRef.current.value
      if(searchValues.trim()){
        const getData=async()=>{
          const {data} = await axios.get(`https://api.hunter.io/v2/author-finder?url=${searchValues}&api_key=11677590173a8f2c56a87298cbb99821dd60f4ed`)
          setFilteredData(data)
          setInformation(data)
          
        }


        try {
          getData()
        } catch (error) {
          console.log(error.message)
        }
      }
  }



console.log(filteredData)


  return (
      <AuthorContainer>
        <Header/>
         <SearchBarContainer>
          <SearchInputContainer>

            <AuthorInput placeholder="https://django.io/how-to-create-a-slug-field" ref={inputRef}/>

            <AuthorButton onClick={authorSearch}>
              <SearchOutlined className='search_outcome' />
            </AuthorButton>
            
          </SearchInputContainer>
         </SearchBarContainer>


       {filteredData.length !==0 &&(
         <AuthorDataContent>
            <p>{filteredData.data?.first_name}</p>
         </AuthorDataContent>
       )}


      </AuthorContainer>
  )
}

export default Author