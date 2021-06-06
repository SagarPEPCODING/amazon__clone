import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
      autoPlay={true}
      focusOnSelect={true}
      customLeftArrow={null}
      //   centerMode={true}
      //   renderDotsOutside={true}
    >
      <div>
        <a href='https://www.amazon.in/b?node=21305334031&pf_rd_r=QKA0R8T3R193BK9YWE66&pf_rd_p=719ead5d-1edf-4f4e-849b-0a40ea56af99&pd_rd_r=b6ff7186-ac22-4750-a3cc-1ba40c683236&pd_rd_w=JJ3ac&pd_rd_wg=k4arA&ref_=pd_gw_unk'>
          <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/Covid/shovler/1x/Shoveler_covid_donation_1x._CB671053910_.jpg' />
        </a>
      </div>
      <div>
        <a href='https://www.amazon.in/b?node=21305334031&pf_rd_r=QKA0R8T3R193BK9YWE66&pf_rd_p=719ead5d-1edf-4f4e-849b-0a40ea56af99&pd_rd_r=b6ff7186-ac22-4750-a3cc-1ba40c683236&pd_rd_w=JJ3ac&pd_rd_wg=k4arA&ref_=pd_gw_unk'>
          <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Covid2/Eng/Shoveler_covid_apay_1x._CB667445793_.jpg' />
        </a>
      </div>
      <div>
        <a href='https://www.amazon.in/b?node=21305334031&pf_rd_r=QKA0R8T3R193BK9YWE66&pf_rd_p=719ead5d-1edf-4f4e-849b-0a40ea56af99&pd_rd_r=b6ff7186-ac22-4750-a3cc-1ba40c683236&pd_rd_w=JJ3ac&pd_rd_wg=k4arA&ref_=pd_gw_unk'>
          <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/milaap/Shoveler_covid_homecare_1x._CB669529040_.jpg' />
        </a>
      </div>
      <div>
        <a href='https://www.amazon.in/b?node=21305334031&pf_rd_r=QKA0R8T3R193BK9YWE66&pf_rd_p=719ead5d-1edf-4f4e-849b-0a40ea56af99&pd_rd_r=b6ff7186-ac22-4750-a3cc-1ba40c683236&pd_rd_w=JJ3ac&pd_rd_wg=k4arA&ref_=pd_gw_unk'>
          <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Vaccine/Shoveler_covid_vaccine_young_1x._CB667299035_.jpg' />
        </a>
      </div>
      <div>
        <a href='https://www.amazon.in/b?node=21305334031&pf_rd_r=QKA0R8T3R193BK9YWE66&pf_rd_p=719ead5d-1edf-4f4e-849b-0a40ea56af99&pd_rd_r=b6ff7186-ac22-4750-a3cc-1ba40c683236&pd_rd_w=JJ3ac&pd_rd_wg=k4arA&ref_=pd_gw_unk'>
          <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Vaccine/Shoveler_covid_slot_1x._CB667295748_.jpg' />
        </a>
      </div>
      <div>
        <a href='https://www.amazon.in/b?node=21305334031&pf_rd_r=QKA0R8T3R193BK9YWE66&pf_rd_p=719ead5d-1edf-4f4e-849b-0a40ea56af99&pd_rd_r=b6ff7186-ac22-4750-a3cc-1ba40c683236&pd_rd_w=JJ3ac&pd_rd_wg=k4arA&ref_=pd_gw_unk'>
          <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/milaap/Shoveler_covid_Blog_1x._CB669735929_.jpg' />
        </a>
      </div>
      <div>
        <a href='https://www.amazon.in/b?node=21305334031&pf_rd_r=QKA0R8T3R193BK9YWE66&pf_rd_p=719ead5d-1edf-4f4e-849b-0a40ea56af99&pd_rd_r=b6ff7186-ac22-4750-a3cc-1ba40c683236&pd_rd_w=JJ3ac&pd_rd_wg=k4arA&ref_=pd_gw_unk'>
          <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/shoveller/Shoveler_covid_v2_smb_1x._CB669068181_.jpg' />
        </a>
      </div>
      <div>
        <a href='https://www.amazon.in/b?node=21305334031&pf_rd_r=QKA0R8T3R193BK9YWE66&pf_rd_p=719ead5d-1edf-4f4e-849b-0a40ea56af99&pd_rd_r=b6ff7186-ac22-4750-a3cc-1ba40c683236&pd_rd_w=JJ3ac&pd_rd_wg=k4arA&ref_=pd_gw_unk'>
          <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/Covid/shovler/1x/Shoveler_covid_delivery__return_1x._CB671053910_.jpg' />
        </a>
      </div>
      <div>
        <a href='https://www.amazon.in/b?node=21305334031&pf_rd_r=QKA0R8T3R193BK9YWE66&pf_rd_p=719ead5d-1edf-4f4e-849b-0a40ea56af99&pd_rd_r=b6ff7186-ac22-4750-a3cc-1ba40c683236&pd_rd_w=JJ3ac&pd_rd_wg=k4arA&ref_=pd_gw_unk'>
          <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/Covid/shovler/1x/Shoveler_covid_payment_1x._CB671053910_.jpg' />
        </a>
      </div>
    </Carousel>
  );
}

export default CarouselHomeRowTwo;
