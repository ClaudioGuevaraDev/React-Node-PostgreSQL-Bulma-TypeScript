import { IContext } from "./ContextInterface";

export type IReducerState = IContext

export interface IReducerAction {
    type: string,
    payload: IContext
}