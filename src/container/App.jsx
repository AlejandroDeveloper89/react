import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import CarouselItem from '../container/CarouselItem';



import '../assets/style/Header.scss';

const App= () =>{
    return (
        <div className="App">
          <Header />
          <Search />
          <Carousel />
          <CarouselItem />
          <Categories />
          <Footer />

        </div>
    );
}
export default App;
