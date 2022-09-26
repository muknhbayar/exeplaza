import React from 'react'

const Slider = () => {
  return (
    <div>
        <div id="carouselExampleCrossfade" className="carousel slide carousel-fade relative" data-bs-ride="carousel">
  {/* <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
  
    <button type="button" data-bs-target="#carouselExampleCrossfade" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCrossfade" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleCrossfade" data-bs-slide-to={2} aria-label="Slide 3" />
  </div> */}
  

  <div className="carousel-inner relative w-full overflow-hidden">
    <div className="carousel-item active float-left w-full">
      <img src="/assets/img/mv.jpg" className="block w-full" alt="mv" />
    </div>

    <div className="carousel-item float-left w-full">
      <img src="/assets/img/mv2.jpg" className="block w-full" alt="mv2" />
    </div>

    <div className="carousel-item float-left w-full">
      <img src="/assets/img/mv3.jpg" className="block w-full" alt="mv3" />
    </div>
 
  </div>

  
  <button className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0" type="button" data-bs-target="#carouselExampleCrossfade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0" type="button" data-bs-target="#carouselExampleCrossfade" data-bs-slide="next">
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Slider