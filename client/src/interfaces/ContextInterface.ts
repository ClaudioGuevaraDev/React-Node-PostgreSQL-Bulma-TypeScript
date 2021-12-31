import { Dispatch } from 'react'

import {
    IReducerState,
    IReducerAction
} from './ReducerInterface'

export interface IContext {
    logged?: Boolean
    token?: string
    username?: string
    role?: string
}

export interface IGlobalContextProps {
    state: IReducerState,
    dispatch: Dispatch<IReducerAction>
}