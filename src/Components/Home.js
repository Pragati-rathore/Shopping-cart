import React from 'react';
import Header from './Header/Header';
import ImageSlider from './ImageSlider/ImageSlider';
import ShopChi from './ShopChi/ShopChi';
import ProductCardsComponent from './ProductCardsComponent/ProductCardsComponent';
import ShopBiosilk from './ShopBiosilk/ShopBiosilk';
import ChiFootWare from './ChiFootWare/ChiFootWare';
import RewardsProgram from './RewardsProgram/RewardsProgram';
import List from './List/List';
import Footer from './Footer/Footer';
import Popup from './PopUp/PopUp';

const placeholderImages = [
    'https://chi.com/wp-content/uploads/2023/03/CHI-Colormaster-Retail-Banner-Desktop-1400w.jpg',
    'https://chi.com/wp-content/uploads/2023/07/Royal-Treatment-Banner-1920x750-1.jpg',
    'https://chi.com/wp-content/uploads/2023/02/CHI-Care-Web-Banner-Clean-Haircare-for-All-1920x750-1.jpg',
    'https://chi.com/wp-content/uploads/2023/06/CHI-Vibes-Desktop-Web-Banner-1920x750-1.webp'
    
  ];

const Home = () => {
  return (
    <div>
        <Header/>
        <ImageSlider images={placeholderImages}/>
        <ProductCardsComponent/>
        <ShopChi/>
        <ShopBiosilk/>
        <ChiFootWare/>
        <RewardsProgram/>
        <List/>
        <Footer/>
        <Popup/>
        

    </div>
  );
}

export default Home;