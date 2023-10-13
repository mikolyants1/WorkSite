import { Slice,createSlice,ActionCreatorWithPayload,PayloadAction } from "@reduxjs/toolkit";
export type Book<T>={
    mass:T,
    show:number,
    text:string,
    back:string,
}
export interface context{
  back:string,
  chan?:()=>void
}
export type Action<T>={
setMass:ActionCreatorWithPayload<T,'books/setMass'>
setShow:ActionCreatorWithPayload<number,'books/setShow'>
setText:ActionCreatorWithPayload<string,'books/setText'>
setColor:ActionCreatorWithPayload<string,'books/setColor'>
}
const initialState:Book<[]>={
    mass:[],
    show:0,
    text:'',
    back:'white',
}
const slice:Slice<Book<[]>,{
setMass:(state:Book<[]>,action:PayloadAction<[]>)=>void
setShow:(state:Book<[]>,action:PayloadAction<number>)=>void
setText:(state:Book<[]>,action:PayloadAction<string>)=>void
setColor:(state:Book<[]>,action:PayloadAction<string>)=>void
},'books'>=createSlice({
    name:'books',
    initialState,
    reducers:{
      setMass:(state,action)=>{
        state.mass=[...action.payload]
      },
      setShow:(state,action)=>{
        state.show=action.payload
      },
      setText:(state,action)=>{
        state.text=action.payload
      },
      setColor:(state,{payload})=>{
       state.back=payload
      }
    }
})
export const action:Action<[]>=slice.actions
export default slice.reducer