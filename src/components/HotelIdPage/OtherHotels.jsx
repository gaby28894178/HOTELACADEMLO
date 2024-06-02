import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import HotelCard from '../HomePage/HotelCard'



const OtherHotels = ({ city, id }) => {

 const [hotelsCity, getHotelsCity] =   useFetch()

 useEffect(()=>{
    if(city){
    const url = `https://hotels-api.academlo.tech/hotels?cityId=${city?.id}`
    getHotelsCity(url)
    }

 },[city?.id])


  return (
    <section>
        <h3>Hther Hotels in <span>{city?.country}</span></h3>
        <div>
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
