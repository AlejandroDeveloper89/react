import React from 'react';
import '../assets/style/Carousel.scss';

const Carousel=({children})=>(
  <section className="carousel">
    <h3 className="carousel__title">MI LISTA</h3>
    <div className="carousel__container">
{children}
    </div>
</section>
);
export default Carousel;
