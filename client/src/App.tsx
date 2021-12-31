import 'bulma/css/bulma.min.css'
import 'react-toastify/dist/ReactToastify.css'

import { useReducer } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Router from './router'

import { 
    GlobalContextProvider,
    initialState
} from './context/GlobalContext'
import { AppReducer } from './context/AppReducer'

const App = () => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <div 
            className="has-background-primary-dark"
            style={{
                minHeight: '100vh'
            }}
        >
            <GlobalContextProvider value={{ state, dispatch }}>
                <BrowserRouter>
                    <Router/>
                    <ToastContainer/>
                </BrowserRouter>
            </GlobalContextProvider>
        </div>
    )
}

export default App