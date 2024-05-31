import React from 'react';
import '../HomeCard/HomeCard.css'
import { useNavigate } from 'react-router-dom';

const HotelCard = ({ hotel }) => {
   const navigate = useNavigate()
const navigateHotelid=()=>{
navigate(`/hotel/${hotel.id}`)

}



  return (
    <article>
      <header>
        <img src={hotel?.images?.[0]?.url} alt="Hotel" />
      </header>
      <section>
        <h3>{hotel?.name}</h3>
        <div className='div1'>{hotel?.rating}</div>
        <div className='div2'>{hotel?.city?.name}, {hotel?.city?.country}</div>
        <div className='div3'>{hotel?.price}</div>
      </section>
      <footer>
        <button onClick={navigateHotelid} >See more...</button>
      </footer>
    </article>
  );
};

export default HotelCard;
