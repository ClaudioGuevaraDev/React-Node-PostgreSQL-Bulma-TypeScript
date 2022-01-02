import { createContext } from 'react'

import { IGlobalContextProps } from '../interfaces/ContextInterface'
import {
    IReducerState
} from '../interfaces/ReducerInterface'

export const initialState: IReducerState = {
    logged: false,
    token: '',
    username: '',
    role: ''
}

const GlobalContext = createContext<IGlobalContextProps>({
    state: initialState,
    dispatch: () => {}
})

export const GlobalContextProvider = GlobalContext.Provider

export default GlobalContext