import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel
        showThumbs={false}
        showStatus={false}
        swipeScrollTolerance={1000}
        useKeyboardArrows={true}
        showIndicators={false}
        autoFocus={true}
      >
        <div>
          <img
            className='home_image'
            src='https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Mar20/Covid19/2021/IN_GWD_Covid19_CustomerMsg_MH_ENG_1x_v1._CB669806110_.jpg'
          />
        </div>
        <div>
          <img
            className='home_image'
            src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Avatar/HeroPC_1500x600_SVA._CB667240774_.jpg'
          />
        </div>
        <div>
          <img
            className='home_image'
            src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/PSS/Personal-Safety_1500x600._CB668022827_.jpg'
          />
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
