import {
    IReducerState,
    IReducerAction
} from '../interfaces/ReducerInterface'
import {
    LOGGED_USER
} from './AppConstants'

export const AppReducer = (state: IReducerState, action: IReducerAction) => {
    const { type, payload } = action

    switch (type) {
        case LOGGED_USER:
            return {
                ...state,
                logged: payload.logged
            }
        default:
            return state
    }
}