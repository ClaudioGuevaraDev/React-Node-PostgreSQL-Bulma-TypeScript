import { Link } from 'react-router-dom'

import { IoMdMail } from 'react-icons/io'
import { RiLockPasswordFill } from 'react-icons/ri'

const Login = () => {
    return (
        <div className="container p-5">
            <div className="columns is-flex is-justify-content-center">
                <div className="column is-4">
                    <div className="card">
                        <header className="card-header">
                            <p className="card-header-title is-centered is-size-4">
                                Iniciar Sesión
                            </p>
                        </header>
                        <div className="card-content">
                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control has-icons-left">
                                    <input type="email" className="input" placeholder="Email"/>
                                    <span className='icon is-left'>
                                        <i className='is-flex is-align-items-center'>
                                            <IoMdMail/>
                                        </i>
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Contraseña</label>
                                <div className="control has-icons-left">
                                    <input type="password" className="input" placeholder="Contraseña"/>
                                    <span className='icon is-left'>
                                        <i className='is-flex is-align-items-center'>
                                            <RiLockPasswordFill/>
                                        </i>
                                    </span>
                                </div>
                            </div>
                            <Link to='/register'>
                                <p className='my-4 has-text-centered'>¿No tienes una cuenta registrada?</p>
                            </Link>
                            <div className="field is-grouped">
                                <div className="control">
                                    <button type="submit" className="button is-link">Iniciar Sesión</button>
                                </div>
                                <div className="control">
                                    <button className="button is-link is-light">Cancelar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login