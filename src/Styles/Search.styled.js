
import styled from 'styled-components';


export const SearchBarContainer=styled.div`
display:flex;
flex-direction:column;
align-items:center;
// height:3.8em;
height:${(props)=>props.height}em;
// width:34em;
width:${(props)=>props.width}em;
border-radius:6px;
box-shadow:0px 2px 12px 3px rgba(0,0,0,0.14);
overflow:hidden;
max-width:850px;
margin:0 auto;
margin-top:10em;

@media (min-width:390px) and (max-width:844px){
 
  height:50px;
  width:85%;


}


@media (min-width:768px) and (max-width:900px){
 width:45%;
 height:43px;
 position:relative;
 left:-11em;
}
`;

export const SearchInputContainer=styled.div`
 width:100%;
 min-height:4em;
 display:flex;
 align-items:center;
 position:relative;
 padding:2px 15px;


 @media (min-width:390px) and (max-width:844px){
  position:relative;

  
}

@media (min-width:768px) and (max-width:900px){

}


`;


export const SearchInput=styled.input`
width:100%;
height:100%;
outline:none;
border:none;
font-size:21px;
color:#12112e;
font-weight:500;
border-radius:6px;
background-color:transparent;
padding:2px 15px;

&:focus{
  outline:none;

  &::placeholder{
    opacity:0;
  }
}

&::placeholder{
  color:#bebebe;
  transition:all 250ms ease-in-out;
  // position:relative;
  // top:-1.8px;
  // left:5em;
}


@media (min-width:390px) and (max-width:844px){
    font-size:15px;
    height:60%;
    width:70%;
    padding:2px 25px 15px;


    &::placeholder{
      color:#bebebe;
      transition:all 250ms ease-in-out;
      position:relative;
      top:-1.8px;
      left:0.2em;
    }
    

}


`;


export const SearchIcon=styled.span`
  color:#bebebe;
  margin-right:15px;
  position:relative;
  left:10px;
  margin-top:6px;
  vertical-align:middle;
  font-size:27px;

  @media (min-width:390px) and (max-width:844px){
    font-size:18px;
    position:relative;
    top:-0.5em;
    left:0.5em;
  }
`

export const CloseIcon=styled.span`
color:#bebebe;
margin-right:10px;
vertical-align:middle;
font-size:16px !important;
cursor:pointer;

&:hover{
  color:#dfdfdf;
}

@media (min-width:390px) and (max-width:844px){
  font-size:13px !important;
  position:relative;
  top:-0.5em;
  left:60px;
}

`;

export const RenderData=styled.div`
display:flex;
flex-direction:column;
margin-top:20px;
align-items:center;
height:15em;
width:34em;
position:relative;
left:25.5em;
border-radius:6px;
box-shadow:0px 2px 12px 3px rgba(0,0,0,0.14);
overflow:hidden;

span{
  font-size:18px !important;
  font-weight:bolder !important;
  margin-left:35px;
}


@media (min-width:390px) and (max-width:844px){
  font-size:12px !important;
  position:relative;
  top:-0.5em;
  left:3em;
  width:30em;

  span{
    font-size:13px !important;
  }


  @media (min-width:768px) and (max-width:900px){
    width:28em;
    position:relative;
    left:3.3em;
 }

 
 
}


`;




export const RenderDataContent=styled.div`
  >img{
    width:30px;
  }
  padding:10px;
  display:flex;
  margin:0 auto;
  width:520px;
  border:1px solid #ccc;
`;

export const EmailVerifyContainer=styled.div`
`;

export const EmailVerifyInput=styled.input`
width:100%;
height:100%;
outline:none;
border:none;
font-size:21px;
color:#12112e;
font-weight:500;
border-radius:6px;
background-color:transparent;
padding:2px 15px;

&:focus{
  outline:none;

  &::placeholder{
    opacity:0;
  }
}

&::placeholder{
  color:#bebebe;
  transition:all 250ms ease-in-out;
}

@media (min-width:390px) and (max-width:844px){

  &::placeholder{
    font-size:17px;
    position:relative;
    top:-0.3em;
  }
}

`;


export const ButtonContainer=styled.button`
display:flex;
flex-direction:column;
align-items:center;
height:4.9em;
width:12em;
position:relative;
left:3em;
border:none;
outline:none;
border-radius:6px;
box-shadow:0px 2px 12px 3px rgba(0,0,0,0.14);


>p{
  font-size:20px;
  position:relative;
  top:1em;
  left:-0.3em
}


@media (min-width:390px) and (max-width:844px){
  width:85px;
   position:relative;
   left:1.3em;
  >p{
    font-size:15px;
    position:relative;
    top:1.3em;
  }
}

`;

