import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCoursesByUser } from '../../../redux/actions/courseAction';

function TakenCourses() {
  const token = useSelector(state => state.token);
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  useEffect(() => {
    
    dispatch(getAllCoursesByUser(token))
  }, [ dispatch(getAllCoursesByUser(token))]);
  useEffect(() => {
    
    dispatch(getAllCoursesByUser(token))
  }, [ dispatch(getAllCoursesByUser(token))]);
 
  
    return (
        

<div style={{width: 1400,marginLeft:50,marginBottom:180}} >
<div> <section className="content-area">
    <div className="page-title layout-1" style={{marginLeft:'-50px',marginRight:'-260px',marginBottom:'100px'}}>
      <div className="main-top parallax" style={{backgroundImage: 'url(../../../../wp-content/uploads/sites/5/2018/10/page_title_7.jpg)'}}>
        <span className="overlay-top-header" style={{backgroundColor: 'rgba(0,0,0,0.6)'}} />
        <div className="content container">
          <div className="row">
            <div className="text-title col-md-6">
              <h1>My Coures</h1> </div>
            <div className="text-description col-md-6">
              <div className="banner-description"><strong className="br">The best demo education </strong> It is a long established fact that a reader.</div> </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container site-content "><div className="row"><main id="main" className="site-main col-sm-12 full-width">
          <article id="post-42" className="post-42 page type-page status-publish hentry pmpro-has-access">
            
                <div className="learn-press-user-profile profile-container" id="learn-press-user-profile">
                  <div className="user-tab">
                    <div className="user-info">
                      <div className="author-avatar">
                        <img src="../../../../wp-content/uploads/learn-press-profile/1/21232f297a57a5a743894a0e4a801fc3.jpg" />
                      </div>
                      <div className="user-information">
                        <ul className="profile-list-social breadcrumbs" itemProp="breadcrumb" itemScope itemType="http://schema.org/BreadcrumbList" id="breadcrumbs">
                          <li className="item" itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                            <a itemProp="item" href="https://facebook.com/thimpress" title="Facebook"><i className="fa fa-facebook" /></a>
                          </li>
                          <li className="item" itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                            <a itemProp="item" href="https://twitter.com/thimpress" title="Twitter"><i className="fa fa-twitter" /></a>
                          </li>
                          <li className="item" itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                            <a itemProp="item" href="skype:hotamdhv?call" title="Skype"><i className="fa fa-skype" /></a>
                          </li>
                        </ul>
                        <h3 className="author-name">Courzelo</h3>
                        <ul className="list-contact">
                          <li><a href="tel:0975877906">+21650347045</a></li>
                          <li><a href="https://wordpresslms.thimpress.com/cdn-cgi/l/email-protection#691f000701290f06060b0508470a0604"><span className="__cf_email__" data-cfemail="bbcdd2d5d3fbddd4d4d9d7da95d8d4d6">Info@Courzelo.com</span></a></li>
                        </ul>
                        <p className="description">you can read your bought courses...</p>
                      </div>
                    </div>
                  </div>
                  <div className="profile-tabs">
                    <a id="profile-mobile-menu" className="fa fa-bars" />
                   
                    <div id="learn-press-profile-content" className="tab-content">
                      <div id="profile-content-courses">
                       
                        <div className="learn-press-subtab-content">
                          <h3 className="profile-heading">
                            My Courses </h3>
                        
                          <div className="thim-course-grid profile-courses-list">
                          {courses.map((course) => (
          <Fragment>
                            <article id="post-3656" className="col-md-4 col-12 col-sm-6 col-xs-6 lpr-course lp-membership post-3656 lp_course type-lp_course status-publish has-post-thumbnail hentry course_category-mba-courses course_category-photography-and-designs course_tag-design course_tag-photoshop pmpro-has-access course">
                              <div className="content">
                                <div className="thumbnail">
                                  
                                  <a  className="img_thumbnail">
                                    <img style={{width:'365px'}}height={405} src={course.CourseImg}    /> </a>
                                  <span className="price">
                                    <span className="course-price">{course.title}</span>
                                  </span>
                                  <div className="review ">
                                    <div className="sc-review-stars">
                                      <div className="review-stars-rated" title="0 out of 5 stars">
                                        <div className="review-stars empty" />
                                        <div className="review-stars filled" style={{width: '0%'}} />
                                      </div> </div>
                                    
                                  </div>
                                  <div className="button-when-logged has-wishlist">
                                  </div>
                                </div>
                                <div className="sub-content">
                                  <h3 className="title">
                                    <a >{course.description}</a>
                                  </h3>
                                  <div className="date-comment">
                                    <span className="date-meta">June 5, 2015</span>  </div>
                                  <div className="content-list">
                                    
                                    <ul className="courses_list_info">
                                      
                                      <li>
                                        <label>Review:</label>
                                        <div className="review ">
                                          <div className="sc-review-stars">
                                            <div className="review-stars-rated" title="0 out of 5 stars">
                                              <div className="review-stars empty" />
                                              <div className="review-stars filled" style={{width: '0%'}} />
                                            </div> </div>
                                        </div>
                                      </li>
                                      
                                    </ul>
                                  </div>
                                </div>
                              </div>
                             </article>
                             </Fragment>
                               ))}
                             </div>

                             


                        </div>
                      </div>
                    </div>
                  </div>
                </div>
             
          </article>
        </main></div></div> </section>
</div>


       
    </div>
        
    )
}

export default TakenCourses
