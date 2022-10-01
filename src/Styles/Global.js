import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --toastify-color-light: #fff;
  --toastify-color-dark: #121212;
  --toastify-color-info: #3498db;
  --toastify-color-success: #07bc0c;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: #e74c3c;
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);

  --toastify-toast-width: 320px;
  --toastify-toast-background: #fff;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-font-family: sans-serif;
  --toastify-z-index: 9999;

  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: #fff;

  //Used only for colored theme
  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;

  // Used when no type is provided
  // toast("**hello**")
  --toastify-color-progress-light: linear-gradient(
    to right,
    #4cd964,
    #5ac8fa,
    #007aff,
    #34aadc,
    #5856d6,
    #ff2d55
  );
  // Used when no type is provided
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);
}

.Toastify__toast-icon {
  width:50px !important;
}

 *{
    margin:0;
    padding:0;
    box-sizing:-border-box;
    // font-family: 'Nunito', sans-serif;
 }

 body{
  // font-family: 'Nunito', sans-serif;
 }
 
.crossIcon{
  color:#fff;
  font-size:25px;
  font-weight:100 !important;
  position:relative;
  top:-5em;
  left:53em;
}

.arrow{
  font-size:13px;
  position:relative;
  color:#9eaac6;
  left:5px;
  top:6px;
}

.content{
  display:none;
}

.trans{
  transform: translateY(-45px) rotate(-180deg);
}

.postrequest{
  position:relative;
  top:3em;
  left:3em;
}






.place_footer{
  position:relative;
  top:15em;
}

.avatar_review{
  width:100px;
  height:100px;
  position:relative;
  left:5em;
  top:-7.5em ;
  object-fit:cover;
  border-radius:50%;
  border:2px solid #fadb14;
}

.color{
  color:#012169;
  position:relative;
  top:-2em;
  left:1.5em;
  
}

.card2{
  position:relative !important;
  left:-3em;
}

.card3{
  position:relative !important;
  left:-6em;
}

.card4{
  position:relative !important;
  left:-9em;
}

.footer_icon{
  font-size:55px;
  color:#74767e !important;
  position:relative;
  left:0.3em;
  top:0.2em;

}

.reg{
  position:relative;
  left:1em;
  top:0.5em;
}

.icon{
  font-size:30px;
  position:relative;
  top:0.3em;
}

.twitter{
  position:relative;
  left:-3.5em;
}

.globe{
  position:relative;
  left:-0.2em;
}
.fb{
  position:relative;
  left:-2.5em;
}

.linkIn{
  position:relative;
  left:-1.5em;
}

.eng{
  font-size:16px;
}

.w_t_content{
  display:flex;
  justify-content:space-between;
}


.what_to_expert{
  height:50vh;
  padding:13em;
  margin-bottom:20em;
 
  >h1{
    font-weight:400;
    font-size:40px;
    text-align:center;
    position:relative;
    top:-2.3em;
  }
}

.img1{
  width:120px;
  object-fit:contain;
}

.content_1{
  position:relative;
  left:5.3rem;
  h1{
    font-size:20px;

    font-weight:bolder;
  }
}

.sub_content_1{
  position:relative;
  top:2.5rem;
  left:-2.3em;
  >h1{
    font-size:30px;
    font-weight:400;
    width:350px;
    margin-bottom:10px;
  }
  >p{
    width:350px;
    font-size:20px;
    font-weight:300;

  }
}


.img2{
  width:120px;
  object-fit:contain;
}
.content_2{
  position:relative;
  left:-2em;
  h1{
    font-size:20px;
    
    font-weight:bolder;
  }
}

.sub_content_2{
  position:relative;
  top:3.8rem;
  left:-2.3em;
  >h1{
    font-size:30px;
    font-weight:400;
    width:350px;
    margin-bottom:10px;
  }
  >p{
    width:350px;
    font-size:20px;
    font-weight:300;

  }
}



.img3{
  width:120px;
  object-fit:contain;
}

.content_3{
  position:relative;
  left:-5rem;
  h1{
    font-size:20px;
  }
}

.sub_content_3{
  position:relative;
  top:2.8rem;
  left:-2.3em;
  >h1{
    font-size:30px;
    font-weight:400;
    width:350px;
    margin-bottom:10px;
  }
  >p{
    width:300px;

  }
}




.img4{
  width:90px;
  object-fit:contain;
}

.content_4{
  position:relative;
  
  left:-5em;
  h1{
    font-size:20px;
  }
}

.sub_content_4{
  position:relative;
  top:2.8rem;
  left:-2.3em;
  >h1{
    font-size:30px;
    font-weight:400;
    width:350px;
    margin-bottom:10px;
  }
  >p{
    width:300px;

  }
}


.reviews_container{
  background-color:#0070ba;
  padding:70px;
  height:75vh;
  margin-bottom:10em;
}

.control_container{
  display:flex;
  justify-content:space-between;
  position:relative;
  top:7em;
}


.card_content{
  border:2px solid #012169;
  border-radius:5px;
  width:280px;
  height:30vh;
}



