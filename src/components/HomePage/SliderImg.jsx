import React from 'react'
import './style/Slider.css'
const SliderImg = ({hotel}) => {
  return (
    <div className='slider'>
        <button className='sliders-btn'>&lt;</button>
        <div className='slider-interior'>
            <div className='slider-movible'>
                {
                    hotel?.images.map( imgInfo =>(
                            <div key={imgInfo.id} className='slider-img-container'>
                                <img className='slider-img'  src={imgInfo.url} alt="" />
                            </div>
                    ))
                }
            </div>

        </div>
        <button className='sliders-btn slider-btn-nex ' >&gt;</button>
      
    </div>
  )
}

export default SliderImg
