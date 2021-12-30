import { IoMdAddCircle } from 'react-icons/io'

import VideoGameCard from "./VideoGameCard"

const VideoGamesList = () => {
    return (
        <div className="container p-5">
            <div className="columns">
                <div className="column is-full">
                    <button className="button is-success">
                        <span className="icon">
                            <i className='is-flex is-align-items-center'><IoMdAddCircle/></i>
                        </span>
                        <span>AGREGAR VIDEOJUEGO</span>
                    </button>
                </div>
            </div>
            <div className='columns is-multiline is-variable is-2-mobile is-2-tablet is-2-desktop is-2-widescreen is-2-fullhd'>
                <VideoGameCard/>
                <VideoGameCard/>
                <VideoGameCard/>
                <VideoGameCard/>
                <VideoGameCard/>
            </div>
        </div>
    )
}

export default VideoGamesList