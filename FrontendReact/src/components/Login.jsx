import React,{useContext, useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from './Authprovider'
const Login = () => {
    const [username,Setuser]= useState('')
    const [password,Setpassword]= useState('')
    const [errors,setErrors] = useState(false)
    const [loading,setLoading] = useState(false)
    const {isLoggedIn,setLoggedIn}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleSubmit= async(e)=>{
        e.preventDefault()
        setLoading(true)
        const userData={username:username,password:password}
        try{
            const response=await axios.post('http://127.0.0.1:8000/api/token/',userData)
            setErrors(false)
            localStorage.setItem('accessToken',response.data.access)
            localStorage.setItem('refreshToken',response.data.refresh)
            console.log('Login Successful')
            setLoggedIn(true)
            navigate('/')
        }catch(error){
            setErrors(true)
        }finally{
            setLoading(false)
        }
    }
  return (
    <>
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-md-6 bg-light-dark p-5 rounded'>
                <h3 className='text-center'>Login to your Account</h3>
                <form onSubmit={handleSubmit}>
                    { errors && <p className='alert alert-danger'>Invalid Credentials!</p>}
                    <div className="m-3">
                        <input type="text" className='form-control' placeholder='Username' onChange={(e)=>{Setuser(e.target.value)}} value={username} />
                    </div>
                    <div className="m-3 mb-5">
                        <input type="password" className='form-control' placeholder='Password' onChange={(e)=>{Setpassword(e.target.value)}} value={password} />
                    </div>
                    
                    { loading?(<button className='btn btn-info d-block mx-auto' type='submit' >
                        <div className="d-flex">
                        <div className="spinner-border ms-auto" aria-hidden="true"></div>
                        <strong role="status">Logging in...</strong>
                        </div>
                    </button> ):(<button className='btn btn-outline-info d-block mx-auto' type='submit' >Login</button> ) }               
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login