
import { Link } from "react-router-dom"
import img from '../assets/No_Cover.jpg'
import {useContext} from 'react'
import { Main,Result,Item,Img,Name,Authors,Category,TextItem,Load ,List} from "./Style" 
import { Context } from "../App"
import { context } from "../store/slice"
interface props<T> {
    mass:T,
    show:number,
    next:()=>void,
}
interface image{
  smallThumbnail:string
 }
 interface data<T>{
   imageLinks:image,
   categories:T,
   authors:T,
   description:T,
   title:string
 }
 interface elem{
  volumeInfo:data<[]>
  id:string
 }
type union=JSX.Element|null

export default function Search({mass,show,next}:props<[]>):union{
if (mass.length!==0){
 const {back}:context=useContext(Context)
 return (
       <List back={back}>
         <Result>
            found {show} results
         </Result>
         <Main>
          {mass.map(({volumeInfo,id}:elem,i:number):JSX.Element=>{
            const {imageLinks,categories,title,authors}:data<[]>=volumeInfo
             return (
              <Item back={back} key={id} i={i*0.3}>
                <Link to={`/${id}`}>
                  <Img alt="" src={!imageLinks?img:imageLinks.smallThumbnail} />
                  <Category>
                   {categories&&categories.map((item:string,i:number):JSX.Element=>(
                    <TextItem key={i}>
                      {item}
                    </TextItem>
                    ))}
                  </Category>
                  <Name back={back}>
                    {title}
                  </Name>
                  <Authors>
                   {authors&&authors.map((item:string,i:number):JSX.Element=>(
                    <>
                     {i<4?(
                      <TextItem key={i}>
                         {item}
                      </TextItem>
                      ):null}
                    </>      
                   ))}
                  </Authors>
                </Link>
              </Item>
              )})}
          </Main>
          <Load onClick={next}>
              load more
          </Load>
        </List>
        )
    }
    return null
}