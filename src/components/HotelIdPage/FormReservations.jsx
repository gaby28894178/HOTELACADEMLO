import React from 'react'
import { useForm } from 'react-hook-form'
import userCrud from '../../hooks/userCrud'

const FormReservations = () => {

const {handleSubmit, reset, register  } = useForm()
const [ ,,createBooking] = userCrud()

const submit = (data) =>{
    const url = `https://hotels-api.academlo.tech/bookings`
    createBooking(url, data)
    reset({
        checkIn:'',
        chekOut:''
    })
    
}
  return (
   <form onSubmit={handleSubmit(submit)} >
    <h3> If You want book, please giv me your¡</h3>
    <label>
    <span></span>
    <input {...register('checkIn')} type="date" />
    </label>
    
    <label>
    <span></span>
    <input {...register('checkOut')}  type="date" /></label>
    <button>Resere a Roon</button>
   </form>
  )
}

export default FormReservations