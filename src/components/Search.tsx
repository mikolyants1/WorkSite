import axios, { CancelTokenSource } from "axios"
import { useEffect,useState } from "react"
import { useAppDispatch,useAppSelector } from "../store/store"
import {Dispatch,AnyAction} from '@reduxjs/toolkit'
import { setMass,setShow,setText } from "../store/slice"
import { Link } from "react-router-dom"
import { Book } from "../store/slice"
interface props {
    text:string,
    cat:string,
    old:string,
}
interface state{
    book:Book
}
type union=JSX.Element|null
export default function Search({text,cat,old}:props):union{
if (text!==''){
console.log(text)
const mass:Array<any>=useAppSelector((store:state)=>store.book.mass)
const show:number=useAppSelector((store:state)=>store.book.show)
const text1:string=useAppSelector((store:state)=>store.book.text)
const dispatch:Dispatch<AnyAction>=useAppDispatch()
const [con,setCon]=useState<number>(10)
const [err,setErr]=useState<boolean>(false)
const [load,setLoad]=useState<boolean>(true)
const newPage=():void=>{
setCon((prev:number):number=>prev+10)
    }
useEffect(():void=>{
const cancelToken:CancelTokenSource=axios.CancelToken.source()
axios.get(`https://www.googleapis.com/books/v1/volumes?q=${text}&${cat}+subject&orderBy=${old}&maxResults=${con}`,)
.then(({data}:any):void=>{
dispatch(setMass(data.items))
dispatch(setShow(data.totalItems))
})
.catch((():void=>setErr(true)))
.finally(():void=>setLoad(false))
return cancelToken.cancel()
},[text,cat,old,con])
if (load) return <div>...</div>
if (err) dispatch(setText(text1))
    return <div>
     <div className="res">
        found {show} results
      </div>
       <div className="main">
          {mass.map((item:any,i:number):JSX.Element=>{
            const vol=item.volumeInfo
        return <div className="item" key={i}>
            <Link to={`/${item.id}`}>
            <img className="img" 
            src={!vol.imageLinks.smallThumbnail?'':vol.imageLinks.smallThumbnail} alt="" />
            <div className="categ">
              {
               !vol.categories?'':vol.categories.map((item:any,i:number):JSX.Element=>{
                return <div key={i} className="categ1">
                      {item}
                      </div>
               })
              }
            </div>
            <div className="name">
             {vol.title}
            </div>
            <div className="author">
                { 
            !vol.authors?'':vol.authors.map((item:string,i:number):JSX.Element=>{
               return <div key={i}>{item}</div>
            })
                }
            </div>
            </Link>
            </div>
           })}
       </div>
       <div onClick={newPage}>
            load more
         </div>
    </div>
    }
    return null
}