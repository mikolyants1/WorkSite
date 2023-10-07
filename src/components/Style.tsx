import styled from "@emotion/styled";
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
  img:string
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
  key:number
}
export const Title=styled.div`
width: 100%;
text-align: center;
font-size: 34px;
font-weight:bolder;
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
export const Header=styled.header<HeadProp>`
width: 100%;
height: 200px;
text-align:center;
background: url(${({img}:HeadProp)=>img}) no-repeat;
background-size: 100% 100%;
@media (max-width:280px) {
      height: 240px;
  }
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

  export const MainPage=styled.div`
        width: 100%;
        height: 500px;
        display: flex;
        @media (max-width:800px) {
            display: block;
          }
      `
   export const PageImg=styled.div`
        width: 40%;
        height: 100%;
        background-color: rgb(235, 234, 234);
         text-align:center;
        & img {
        width: 250px;
        margin: 40px auto;
        box-shadow: 4px 2px 4px 2px black;
        }
        @media (max-width:800px) {
              width: 100%; 
          }
      `
  export const Load=styled.div<LoadProp>`
  width:100%;
  text-align:center;
  `
  export const TextItem=styled.div`
  text-align:center;
  `
  export const PageText=styled.div`
        width: 60%;
        height: 100%;
        @media (max-width:800px) {
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
        background-color: rgb(224, 224, 224);
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