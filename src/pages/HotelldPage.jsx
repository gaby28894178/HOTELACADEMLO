import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import  {useEffect}  from 'react'

const HotelldPage = () => {

const {id} = useParams()
const [hotel, getHotel] = useFetch ()

useEffect(()=>{
    const url=`https://hotels-api.academlo.tech/hotels/${id}`
    getHotel(url)
    
  },[id])


 return (

   <section>
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
      {hotel?.city.name},{hotel?.city.country}
    </div>
  <div>
    <address>
      {hotel?.address}
    </address>
  </div>
  </section>

  );
}


export default HotelldPage
