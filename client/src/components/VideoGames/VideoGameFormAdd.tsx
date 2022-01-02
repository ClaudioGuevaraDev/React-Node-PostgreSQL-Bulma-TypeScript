import { toast } from 'react-toastify'

import {
    useState,
    useEffect,
    FormEvent,
    ChangeEvent
} from 'react'

import { ImUpload3 } from 'react-icons/im'

import Navbar from "../Navbar/Navbar"

import {
    ICategoryGet
} from '../../interfaces/categoryInterface'
import {
    IVideoGamePost,
    initialStateVideoGamePost
} from '../../interfaces/videoGameInterface'
import {
    getAllCategories
} from '../../services/categoriesService'
import {
    createVideoGame,
    updateImageOfVideoGame
} from '../../services/videoGamesService'

const VideoGameFormAdd = () => {
    const [categories, setCategories] = useState<ICategoryGet[]>([])
    const [videoGame, setVideoGame] = useState<IVideoGamePost>(initialStateVideoGamePost)
    const [loading, setLoading] = useState<boolean>(false)

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        const { type } = videoGame.file

        if (type !== "image/png" && type !== "image/jpg" && type !== "image/jpeg") {
            toast.error('Solo se permiten imágenes png, jpg o jpeg.', {
                position: 'top-center',
                autoClose: 5000
            })
            return
        }

        const formData = new FormData()
        formData.append('image', videoGame.file)
        
        try {
            const data: IVideoGamePost = {
                title: videoGame.title,
                category: videoGame.category
            }

            const res = await createVideoGame(data)

            if (res.id) {
                try {
                    await updateImageOfVideoGame(formData, res.id)
                    toast.success('Videojuego creado con éxito.', {
                        position: 'top-center',
                        autoClose: 5000
                    })
                } catch (error: any) {
                    const { response } = error

                    toast.error(response.data.message, {
                        position: 'top-center',
                        autoClose: 5000
                    })
                }
                handleCancel()
                setLoading(false)
            } 
        } catch (error: any) {
            const { response } = error

            toast.error(response.data.message, {
                position: 'top-center',
                autoClose: 5000
            })
        }
        handleCancel()
        setLoading(false)
    }

    const handleCancel = () => {
        setVideoGame(initialStateVideoGamePost)
        const inputValue = document.getElementById('file-input') as HTMLInputElement
        inputValue.value = null
    }

    const getCategories = async () => {
        try {
            const res = await getAllCategories()
            setCategories(res)
        } catch (error: any) {
            const { response } = error
            toast.error(response.data.message, {
                position: 'top-center',
                autoClose: 5000
            })
        }
    }

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <>
            <Navbar/>
            {categories.length > 0 ? (
                <div className="container p-5">
                    <div className="columns is-flex is-justify-content-center">
                        <div className="column is-4">
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title is-centered is-size-4">
                                        Añadir un VideoJuego
                                    </p>
                                </header>
                                <form onSubmit={handleSubmit}>
                                    <section className="card-content">
                                        <div className="content">
                                            <div className="field">
                                                <label className="label">Nombre del VideoJuego</label>
                                                <div className="control">
                                                    <input className="input" type="text" placeholder="Título" required autoFocus value={videoGame.title} onChange={({target}) => setVideoGame({...videoGame, title: target.value})}/>
                                                </div>
                                            </div>
                                            <div className="field">
                                                <label className="label">Imagen del VideoJuego</label>
                                                <div className="control">
                                                    <div className="file">
                                                        <label className="file-label">
                                                            <input id="file-input" className="file-input" type="file" name="resume" required onChange={({target}) => setVideoGame({...videoGame, file: target.files[0]})}/>
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
                                                            <span className='file-name'>
                                                                {videoGame.file === null ? 'Sin imagen' : 'Imagen subida.'}
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="field">
                                                <label className='label'>Categoría</label>
                                                <div className='control'>
                                                    <div className='select'>
                                                        <select value={videoGame.category} onChange={({target}) => setVideoGame({...videoGame, category: parseInt(target.value)})}>
                                                            {categories.map((category) => (
                                                                <option key={category.id} value={category.id}>{category.name}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='field is-grouped mt-5'>
                                                <div className='control'>
                                                    <button className={`button is-link ${loading ? 'is-loading' : ''}`}>
                                                        Añadir
                                                    </button>
                                                </div>
                                                <div className='control'>
                                                    <button type='button' onClick={handleCancel} className='button is-link is-light'>
                                                        Cancelar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                'cargando...'
            )}
        </>
    )
}

export default VideoGameFormAdd