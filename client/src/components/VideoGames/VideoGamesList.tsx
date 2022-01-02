import { Link } from 'react-router-dom'
import {
    useState,
    useEffect,
    ChangeEvent,
    useContext
} from 'react'

import { IoMdAddCircle } from 'react-icons/io'
import { toast } from 'react-toastify'

import VideoGameCard from "./VideoGameCard"

import GlobalContext from '../../context/GlobalContext'

import {
    IVigeoGameGet
} from '../../interfaces/videoGameInterface'
import {
    ICategoryGet
} from '../../interfaces/categoryInterface'
import {
    getAllVideoGames,
    GetAllVideoGames
} from '../../services/videoGamesService'
import {
    getAllCategories
} from '../../services/categoriesService'

const VideoGamesList = () => {
    const [videoGames, setVideoGames] = useState<IVigeoGameGet[]>([])
    const [refresh, setResfresh] = useState<boolean>(true)
    const [categories, setCategories] = useState<ICategoryGet[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [filter, setFilter] = useState<any>(1)

    const { state } = useContext(GlobalContext)
    const { role } = state

    const getVideoGames = async () => {
        setLoading(true)
        try {
            const data: GetAllVideoGames = {
                filter: filter
            }
            const res = await getAllVideoGames(data)
            setVideoGames(res)
            const categoriesRes = await getAllCategories()
            setCategories(categoriesRes)
        } catch (error) {
            toast.error('Error al listar los videojuegos.', {
                position: 'top-center',
                autoClose: 5000
            })
        }
        setLoading(false)
    }

    const handleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === "1") {
            setFilter(1)
        } else {
            setFilter(e.target.value.toString())
        }
        setResfresh(!refresh)
    }

    useEffect(() => {
        getVideoGames()
    }, [refresh])

    return (
        <>
        {loading ? (
            'cargando..'
        ) : (
            <div className="container p-5">
                <div className="columns">
                    <div className="column is-full is-flex is-justify-content-space-between is-align-items-center">
                        {role === "Admin" && (
                            <Link to='/add-videogame' className="button is-success">
                                <span className="icon">
                                    <i className='is-flex is-align-items-center'><IoMdAddCircle/></i>
                                </span>
                                <span>AGREGAR VIDEOJUEGO</span>
                            </Link>
                        )}
                        <div className="field">
                            <div className='control'>
                                <div className='select'>
                                    <select value={filter} onChange={handleFilter}>
                                        {categories.map((category) => (
                                            <option key={category.id} value={category.id}>{category.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {videoGames.length > 0 ? (
                    <div className='columns is-multiline is-variable is-2-mobile is-2-tablet is-2-desktop is-2-widescreen is-2-fullhd'>
                        {videoGames.map((videoGame) => (
                            <VideoGameCard key={videoGame.id} videoGame={videoGame} setRefresh={setResfresh} refresh={refresh}/>
                        ))}
                    </div>
                ) : (
                    'cargando...'
                )}
            </div>
        )}
        </>
    )
}

export default VideoGamesList