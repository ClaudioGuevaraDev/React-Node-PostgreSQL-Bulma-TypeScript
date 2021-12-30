import { useState } from 'react'

import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdAddComment } from 'react-icons/md'

const VideoGameCard = () => {
    const [classModalDelete, setClassModalDelete] = useState<string>('modal')
    const [classModalComment, setClassModalComment] = useState<string>('modal')

    const handleOpenModalDelete = (): void => setClassModalDelete('modal is-active')
    const handleCloseModalDelete = (): void => setClassModalDelete('modal is-clipped')

    const handleOpenModalComment = (): void => setClassModalComment('modal is-active')
    const handleCloseModalComment = (): void => setClassModalComment('modal is-clipped')

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
                        <button className='button is-danger is-small' onClick={handleOpenModalDelete}>
                            <i className='is-size-6 is-flex is-align-items-center'>
                                <AiFillDelete/>
                            </i>
                        </button>
                        <button className='button is-info is-small' onClick={handleOpenModalComment}>
                            <i className='is-size-6 is-flex is-align-items-center'>
                                <MdAddComment/>
                            </i>
                        </button>
                    </div>
                </div>
            </div>
            <div className={classModalDelete}>
                <div className='modal-background'></div>
                <div className='modal-card'>
                    <header className='modal-card-head'>
                        <p className='modal-card-title has-text-weight-bold'>Eliminar VideoJuego</p>
                        <button className='delete' aria-label='close' onClick={handleCloseModalDelete}></button>
                    </header>
                    <section className='modal-card-body'>
                        <p className='has-text-weight-semibold has-text-dark'>¿Estás seguro de eliminar el videojuego 'League of Legends'?</p>
                    </section>
                    <footer className='modal-card-foot'>
                        <button className='button is-danger'>Eliminar</button>
                        <button className='button is-danger is-light' onClick={handleCloseModalDelete}>Cancelar</button>
                    </footer>
                </div>
            </div>

            <div className={classModalComment}>
                <div className='modal-background'></div>
                <div className='modal-card'>
                    <header className='modal-card-head'>
                        <p className='modal-card-title has-text-weight-bold'>Comentar VideoJuego</p>
                        <button className='delete' aria-label='close' onClick={handleCloseModalComment}></button>
                    </header>
                    <section className='modal-card-body'>
                        <div className='field'>
                            <label className='label'>Comentario</label>
                            <div className='control'>
                                <textarea className='textarea' placeholder='¿Que opinión tienes del videojuego League of Legends?'></textarea>
                            </div>
                        </div>
                    </section>
                    <footer className='modal-card-foot'>
                        <button className='button is-link'>Comentar</button>
                        <button className='button is-link is-light' onClick={handleCloseModalComment}>Cancelar</button>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default VideoGameCard