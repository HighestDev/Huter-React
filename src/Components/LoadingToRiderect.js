import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';


function LoadingToRiderect() {
    const [count,setCount]=useState(5);
    const navigate=useNavigate()

   useEffect(()=>{
     const interval = setInterval(()=>{
        setCount((prevState)=>--prevState)
     },1000)
     count===0 && navigate('/');
     return ()=> clearInterval(interval)
   },[count,navigate])

  return (
    <div> Redirecting to homePage{count}.....</div>
  )
}

export default LoadingToRiderect