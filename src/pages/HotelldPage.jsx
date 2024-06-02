import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import  {useEffect}  from 'react'
import './style/HotelIdPage.css'
import OtherHotels from '../components/HotelIdPage/OtherHotels'

const HotelldPage = () => {

const {id} = useParams()
const [hotel, getHotel] = useFetch ()

useEffect(()=>{
    const url=`https://hotels-api.academlo.tech/hotels/${id}`
    getHotel(url)
    
  },[id])


 return (

   <section className='info-section'>
    <h2>{hotel?.name}</h2>
    <div>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <span></span>
    </div>
    <div>
      <img src={hotel?.images[0].url} />
    </div>
    <div>
      {hotel?.city.name} / {hotel?.city.country}
    </div>
  <div>
    <address>
      {hotel?.address}
    </address>
  </div>
  <p>{hotel?.description}</p>
  <OtherHotels
  city={hotel?.city}
  />
  </section>

  );
}


export default HotelldPage
