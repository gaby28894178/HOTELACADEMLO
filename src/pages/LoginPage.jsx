import React from 'react'
import { useForm } from 'react-hook-form'
import userAuth from '../hooks/userAuth'
import estilo from './style/Login.module.css'


const LoginPage = () => {

    const {handleSubmit,reset,register } =  useForm()
    const {loginUser} =userAuth()
    
    const submit=(data)=>{
        loginUser(data)
        reset({
            emeil:'',
            password:'',

        })

    }

  return (
    <div>
      <form className={estilo.for} onSubmit={handleSubmit(submit)}>
      <i className='bx bxs-user-circle login-avatar'></i>
       <h2 className='estilo.title' >Titulo Registro</h2>
        <div>
            <label>
            <span> Email</span>
                <input {...register('email')} type="text" />            
            </label>
            <label>
            <span>Password</span>
                <input {...register('password')} type="Password" />            
            </label>
        </div>
        <button className='login-btn'>Submint</button>
      </form>
    </div>
  )
}

export default LoginPage
