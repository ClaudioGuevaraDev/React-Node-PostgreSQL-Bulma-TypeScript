import {
    IReducerState,
    IReducerAction
} from '../interfaces/ReducerInterface'

export const AppReducer = (state: IReducerState, action: IReducerAction) => {
    const { type, payload } = action

    switch (type) {
        default:
            return state
    }
}