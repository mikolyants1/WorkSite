import Home from './components/Home'
import Page from './components/Page'
import {Outlet,createBrowserRouter,RouterProvider } from 'react-router-dom'
import store,{cachedStore} from './store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
const router=createBrowserRouter([
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
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  )
}

export default App
