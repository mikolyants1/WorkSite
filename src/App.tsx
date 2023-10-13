import Home from './components/Home'
import Page from './components/Page'
import {Outlet,createBrowserRouter,RouterProvider } from 'react-router-dom'
import store,{cachedStore,useActions,useAppSelector} from './store/store'
import { state1 } from './components/Home'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import {FC,createContext} from 'react'
import { Wrapper } from './components/Style'
import { Action ,context} from './store/slice'
export const Context=createContext<context>({back:'',chan:()=>{}})
const Main:FC=():JSX.Element=>{
  const back:string=useAppSelector((store:state1<[]>)=>store.book.back)
  const {setColor}:Action<[]>=useActions()
  const change=()=>{
  setColor(back=='black'?'white':'black')
  }
  return (
    <Context.Provider value={{back:back,chan:change}}>
      <Wrapper back={back}>
        <RouterProvider router={rout} />
      </Wrapper>
    </Context.Provider>
  )

}
const rout=createBrowserRouter([
  {
    path:'/',
    element:<Outlet />,
    children:[
      {
        index:true,
        element:<Home />
      },
      {
        path:':id',
        element:<Page />
      }
    ]
  },
])
function App():JSX.Element {
return (
    <Provider store={store}>
      <PersistGate persistor={cachedStore}>
         <Main />
      </PersistGate>
    </Provider>
  )
}

export default App
