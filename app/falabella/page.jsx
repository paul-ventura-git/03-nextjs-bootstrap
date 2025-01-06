import React from 'react'
import R01Carousel from './home/R01Carousel'
import R02BannerTecnología from './home/R02BannerTecnología'
import R03GalleryTecnología from './home/R03GalleryTecnología'
import R04BannerTecnologia from './home/R04BannerTecnologia'

export default function HomeFalabella() {
  return (
    <div>
      <R01Carousel />
      <br />
      <h2 className='text-center'>Tecnología</h2>
      <h5 className='text-center'>Potencia y rendimiento para tu día a día</h5>
      <R02BannerTecnología />
      <br />
      <R03GalleryTecnología />
      <br />
      <R04BannerTecnologia />
      <br />
      <h2 className='text-center'>Belleza</h2>
      <h5 className='text-center'>Todo lo que necesitas para tu rutina</h5>
    </div>
  )
}
