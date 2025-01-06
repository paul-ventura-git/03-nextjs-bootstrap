import React from 'react'
import R01Carousel from './home/R01Carousel'
import R02BannerTecnología from './home/R02BannerTecnología'
import R03GalleryTecnología from './home/R03GalleryTecnología'

export default function HomeFalabella() {
  return (
    <div>
      <R01Carousel />
      <br />
      <h2 className='text-center'>Tecnología</h2>
      <h5 className='text-center'>Potencia y rendimiento para tu día a día</h5>
      <R02BannerTecnología />
      <R03GalleryTecnología />
    </div>
  )
}
