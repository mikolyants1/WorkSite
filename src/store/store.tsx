import { useSelector,useDispatch,TypedUseSelectorHook } from "react-redux"
import slice,{action,Action} from "./slice"
import {configureStore,combineReducers, Reducer, AnyAction,EmptyObject,bindActionCreators} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer, Persistor, WebStorage } from 'redux-persist'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { PersistPartial } from 'redux-persist/lib/persistReducer'
import { BookApi } from "./Api"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
interface state{
    key:string,
    storage:WebStorage
}
const config:state={
    key:'book',
    storage
}
type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export function useActions():Action<[]>{
return bindActionCreators(action,useAppDispatch())
}

const combine:Reducer=combineReducers({
    book:slice,
    [BookApi.reducerPath]:BookApi.reducer,
})
const persist:Reducer<EmptyObject & {book:state} & 
PersistPartial,AnyAction>=persistReducer(config,combine)

const store:ToolkitStore=configureStore({
    reducer:persist,
    middleware:(getDefaultMiddleware:any)=>
    getDefaultMiddleware().concat(BookApi.middleware)
})
setupListeners(store.dispatch)
export const cachedStore:Persistor=persistStore(store)
export default store
