import styled from "@emotion/styled";
import {Keyframes, keyframes} from '@emotion/react'
import { ChangeEvent } from "react";
import { union } from "./Head";
type union2=JSX.Element|JSX.Element[]
interface SelectProp {
    children:JSX.Element[],
    name:string,
    value:string,
    onChange:(e:ChangeEvent<union>)=>void,
}
interface HeadProp{
  children:union2,
  back?:string
}
interface TextProp{
  key?:number,
  children:string
}
interface LoadProp{
  onClick:()=>void,
  children:string
}
interface ImgProp{
  alt:string,
  src:string
}
interface ItemProp{
  children:JSX.Element,
  key:number,
  i:number
}
interface ToogleProp{
  back:number
  onClick:(()=>void)|undefined
}
interface ButProp{
  margin:number
}
interface WrapProp{
  back:string
}
interface ListProp{
  back:string,
  children:JSX.Element[]
}
const show:Keyframes=keyframes`
from {
  opacity:0
}
to{
  opacity:1
}
`
export const Wrapper=styled.div<WrapProp>`
min-width:390px;
font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
background-color:${({back}:WrapProp)=>back};
min-height:800px;
`
export const PageWrap=styled(Wrapper)<WrapProp>``
export const List=styled.div<ListProp>`
color:${({back}:ListProp)=>(
  back=='black'?'white':'black'
)};
`
export const Container=styled.div`
width:90%;
margin:10px auto 10px auto;
display:flex;
justify-content:end;
@media (max-width:500px) {
  justify-content:center
}
`
export const Toogle=styled.div<ToogleProp>`
position:relative;
width:60px;
height:30px;
border-radius:20px;
transition:margin-left 1s;
background:linear-gradient(${({back}:ToogleProp)=>(
  back==0?'#808080,#D0D0D0':'#000000,#808080'
  )});
`
export const But=styled.div<ButProp>`
 position:absolute;
 background-color:white;
 border-radius:50%;
 margin-top:2px;
 width:25px;
 height:25px;
 margin-left:${({margin}:ButProp)=>margin}px;
`
export const Title=styled.div`
width: 100%;
text-align: center;
font-size: 34px;
font-weight:bolder;
`
export const PageName=styled(Title)`
 width:80%;
 text-align:center;
`
export const Back=styled.div<HeadProp>`
 width:100px;
 text-align:crnter;
 font-size:20px;
 & a{
  color:${({back}:HeadProp)=>back}
 }
`
export const Search=styled.div`
width: 450px;
height: 20px;
margin: auto;
display: flex;
justify-content: center;
align-items: center;
text-align:center;
& input{
height: 100%;
width: 85%;
}
& button{
height: 25px;
width: 70px;
}
@media (max-width:550px) {
width: 90%;
  }
`
export const Header=styled.div<HeadProp>`
min-width:380px;
width: 100%;
height: 200px;
text-align:center;
padding:5px 0px;
border-radius:0 0 20px 20px;
background:linear-gradient(${({back}:HeadProp)=>(
back=='black'?'#808080,#D0D0D0':'#000000,#808080'
)});
color:${({back}:HeadProp)=>back};
`
export const PageHeader=styled(Header)<HeadProp>`
height: 100px;
display:flex;
justify-content:space-around;
align-items:center;

`
export const Sorted=styled.div`
    height: 30px;
    margin:10px auto;
    width: 480px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width:550px) {
    width: 100%;
      display: block;
      }
  `

export const Categories=styled.div`
    height: 100%;
    width: 50%;
    @media (max-width:550px) {
    width: 100%;
    margin: 10px auto 10px auto;
      }
    `
 export const Times=styled.div`
    display: flex;
    justify-content: end;
    height: 100%;
    width: 50%;
    @media (max-width:550px) {
    justify-content: center;
    width: 100%;
    margin: auto;

      }
    `
export const Text=styled.span<TextProp>`
      font-size: 18px;
      font-weight: bolder;
    }
    `
 export const Select=styled.select<SelectProp>`
      width: 140px;
      height: 100%;
    `

  export const MainPage=styled.div<HeadProp>`
        min-width:380px;
        padding:5px;
        margin:50px auto;
        border:1px solid black;
        border-radius:20px;
        overflow:hidden;
        background-color:${({back}:HeadProp)=>(
          back=='black'?'white':'black'
        )};
        color:${({back}:HeadProp)=>back};
        width: 75%;
        min-height: 400px;
        display: flex;
        @media (max-width:1100px) {
            display: block;
          }
      `
   export const PageImg=styled.div<HeadProp>`
        width: 35%;
        height: 100%;
         text-align:center;
        border-right:2px solid ${({back}:HeadProp)=>back};
        & img {
        width: 250px;
        margin: 40px auto;
        box-shadow: 4px 2px 4px 2px ${({back}:HeadProp)=>back};
        }
        @media (max-width:1100px) {
          width: 100%; 
          border-right:none;
          border-bottom:2px solid ${({back}:HeadProp)=>back};
          }
      `
  export const Load=styled.div<LoadProp>`
  pointer:cursor;
  margin-top:20px;
  margin-bottom:20px;
  width:100%;
  text-align:center;
  `
  export const TextItem=styled.div`
  text-align:center;
  `
  export const PageText=styled.div`
        padding:5px;
        width: 65%;
        height: 100%;
        @media (max-width:1100px) {
              width: 100%;
          }
      `
   export const PageCat=styled.div`
        width: 90%;
        margin: 10px auto;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        align-items: start;   
        & div {
         align-items: start;
        }
      `
    export const PageTitle=styled.div`
        width: 90%;
        text-align: center;
        margin: auto;
      `
    export const PageAuthor=styled.div`
        width: 90%;
        font-size: 14px;
        text-decoration: underline;
        color:grey;
        display: flex;
        margin: auto;
       & div {
        text-align: center;
        width: 200px;
      }
      `
   export  const Category=styled.div`
        color: grey;
        text-decoration: underline;
        & div {
            align-items:start
        }
      `
      
   export const Main=styled.div`
        margin-top: 20px;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
        row-gap: 30px;
        column-gap: 20px;
        @media (max-width:550px) {
              display: block;
          }
      `
    export const Item=styled.div<ItemProp>`
        margin: auto;
        text-align:center;
        width: 250px;
        min-height: 350px;
        opacity:0;
        animation-name:${show};
        animation-duration: 1s;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
        animation-delay:${({i}:ItemProp)=>i}s;
        background-color: rgb(224, 224, 224);
        border-radius:20px;
        border:1px solid black;
        @media (max-width:550px) {
          margin:20px auto 20px auto;
          }
      `
   export const Result=styled.div`
        margin-top: 10px;
        text-align:center
      `
     export const Img=styled.img<ImgProp>`
        margin:10px auto;
        box-shadow: 4px 2px 4px 2px black;
        width:60%;
        height:190px
      `
    export const Name=styled.div`
        font-weight: bold;
      `
    export const Authors=styled.div`
        color: grey;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      `