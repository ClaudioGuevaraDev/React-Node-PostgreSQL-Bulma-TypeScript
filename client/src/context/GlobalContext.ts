import { createContext } from 'react'

import { IGlobalContextProps } from '../interfaces/ContextInterface'
import {
    IReducerState
} from '../interfaces/ReducerInterface'

export const initialState: IReducerState = {
    logged: false
}

const GlobalContext = createContext<IGlobalContextProps>({
    state: initialState,
    dispatch: () => {}
})

export const GlobalContextConsumer = GlobalContext.Consumer
export const GlobalContextProvider = GlobalContext.Provider

export default GlobalContext