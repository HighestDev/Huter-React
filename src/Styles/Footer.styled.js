import styled from "styled-components";

export const FooterContainer=styled.div`
border-top:1px solid #ccc;
height:10vh;
display:flex;
align-items:center;
color:#74767e;
justify-content:space-between;

@media (min-width:390px) and (max-width:844px){
    padding:10px;
    width:420px;
   
   }

`;

export const FooterLeftSide=styled.div`
display:flex;
justify-content:space-between;


>p{
    position:relative;
    left:25em;
    font-size:18px;
    top:1.2em;
    font-weight:700;   
}

@media (min-width:390px) and (max-width:844px){
    >p{
        position:relative;
        left:0.5rem;
        width:300px;
        top:6em;
        font-size:20px !important;}

    

   
   }


   
   

`;

export const FooterRightSide=styled.div`
display:flex;
margin-right:30px;

@media (min-width:390px) and (max-width:844px){


   }
   
`;

export const FooterGlobe=styled.div`
`;