.container_1{
  position:relative;
  top:5em;

  .name_spot{
    color:#fafafa;
    border:1px solid #fff;
    width:170px;
    background-color:#012169;
    height:30px;
    text-align:center;
    padding:5px;
    position:relative;
    top:-8em;
    left:50px;
  }

  .comment{
    color:#fff;
    width:260px;
    margin-left:20px;
    position:relative;
    top:-5.5em;
  }

}




.container_2{
  position:relative;
  top:5em;

  .name_spot{
    color:#fafafa;
    border:1px solid #fff;
    width:170px;
    background-color:#012169;
    height:30px;
    text-align:center;
    padding:5px;
    position:relative;
    top:-8em;
    left:50px;
  }

  .comment{
    color:#fff;
    width:260px;
    margin-left:20px;
    position:relative;
    top:-5.5em;
  }

}



.container_3{
  position:relative;
  top:5em;

  .name_spot{
    color:#fafafa;
    border:1px solid #fff;
    width:170px;
    background-color:#012169;
    height:30px;
    text-align:center;
    padding:5px;
    position:relative;
    top:-8em;
    left:50px;
  }

  .comment{
    color:#fff;
    width:260px;
    margin-left:20px;
    position:relative;
    top:-5.5em;
  }

}



.container_4{
  position:relative;
  top:5em;

  .name_spot{
    color:#fafafa;
    border:1px solid #fff;
    width:170px;
    background-color:#012169;
    height:30px;
    text-align:center;
    padding:5px;
    position:relative;
    top:-8em;
    left:50px;
  }

  .comment{
    color:#fff;
    width:260px;
    margin-left:20px;
    position:relative;
    top:-5.5em;
  }
}

 };




 @media (min-width:390px) and (max-width:844px){
  .left_line{
    width:90px;
    position:relative;
    left:30px;}

  .right_line{
    width:90px;
    position:relative;
    left:-30px;}


    .register_container{
     position:relative;
     left:-30px;}
 
     .header_logo{
      position:relative;
      left:5px;
      // top:30em !important;
      width:160px;
      object-fit:contain;}

      .header_btn{
        width:60px;
        height:30px;
        font-size:13px;
        left:40px;}

      .header_btn_signup{
        width:60px;
        height:30px;
        font-size:13px;
        position:relative;
        left:65px;}

        .body_button{
          position:relative;
          left:-28rem;
          top:2.5rem;}

          .footer_right{
            position:relative;
            
            left:-12em;
            top:9em;}

            .twitter{
              left:-3em;
            font-size:30px;}

            .footer_icon{
              font-size:65px;
              position:relative;
              left:10rem;}

              .fb{
                left:-2.5em;
              font-size:30px;}

              .linkIn{
                left:-1.9em;
              font-size:30px;}
            

              .globe{
                left:-1.5em;
                font-size:30px;
              }

              .eng{
                font-size:20px;
                position:relative;
                left:-8px;
                top:-20px;}

                .reg{
                  left:10em;}


      .what_to_expert{
        width:13px;
        // background-color:red;
        height:250vh;
        >h1{
          font-size:25px;
          width:350px;
          top:-6em;
          position:relative;
          left:-7em;}

        .w_t_content{
          flex-direction:column;

          .content_1{
            position:relative;
            left:-6.3em;
            top:-6em;
            .sub_content_1{
              h1{
                font-size:20px;
                font-weight:500;
                position:relative;
                left:1rem;}

              p{
                font-size:13px;}
            }
          
          }


          .content_2{
            position:relative;
            left:-6.3em;
            top:-3em;
            .sub_content_2{
              h1{
                font-size:20px;
                font-weight:500;
                position:relative;
                left:1.5rem;}

              p{
                font-size:13px;}
            }
          
          }


          .content_3{
            position:relative;
            left:-6.3em;
            top:1em;
            .sub_content_3{
              h1{
                font-size:20px;
                font-weight:500;
                position:relative;
                left:2rem;}

              p{
                font-size:13px;}
            }
          
          }


          .content_4{
            position:relative;
            left:-6.3em;
            top:5.5em;
            .sub_content_4{
              h1{
                font-size:20px;
                font-weight:500;
                position:relative;
                left:4.5rem;}

              p{
                font-size:13px;}
            }
          
          }

          .img1{width:100px;object-fit:contain;
           position:relative;left:2em;top:2em}
          .img2{width:100px;object-fit:contain;
            position:relative;left:2em;top:3em}
          .img3{width:100px;object-fit:contain;
            position:relative;left:2em;top:3em}
          .img4{width:80px;object-fit:contain;
            position:relative;left:2em;top:2em}
        }


      }
              

      .reviews_container{
        height:400vh;
        width:290px;

        .control_container{
          flex-direction:column;
          position:relative;
          }

          .card_content{
            height:50vh;
            .color{position:relative; top:-2.5rem;}
            
          }
            
            .container_4{
              position:relative;
              top:33em;}
        
              .container_3{
                position:relative;
                top:23em;}

              .container_1{
                position:relative;
                top:3em;}

                .container_2{
                  position:relative;
                  top:13em;}

      }

      .body_button{
        position:relative;
        top:-3rem;}      

 }


 


`;


export default GlobalStyles;