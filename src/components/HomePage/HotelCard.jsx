import React from 'react';
import '../HomeCard/HomeCard.css'
import { useNavigate } from 'react-router-dom';

const HotelCard = ({ hotel }) => {
   const navigate = useNavigate()
const navigateHotelid=()=>{
navigate(`/hotel/${hotel.id}`)

}



  return (
    <article className='card-article'>
      <header className='card-header' >
        <img  className='card-img' src={hotel?.images?.[0]?.url} alt="Hotel" />
      </header>
      <section className='card-section'>
        <h3 className='card-name' >{hotel?.name}</h3>
        <div className='div1'><span>EL Puntaje es.. </span> {hotel?.rating} </div>
        <div className='div2'>{hotel?.city?.name}, {hotel?.city?.country}</div>
        <div className='div3'><span>Precio:</span> <span>Usd  </span>$ {hotel?.price} </div>
      </section>
      <footer className='footer'>
        <button className='button' onClick={navigateHotelid} >See more...</button>
      </footer>
    </article>
  );
};

export default HotelCard;
