import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../../redux/actions/categorieAction';
function Categorie() {
    const categories = useSelector((state) => state.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());


    }, [dispatch]);



    const cartAllcategorie = (
        <Fragment>
            <div className="learn-press-courses row">
                {categories.map((categorie) => (
            <article id="post-486" className="col-md-4 col-12 col-sm-6 col-xs-6 lpr-course post-486 lp_course type-lp_course status-publish has-post-thumbnail hentry course_category-business course_tag-business course_tag-theme course_tag-wordpress pmpro-has-access course">
              <div className="content">
                <div className="thumbnail">
                    <img loading="lazy" style={{ width: '700px', height: '"350px' }} src={categorie.description} className /> 
                  <span className="price">
                    
                      <span className="course-price">{categorie.name}</span>
                    
                  </span>
                  <div className="review ">
                    <div className="sc-review-stars">
                      <div className="review-stars-rated" title="0 out of 5 stars">
                        <div className="review-stars empty" />
                        <div className="review-stars filled" style={{ "width": "0%" }} />
                      </div> </div>
                  </div>
                  <div className="button-when-logged has-wishlist">
                  </div>
                </div>
                <div className="sub-content">
                  
                
                  <div className="content-list">
                    <div className="course-description">
                      <p>LearnPress is the best WordPress Learning Management System and it comes with many great features. This is the best WPLMS theme available in the market. </p>
                    </div>
                    <ul className="courses_list_info">
                      <li>
                        <span className="avatar">
                          <a href="../lp-profile/admin/index.html">
                            <img loading="lazy" alt="Admin bar avatar" src="../wp-content/uploads/learn-press-profile/1/21232f297a57a5a743894a0e4a801fc3.jpg" className="avatar avatar-40 photo" height={40} width={40} /> </a>
                        </span>
                        <span className="info">
                          <span className="major">Teacher</span>
                          <a href="../lp-profile/admin/index.html" className="name">
                            ThimPress </a>
                        </span>
                      </li>
                      <li>
                        <label>Review:</label>
                        <div className="review ">
                          <div className="sc-review-stars">
                            <div className="review-stars-rated" title="0 out of 5 stars">
                              <div className="review-stars empty" />
                              <div className="review-stars filled" style={{ "width": "0%" }} />
                            </div> </div>
                          <span className="vote">(0 vote)</span>
                        </div>
                      </li>
                      <li>
                        <label>Students:</label>
                        <strong className="students">168 Students</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="course-info">
                <div className="course-price">
                  <span className="price">Free</span>
                </div>
                <span className="course-instructor">
                  <a href="../lp-profile/admin/index.html">ThimPress</a></span>
              </div>
            </article>
                ))}
            <Fragment />
           </div>
        </Fragment>
    )
   

    return (
        <div>

            <div id="main-content"> <section className="content-area">
                <div className="page-title layout-1">
                    <div className="main-top parallax" style={{ backgroundImage: 'url(../wp-content/uploads/sites/5/2018/10/page_title_7.jpg)' }}>
                        <span className="overlay-top-header" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }} />
                        <div className="content container">
                            <div className="row">
                                <div className="text-title col-md-6">
                                    <h1>Courses</h1> </div>
                                <div className="text-description col-md-6">
                                    <div className="banner-description"><p><strong className="br">The best demo education </strong> Be successful with Course Builder theme.</p></div> </div>
                            </div>
                        </div>
                    </div>
                    <div className="breadcrumb-content breadcrumb-plus">
                        <div className="breadcrumbs-wrapper container">
                            <ul itemProp="breadcrumb" itemScope itemType="http://schema.org/BreadcrumbList" id="breadcrumbs" className="breadcrumbs"><li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem"><a itemProp="item" href="/" title="Home"><span itemProp="name">Home</span></a><meta itemProp="position" content={1} /><span className="breadcrum-icon"><i className="fa fa-angle-right" aria-hidden="true" /></span></li><li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem"><span itemProp="name" title="All courses">All courses</span><meta itemProp="position" content={2} /></li></ul> </div>
                    </div>
                </div>
                <div id="top-sidebar-courses">
                    <div >

                        <div className="vc_row wpb_row vc_row-fluid overflow top-courses-overflow vc_custom_1502273625937 vc_row-has-fill vc_row-no-padding"><div className="wpb_column vc_column_container vc_col-sm-12"><div className="vc_column-inner"><div className="wpb_wrapper"><div className="thim-sc-heading text-center layout-2 ">
                            <div className="heading-content">
                                <h3 className="primary-heading">All Categories</h3> </div>
                            <p className="secondary-heading">
                                Learn to develop Android and iOS applications and Web Development within six weeks from a teacher
                                with real-world experience. Get a 75% discount if you buy it here! </p>
                            <span className="underline" />
                        </div>
                        </div></div></div></div> </div>
                </div>
                <div >
                    <div className="row">

                        <article style={{ width: '1000px', marginLeft: '150px', marginTop: '110px' }}>
                            <div  >
                                <div   >
                                    <div className="thim-course-top">
                                        <div className="display grid-list-switch lpr_course-switch " data-cookie="lpr_course-switch" data-layout="grid">
                                            <a href="javascript:;" className="grid switchToGrid switcher-active"><i className="fa fa-th" /></a>
                                            <a href="javascript:;" className="list switchToList"><i className="fa fa-th-list" /></a>
                                        </div>
                                        <div className="course-index">

                                        </div>
                                        <div className="courses-searching">
                                            <form method="get" action="https://wordpresslms.thimpress.com/demo-elearning-2/courses/">
                                                <input type="text" defaultValue name="s" placeholder="Search our courses" className="form-control course-search-filter" autoComplete="off" />
                                                <input type="hidden" defaultValue="course" name="ref" />
                                                <input type="hidden" name="post_type" defaultValue="lp_course" />
                                                <button type="submit"><i className="ion-android-search" /></button>
                                                <span className="widget-search-close" />
                                            </form>
                                            <ul className="courses-list-search list-unstyled" />
                                        </div>
                                    </div>
                                    <div className="archive-courses course-grid archive_switch" itemScope itemType="http://schema.org/ItemList">

                                        {cartAllcategorie}




                                    </div>
                                </div> </div>
                        </article>

                        <aside style={{ marginTop: '100px' }} className="sidebar-courses widget-area col-md-3 ">
                            <aside ><h4 className="widget-title">Categories</h4>

                                <ul className="courses-categories">

                                

                                </ul>
                            </aside>
                            {/*
              <aside id="thim-recent-courses-3" className="widget widget_thim-recent-courses"><h4 className="widget-title">Latest Courses</h4> <div className="thim-recent-courses-widget">
                <ul className="recent-courses-wrapper">
                  {courses.map((course, index) => (
                    index > courses.length - 4 ?


                      <li className="course-item">
                        <div className="feature-img">
                          <img width={109} height={109} src={course.CourseImg} className />
                          <a href="the-ultimate-ethical-hacking-boot-camp/index.html" className="img-link" /> </div>
                        <div className="content">
                          <h4 className="title">
                            <a >{course.title}</a>
                          </h4>
                          <div className="price">

                          </div>
                        </div>
                      </li>
                      : <div></div>
                  ))}

                </ul>
              </div>
              </aside>
                  */}
                            <aside id="media_image-3" className="widget widget_media_image"></aside>
                            <aside id="recent-posts-3" className="widget widget_recent_entries"></aside>
                        </aside>
                    </div>
                </div>
            </section>
            </div>


        </div>
    )
}

export default Categorie
