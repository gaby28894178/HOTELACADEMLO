import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHotelsThink} from '../store/slices/products.slice';
import HotelCard from '../components/HomePage/HotelCard';
import './style/HomePage.css' 
import FiltradoPage from '../components/shared/FiltradoPage';
// import FiltradoPage from './FiltradoPage';
// import HotelCard from './components/HomePage/HotelCard'

const HomePage = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const url = 'https://hotels-api.academlo.tech/hotels';
    dispatch(getHotelsThink(url));
  }, []);


  return (
    <div className='hoteles'>
    

      {
      products?.map(hotel => (
        <HotelCard
          key={hotel.id}
          hotel={hotel}
        />
      ))}
    </div>
  );
};

export default HomePage;