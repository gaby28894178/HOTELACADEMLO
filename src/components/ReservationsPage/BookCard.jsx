import React from 'react';
import './style/BookCard.css'

const BookCard = ({ book, deleteReservation }) => {
  const inicialDate = new Date(book.checkIn);
  const finalDate = new Date(book.checkOut);

  // Cálculo de los días de reserva
  const reservationDays = Math.ceil((finalDate - inicialDate) / (1000 * 60 * 60 * 24));

const handleSubmit=()=>{
  const url = `https://hotels-api.academlo.tech/bookings/${book.id}`
  deleteReservation (url,book.id, true)
}

 
  return (
    <section className='section-book'>
      <header className='header-book'>
        <img className='img-book' src={book.hotel.images[0].url} alt={`${book.hotel.name}`} />
      </header>
      <h3>{book.hotel.name}</h3>
      <div>{book.hotel.city.name}, {book.hotel.city.country}</div>
      <p>Rate and comment on this visit ... !CLICK HERE¡</p>
      <ul>
        <li><span>Reservations Days: </span> {reservationDays}</li>
        <li><span>Subtotal Price: </span> {book.subtotalPrice}</li>
      </ul>
      <button onClick={handleSubmit}><i className='bx bx-trash'></i> </button>
    </section>
  );
}

export default BookCard;
