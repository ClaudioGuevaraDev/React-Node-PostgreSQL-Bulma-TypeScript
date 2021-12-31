export interface IUserSignIn {
    email: string
    password: string
}

export const initialStateUserSignIn: IUserSignIn = {
    email: '',
    password: ''
}