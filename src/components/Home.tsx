
import { Action, Book} from "../store/slice"
import axios from "axios"
import { union } from "./Head"
import { ChangeEvent,useState,useEffect,useCallback } from "react"
import { useAppSelector } from "../store/store"
import { useActions } from "../store/store"
import Search from "./Search"
import Head from "./Head"
interface state {
    cat:string,
    old:string,
    text:string
}
interface state1{
    book:Book
}
type Func=(state:state,con:number)=>void

export default function Home():JSX.Element {
const mass:Array<any>=useAppSelector((store:state1)=>store.book.mass)
const show:number=useAppSelector((store:state1)=>store.book.show)
const {setMass,setShow,setText}:Action=useActions()
const [value,setValue]=useState<state>({cat:'all',old:'relevance',text:''})
const [con,setCon]=useState<number>(10)
const newPage=():void=>{
setCon((prev:number):number=>prev+10)
}
useEffect(():void=>{Call(value,con)},[con])
async function Promise(state:state,con:number):Promise<void>{
const {text,cat,old}:state=state
return await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${text}&${cat}+subject&orderBy=${old}&maxResults=${con}`)
.then(({data}:any):void=>{
setMass(data.items)
setShow(data.totalItems)
})
}
const Call:Func=useCallback((state:state,con:number):void=>{
   Promise(state,con)
},[value,con,Promise])
const change=({target}:ChangeEvent<union>):void=>{
setValue((prev:state):state=>({...prev,[target.name]:target.value}))
}
const press=():void=>{
setText(value.text)
if (value.text!=='') Call(value,con)
}
return <div>
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
     </div>
}
