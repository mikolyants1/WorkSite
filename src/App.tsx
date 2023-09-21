
import './App.css'
import Home from './components/Home'
import Page from './components/Page'
import { Route,BrowserRouter as Router,Routes,Outlet } from 'react-router-dom'
import store,{cachedStore} from './store/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'

function App():JSX.Element {
return (
    <Provider store={store}>
      <PersistGate persistor={cachedStore}>
        <Router>
          <Routes>
            <Route path='/' element={<Outlet />}>
              <Route index element={<Home />} />
              <Route path='/:id' element={<Page />} />
            </Route>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
