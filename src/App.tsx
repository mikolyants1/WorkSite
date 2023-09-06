
import { QueryClient,QueryClientProvider, } from '@tanstack/react-query'
import './App.css'
import Home from './components/Home'
import Page from './components/Page'
import { Route,BrowserRouter as Router,Routes,Outlet } from 'react-router-dom'
import store,{cachedStore} from './store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
function HomePage():JSX.Element{
  return <div>
    <Outlet />
  </div>
}
function Main():JSX.Element{
  return <div>
    <Home />
  </div>
}
function Book():JSX.Element{
  return <div>
    <Page />
  </div>
}
const query:QueryClient=new QueryClient()

function App():JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={cachedStore}>
        <QueryClientProvider client={query}>
          <Router>
            <Routes>
              <Route path='/' element={<HomePage />}>
                <Route index element={<Main />} />
                <Route path='/:id' element={<Book />} />
              </Route>
            </Routes>
          </Router>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
