import { Dispatch } from 'react'

import {
    IReducerState,
    IReducerAction
} from './ReducerInterface'

export interface IContext {
    logged?: Boolean
}

export interface IGlobalContextProps {
    state: IReducerState,
    dispatch: Dispatch<IReducerAction>
}