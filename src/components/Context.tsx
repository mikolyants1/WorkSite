import { useContext,useEffect,useState } from "react";
import { Context } from "../App";
import { But, Toogle } from "./Style";
import { context } from "../store/slice";
interface reduce{
 color:number,
 margin:number
}
export default function Theme(){
const [state,setState]=useState<reduce>({color:0,margin:3})
const {back,chan}:context=useContext(Context)
useEffect(():void=>{
const background:number=back=='black'?1:0
const margin:number=back=='black'?32:3
setState({color:background,margin:margin})
},[back])
  return (
     <Toogle back={state.color} onClick={chan}>
        <But margin={state.margin} />
     </Toogle>
  )
}