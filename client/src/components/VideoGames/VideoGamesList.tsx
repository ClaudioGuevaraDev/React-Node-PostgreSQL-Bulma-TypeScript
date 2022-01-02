import { Link } from 'react-router-dom'
import {
    useState,
    useEffect
} from 'react'

import { IoMdAddCircle } from 'react-icons/io'
import { toast } from 'react-toastify'

import VideoGameCard from "./VideoGameCard"

import {
    IVigeoGameGet
} from '../../interfaces/videoGameInterface'
import {
    getAllVideoGames
} from '../../services/videoGamesService'

const VideoGamesList = () => {
    const [videoGames, setVideoGames] = useState<IVigeoGameGet[]>([])
    const [refresh, setResfresh] = useState<boolean>(true)

    const getVideoGames = async () => {
        try {
            const res = await getAllVideoGames()
            setVideoGames(res)
        } catch (error) {
            toast.error('Error al listar los videojuegos.', {
                position: 'top-center',
                autoClose: 5000
            })
        }
    }

    useEffect(() => {
        getVideoGames()
    }, [refresh])

    return (
        <>
        <div className="container p-5">
            <div className="columns">
                <div className="column is-full is-flex is-justify-content-space-between is-align-items-center">
                    <Link to='/add-videogame' className="button is-success">
                        <span className="icon">
                            <i className='is-flex is-align-items-center'><IoMdAddCircle/></i>
                        </span>
                        <span>AGREGAR VIDEOJUEGO</span>
                    </Link>
                    <div className="select">
                        <select className=''>
                            <option>Todos los juegos</option>
                            <option>Peleas</option>
                        </select>
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
        </>
    )
}

export default VideoGamesList