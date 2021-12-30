import { useState } from 'react'

const Navbar = () => {
    const [classModal, setClassModal] = useState('modal')
    
    const handleNavbar = () => {
        document.getElementById('nav-menu')?.classList.toggle('is-active')
    }

    const handleOpenModal = () => {
        setClassModal('modal is-active')
    }

    const handleCloseModal = () => {
        setClassModal('modal is-clipped')
    }

    return (
        <nav className="navbar p-2 is-primary" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <h2 className="navbar-item has-text-weight-bold is-size-5">Claudio Guevara (User)</h2>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" onClick={handleNavbar}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="nav-menu" className="navbar-menu">
                    <div className="navbar-end">
                        <a className="navbar-item has-text-weight-semibold">Listado de juegos</a>
                        <a className='navbar-item has-text-weight-semibold'>Mis reseñas</a>
                        <div className='navbar-item'>
                            <div className='buttons'>
                                <a className='button is-danger' onClick={handleOpenModal}>
                                    <strong>Cerrar Sesión</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal */}
                <div className={classModal}>
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title has-text-weight-bold">Cerrar Sesión</p>
                            <button className="delete" aria-label="close" onClick={handleCloseModal}></button>
                        </header>
                        <section className='modal-card-body'>
                            <p className='has-text-dark has-text-weight-semibold'>¿Estás seguro de cerrar sesión?</p>
                        </section>
                        <footer className='modal-card-foot'>
                            <button className='button is-link'>Cerrar Sesión</button>
                            <button className='button' onClick={handleCloseModal}>Cancelar</button>
                        </footer>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar