
import { ChangeEvent, useState, } from "react"
import { useAppDispatch,useAppSelector } from "../store/store"
import { Dispatch,AnyAction } from "@reduxjs/toolkit"
import { Book,setText as set } from "../store/slice"
import Search from "./Search"
import Head from "./Head"
interface state {
    val1:string,
    val2:string
}
interface state1 {
    book:Book
}
export default function Home():JSX.Element{
const ser:string=useAppSelector((store:state1)=>store.book.text)
const dispatch:Dispatch<AnyAction>=useAppDispatch()
const [value,setValue]=useState<state>({val1:'all',val2:''})
const [value1,setValue1]=useState<state>({val1:'relevance',val2:''})
const [text,setText]=useState<string>('')
const change=(e:ChangeEvent<HTMLSelectElement>):void=>{
setValue((prev:state):state=>({...prev,val1:e.target.value}))
}
const change1=(e:ChangeEvent<HTMLSelectElement>):void=>{
setValue1((prev:state):state=>({...prev,val1:e.target.value}))
    }
const change2=(e:ChangeEvent<HTMLInputElement>):void=>{
setText(e.target.value)
}
const press=():void=>{
dispatch(set(text))
setValue((prev:state):state=>({...prev,val2:value.val1}))
setValue1((prev:state):state=>({...prev,val2:value1.val1}))
}
return <div>
        <Head
          change2={change2}
          change1={change1}
          change={change}
          press={press}
          value1={value1.val1}
          value={value.val1}
         />
        <Search
         text={ser}
         cat={value.val2}
         old={value1.val2}
         />
     </div>
}
