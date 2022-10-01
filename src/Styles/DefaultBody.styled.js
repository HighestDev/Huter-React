import styled from 'styled-components';
import mobileImg from './../assets/mobileview_hunter.jpg';
import background from './../assets/another_one.jpg';
import tabImg from './../assets/tablet.jpeg';


export const DefaultBodyPage=styled.div`
  height:90vh;
  display:flex;
  justify-content:center;
  align-items:center;
  background:linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${background});
  background-size:cover;
  background-position:center;
  background-repeat:no-repeat;
  background-attachment:fixed;


  @media (min-width:390px) and (max-width:844px){
    background:linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${mobileImg});
    background-size:430px;
    background-repeat:no-repeat;
    background-position:center;
    height:90vh;
    width:430px;
  }


    @media (min-width:768px) and (max-width:900px){
      background:linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${tabImg});
     }
 

`;


export const DetailBodyContent=styled.div`
position:relative;
left:23em;
width:30%;
z-index:3;
>h1{
    // line-height:35px;
    color:${({theme})=>theme.colors.primary};
    margin-bottom:10px;
}

>p{
    margin-bottom:20px;
    width:95%;
    color:#fff;
}

@media (min-width:390px) and (max-width:844px){
  position:relative;
  top:5em;
 h1{
  color:#fff;
  font-size:25px;
  position:relative;
  left:-27rem;
  top:-5.5rem;
  width:300px;}

  p{
    color:#fff;
    font-size:15px;
    position:relative;
    top:-5rem;
    left:-28rem;
    width:300px;}
 }


 @media (min-width:768px) and (max-width:900px){

  >h1{
    font-size:18px;
    font-weight:500;
    width:250px;
    position:relative;
    left:-430px;}

  >p{
    font-size:10px;
    width:240px;
    position:relative;
    left:-430px;
    top:-85px;}



 }




`;

export const InfoAndCarousel=styled.div`
 display:flex;
 padding-top:5em;
 margin-left:5.5em;
`;

export const InfoSection=styled.div`
 width:300px;
 border:1px solid #ccc;
 height:50vh;
 >h3{
  margin-left:2.8em;
  margin-top:1.3em;
  margin-bottom:10px;
 }
 >p{
  width:195px;
  margin-left:15px;
 }
`;

export const CarouselSection=styled.div`
 border:1px solid #ccc;
 width:850px;
 height:50vh;
 margin-left:3em;
`;

export const CarouselItem=styled.div`
  background:linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.6))
  height:50vh;
  >img{
    height:50vh;
    object-fit:cover;

  }
`;


export const WhatToExpertSection=styled.div`
 border:1px solid #ccc;
 background-color:#fafafa;
 padding:60px;
 height:85vh;
 width:80vw;
 position:relative;
 top:10em;
 margin-left:5.5em;
 margin-bottom:20px;
`;


export const FirstPageContainer=styled.div`
`;


export const JoinPageContainer=styled.div`
background-color:${({theme})=>theme.colors.semiBlue};
height:55vh;
>h2{
text-align:center;
color:#fff;
position:relative;
top:3em;
font-size:35px;
}
`;



export const JoinPageContent=styled.div`
  display:flex;
  justify-content:space-between;
  padding:30px;
  color:#fff;
  position:relative;
  top:6em;
`;


export const JoinPageContent1=styled.div`
 width:550px;
`;


export const JoinPageContent2=styled.div`
 width:650px;
`;


export const Banner=styled.div`
display:none;

@media (min-width:390px) and (max-width:844px){
  display:block;
  display:flex;
  background-color:#0070ba;
  height:8vh;
  width:430px;
  position:absolute;
  top:2.8rem;
  >li{
    list-style:none;
    margin-left:10px;
    margin-top:7px;
    color:#fff;
    font-weight:300;
    font-size:12px;
    position:relative;
    left:1rem;
  }

  li:hover{
    font-weight:900;
    text-decoration:underline;}
}
}

@media (min-width:768px) and (max-width:900px){
  display:block;
  display:flex;
  background-color:#0070ba;
  height:5vh;
  width:430px;
  position:absolute;
  top:2.8rem;
  >li{
    list-style:none;
    margin-left:10px;
    margin-top:7px;
    color:#fff;
    font-weight:300;
    font-size:12px;
    position:relative;
    left:1rem;
  }

  li:hover{
    font-weight:900;
    text-decoration:underline;}
}
`;


export const GetStartedButton=styled.div`
background-color:red;
`