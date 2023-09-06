import { useSelector,useDispatch,TypedUseSelectorHook } from "react-redux"
import slice from "./slice"
import { configureStore,combineReducers, Reducer, AnyAction,EmptyObject} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer, Persistor, WebStorage } from 'redux-persist'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore'
import { PersistPartial } from 'redux-persist/lib/persistReducer'
interface state{
    key:string,
    storage:WebStorage
}

const config:state={
    key:'book',
    storage
}
const combine:Reducer=combineReducers({
    book:slice,
})
const persist:Reducer<EmptyObject & {book:state} & 
PersistPartial,AnyAction>=persistReducer(config,combine)
const store:ToolkitStore=configureStore({
    reducer:persist
})
export const cachedStore:Persistor=persistStore(store)
export default store

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector