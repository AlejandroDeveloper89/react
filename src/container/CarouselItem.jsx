import React from 'react';
import '../assets/style/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
const CarouselItem =()=>{
return (

  <carousel className="carousel">
  <section className="carousel">
    <div className="carousel__container">

      <div className="carousel-item">
        <img className="carousel-item__img" src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""  />
        <div className="carousel-item__details">
          <div>
            <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
            <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" />
          </div>
          <p className="carousel-item__details--title">Título descriptivo</p>
          <p className="carousel-item__details--subtitle">GASC</p>
        </div>
      </div>

      <div className="carousel-item">
        <img className="carousel-item__img" src="https://images.pexels.com/photos/1427741/pexels-photo-1427741.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""  />
        <div className="carousel-item__details">
          <div>
            <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
            <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" />
          </div>
          <p className="carousel-item__details--title">Título descriptivo</p>
          <p className="carousel-item__details--subtitle">GASC</p>
        </div>
      </div>

      <div className="carousel-item">
        <img className="carousel-item__img" src="https://images.pexels.com/photos/705792/pexels-photo-705792.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""  />
        <div className="carousel-item__details">
          <div>
            <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
            <img className="carousel-item__details--img" src={plusIcon}  alt="Plus Icon"/>
          </div>
          <p className="carousel-item__details--title">Título descriptivo</p>
          <p className="carousel-item__details--subtitle">GASC</p>
        </div>
      </div>

      <div className="carousel-item">
        <img className="carousel-item__img" src="https://images.pexels.com/photos/904276/pexels-photo-904276.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""  />
        <div className="carousel-item__details">
          <div>
            <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
            <img className="carousel-item__details--img" src={plusIcon}  alt="Plus Icon" />
          </div>
          <p className="carousel-item__details--title">Título descriptivo</p>
          <p className="carousel-item__details--subtitle">GASC</p>
        </div>
      </div>

      <div className="carousel-item">
        <img className="carousel-item__img" src="https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500" alt=""  />
        <div className="carousel-item__details">
          <div>
            <img className="carousel-item__details--img" src={playIcon}  alt="Play Icon" />
            <img className="carousel-item__details--img" src={plusIcon}  alt="Plus Icon" />
          </div>
          <p className="carousel-item__details--title">Título descriptivo</p>
          <p className="carousel-item__details--subtitle">GASC</p>
        </div>
      </div>

      <div className="carousel-item">
        <img className="carousel-item__img" src="https://images.pexels.com/photos/233129/pexels-photo-233129.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""  />
        <div className="carousel-item__details">
          <div>
            <img className="carousel-item__details--img" src={playIcon}  alt="Play Icon" />
            <img className="carousel-item__details--img" src={plusIcon}  alt="Plus Icon" />
          </div>
          <p className="carousel-item__details--title">Título descriptivo</p>
          <p className="carousel-item__details--subtitle">GASC</p>
        </div>
      </div>

      <div className="carousel-item">
        <img className="carousel-item__img" src="https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""  />
        <div className="carousel-item__details">
          <div>
            <img className="carousel-item__details--img" src={playIcon}  alt="Play Icon" />
            <img className="carousel-item__details--img" src={plusIcon}  alt="Plus Icon" />
          </div>
          <p className="carousel-item__details--title">Título descriptivo</p>
          <p className="carousel-item__details--subtitle">GASC</p>
        </div>
      </div>

      <div className="carousel-item">
        <img className="carousel-item__img" src="https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""  />
        <div className="carousel-item__details">
          <div>
            <img className="carousel-item__details--img" src={playIcon}  alt="Play Icon" />
            <img className="carousel-item__details--img" src={plusIcon}  alt="Plus Icon" />
          </div>
          <p className="carousel-item__details--title">Título descriptivo</p>
          <p className="carousel-item__details--subtitle">GASC</p>
        </div>
      </div>

    </div>
  </section>
</carousel>
  );
};
export default CarouselItem;
