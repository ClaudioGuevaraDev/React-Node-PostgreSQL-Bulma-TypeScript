export interface IVideoGamePost {
    title: string
    file?: any
    category: number
}

export const initialStateVideoGamePost: IVideoGamePost = {
    title: '',
    file: null,
    category: 1
}

export interface IVigeoGameGet {
    id: number
    title: string
    image: string
    createdAt: string
    updatedAt: string
    categoryId: number
    file?: any
}

export const initialStateVideoGameGet: IVigeoGameGet = {
    id: 0,
    title: '',
    image: '',
    createdAt: '',
    updatedAt: '',
    categoryId: 1,
    file: null
}