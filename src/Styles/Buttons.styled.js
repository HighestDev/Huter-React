import styled from 'styled-components';

export const LoginButton=styled.button`
  border-radius:50px;
  border:none;
  width:${(props)=>props.width}px;
  position:relative;
  top:${(props)=>props.top}px;
  left:-${(props)=>props.left}px;
  font-size:16px;
  border:1px solid #0070ba;
  width:${(props)=>props.width}px;
  height:${(props)=>props.height}px;
  background-color:${(props)=>props.bgc};
  color:${(props)=>props.color};

  @media (min-width:390px) and (max-width:844px){
    width:280px;
    position:relative;
    left:28px; 
   }
   
`;


export const SignUpButton=styled.button`
  border-radius:50px;
  border:none;
  font-size:16px;
  position:relative;
  font-weight:bolder;
  top:50px;
  padding:13px 140px;
  border:1px solid #0070ba;
  width:${(props)=>props.frWidth}px;
  height:${(props)=>props.frHeight}px;
  background-color:transparent;
  color:${({theme})=>theme.colors.secondary};

  @media (min-width:390px) and (max-width:844px){
    margin-right:30px;
    margin-left:30px;
    width:2px;
    height:7.7vh;

    span{
      // color:white;
      position:relative;
      left:-25px;
      top:-3px;
    }
   
   } 
  
`;


export const LinkToSignUpPage=styled.div`
 position:relative;
 top:30px;
`;