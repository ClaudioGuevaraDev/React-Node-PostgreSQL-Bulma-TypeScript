import 'bulma/css/bulma.min.css'

import { BrowserRouter } from 'react-router-dom'

import Router from './router'

const App = () => {
    return (
        <div 
            className="has-background-primary"
            style={{
                minHeight: '100vh'
            }}
        >
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </div>
    )
}

export default App