export const EmailDropDown=styled.div`

margin-top:20px;
align-items:center;
height:35em;
padding:30px;
width:40em;
position:relative;
left:22.5em;
top:1rem;
border-radius:6px;
box-shadow:0px 2px 12px 3px rgba(0,0,0,0.14);

overflow:hidden;
`;



export const AuthorContainer=styled.div`
`

export const AuthorInput=styled.input`
width:85%;
height:50px;
outline:none;
border:none;
font-size:21px;
color:#12112e;
font-weight:500;
border-radius:6px;
background-color:transparent;
padding:2px 15px;

&:focus{
  outline:none;

  &::placeholder{
    opacity:0;
  }
}

&::placeholder{
  color:#bebebe;
  transition:all 250ms ease-in-out;

}



@media (min-width:768px) and (max-width:900px){

  &::placeholder{
    color:#bebebe;
    transition:all 250ms ease-in-out;
    font-size:13px;
    position:relative;
    top:-0.9em;}
}

`;

export const AuthorButton=styled.button`
 height:73px;
 width:100px;
 outline:none;
 position:relative;
 left:40px;
 border:none;

 @media (min-width:390px) and (max-width:844px){
  width:45px;
  position:relative;
  left:23px;

    &::placeholder{
      color:#bebebe;
      transition:all 250ms ease-in-out;
      position:relative;
      top:-1.8px;
      left:0.2em;
    }
 }

 @media (min-width:768px) and (max-width:900px){
  width:55px;
  position:relative;
  left:23.5px;}
  

`;


export const AuthorDataContent=styled.div`
display:flex;
flex-direction:column;
margin-top:20px;
align-items:center;
height:15em;
width:34em;
position:relative;
left:30.3em;
border-radius:6px;
box-shadow:0px 2px 12px 3px rgba(0,0,0,0.14);
overflow:hidden;
`;



export const ContentDomainName=styled.div`
margin-top:20px;
align-items:center;
height:35em;
width:34em;
position:relative;
left:25.5em;
border-radius:6px;
box-shadow:0px 2px 12px 3px rgba(0,0,0,0.14);
overflow:hidden;


@media (min-width:390px) and (max-width:844px){

  width:22em;
  position:relative;
  left:2.5em !important;
}

`;

export const QueryInput=styled.input`
 height:3.5em;
 width:30em;
 outline:none;
 border:none;
 position:relative;

 padding:2px 15px;

`;

export const QueryContainer=styled.div`
display:flex;
flex-direction:column;
align-items:center;
height:2.5em;
width:25em;
border-radius:6px;
box-shadow:0px 2px 12px 3px rgba(0,0,0,0.14);
overflow:hidden;
max-width:850px;
margin:0 auto;
margin-top:10em;
position:relative;
left:-8em;
top:2em;

@media (min-width:390px) and (max-width:844px){
 
  height:50px;
  width:85%;

`;

export const BackgroundSegment=styled.div`
background-color:#f7f9fa;
width:50em;
height:6em;
position:relative;
top:-5em;
`;

export const QueryContent=styled.div`
height:100vh;
padding:30px;
// margin-right:50px;
>button{
  width:100px;
  margin-left:20px;
  height:30px;
  margin-bottom:20px;
}

`;




export const EmailStructure=styled.div`
display:flex;
flex-direction:row;
align-items:center;
height:3.8em;
// height:${(props)=>props.height}em;
width:40em;
// width:${(props)=>props.width}em;
border-radius:6px;
box-shadow:0px 2px 12px 3px rgba(0,0,0,0.14);
// overflow:hidden;
max-width:850px;
margin:0 auto;
margin-top:10em;

>button{
  height:60px;
  width:80px;
  font-size:19px;
}
`;


export const VerifyInputName=styled.input`
  height:60px;
  width:280px;
  padding:2px 15px;
  font-size:15px;
  // outline:none;
  border-radius:5px;

`

export const CompanyInputName=styled.input`
  height:60px;
  width:280px;
  padding:2px 15px;
  // outline:none;
  border-radius:5px;
  font-size:15px;
`

export const EmailDataRender=styled.div`
display:flex;
flex-direction:column;
margin-top:50px;
align-items:center;
height:15em;
width:40em;
position:relative;
left:22.5em;
border-radius:6px;
box-shadow:0px 2px 12px 3px rgba(0,0,0,0.14);
overflow:hidden;
padding:5px;

>h3{
  margin-top:30px;
  margin-bottom:5px;
}

span{
  font-size:18px !important;
  font-weight:bolder;
  position:relative;
  left:-5px;
}
p{
  font-weight:300;

}

`;