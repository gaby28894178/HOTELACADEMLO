import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import HotelCard from '../HomePage/HotelCard'
import  '../HomePage/style/HotrosHoteles-module.css'



const OtherHotels = ({ city, id }) => {

 const [hotelsCity, getHotelsCity] =   useFetch()

 useEffect(()=>{
    if(city){
    const url = `https://hotels-api.academlo.tech/hotels?cityId=${city?.id}`
    getHotelsCity(url)
    }

 },[city?.id])


  return (
    <section className='otrosHoteles' >
        <hr /><br />
        <h3>Hther Hotels in <span>{city?.country}</span></h3>
        <div className='conten-card'>
            {
                hotelsCity?.filter(hotel=>hotel.id!==Number(id) ).map(hotel=>(
                    <HotelCard
                    key={hotel.id}
                    hotel={hotel}
                    
                    />

                ))
            }

        </div>
    </section>
  )
}

export default OtherHotels
