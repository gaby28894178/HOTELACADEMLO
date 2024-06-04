import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import  {useEffect}  from 'react'
import './style/HotelIdPage.css'
import OtherHotels from '../components/HotelIdPage/OtherHotels'
import MapHotel from '../components/HotelIdPage/MapHotel'
import FormReservations from '../components/HotelIdPage/FormReservations'

const HotelldPage = () => {

const {id} = useParams()
const [hotel, getHotel] = useFetch ()

useEffect(()=>{
    const url=`https://hotels-api.academlo.tech/hotels/${id}`
    getHotel(url)
    
  },[id])


 return (

   <article className='info-section'>
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
      {
        hotel &&(

          <MapHotel
          lat={hotel?.lat}
          lon={hotel?.lon}
          />


        )



      }
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
  <section>
    <FormReservations/>
  </section>
  <OtherHotels
  city={hotel?.city}
  id={id}
  />
  </article>

  );
}


export default HotelldPage
