import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import  {useEffect}  from 'react'
import './style/HotelIdPage.css'
import OtherHotels from '../components/HotelIdPage/OtherHotels'
import MapHotel from '../components/HotelIdPage/MapHotel'
import FormReservations from '../components/HotelIdPage/FormReservations'
import SliderImg from '../components/HomePage/SliderImg'

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
    <div    className='con'>
       <div   className='con1'>
       <SliderImg  className="sl"
        hotel={hotel}
        />
        </div>
      <div>

      {/* {
        hotel &&(
          
          <MapHotel
          lat={hotel?.lat}
          lon={hotel?.lon}
          />
          
          
        )
       
      } */}
      </div>
    </div>
    <div className='con2'>
      {hotel?.city.name} / {hotel?.city.country}
    </div>
  <div >
    <address >
      {hotel?.address}
    </address>
  </div>
  <p className='p'>{hotel?.description}</p>
  <section>
    <FormReservations
    hotelId={id}
    />
  </section>
  <OtherHotels
  city={hotel?.city}
  id={id}
  />
  </article>

  );
}


export default HotelldPage
