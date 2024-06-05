import React from 'react'
import { useForm } from 'react-hook-form'
import userCrud from '../../hooks/userCrud'
import '../../pages/style/FormResevation.css'

const FormReservations = ({hotelId}) => {

const {handleSubmit, reset, register  } = useForm()
const [ ,,createBooking] = userCrud()

const submit = (data) =>{
    const url = `https://hotels-api.academlo.tech/bookings`
    const objData = {
        ...data,
        hotelId
    }
    createBooking(url,objData, true )
    reset({
        checkIn:'',
        chekOut:''
    })
    
}
  return (
   <form  className='reservation-form' onSubmit={handleSubmit(submit)} >
    <span><h1>Reservation</h1></span>
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