import React,{useState,useRef} from 'react'
import Header from '../VerifiedUser/Header'
import axios from 'axios'

function Count() {
  const[information,setInformation]=useState([])
  const[filteredData,setFilteredData]=useState([])
  const inputRef=useRef()

const countMails=()=>{
    const searchValues=inputRef.current.value;
    if(searchValues.trim()){
      const getData=async()=>{
         const {data}=await axios.get(`https://api.hunter.io/v2/email-count?domain=${searchValues}`)
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






  return (
    <div>
       <Header/>
           <input type="text" ref={inputRef}/>
           <button onClick={countMails}>Check</button>

              <p>{filteredData.data?.total}</p>
              <p>{filteredData.data?.personal_emails}</p>
        </div>
  )
}

export default Count