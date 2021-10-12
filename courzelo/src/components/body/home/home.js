import React, {Fragment,useState,useCallback,useEffect,useRef} from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { getCategories } from '../../../redux/actions/categorieAction';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);  

const Home = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [ dispatch]);
 
  return (
    <div >
  <section >
  <div style={{backgroundImage: 'url(../wp-content/uploads/sites/5/2018/10/page_title_7.jpg)'}} className="vc_row wpb_row vc_row-fluid thim-header-slider-3 thim-background-overlay vc_row-has-fill vc_row-o-full-height vc_row-o-columns-stretch vc_row-o-equal-height vc_row-flex vc_general vc_parallax vc_parallax-content-moving">
  <div className="overlay" style={{backgroundColor: 'rgba(10,10,10,0.5)'}}>
  </div>
  <div className="wpb_column vc_column_container vc_col-sm-12">
    <div className="vc_column-inner" style={{marginLeft: 200}}>
      <div className="wpb_wrapper"><div className="thim-sc-text-box style-4 size-default ">
          <div className="title-1">Create and sell<br />
            online courses</div>
          <div className="title-2"><p>We pride ourselves on providing the most<br />
              up-to-date content. Everything you need </p>
          </div>
          </div>
      </div></div></div></div>
      <>
  <div  className="vc_row wpb_row vc_row-fluid thim-column-gap-70 vc_custom_1502087455074 vc_row-has-fill">
    <div className="wpb_column vc_column_container vc_col-sm-9" >
      <div className="vc_column-inner vc_custom_1502081858697"><div style={{marginLeft:'40px'}}>
          <div className="thim-course-block-3   	">
            <div className="wrapper-title">
              <h3 className="title">Discover Our New Courses</h3>
              <Link to='/courses'><a  className="view-courses-button">View All</a></Link> </div>
            <div className="masonry-items">
              <div className="row">
                <div className="course-item col-sm-4  free   business ">
                  <div ><div className="featured-img">
                    <img width={480} height={360} src="wp-content/uploads/sites/5/2017/06/Half-Marathon-2014-70-1-480x360.jpg" alt="The Ultimate Ethical Hacking Boot Camp" className /><a className="img-link" />
                    <div className="course-meta"><div className="price">
                          <span className="course-price">SPORT</span>
                        </div><div className="course-rating">
                          <div className="review-stars-rated" title="0 out of 5 stars">
                            <div className="review-stars empty" />
                            <div className="review-stars filled" style={{width: '0%'}} />
                           
                          </div></div></div>
                          </div><h4 className="course-title"><a >The Ultimate Ethical Hacking Boot Camp</a>
                          </h4><div className="participants"></div></div>
                          </div><div className="course-item col-sm-4  free in-membership  business design ">
                            <div ><div className="featured-img">
                              <img width={480} height={360} src="wp-content/uploads/sites/5/2017/08/layer-86-e1503482220669-480x360.jpg" alt="Affiliate Marketing – A Beginner’s Guide" className />
                              <a  className="img-link" /><div className="course-meta">
                                <div className="price" /><div className="course-rating"><div className="review-stars-rated" title="0 out of 5 stars">
                            <div className="review-stars empty" />
                            <div className="review-stars filled" style={{width: '0%'}} />
                          </div></div></div></div><h4 className="course-title">
                            <a >Affiliate Marketing – A Beginner’s Guide</a></h4><div className="participants"><a className="instructor" /></div></div></div><div className="course-item col-sm-4  sale    web-development "><div ><div className="featured-img"><img width={480} height={360} src="wp-content/uploads/sites/5/2017/06/shutterstock_184641842-5-e1503481994491-480x360.jpg" alt="AWS Certified Solutions  Architect" className /><a  className="img-link" /><div className="course-meta"><div className="price">
                          <span className="course-price">BUSINESS</span>
                        </div><div className="course-rating"><div className="review-stars-rated" title="0 out of 5 stars">
                            <div className="review-stars empty" />
                            <div className="review-stars filled" style={{width: '0%'}} />
                          </div></div></div></div><h4 className="course-title"><a >AWS Certified Solutions Architect</a></h4><div className="participants"><a  className="instructor" /></div></div></div></div></div> </div>
        </div></div>
    </div>
    <div className="wpb_column vc_column_container vc_col-sm-3 vc_col-has-fill">
      <div className="vc_column-inner vc_custom_1502265039449"><div className="wpb_wrapper">
          <div className="thim-sc-icon-box custom-style layout-6 style_kit">
            <div className="icon-box-wrapper" style={{}}>
              <div className="box-icon" style={{backgroundColor: ''}}>
                <i className="icon-ionicons ion-ios-barcode-outline" aria-hidden="true" /> </div>
              <div className="box-content">
                <h3 className="title">
                  Learn From The Experts </h3>
              </div>
            </div>
          </div>
          <div className="vc_empty_space" style={{height: 25}}><span className="vc_empty_space_inner" /></div>
          <div className="thim-sc-icon-box  layout-6 style_kit">
            <div className="icon-box-wrapper" style={{}}>
              <div className="box-icon" style={{backgroundColor: ''}}>
                <i className="icon-ionicons ion-ios-bookmarks-outline" aria-hidden="true" /> </div>
              <div className="box-content">
                <h3 className="title">
                  Book Library &amp; Store </h3>
              </div>
            </div>
          </div>
          <div className="vc_empty_space" style={{height: 25}}><span className="vc_empty_space_inner" /></div>
          <div className="thim-sc-icon-box  layout-6 style_kit">
            <div className="icon-box-wrapper" style={{}}>
              <div className="box-icon" style={{backgroundColor: ''}}>
                <i className="icon-ionicons ion-social-buffer-outline" aria-hidden="true" /> </div>
              <div className="box-content">
                <h3 className="title">
                  Learn Anything Online </h3>
              </div>
            </div>
          </div>
          <div className="vc_empty_space" style={{height: 30}}><span className="vc_empty_space_inner" /></div>
          <div className="thim-sc-icon-box  layout-6 style_kit">
            <div className="icon-box-wrapper" style={{}}>
              <div className="box-icon" style={{backgroundColor: ''}}>
                <i className="icon-ionicons ion-ios-lightbulb-outline" aria-hidden="true" /> </div>
              <div className="box-content">
                <h3 className="title">
                  Best Industry Leaders </h3>
              </div>
            </div>
          </div>
          <div className="vc_empty_space" style={{height: 59}}><span className="vc_empty_space_inner" /></div></div></div></div></div>
  <div className="vc_row-full-width vc_clearfix" />
</>


      <div className="vc_row wpb_row vc_row-fluid">
        <div className="wpb_column vc_column_container vc_col-sm-12">
          <div >
            <div className="wpb_wrapper">
        <div className="thim-courses-collection-wrapper">
          <div className="thim-collection-info squared-colection-info">
            <h3 className="title">Course Collection</h3>
            <div className="description">Our 2,000 online course collection includes the most engaging courses for your employees' professional development.</div>
          </div>
          <div className="thim-courses-collection squared-courses-collection" >
        
            <div className="collection-frame items-10">
              <ul className="slidee">
              <Swiper slidesPerView={3} spaceBetween={30} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true} pagination={{
                  "clickable": true
                }} navigation={true} className="mySwiper">
              {categories.map((categorie) => (
                
          <Fragment>
            
            <SwiperSlide>
                <li className="collection-item" style={{marginLeft:'70px'}}>
                  <div className="thumbnail">
                    <a  className="collection-link" />
                    <img style={{width:'310px', height:'287px'}}  src={categorie.description} alt="Be Your Own Boss" className /> <div className="wrapper">
                      <span className="ion-qr-scanner" />
                      
                    </div>
                  </div>
                  <div className="collection-wrapper">
                    <h4 className="name"><Link to={`/CourseByCategory/${categorie.name}`} >{categorie.name}</Link>
                    
                    </h4>
                     </div>
                </li>
                </SwiperSlide>
               
                </Fragment>
                 
                            ))} </Swiper>
             
           
              </ul>
             
            </div>
          </div>
          
        </div>
      </div></div></div></div>








  <div className="vc_row wpb_row vc_row-fluid vc_custom_1502096185436 vc_row-no-padding">
    <div className="wpb_column vc_column_container vc_col-sm-6">
      <div className="vc_column-inner vc_custom_1502095063222">
        <div className="wpb_wrapper">
          <div className="thim-sc-video-box   layout-3">
            <div className="video">
              <div className="video-box" style={{backgroundImage: 'url(wp-content/uploads/sites/5/2017/08/home-1-bg-e1503482222736.jpg)'}}>
                <div className="play-button">
                  <a href="https://www.youtube.com/watch?v=TtoHkSuKJwE" className="video-thumbnail"><i className="icon-play" /></a>
                </div>
              </div>
            </div>
          </div>
        </div></div>
    </div>
    <div className="wpb_column vc_column_container vc_col-sm-6">
      <div className="vc_column-inner vc_custom_1502095072725">
        <div className="wpb_wrapper">
          <div className="vc_empty_space" style={{height: 76}}>
            <span className="vc_empty_space_inner">
            </span></div>
          <div className="thim-sc-counter-box demo-elearning-2 style-1" data-line="has-line">
            <h3 className="sc-title">About W-elearning</h3>
            <div className="counter_box has-line">
              <div className="number" style={{color: '#1ea69a'}}>
                <span className="number_counter" /><span className="text-number">76m+</span>
              </div>
              <div className="title_counter">
                <h4 className="title" style={{color: '#202121'}}>STUDENTS LEARNING</h4>
              </div>
            </div>
            <div className="counter_box has-line">
              <div className="number" style={{color: '#1ea69a'}}>
                <span className="number_counter" /><span className="text-number">80k+</span> </div>
              <div className="title_counter">
                <h4 className="title" style={{color: '#202121'}}>ACTIVE COURSES</h4>
              </div>
            </div>
            <div className="counter_box has-line">
              <div className="number" style={{color: '#1ea69a'}}>
                <span className="number_counter"  /><span className="text-number">990+</span> </div>
              <div className="title_counter">
                <h4 className="title" style={{color: '#202121'}}>INSTRUCTORS ONLINE</h4>
              </div>
            </div>
          </div>
          <div className="vc_empty_space" style={{height: 38}}>
            <span className="vc_empty_space_inner" />
          </div>
          <div className="thim-sc-text-box style-4 size-small ">
            <div className="title-2"><p>Students in class on time, spending longer learning and handing their homework in when<br />
                it’s due – the obvious ones, but these aren’t the only ways My Study Life helps increase<br />
                attainment. The dashboard gives students an overview of their day,</p>
            </div>
            </div>
        </div></div></div></div>
  <div className="vc_row-full-width vc_clearfix">
  </div>
  <div className="vc_row wpb_row vc_row-fluid overflow-visible vc_custom_1502163012164 vc_row-has-fill vc_row-no-padding">
    <div className="text-right wpb_column vc_column_container vc_col-sm-6">
      <div className="vc_column-inner vc_custom_1502096768858">
        <div className="wpb_wrapper">
          <div className="vc_empty_space" style={{height: 86}}><span className="vc_empty_space_inner" />
          </div><div className="vc_wp_text wpb_content_element"><div className="widget widget_text">
              <div className="textwidget">
                <h3 className="thim-custom-title" style={{fontSize: 42, fontWeight: 300}}>Share your knowledge in<br />
                  Five simple steps</h3>
              </div>
            </div></div><div className="vc_empty_space" style={{height: 11}}>
            <span className="vc_empty_space_inner" /></div>
          <div className="thim-sc-text-box style-4 size-small ">
            <div className="title-1">Create a course for free in minutes with Teachable</div>
            <div className="title-2"><p>Students in class on time, spending longer learning and handing their homework in when<br />
                it’s due – the obvious ones, but these aren’t the only ways My Study Life helps increase<br />
                attainment. The dashboard gives students an overview of their day,</p>
            </div>
            </div>
        </div>
      </div></div>
    <div className="wpb_column vc_column_container vc_col-sm-6">
      <div className="vc_column-inner vc_custom_1502163002858">
        <div className="wpb_wrapper">
          <div className="thim-sc-testimonials layout-5 ">
            <div >
              <div >
                <div className="item">
                  <div className="image">
                    <img width={743} height={456} src="wp-content/uploads/sites/5/2017/06/blog-2-743x456.jpg"  alt="layer-86" /> </div>
                  <div className="content-wrap">
                    <div className="content">
                      “ You dont need a whole ecommerce system to sell your
                      online courses. Paypal, Stripe payment methods integration
                      can help you sell your use WooCommerce. ” </div>
                    <div className="user-info">
                      Jenny Kate, Usa
                      <div className="thim-sc-social-links">
                        <ul className="socials">
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
               
              </div>
            </div></div>
        </div></div></div>
  </div>



  <div className="vc_row wpb_row vc_row-fluid">
