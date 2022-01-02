import { Link } from 'react-router-dom'
import { IoMdAddCircle } from 'react-icons/io'

import VideoGameCard from "./VideoGameCard"

const VideoGamesList = () => {
    return (
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
            <div className='columns is-multiline is-variable is-2-mobile is-2-tablet is-2-desktop is-2-widescreen is-2-fullhd'>
                <VideoGameCard title={'asd jkasd jaskj lkdj aslkdj aslkdj asd aaaaaaaaaaaa as'}/>
                <VideoGameCard title={'League of Legends'}/>
                <VideoGameCard title={'League of Legends'}/>
                <VideoGameCard title={'League of Legends'}/>
                <VideoGameCard title={'League of Legends'}/>
            </div>
        </div>
    )
}

export default VideoGamesList