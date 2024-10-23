import React from 'react'
import supporBanner from '../../assets/supportBanner.jpg'
import imgGrid1 from '../../assets/imgGrid1.png'
import imgGrid2 from '../../assets/imgGrid2.png'
import imgGrid3 from '../../assets/imgGrid3.png'
import imgGrid4 from '../../assets/imgGrid4.png'
import imgGrid5 from '../../assets/imgGrid5.png'
import imgGrid6 from '../../assets/imgGrid6.png'
import imgGrid7 from '../../assets/imgGrid7.png'
import './support.css'
const Support = () => {
  return (
    <>
  <main>
    <section>
      <img src={supporBanner} className='img-fluid w-100 m-0' alt="" />
    </section>
    <section>
      <div className='mt-2 mt-md-5'>
       <p className='text-center fs-1 fw-bold'>Apple Support</p>
       <div className="row row-cols-1 w-100 row-cols-sm-2 row-cols-md-4">
           <div className='text-center col'>
           <img src={imgGrid1} alt="" />
           <p className='mt-3'>iPhone</p>
           <p></p>
           </div>
           <div className='text-center col'>
           <img src={imgGrid2} alt="" />
           <p className='mt-3'>Mac</p>
           <p></p>
           </div>
           <div className='text-center col'>
           <img src={imgGrid3} className='imgGrid3 mt-4' alt="" />
           <p className='mt-3'>iPad</p>
           <p></p>
           </div>
           <div className='text-center col'>
           <img src={imgGrid4} alt="" />
           <p className='mt-3'>Watch</p>
           <p></p>
           </div>
           <div className='text-center col'>
           <img src={imgGrid5} alt="" />
           <p className='mt-3'>AirPods</p>
           <p></p>
           </div>
           <div className='text-center col'>
           <img src={imgGrid6} alt="" />
           <p className='mt-3'>Music</p>
           <p></p>
           </div>
           <div className='text-center col'>
           <img src={imgGrid7} alt="" />
           <p className='mt-3'>Tv</p>
           <p></p>
           </div>
       </div>
      </div>
    </section>
  </main>
    </>
  )
}

export default Support
