import axios from 'axios'

import {
    IVideoGamePost
} from '../interfaces/videoGameInterface'

const baseUrl = 'http://localhost:4000/api/video-games'

export const createVideoGame = async (videoGame: IVideoGamePost) => {
    const { data } = await axios.post(baseUrl, videoGame)

    return data
}

export const updateImageOfVideoGame = async (formData: any, id: number) => {
    const { data } = await axios.put(`${baseUrl}/upload-image/${id.toString()}`, formData)

    return data
}

export const getAllVideoGames = async () => {
    const { data } = await axios.get(baseUrl)

    return data
}

export const getOneVideoGame = async (id: string) => {
    const { data } = await axios.get(`${baseUrl}/${id}`)

    return data
}

export const deleteOneVideoGame = async (id: string) => {
    return await axios.delete(`${baseUrl}/${id}`)
}