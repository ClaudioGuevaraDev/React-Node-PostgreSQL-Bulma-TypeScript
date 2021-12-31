import jwt_decode from 'jwt-decode'

import { 
    useState,
    useEffect,
    FormEvent,
    useContext
} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { IoMdMail } from 'react-icons/io'
import { RiLockPasswordFill } from 'react-icons/ri'

import GlobalContext from '../../../context/GlobalContext'

import {
    LOGGED_USER
} from '../../../context/AppConstants'
import {
    IDecodedToken
} from '../../../interfaces/decodedTokenInterface'

import {
    signIn
} from '../../../services/authService'
import { 
    IUserSignIn,
    initialStateUserSignIn
} from '../../../interfaces/authInterface'

const Login = () => {
    const [user, setUser] = useState<IUserSignIn>(initialStateUserSignIn)

    const navigate = useNavigate()

    const { state, dispatch } = useContext(GlobalContext)

    const { logged } = state

    // useEffect(() => {
    //     if (logged === true) navigate('/home')
    // }, [])

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            await signIn(user)
            const tokenJSON = window.localStorage.getItem('token')
            const tokenParse = tokenJSON ? JSON.parse(tokenJSON) : ''
         
            const decodedToken: IDecodedToken = jwt_decode(tokenParse)

            dispatch({
                type: LOGGED_USER,
                payload: {
                    logged: true,
                    token: tokenParse,
                    username: decodedToken.username,
                    role: decodedToken.role
                }
            })
            navigate('/home')
        } catch (error: any) {
            const { data } = error.response
            toast.error(data.message, {
                position: 'top-center',
                autoClose: 5000
            })
        }
        handleCancel()
    }

    const handleCancel = () => {
        setUser(initialStateUserSignIn)
    }

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
                        <form onSubmit={handleSubmit}>
                            <div className="card-content">
                                <div className="field">
                                    <label className="label">Email</label>
                                    <div className="control has-icons-left">
                                        <input type="email" className="input" placeholder="Email" required autoFocus value={user.email} onChange={({target}) => setUser({...user, email: target.value})}/>
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
                                        <input type="password" className="input" placeholder="Contraseña" required value={user.password} onChange={({target}) => setUser({...user, password: target.value})}/>
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
                                        <button type='button' className="button is-link is-light" onClick={handleCancel}>Cancelar</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login