
import { Action, Book} from "../store/slice"
import axios, { AxiosResponse } from "axios"
import { union } from "./Head"
import { ChangeEvent,useState,useReducer } from "react"
import { useAppSelector } from "../store/store"
import { useActions } from "../store/store"
import { BaseUrl } from "../store/Api"
import Search from "./Search"
import Head from "./Head"
interface state {
    cat:string,
    old:string,
    text:string,
}
interface action {
  [i:string]:string
}
export interface state1<T>{
    book:Book<T>
}
interface datas<T>{
 items:T,
 totalItems:number,
}
export default function Home<T extends []>():JSX.Element {
const mass:T=useAppSelector((store:state1<T>)=>store.book.mass)
const show:number=useAppSelector((store:state1<number>)=>store.book.show)
const {setMass,setShow,setText}:Action<[]>=useActions()
const [value,dispatch]=useReducer((prev:state,next:action)=>
({...prev,...next}),{cat:'all',old:'relevance',text:''})
const [con,setCon]=useState<number>(10)
const newPage=():void=>{
setCon((prev:number)=>prev+10)
}
async function Call(state:state,con:number) {
const {text,cat,old}:state=state
return await axios
.get(`${BaseUrl}?q=${text}&${cat}+subject&orderBy=${old}&maxResults=${con}`)
.then(({data}:AxiosResponse<datas<T>>):void=>{
setMass(data.items)
setShow(data.totalItems)
  })
}
const change=({target}:ChangeEvent<union>):void=>{
  dispatch({[target.name]:target.value})
}
const press=():void=>{
setText(value.text)
if (value.text!=='') Call(value,con)
}
return (
       <>
        <Head
         chan={change}
         press={press}
         cat={value.cat}
         old={value.old}
         text={value.text}
         />
        <Search
         mass={mass}
         show={show}
         next={newPage}
         />
      </>
     )
}
