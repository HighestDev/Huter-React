import React,{useState} from 'react';
import { LoginButton } from '../../Styles/Buttons.styled';
import { Banner, DefaultBodyPage,DetailBodyContent, GetStartedButton } from '../../Styles/DefaultBody.styled';
import { FirstPageContainer, JoinPageContainer,
        JoinPageContent, JoinPageContent1, 
        JoinPageContent2 } from '../../Styles/DefaultBody.styled'
import {CommentOutlined,RiseOutlined} from '@ant-design/icons'
import Card from './Cards';
import {Link} from 'react-router-dom';


// Images
import somuah from '../../assets/somuah.jpg';
import velli from '../../assets/plug2.jpg'
import nartey from '../../assets/memories.png'
import cynthia from '../../assets/clique.jpg'




function Body() {
  const [information,setInformation]=useState([
    {
     name:'Elsie Danso',
     occupation:'Graphic designer',
     handle:'@somauah',
     comment:'I needed an information about a company,fortunately i found everything i needed on this platform.',

     name1:'Bismark Osei',
     occupation1:'Web Developer',
     handle1:'@bismark205',
     comment1:'Easy and efficient way to verify your emails ',
     
     name2:'Prosper Nartey',
     occupation2:'Web Developer',
     handle2:'@bismark205',
     comment2:'Will recommend this site to my love onces because they provide you with fastest and better ways of verying your email',

     name3:'Cynthia Morgan',
     occupation3:'Web Developer',
     handle3:'@bismark205',
     comment3:'To prevent being scammed through emails,the is the best site for you.'
    }
 ])


 const vanish=()=>{
  let item = document.querySelector('.info_content');
  
 }


  return (
  <React.Fragment>
  <DefaultBodyPage>
    <DetailBodyContent className="info_content">
      <h1>Looking for the safest place to verify your domain names and emails</h1>
       <p>You welcome to our platform which we have the safest means in orther to check approved emails, which we received for anonymous handles across the globe.
        Say Good bye to fake and prank emails!!!
       </p>
     
      
        {/* <Link to="/"  style={{padding:'10px 35px',background:'#0070ba',textDecoration:'none',color:'#fff',borderRadius:'50px'}}>   */}
           <a href="/" className='v_btn'>Get Started </a>
        
         

    </DetailBodyContent>
   </DefaultBodyPage>
  

  <div className='what_to_expert'>

    <h1 className="expert_h1">What to expert from our site</h1>

    <div className='w_t_content'>

    <div className='content_1'>
      <img src="/images/2-businesses.jpg" alt="" className='img1'/>
       <div className="sub_content_1">
         <h1 className="dom_name1">Domain Name Search</h1>
         <p className="dom_p_tag1">Domain Name is a way of recognizing the name of company on the internet, This make it essential to verify the  messages we receive on the internet.W have a strong algorithm which searches for every domain name.
         Our site can help you find every domain name you seek after.
         Provisions are also made in other to find the details of the domain names and find specific information of a particular domain name. </p>
       </div>
      </div>

      <div className='content_2'>
      <img src="/images/REG_COL1.png" alt="" className='img2'/>
       <div className='sub_content_2'>
         <h1 className="dom_name2">Find and Verify Email</h1>
         <p className="dom_p_tag2">In these modern day and age email fraud is one of the easiet ways people get scammed on the internet,we provide you a way of identifying the anonymous users.Bring all the names to verify on our platform and our system will give you the needed information you require whether the email is authentic or the sender of the email is approved from sending you the email.</p>
       </div>
      </div>

    </div>

  </div>
  


<div className="reviews_container">

 <div className="control_container">
   <div className="container_1 ">
      {
        information.map(info=>(
          <Card
          name={info.name}
          date={info.date}
          source={info.src1}
          comment={info.comment}
          img={somuah}
          />
        ))
      }
   </div>


   <div className="container_2 card_layout">
   {
        information.map(info=>(
          <Card
          name={info.name1}
          date={info.date}
          source={info.src1}
          comment={info.comment2}
          img={nartey}
          />
        ))
      }

   </div>


   <div className="container_3">
   {
        information.map(info=>(
          <Card
          name={info.name2}
          date={info.date}
          source={info.src1}
          comment={info.comment3}
          img={cynthia}
          />
        ))
      }

   </div>



   <div className="container_4">
   {
        information.map(info=>(
          <Card
          name={info.name3}
          date={info.date}
          source={info.src1}
          comment={info.comment}
          img={velli}
          />
        ))
      }

   </div>

   </div>
</div>

 <Banner>
   <li><Link to="/domain" style={{textDecoration:'none',color:'#fff',position:'relative',left:'10em'}}>Domain Name</Link></li>
   <li><Link to="/find-email" style={{textDecoration:'none',color:'#fff',position:'relative',left:'13em'}}>Email Verifier</Link></li>

 </Banner>

  </React.Fragment>
  )
}

export default Body