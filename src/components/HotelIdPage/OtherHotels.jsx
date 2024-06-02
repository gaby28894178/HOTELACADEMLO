import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useDispatch } from 'react-redux'

const OtherHotels = ({ city }) => {

 const [hotelsCity, getHotelsCity] =   useFetch()

 useEffect(()=>{
    if(city){
    const url = `https://hotels-api.academlo.tech/hotels?cityId=${city?.id}`
    getHotelsCity(url)
    }

 },[city?.id])
console.log(hotelsCity)

  return (
    <section>
        <h3>Hther Hotels in <span>{city?.country}</span></h3>
        <div>

        </div>
    </section>
  )
}

export default OtherHotels
