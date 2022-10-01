import styled from 'styled-components';

export const DefaultHeaderContainer=styled.div`
  display:flex;
  justify-content:space-between;
  height:10vh;
  box-shadow:0px 3px 15px rgba(0,0,0,0.2);

  @media (min-width:768px) and (max-width:900px){
     height:10vh;
    }

`;

export const HeaderInformationSection=styled.div`
`;

export const ButtonHeaderSection=styled.div`
  margin-right:100px;
  position:relative;
  top:12px;

  @media (min-width:390px) and (max-width:844px){
    display:flex;
   }


`;



// Verified Header
export const VerifiedHeaderContainer=styled.div` 
display:flex;
justify-content:space-between;
height:15vh;
box-shadow:0px 3px 15px rgba(0,0,0,0.2);


`;

export const VerifiedHeaderContentAndLogic=styled.div`
`;



export const FirstSection=styled.div``;

export const SecondSection=styled.div`
display:flex;
position:relative;
top:23px;
left:-${(props)=>props.left}px;

>li{
  list-style:none;
  font-size:20px;
}

li:hover{
  cursor:pointer;
  // border-bottom:5px solid #0070ba;
}

`;

export const ThirdSection=styled.div``;

export const SecondSectionItem=styled.div`
display:flex;
position:relative;
top:${(props)=>props.top}px;
left:-${(props)=>props.left}px;
cursor:pointer;

`;


export const DomainNameContainer=styled.div`
background-color:${({theme})=>theme.colors.darkBlue};
height:20vh;
display:flex;
align-items:center;
justify-content:space-between;
border-bottom:1px solid #fff;


`;

export const ListItem=styled.div`
list-style:none;
color:${({theme})=>theme.colors.primary};

position:relative;
left:${(props)=>props.left}em;
top:-${(props)=>props.top}em;

>li{
    margin-bottom:10px;
    position:relative;
    top:30px;
}
`;

export const DropDown=styled.button`
  position:absolute;
  top:4.5rem;
  color:#fff;
  font-size:15px;
  left:76em;
  background-color:#0070ba;
  border:none;
  padding:10px;
  border-radius:5px 15px;
  border:1px solid #fff;
  z-index:50;


 @media (min-width:390px) and (max-width:844px){
    left:32em;
    top:5em;
    font-size:9px;
    }


    @media (min-width:768px) and (max-width:900px){
      // width:100%;
      top:7em;
      }
`;



export const PerformQuery=styled.div`
 position:absolute;
 background-color:blue;
 height:15vh;
 left:42rem;
 padding:20px;
 display:flex;
 flex-direction:column;
`;