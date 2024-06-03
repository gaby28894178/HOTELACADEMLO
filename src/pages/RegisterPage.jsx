import React from 'react'
import { useForm } from 'react-hook-form'
import userAuth from '../hooks/userAuth'
import './style/HotelIdPage.css'
import './style/Register.css'

const RegisterPage = () => {


const {register, handleSubmit, reset} = useForm()

const { createUser } = userAuth()


// createUser()
const submit = data =>{
    createUser (data)
    reset({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        gender:'male',
        
    })

}

  return (
  <article className='register-article'>
    <form  className='register-form'  onSubmit={handleSubmit(submit)}>
    <i className='bx bxs-user-circle register-avatar'></i>
        <h2>Register</h2>
        <div>
            <label><span>first Name</span>
                <input {...register('firstName')} type="text" />
            </label>

            
            <label>
                <span>Last Name</span>
                <input  {...register('lastName')} type="text" />
            </label>
            
            
            <label>
                <span>Emeil</span>
                <input  {...register('email')} type="text" /></label>
            
            
            <label><span>Password</span>
            <input  {...register('password')} type="text" />
            </label>
                        
            <label  {...register('gender')} >
                <span>Gender</span>
                <select >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                </label>
        </div>
        <button>Submit <span><i class='bx bxs-user-plus addusers'></i></span></button>
    </form>
  </article>
  )
}

export default RegisterPage
