import { useEffect } from "react"
import userCrud from "../hooks/userCrud"
import BookCard from "../components/ReservationsPage/BookCard"
import './style/Reservation.css'


const ReservationPage = () => {
  
    const [reservations, getReservations,,deleteReservation] =   userCrud()
    
    useEffect(()=>{
        const url =`https://hotels-api.academlo.tech/bookings`
        getReservations(url,true)
    },[])

  return (
        <article className="article-reservation">
            <h2>Actice reservations</h2>
            <div className="card">
                {
                    reservations?.map(book =>(
                        <BookCard
                            key={book.id}
                            book={book}
                            deleteReservation={deleteReservation}
                        />
                    ))
                }
            </div>
        </article>
  )
}

export default ReservationPage
