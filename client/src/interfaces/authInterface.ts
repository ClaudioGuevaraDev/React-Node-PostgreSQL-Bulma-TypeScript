export interface IUserSignIn {
    email: string
    password: string
}

export const initialStateUserSignIn: IUserSignIn = {
    email: '',
    password: ''
}

export interface IUserSignUp {
    username: string
    email: string
    password: string
}

export const initialStateUserSignUp: IUserSignUp = {
    username: '',
    email: '',
    password: ''
}