import { useState, useEffect, FormEvent } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'
import { ImUpload3 } from 'react-icons/im'

import Navbar from "../Navbar/Navbar"

import {
    IVigeoGameGet,
    initialStateVideoGameGet
} from '../../interfaces/videoGameInterface'
import {
    ICategoryGet
} from '../../interfaces/categoryInterface'
import {
    getOneVideoGame,
    updateOneVideoGame,
    updatedVideoGame,
    updatedImageVideoGame
} from '../../services/videoGamesService'
import {
    getAllCategories
} from '../../services/categoriesService'
 
const VideoGameFormUpdate = () => {
    const [videoGame, setVideoGame] = useState<IVigeoGameGet>()
    const [categories, setCategories] = useState<ICategoryGet[]>([]) 
    const [loadingData, setLoadingData] = useState<boolean>(true)

    const navigate = useNavigate()

    const { id } = useParams()

    const getCategories = async () => {
        try {
            const res = await getAllCategories()
            setCategories(res)
        } catch (error) {
            toast.error('Error al listar las categorías.', {
                position: 'top-center',
                autoClose: 5000
            })
        }
    }

    const getVideoGame = async () => {
        setLoadingData(true)
        try {
            const res = await getOneVideoGame(id.toString())
            setVideoGame(res)
            await getCategories()
        } catch (error: any) {
            toast.error(error.response.data.message, {
                position: 'top-center',
                autoClose: 5000
            })
        }
        setLoadingData(false)
    }

    useEffect(() => {
        getVideoGame()
        getCategories()
    }, [])

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        try {
            const data: updatedVideoGame = {
                title: videoGame.title,
                createdAt: videoGame.createdAt,
                categoryId: videoGame.categoryId
            }
            const res = await updateOneVideoGame(data, videoGame.id.toString())
            
            const formData = new FormData()
            formData.append('image', videoGame.file)

            try {
                await updatedImageVideoGame(formData, videoGame.id.toString())
                toast.success('Videojuego actualizado con éxito.', {
                    position: 'top-center',
                    autoClose: 5000
                })
            } catch (error: any) {
                toast.error(error.response.data.messag, {
                    position: 'top-center',
                    autoClose: 5000
                })
            }

            navigate('/')
        } catch (error: any) {
            toast.error(error.response.data.message, {
                position: 'top-center',
                autoClose: 5000
            })
        }

        handleCancel()
    }

    const handleCancel = () => {
        setVideoGame(initialStateVideoGameGet)
        const input = document.getElementById('file-input') as HTMLInputElement
        input.value = null
    }

    return (
        <>
            <Navbar/>
            <div className="container p-5">
                <div className="columns is-flex is-justify-content-center">
                    <div className="column is-4">
                        <div className="card">
                            <header className="card-header">
                                <p className="card-header-title is-centered is-size-4">
                                    Actualizar un VideoJuego
                                </p>
                            </header>
                            {loadingData ? (
                                'cargando...'
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <section className="card-content">
                                        <div className="content">
                                            <div className="field">
                                                <label className="label">Nombre del VideoJuego</label>
                                                <div className="control">
                                                    <input className="input" type="text" placeholder="Nombre" value={videoGame.title} onChange={({target}) => setVideoGame({...videoGame, title: target.value})}/>
                                                </div>
                                            </div>
                                            <div className="field">
                                                <label className="label">Imagen del VideoJuego</label>
                                                <div className="control">
                                                    <div className="file">
                                                        <label className="file-label">
                                                            <input id="file-input" className="file-input" type="file" name="resume" onChange={({target}) => setVideoGame({...videoGame, file: target.files[0]})}/>
                                                            <span className="file-cta">
                                                                <span className="file-icon">
                                                                    <i className="is-flex is-align-items-center">
                                                                        <ImUpload3/>
                                                                    </i>
                                                                </span>
                                                                <span className="file-label">
                                                                    Elegir imagen
                                                                </span>
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="field">
                                                <label className='label'>Categoría</label>
                                                <div className='control'>
                                                    <div className='select'>
                                                        <select value={videoGame.categoryId} onChange={({target}) => setVideoGame({...videoGame, categoryId: parseInt(target.value)})}>
                                                            {categories.map((category) => (
                                                                <option key={category.id} value={category.id}>{category.name}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='field is-grouped mt-5'>
                                                <div className='control'>
                                                    <button type='submit' className='button is-link'>
                                                        Actualizar
                                                    </button>
                                                </div>
                                                <div className='control'>
                                                    <Link to='/home' type='button' className='button is-link is-light'>
                                                        Cancelar
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoGameFormUpdate