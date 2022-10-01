import styled from 'styled-components';


export const CardContainer=styled.div`
display:flex;
justify-content:space-between;
padding-top:8em;

`;

export const CardContent=styled.div`
>p{
    width:250px;
}
>img{
    width:200px;
    object-fit:contain;
}

`;


export const ReviewCardContainer=styled.div`
background:#fafafa;
box-shadow: 0px 3.03603px 9.10809px rgba(116, 116, 116, 0.08);
width:300px;
margin-bottom:8em;
height:40vh;

margin-left:40px;
margin-right:30px;
border-radius:10px;
border:1px solid #ccc;
>p{
    width:200px;
    position:relative;
    top:3em;
    left:4.3em;
    font-weight:300;
}
>img{
    position:relative;
    top:-0.1em;
}
>h5{
    position:relative;
    top:3em;
    font-size:17px;
    left:4.3em;
}

>h6{
    position:relative;
    top:20em;
    left:19em;
}

`;

export const CardsItems=styled.div`
 padding-top:10em;
 overflow-x:hidden;
 display:flex;
 justify-content:space-between;
`;