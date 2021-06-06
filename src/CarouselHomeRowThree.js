import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './carouselHomeRowThree.css';

function CarouselHomeRowTwo(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      //   showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      //   autoPlay={this.props.deviceType !== 'mobile' ? true : false}
      autoPlaySpeed={10000}
      keyBoardControl={true}
      customTransition='all .5'
      transitionDuration={500}
      containerClass='carousel-container'
      removeArrowOnDeviceType={['tablet', 'mobile']}
      //   deviceType={this.props.deviceType}
      //   dotListClass='custom-dot-list-style'
      itemClass='carousel-item-padding-40-px'
      arrows={true}
      minimumTouchDrag={50}
      //   autoPlay={true}
      focusOnSelect={true}
      customLeftArrow={null}
      //   centerMode={true}
      //   renderDotsOutside={true}
    >
      <div className='imgContainer'>
        <a href='https://www.amazon.in/b?node=21305334031&pf_rd_r=QKA0R8T3R193BK9YWE66&pf_rd_p=719ead5d-1edf-4f4e-849b-0a40ea56af99&pd_rd_r=b6ff7186-ac22-4750-a3cc-1ba40c683236&pd_rd_w=JJ3ac&pd_rd_wg=k4arA&ref_=pd_gw_unk'>
          <img
            className='imgMargin'
            src='https://m.media-amazon.com/images/I/41jRzGyDUJL._AC_SY200_.jpg'
          />
        </a>
      </div>
      <div className='imgContainer'>
        <a href='https://www.amazon.in/b?node=21305334031&pf_rd_r=QKA0R8T3R193BK9YWE66&pf_rd_p=719ead5d-1edf-4f4e-849b-0a40ea56af99&pd_rd_r=b6ff7186-ac22-4750-a3cc-1ba40c683236&pd_rd_w=JJ3ac&pd_rd_wg=k4arA&ref_=pd_gw_unk'>
          <img
            className='imgMargin'
            src='https://m.media-amazon.com/images/I/41+cwZKB5vL._AC_SY200_.jpg'
          />
        </a>
      </div>
      <div className='imgContainer'>
        <a href='https://www.amazon.in/b?node=21305334031&pf_rd_r=QKA0R8T3R193BK9YWE66&pf_rd_p=719ead5d-1edf-4f4e-849b-0a40ea56af99&pd_rd_r=b6ff7186-ac22-4750-a3cc-1ba40c683236&pd_rd_w=JJ3ac&pd_rd_wg=k4arA&ref_=pd_gw_unk'>
          <img
            className='imgMargin'
            src='https://m.media-amazon.com/images/I/41U31ZnDWJL._AC_SY200_.jpg'
          />
        </a>
      </div>
      <div className='imgContainer'>
        <a href='https://www.amazon.in/b?node=21305334031&pf_rd_r=QKA0R8T3R193BK9YWE66&pf_rd_p=719ead5d-1edf-4f4e-849b-0a40ea56af99&pd_rd_r=b6ff7186-ac22-4750-a3cc-1ba40c683236&pd_rd_w=JJ3ac&pd_rd_wg=k4arA&ref_=pd_gw_unk'>
          <img
            className='imgMargin'
            src='https://m.media-amazon.com/images/I/41uiDAXRhgL._AC_SY200_.jpg'
          />
        </a>
      </div>
      <div className='imgContainer'>
        <a href='https://www.amazon.in/b?node=21305334031&pf_rd_r=QKA0R8T3R193BK9YWE66&pf_rd_p=719ead5d-1edf-4f4e-849b-0a40ea56af99&pd_rd_r=b6ff7186-ac22-4750-a3cc-1ba40c683236&pd_rd_w=JJ3ac&pd_rd_wg=k4arA&ref_=pd_gw_unk'>
          <img
            className='imgMargin'
            src='https://m.media-amazon.com/images/I/41J9dluA-lS._AC_SY200_.jpg'
          />
        </a>
      </div>
      <div className='imgContainer'>
        <a href='https://www.amazon.in/b?node=21305334031&pf_rd_r=QKA0R8T3R193BK9YWE66&pf_rd_p=719ead5d-1edf-4f4e-849b-0a40ea56af99&pd_rd_r=b6ff7186-ac22-4750-a3cc-1ba40c683236&pd_rd_w=JJ3ac&pd_rd_wg=k4arA&ref_=pd_gw_unk'>
          <img
            className='imgMargin'
            src='https://m.media-amazon.com/images/I/41zD4GN4E2L._AC_SY200_.jpg'
          />
        </a>
      </div>
      <div className='imgContainer'>
        <a href='https://www.amazon.in/b?node=21305334031&pf_rd_r=QKA0R8T3R193BK9YWE66&pf_rd_p=719ead5d-1edf-4f4e-849b-0a40ea56af99&pd_rd_r=b6ff7186-ac22-4750-a3cc-1ba40c683236&pd_rd_w=JJ3ac&pd_rd_wg=k4arA&ref_=pd_gw_unk'>
          <img
            className='imgMargin'
            src='https://m.media-amazon.com/images/I/41GhnsfgjQL._AC_SY200_.jpg'
          />
        </a>
      </div>
      <div className='imgContainer'>
        <a href='https://www.amazon.in/b?node=21305334031&pf_rd_r=QKA0R8T3R193BK9YWE66&pf_rd_p=719ead5d-1edf-4f4e-849b-0a40ea56af99&pd_rd_r=b6ff7186-ac22-4750-a3cc-1ba40c683236&pd_rd_w=JJ3ac&pd_rd_wg=k4arA&ref_=pd_gw_unk'>
          <img
            className='imgMargin'
            src='https://m.media-amazon.com/images/I/413-ksIcp4S._AC_SY200_.jpg'
          />
        </a>
      </div>
      <div className='imgContainer'>
        <a href='https://www.amazon.in/b?node=21305334031&pf_rd_r=QKA0R8T3R193BK9YWE66&pf_rd_p=719ead5d-1edf-4f4e-849b-0a40ea56af99&pd_rd_r=b6ff7186-ac22-4750-a3cc-1ba40c683236&pd_rd_w=JJ3ac&pd_rd_wg=k4arA&ref_=pd_gw_unk'>
          <img
            className='imgMargin'
            src='https://m.media-amazon.com/images/I/417Ki1YFMnS._AC_SY200_.jpg'
          />
        </a>
      </div>
    </Carousel>
  );
}

export default CarouselHomeRowTwo;
