import { Slice,createSlice,ActionCreatorWithPayload,PayloadAction } from "@reduxjs/toolkit";
export type Book<T>={
    mass:T,
    show:number,
    text:string
}
export type Action<T>={
setMass:ActionCreatorWithPayload<T,'books/setMass'>
setShow:ActionCreatorWithPayload<number,'books/setShow'>
setText:ActionCreatorWithPayload<string,'books/setText'>
}
const initialState:Book<[]>={
    mass:[],
    show:0,
    text:''
}
const slice:Slice<Book<[]>,{
setMass:(state:Book<[]>,action:PayloadAction<[]>)=>void
setShow:(state:Book<[]>,action:PayloadAction<number>)=>void
setText:(state:Book<[]>,action:PayloadAction<string>)=>void
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
      }
    }
})
export const action:Action<[]>=slice.actions
export default slice.reducer