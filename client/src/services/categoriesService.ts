import axios from 'axios'

const baseUrl = 'http://localhost:4000/api/categories'

export const getAllCategories = async () => {
    const { data } = await axios.get(baseUrl)

    return data
}