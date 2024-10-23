import React from 'react'
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'
import diwaliImg from '../../assets/diwaliPromo.jpg'
import applewatch from '../../assets/appleWatch.jpg'
import airpods from '../../assets/airpods.jpg'
import macbook from '../../assets/macbook.jpg'
import applewatchultra from '../../assets/applewatchultra.jpg'
import iPhone from '../../assets/iPhone.jpg'
import watchSeries from '../../assets/watchSeries.png'
import watchUltra from '../../assets/watchUltra.png'
import tradein from '../../assets/tradein.png'
import './Home.css'
const Home = () => {
  return (
    <>
     <main>
      <section>
        <div className="mainSec position-relative">
           <img src={banner1} alt="banner" className='banner w-100' />
            <div className="topPart mt-4 position-absolute top-0 start-50 translate-middle-x">
              <p className='p1 fs-1 text-center'>iPhone 16 Pro</p>
              <p className='fs-3 text-light text-center'>Built for Apple Intelligence.</p>
            </div>
            <div className="bottomPart d-flex flex-column gap-3 mb-3 position-absolute bottom-0 start-50 translate-middle-x">
                 <div className="buttons d-flex justify-content-center gap-4">
                  <button className='btn rounded-pill text-light btn-primary btn1'>Learn More</button>
                  <button className='btn2'>Buy</button>
                 </div>
                 <p className='text-secondary text-center'>Apple intelligence starting in US English later this year<sup>1</sup></p>
            </div>
           </div>
      </section>
      <section>
        <div className="mainSec position-relative mt-2">
           <img src={banner2} alt="banner" className='banner w-100' />
            <div className="topPart mt-4 position-absolute top-0 start-50 translate-middle-x">
              <p className='p1 fs-1 text-center'>iPhone 16</p>
              <p className='fs-3 text-light text-center'>Built for Apple Intelligence.</p>
            </div>
            <div className="bottomPart d-flex flex-column gap-3 mb-3 position-absolute bottom-0 start-50 translate-middle-x">
                 <div className="buttons d-flex justify-content-center gap-4">
                  <button className='btn rounded-pill text-light btn-primary btn1'>Learn More</button>
                  <button className='btn2'>Buy</button>
                 </div>
                 <p className='text-secondary text-center'>Apple intelligence starting in US English later this year<sup>1</sup></p>
            </div>
           </div>
      </section>
      <section>
        <div className="mainSec position-relative mt-2">
           <img src={banner3} alt="banner" className='banner w-100' />
            <div className="topPart mt-4 position-absolute top-0 start-50 translate-middle-x">
              <p className='fs-1 m-0 fw-bold text-center'>iPad Mini</p>
              <p className=' fs-3 text-center'>Built for Apple Intelligence.</p>
              <div className="buttons d-flex justify-content-center gap-4">
                  <button className='btn rounded-pill text-light btn-primary btn1'>Learn More</button>
                  <button className='btn2'>Buy</button>
                 </div>
            </div>
            <div className="bottomPart d-flex flex-column gap-3 mb-3 position-absolute bottom-0 start-50 translate-middle-x">
                 <p className='text-secondary text-center'>Apple intelligence starting in <br /> US English later this year<sup>1</sup></p>
            </div>
           </div>
      </section>
      <section>
        <div className="row row-cols-1 row-cols-md-2 ms-2 me-2 mt-2">
           <div className="col position-relative">
            <img src={diwaliImg} className='w-100 imgProfiles' alt="" />
            <div className="position-absolute top-0 mt-5 start-50 translate-middle-x lh-1 text-center">
               <p className="fs-1 fw-bold text-white">Gifts to wrap up the festive season.</p>
               <p className='fs-5 text-light'>Enjoy upto &#x20B9;10000.00 instant cashback with eligible cards.*Plus upto 12 months of no cost EMI.</p>
               <button className='btn border border-light rounded-pill text-light shop-btn' >Shop</button>
            </div>
           </div>
           <div className="col position-relative">
            <img src={applewatch} className='w-100 imgProfiles' alt="" />
            <div className="position-absolute top-0 start-50 translate-middle-x text-center mt-5">
               <img src={watchSeries} alt="" />
               <p className='fs-5 mt-2'>Thinstant classic.</p>
               <div className='d-flex gap-3 justify-content-center'>
                <button className='btn rounded-pill text-light btn-primary btn1'>Learn More</button>
                <button className='btn2'>Buy</button>
               </div>
            </div>
           </div>
           <div className="col position-relative">
            <img src={airpods} className='w-100 imgProfiles ' alt="" />
            <div className="position-absolute bottom-0 start-50 translate-middle-x text-center mb-5">
               <p className="fs-1 fw-bold text-white lh-sm m-0">AirPods 4</p>
               <p className='fs-5 text-light m-0'>Iconic.Now supersonic.</p>
               <p className='fs-5 text-light lh-1'>Available with Active Noise Cancellation.<sup>2</sup></p>
               <div className='d-flex gap-3 justify-content-center'>
                <button className='btn rounded-pill text-light btn-primary btn1'>Learn More</button>
                <button className='btn2'>Buy</button>
               </div>
            </div>
           </div>
           <div className="col position-relative">
            <img src={macbook} className='w-100 imgProfiles ' alt="" />
            <div className="position-absolute top-0 start-50 translate-middle-x text-center mt-5">
               <p className="fs-1 fw-bold  lh-sm m-0">MacBook Air</p>
               <p className='fs-5'>Supercharged by M3.</p>
               <div className='d-flex gap-3 justify-content-center'>
                <button className='btn rounded-pill text-light btn-primary btn1'>Learn More</button>
                <button className='btn2'>Buy</button>
               </div>
            </div>
           </div>
           <div className="col position-relative">
            <img src={applewatchultra} className='w-100 imgProfiles' alt="" />
            <div className="position-absolute top-0 start-50 translate-middle-x text-center mt-5">
               <img src={watchUltra} alt="" />
               <p className='fs-5 text-light'>New finish. Never quit.</p>
               <div className='d-flex gap-3 justify-content-center'>
                <button className='btn rounded-pill text-light btn-primary btn1'>Learn More</button>
                <button className='btn2'>Buy</button>
               </div>
            </div>
           </div>
           <div className="col position-relative">
            <img src={iPhone} className='w-100 imgProfiles' alt="" />
            <div className="position-absolute top-0 start-50 translate-middle-x text-center mt-5">
               <img src={tradein} alt="" />
               <p className='fs-5 mt-2'>Upgrade and save.It's that easy.</p>
               <div className='d-flex gap-3 justify-content-center'>
                <button className='btn rounded-pill text-light btn-primary btn1'>Get your estimate</button>
               </div>
            </div>
           </div>
        </div>
      </section>
      </main> 
    </>
  )
}

export default Home
