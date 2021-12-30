import { ImUpload3 } from 'react-icons/im'

import Navbar from "../Navbar/Navbar"

const VideoGameFormUpdate = () => {
    return (
        <>
            <Navbar/>
            <div className="container p-5">
                <div className="columns is-flex is-justify-content-center">
                    <div className="column is-4">
                        <div className="card">
                            <header className="card-header">
                                <p className="card-header-title is-centered is-size-4">
                                    Actualizar un VideoJuego
                                </p>
                            </header>
                            <section className="card-content">
                                <div className="content">
                                    <div className="field">
                                        <label className="label">Nombre del VideoJuego</label>
                                        <div className="control">
                                            <input className="input" type="text" placeholder="Nombre"/>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Imagen del VideoJuego</label>
                                        <div className="control">
                                            <div className="file">
                                                <label className="file-label">
                                                    <input className="file-input" type="file" name="resume"/>
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
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='field is-grouped mt-5'>
                                        <div className='control'>
                                            <button className='button is-link'>
                                                Actualizar
                                            </button>
                                        </div>
                                        <div className='control'>
                                            <button className='button is-link is-light'>
                                                Cancelar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoGameFormUpdate