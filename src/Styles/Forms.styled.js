import styled from 'styled-components';


export const SignInContainer=styled.div`
   height:120vh;
   background-color:${({theme})=>theme.colors.base};

  //  mobile screen
  //  @media (min-width:390px) and (max-width:844px){
  //   background-color:red;
   
  //  }


`;

export const InnerSignInContaienr=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:5px;
    border:1px solid #9da3a6;
    border-radius:10px;
    max-width:400px;
    height:80vh;
    margin:0 auto;
    position:relative;
    top:5em;

    >form{
       position:relative;
       top:5em;
   

        >input{
          
          width:350px;
          height:6vh;
          border-radius:5px;
          margin-bottom:15px;
          background:transparent;
          border:1px solid #4d3227;
          outline:none;
          padding-left:10px;
          
          font-size:15px;
        }

        >p{
            color:${({theme})=>theme.colors.secondary};
            font-size:18px;
            font-weight:bolder;
            position:relative;
            top:-10px;         
        }
    
    }

    // mobile
    @media (min-width:390px) and (max-width:844px){
      
       max-width:330px;
       height:95vh;

       >form{

        >input{
          width:280px;
          position:relative;
          left:28px;
          font-size:13px;
        }

        >p{
          font-size:15px;
          position:relative;
          left:28px;
          top:2px;
        }
       }
      
     }  
     
    //  tablet
    @media (min-width:768px) and (max-width:900px){
      height:80vh;
     }
    
`;



export const LinesAndWords=styled.div`
  display:flex;
  justify-content:space-between;
  position:relative;
  top:30px;

  >p{
    font-size:18px;
    position:relative;
    top:-10px;
    font-weight:bolder;
    color:${({theme})=>theme.colors.tinter};

  }

  @media (min-width:390px) and (max-width:844px){
    >p{
      position:relative;
      top:-13px;
    }
   
   }
`;

export const LeftLine=styled.div`
  height:1px;
  width:${(props)=>props.width}%;
  background-color:#ccc;
  position:relative;
  top:${(props)=>props.top}px;

`;




export const Logo=styled.img`
  width:250px;
  object-fit:Contain;
  position:relative;
  left:${(props)=>props.left}px;
  top:${(props)=>props.top}px;


  @media (min-width:390px) and (max-width:844px){
    width:200px;  
   }
   
`;

export const LinkToSignUpPage=styled.div`
 position:relative;
 top:30px;
 left:40px;
`;


export const ForgetPasswordContainer=styled.div`
   max-width:400px;
   margin: 0 auto;
   position:relative;
   top:5em;
  

   >h1{
     font-size:30px;
     font-weight:500;
     width:800px;
   }
   >p{
    font-size:18px;
    width:450px;
    position:relative;
    top:5px;
   }
   >form{
  
    >input{
      width:400px;
      height:8vh;
      position:relative;
      top:40px;
      border-radius:5px;
      outline:none;
      padding:2px 5px;
    }
    >p{
      position:relative;
      top:30em;
     
    }
   }


   @media (min-width:390px) and (max-width:844px){
     h1{
       width:420px;
       font-size:23px;
       margin-left:25px;
       font-weight:bolder;

     }

     p{
      font-size:15px;
      width:350px;
      margin-left:30px;
      margin-top:5px;
     }

     input{
      width:300px !important;
      position:relative;
      left:2em;
     }
   }

   @media (min-width:768px) and (max-width:900px){
     
   }

`;



export const ParagraphContent=styled.div`
   position:relative;
   top:5em;
   left:10em;
`