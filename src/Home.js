import React from 'react';
import './Home.css';
import Carousel from './Carousel';
import Product from './Product';
import CarouselHomeRowTwo from './CarouselHomeRowTwo';
import CarouselHomeRowThree from './CarouselHomeRowThree';

function Home() {
  return (
    <div className='home'>
      <div className='carousel__Container'>
        <Carousel></Carousel>
        <div className='home__row1'>
          {/* product 1 */}
          <div className='productContainer__row'>
            <div className='productContainer__innerrow'>
              <Product
                firstLine={'This is the first line of product'}
                price={20.19}
                imgsrc='https://images-eu.ssl-images-amazon.com/images/G/31/img21/PCA/MayART_CC_1x-PC._SY304_CB667446293_.jpg'
              />
              <Product
                firstLine={'This is the second line of product'}
                price={20.3}
                imgsrc='https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg'
              />
              <Product
                firstLine={'This is the third line of product'}
                price={20.01}
                imgsrc='https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg'
              />
              <Product
                firstLine={'This is the fourth line of product'}
                price={20.077}
                imgsrc='https://images-eu.ssl-images-amazon.com/images/G/31/img21/PCA/MayART_CC_1x-PC._SY304_CB667446293_.jpg'
              />
            </div>
          </div>
          {/* product 2 */}
        </div>
      </div>
      <div className='home__row2'>
        <div className='productContainer__row2'>
          <div className='productContainer__innerrow2'>
            <CarouselHomeRowTwo />
          </div>
        </div>
      </div>
      <div className='home__row3'>
        <div className='productContainer__row3'>
          <div className='productContainer__innerrow3'>
            <CarouselHomeRowThree />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
