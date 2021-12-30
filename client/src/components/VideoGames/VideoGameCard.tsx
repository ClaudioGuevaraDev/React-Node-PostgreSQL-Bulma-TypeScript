import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdAddComment } from 'react-icons/md'

const VideoGameCard = () => {
    return (
        <div className='column is-4'>
            <div className='card'>
                <div className='card-image'>
                    <figure className='image is-4by3'>
                        <img src='https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LeagueofLegends_RiotGames_S1_2560x1440-ee500721c06da3ec1e5535a88588c77f'/>
                    </figure>
                </div>
                <div className='card-content is-flex is-flex-direction-column is-justify-content-space-between' style={{ height:"180px" }}>
                    <h2 className='has-text-weight-bold is-size-4 has-text-centered'>League Of Legends</h2>
                    <div className='buttons is-flex is-justify-content-space-between is-align-items-center mt-5'>
                        <button className='button is-warning is-small'>
                            <i className='is-size-6 is-flex is-align-items-center'>
                                <AiFillEdit/>
                            </i>
                        </button>
                        <button className='button is-danger is-small'>
                            <i className='is-size-6 is-flex is-align-items-center'>
                                <AiFillDelete/>
                            </i>
                        </button>
                        <button className='button is-info is-small'>
                            <i className='is-size-6 is-flex is-align-items-center'>
                                <MdAddComment/>
                            </i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoGameCard