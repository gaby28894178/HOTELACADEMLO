import { Map, Marker } from "pigeon-maps"

const MapHotel = ({lat, lon}) => {
  return (
   <Map center={[+lat, +lon]} width={'100%'} height={300} > 
   
    <Marker 
        width={30}
        anchor={[Number(lat),Number(lon)]}
        color="red"
        
    />
  </Map>
  )
}
export default MapHotel
