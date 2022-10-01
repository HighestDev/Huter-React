import styled from 'styled-components';


export const LandPageContainer=styled.div`

@media (min-width:390px) and (max-width:844px){
  overflow-x:hidden;

   }
   

@media (min-width:768px) and (max-width:900px){
  overflow-x:hidden;
    }

`;



export const VerifiedUserViewContainer=styled.div`

@media (min-width:390px) and (max-width:844px){
    width:80%; 
   }
   

@media (min-width:768px) and (max-width:900px){
    width:60%;
    }

`;





export const VerifiedUserHeader=styled.div`
background-color:#fff;
height:11vh;
box-shadow:0px 3px 15px rgba(0,0,0,0.2);

@media (min-width:390px) and (max-width:844px){
    width:126%; 
    // height:10vh;
   }
   

@media (min-width:768px) and (max-width:900px){
    width:93%;
    height:8vh;
    }

    

`;

export const VerifiedUserHeaderContent=styled.div`
>img{
    width:205px;
    position:relative;
    top:0.5rem;
    left:2rem;
}
display:flex;
justify-content:space-between;

@media (min-width:390px) and (max-width:844px){
    width:100%; 

    img{
      position:relative;
      top:0.6rem;
      width:150px;
    }
   }
   

@media (min-width:768px) and (max-width:900px){
    width:60%;
    }

`;

export const VerifiedUserHeaderSection=styled.div`
>img{
    width:45px;
    height:45px;
    object-fit:contain;
    border:2px solid #012169;
    border-radius:60%;
    position:relative;
    top:0.7em;

}
display:flex;
position:relative;
right:7em;
>h3{
    position:relative;
    top:1.2em;
    left:0.8em;
    font-weight:420;
}
@media (min-width:390px) and (max-width:844px){
    width:100%; 

    >img{
      width:25px;
      height:25px;
      position:relative;
      left:16rem;
    }

    h3{
      font-size:13px;
      position:relative;
      left:17rem;
    }

   }

@media (min-width:768px) and (max-width:900px){
    width:100%;
    }

`;


export const VerifiedUserHeaderSection1=styled.ul`
  display:flex;
  >li{
    list-style:none;
    margin-left:30px;
    position:relative;
    top:1.5em;
  }

@media (min-width:390px) and (max-width:844px){
    width:100%; 
    display:none;
   }

@media (min-width:768px) and (max-width:900px){
    width:60%;
    }

`;


export const ContentAndItems=styled.div`
  display:flex;
  justify-content:space-between;
  color:#fff;
  background-color:#012169;
  height:25vh;
  position:relative;
  top:2px;
  z-index:2;


  @media (min-width:390px) and (max-width:844px){
    width:100%; 
    display:none;
   }



   @media (min-width:768px) and (max-width:900px){
    width:60%;
    display:none;
    }


`;

export const ContentPart=styled.div`
position:relative;
left:${(props)=>props.left}em;
top:${(props)=>props.top}em;
 >li{
    padding:10px;
    list-style:none;
    margin-top:15px;
    margin-bottom:25px;
 }
`;


export const ControlFlex=styled.div`
  display:flex;
  list-style:none;

  >li{
    margin-bottom:15px;
    font-size:18px;
  }

  li:hover{
    text-decoration:underline;
    cursor:pointer;
  }
  
`;































