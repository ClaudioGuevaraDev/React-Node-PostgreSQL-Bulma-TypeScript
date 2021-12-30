import { useState } from 'react'

import { AiFillEdit, AiFillDelete } from 'react-icons/ai'

const ReviewCard = () => {
    const [classModalDelete, setClassModalDelete] = useState<string>('modal')
    const [classModalEdit, setClassModalEdit] = useState<string>('modal')

    const handleOpenModalDelete = (): void => setClassModalDelete('modal is-active')
    const handleCloseModalDelete = (): void => setClassModalDelete('modal is-clipped')

    const handleOpenModalEdit = (): void => setClassModalEdit('modal is-active')
    const handleCloseModalEdit = (): void => setClassModalEdit('modal is-clipped')

    return (
        <div className="column is-4">
            <div className="card">
                <div className="card-header p-1 is-flex is-flex-direction-column has-text-centered">
                    <p className="card-header-title is-centered is-size-5">
                        League of Legends 
                    </p>
                    <small>30-12-2021</small>
                </div>
                <div className='card-content is-flex is-flex-direction-column is-justify-content-space-between' style={{ height:"280px" }}>
                    <p className='has-text-centered is-italic'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum  is simply dummy text of the printing and typesetting industry. Lorem Ipsum  is simply dummy text of the printing and typesetting industry. Lorem Ipsum  is simply dummy text of the printing and typesetting.  
                    </p>
                    <div className='buttons is-flex is-justify-content-space-around is-align-items-center mt-5'>
                        <button className='button is-warning is-small' onClick={handleOpenModalEdit}>
                            <i className='is-size-6 is-flex is-align-items-center'>
                                <AiFillEdit/>
                            </i>
                        </button>
                        <button className='button is-danger is-small' onClick={handleOpenModalDelete}>
                            <i className='is-size-6 is-flex is-align-items-center'>
                                <AiFillDelete/>
                            </i>
                        </button>
                    </div>
                </div>
            </div>

            <div className={classModalDelete}>
                <div className='modal-background'></div>
                <div className='modal-card'>
                    <header className='modal-card-head'>
                        <p className='modal-card-title has-text-weight-bold'>Eliminar Reseña</p>
                        <button className='delete' aria-label='close' onClick={handleCloseModalDelete}></button>
                    </header>
                    <section className='modal-card-body'>
                        <p className='has-text-weight-semibold has-text-dark'>¿Estás seguro de eliminar la reseña?</p>
                    </section>
                    <footer className='modal-card-foot'>
                        <button className='button is-danger'>Eliminar</button>
                        <button className='button is-danger is-light' onClick={handleCloseModalDelete}>Cancelar</button>
                    </footer>
                </div>
            </div>

            <div className={classModalEdit}>
                <div className='modal-background'></div>
                <div className='modal-card'>
                    <header className='modal-card-head'>
                        <p className='modal-card-title has-text-weight-bold'>Editar Comentario</p>
                        <button className='delete' aria-label='close' onClick={handleCloseModalEdit}></button>
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
                        <button className='button is-link'>Editar</button>
                        <button className='button is-link is-light' onClick={handleCloseModalEdit}>Cancelar</button>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard