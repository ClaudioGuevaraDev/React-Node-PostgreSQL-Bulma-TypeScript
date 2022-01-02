import { toast } from 'react-toastify'

import {
    FormEvent,
    useState,
    useEffect,
    useContext
} from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { FaUserAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { RiLockPasswordFill } from 'react-icons/ri'

import GlobalContext from '../../../context/GlobalContext'

import {
    IUserSignUp,
    initialStateUserSignUp
} from '../../../interfaces/authInterface'
import {
    signUp
} from '../../../services/authService'

const Register = () => {
    const [user, setUser] = useState<IUserSignUp>(initialStateUserSignUp)
    const [loading, setLoading] = useState<Boolean>(false)

    const navigate = useNavigate()

    const { state } = useContext(GlobalContext)

    const { logged } = state

    useEffect(() => {
        if (logged === true) navigate('/home')
    }, [])

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await signUp(user)
            if (res) {
                toast.success('Usuario registrado con éxito.', {
                    position: 'top-center',
                    autoClose: 5000
                })
                navigate('/')
            }
        } catch (error: any) {
            const { response } = error
            toast.error(response.data.message, {
                position: 'top-center',
                autoClose: 5000
            })
        }
        handleCancel()
        setLoading(false)
    }

    const handleCancel = () => {
        setUser(initialStateUserSignUp)
    }

    return (
        <div className="container p-5">
            <div className="columns is-flex is-justify-content-center">
                <div className="column is-4">
                    <div className="card">
                        <header className="card-header">
                            <p className="card-header-title is-centered is-size-4">
                                Registrarse
                            </p>
                        </header>
                        <form onSubmit={handleSubmit}>
                            <div className="card-content">
                                <div className="field">
                                    <label className="label">Username</label>
                                    <div className="control has-icons-left">
                                        <input type="text" className="input " placeholder="Username" required autoFocus value={user.username} onChange={({target}) => setUser({...user, username: target.value})}/>
                                        <span className="icon is-left">
                                            <i className='is-flex is-align-items-center'>
                                                <FaUserAlt/>
                                            </i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Email</label>
                                    <div className="control has-icons-left">
                                        <input type="email" className="input" placeholder="Email" required value={user.email} onChange={({target}) => setUser({...user, email: target.value})}/>
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
                                <Link to='/'>
                                    <p className='my-4 has-text-centered'>¿Ya tienes una cuenta registrada?</p>
                                </Link>
                                <div className="field is-grouped">
                                    <div className="control">
                                        <button type="submit" className={`button is-link ${loading ? 'is-loading' : ''}`}>Registrarse</button>
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

export default Register