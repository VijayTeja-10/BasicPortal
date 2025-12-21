import React, { useState } from 'react'
import axios from 'axios'
const Register = () => {
    const [username,Setuser]= useState('')
    const [email,Setemail]= useState('')
    const [password,Setpassword]= useState('')
    const [errors,setErrors] = useState({})
    const [success,setSuccess]= useState(false)
    const [loading,setLoading] = useState(false)
    const handleSubmit= async(e)=>{
        e.preventDefault()
        setLoading(true)
        const userData={username:username,email:email,password:password}
        try{
            const response=await axios.post('http://127.0.0.1:8000/api/register',userData)
            setErrors({})
            setSuccess(true)
            console.log('Response',response.data)
            console.log('Registration Successful')
        }catch(error){
            setErrors(error.response.data)
            console.log('Error : ',error.response.data)
        }finally{
            setLoading(false)
        }
    }

  return (
    <>
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-md-6 bg-light-dark p-5 rounded'>
                <h3 className='text-center'>Create an Account</h3>
                { success && <div className='alert alert-success'>Registration Successful!</div> }
                <form onSubmit={handleSubmit}>
                    <div className="m-3">
                        <input type="text" className='form-control' placeholder='Username' onChange={(e)=>{Setuser(e.target.value)}} value={username} />
                        <small>{errors.username && <p className='text-danger'>{errors.username}</p>}</small>
                    </div>
                    <div className="m-3">
                        <input type="email" className='form-control' placeholder='Email' onChange={(e)=>{Setemail(e.target.value)}} value={email} />
                        <small>{errors.email && <p className='text-danger'>{errors.email}</p>}</small>
                    </div>
                    <div className="m-3 mb-5">
                        <input type="password" className='form-control' placeholder='Password' onChange={(e)=>{Setpassword(e.target.value)}} value={password} />
                        <small>{errors.password && <p className='text-danger'>{errors.password}</p>}</small>
                    </div>
                    
                    { loading?(<button className='btn btn-info d-block mx-auto' type='submit' >
                        <div class="d-flex">
                        <div class="spinner-border ms-auto" aria-hidden="true"></div>
                        <strong role="status">PleaseWait...</strong>
                        </div>
                    </button> ):(<button className='btn btn-info d-block mx-auto' type='submit' >Register</button> ) }               
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Register