</div>






      <div className="vc_row wpb_row vc_row-fluid vc_custom_1502265070316 thim-background-overlay">
  <div className="overlay" style={{backgroundImage: 'url(../wp-content/uploads/sites/5/2017/08/pexels-photo-4-1-1000x500.jpg)'}} />
  <div className="wpb_column vc_column_container vc_col-sm-12">
    <div className="vc_column-inner"><div className="wpb_wrapper">
        <div className="vc_empty_space" style={{height: 80}}>
          <span className="vc_empty_space_inner" />
        </div></div></div></div>
  <div className="wpb_column vc_column_container vc_col-sm-6">
    <div className="vc_column-inner vc_custom_1502183302752"><div className="wpb_wrapper">
        <div className="wpb_single_image wpb_content_element vc_align_right  vc_custom_1502187435885">
          <figure className="wpb_wrapper vc_figure">
            <div className="vc_single_image-wrapper   vc_box_border_grey"><img width={475} height={395} src="wp-content/uploads/sites/5/2017/08/mb.png" className="vc_single_image-img attachment-full" alt loading="lazy" srcSet="https://wordpresslms.thimpress.com/demo-elearning-2/wp-content/uploads/sites/5/2017/08/mb.png 475w, https://wordpresslms.thimpress.com/demo-elearning-2/wp-content/uploads/sites/5/2017/08/mb-300x249.png 300w" sizes="(max-width: 475px) 100vw, 475px" /></div>
          </figure>
        </div>
      </div></div></div><div className="wpb_column vc_column_container vc_col-sm-6"><div className="vc_column-inner">
      <div className="wpb_wrapper">
        <div className="vc_wp_text wpb_content_element thim-textbox-2"><div className="widget widget_text"> <div className="textwidget">
              <p className="sub-title">&nbsp;Learn on the go</p>
              <h3 className="title">Access your courses anywhere,<br />
                anytime &amp; prepare with practice tests</h3>
             
              <p>
              </p></div>
          </div></div></div></div></div></div>



  </section>
 
  
    </div>
  );
};

export default Home;
