import React,{useState} from 'react';
import {StarFilled} from '@ant-design/icons'



const MAX_RATING=5;
const MIN_RATING=3;

function Cards({name,date,comment,img}) {

  const [rating]=useState(
    Math.floor(Math.random()*(MAX_RATING - MIN_RATING)) +MIN_RATING
  )



  return (
    <div className='card_content'>
      {img && <img className='avatar_review' src={img} alt="pointers"/>}
       <div className='border'>
        <p className="name_spot">{name}</p>
         <p className='comment'>{comment}</p>
         
       </div>

       <div>
            {Array(rating).fill().map((_,i)=>(

           <StarFilled className='color'/>
            ))}
          </div>
          </div>
  )
}

export default Cards