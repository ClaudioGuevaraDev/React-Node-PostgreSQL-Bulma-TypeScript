const Navbar = () => {
    
    const handleNavbar = () => {
        document.getElementById('nav-menu')?.classList.toggle('is-active')
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
                                <a className='button is-danger'>
                                    <strong>Cerrar Sesión</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar