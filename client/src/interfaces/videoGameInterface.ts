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
    title: string
    image: string
    createdAt: string
    updatedAt: string
    categoryId: number
}