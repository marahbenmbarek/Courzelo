import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategories } from '../../../../redux/actions/categorieAction';
import { getCourses } from '../../../../redux/actions/courseAction';
function Courses() {
  const categories = useSelector((state) => state.categories);
  console.log('categorie', categories);
  const courses = useSelector((state) => state.courses);
  console.log('courses', courses)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
    dispatch(getCategories());


  }, [dispatch]);
  const [isBusiness, setisBusiness] = useState(false);
  const [isSciences, setisSciences] = useState(false);
  const [isComputerSc, setisComputerSc] = useState(false);
  const [isOther, setisOther] = useState(false);


  const handleShowBusiness = (e) => {
    setisBusiness(true);
    setisSciences(false);
    setisComputerSc(false);
    setisOther(false);


  };
  const handleShowSciences = (e) => {
    setisSciences(true);
    setisBusiness(false);
    setisComputerSc(false);
    setisOther(false);


  };
  const handleShowComputerSc = (e) => {
    setisComputerSc(true);
    setisSciences(false);
    setisBusiness(false);
    setisOther(false);

  };
  const handleShowOther = (e) => {
    setisOther(true);
    setisComputerSc(false);
    setisSciences(false);
    setisBusiness(false);


  };
  const cartAllCourse = (
    <Fragment>
      <div className="learn-press-courses row">
        {courses.map((course) => (

          course.validation == 1 ?
            course.price == null ?
              <article id="post-486" className="col-md-4 col-12 col-sm-6 col-xs-6 lpr-course post-486 lp_course type-lp_course status-publish has-post-thumbnail hentry course_category-business course_tag-business course_tag-theme course_tag-wordpress pmpro-has-access course">
                <div className="content">
                  <div className="thumbnail">
                    <a className="img_thumbnail">
                      <img style={{ width: '365px', height: '300px' }} src={course.CourseImg} alt="The Ultimate Ethical Hacking Boot Camp" className /> </a>


                    <span className="price">
                      <span className="course-price"></span>
                      <b>{course.title}</b>
                    </span>


                    <div className="review ">
                      <div className="sc-review-stars">
                        <div className="review-stars-rated" title="0 out of 5 stars">
                          <div className="review-stars empty" />
                          <div className="review-stars filled" style={{ width: '0%' }} />
                        </div> </div>
                      <span className="vote">(0 vote)</span>
                    </div>
                    <div className="button-when-logged has-wishlist">
                    </div>
                  </div>
                  <div className="sub-content">
                    <h3 className="title">
                      <a href="the-ultimate-ethical-hacking-boot-camp/index.html">Added on 12/32/52</a>
                    </h3>

                    <div className="thim-sc-button text-right hide-separator " style={{ marginRight: '60px' }}>
                      <Link to={`/DetailCourse/${course._id}`} target="_self" className="btn btn-primary btn-lg">
                        <span className="text" style={{ color: '#FFFFFF' }}>Detail</span>
                      </Link>
                    </div>

                  </div>
                </div>
              </article>
              :
              <Fragment />
            :
            <Fragment />
        ))}

      </div>
    </Fragment>
  )
  const cartCourseBusiness = (

    <div className="learn-press-courses row">
      {courses.map((course) => (
        course.validation == 1 ?
          course.price == null ?
            <Fragment>
              {course.categorie == "Business" ?

                <article id="post-486" className="col-md-4 col-12 col-sm-6 col-xs-6 lpr-course post-486 lp_course type-lp_course status-publish has-post-thumbnail hentry course_category-business course_tag-business course_tag-theme course_tag-wordpress pmpro-has-access course">
                  <div className="content">
                    <div className="thumbnail">
                      <a className="img_thumbnail">
                        <img loading="lazy" style={{ width: '365px', height: '300px' }} src={course.CourseImg} alt="The Ultimate Ethical Hacking Boot Camp" className /> </a>
                      <span className="price">
                        <span className="course-price">{course.title}</span>
                      </span>
                      <div className="review ">
                        <div className="sc-review-stars">
                          <div className="review-stars-rated" title="0 out of 5 stars">
                            <div className="review-stars empty" />
                            <div className="review-stars filled" style={{ width: '0%' }} />
                          </div> </div>
                        <span className="vote">(0 vote)</span>
                      </div>
                      <div className="button-when-logged has-wishlist">
                      </div>
                    </div>
                    <div className="sub-content">
                      <h3 className="title">
                        <a href="the-ultimate-ethical-hacking-boot-camp/index.html">Added on 12/32/52</a>
                      </h3>

                      <div className="thim-sc-button text-right hide-separator " style={{ marginRight: '60px' }}>
                        <Link to={`/DetailCourse/${course._id}`} target="_self" className="btn btn-primary btn-lg">
                          <span className="text" style={{ color: '#FFFFFF' }}>Detail</span>
                        </Link>
                      </div>

                    </div>
                  </div>
                </article>
                : <div></div>
              }
            </Fragment>
            :
            <Fragment />
          :
          <Fragment />
      ))}

    </div>

  )


  const cartCourseComputerSc = (
    <div className="learn-press-courses row">
      {courses.map((course) => (
        course.validation == 1 ?
          course.price == null ?

            <Fragment>
              {course.categorie == "computer science" ?

                <article id="post-486" className="col-md-4 col-12 col-sm-6 col-xs-6 lpr-course post-486 lp_course type-lp_course status-publish has-post-thumbnail hentry course_category-business course_tag-business course_tag-theme course_tag-wordpress pmpro-has-access course">
                  <div className="content">
                    <div className="thumbnail">
                      <a className="img_thumbnail">
                        <img style={{ width: '365px', height: '300px' }} src={course.CourseImg} alt="The Ultimate Ethical Hacking Boot Camp" className /> </a>
                      <span className="price">
                        <span className="course-price">{course.title}</span>
                      </span>
                      <div className="review ">
                        <div className="sc-review-stars">
                          <div className="review-stars-rated" title="0 out of 5 stars">
                            <div className="review-stars empty" />
                            <div className="review-stars filled" style={{ width: '0%' }} />
                          </div> </div>
                        <span className="vote">(0 vote)</span>
                      </div>
                      <div className="button-when-logged has-wishlist">
                      </div>
                    </div>
                    <div className="sub-content">
                      <h3 className="title">
                        <a href="the-ultimate-ethical-hacking-boot-camp/index.html">Added on 12/32/52</a>
                      </h3>

                      <div className="thim-sc-button text-right hide-separator " style={{ marginRight: '60px' }}>
                        <Link to={`/DetailCourse/${course._id}`} target="_self" className="btn btn-primary btn-lg">
                          <span className="text" style={{ color: '#FFFFFF' }}>Detail</span>
                        </Link>
                      </div>

                    </div>
                  </div>
                </article>
                : <div></div>
              }
            </Fragment>
            :
            <Fragment />
          :
          <Fragment />
      ))}

    </div>
  )

  const cartCourseSciences = (
    <div className="learn-press-courses row">
      {courses.map((course) => (
        course.validation == 1 ?
          course.price == null ?

            <Fragment>
              {course.categorie == "Sciences" ?

                <article id="post-486" className="col-md-4 col-12 col-sm-6 col-xs-6 lpr-course post-486 lp_course type-lp_course status-publish has-post-thumbnail hentry course_category-business course_tag-business course_tag-theme course_tag-wordpress pmpro-has-access course">
                  <div className="content">
                    <div className="thumbnail">
                      <a className="img_thumbnail">
                        <img style={{ width: '365px', height: '300px' }} src={course.CourseImg} alt="The Ultimate Ethical Hacking Boot Camp" className /> </a>
                      <span className="price">
                        <span className="course-price">{course.title}</span>
                      </span>
                      <div className="review ">
                        <div className="sc-review-stars">
                          <div className="review-stars-rated" title="0 out of 5 stars">
                            <div className="review-stars empty" />
                            <div className="review-stars filled" style={{ width: '0%' }} />
                          </div> </div>
                        <span className="vote">(0 vote)</span>
                      </div>
                      <div className="button-when-logged has-wishlist">
                      </div>
                    </div>
                    <div className="sub-content">
                      <h3 className="title">
                        <a href="the-ultimate-ethical-hacking-boot-camp/index.html">Added on 12/32/52</a>
                      </h3>

                      <div className="thim-sc-button text-right hide-separator " style={{ marginRight: '60px' }}>
                        <Link to={`/DetailCourse/${course._id}`} target="_self" className="btn btn-primary btn-lg">
                          <span className="text" style={{ color: '#FFFFFF' }}>Detail</span>
                        </Link>
                      </div>

                    </div>
                  </div>
                </article>
                : <div></div>
              }
            </Fragment>
            :
            <Fragment />
          :
          <Fragment />
      ))}

    </div>

  )

  const cartCourseOther = (
    <div className="learn-press-courses row">
      {courses.map((course) => (
        course.validation == 1 ?
          course.price == null ?

            <Fragment>
              {course.categorie == "other" ?

                <article id="post-486" className="col-md-4 col-12 col-sm-6 col-xs-6 lpr-course post-486 lp_course type-lp_course status-publish has-post-thumbnail hentry course_category-business course_tag-business course_tag-theme course_tag-wordpress pmpro-has-access course">
                  <div className="content">
                    <div className="thumbnail">
                      <a className="img_thumbnail">
                        <img style={{ width: '365px', height: '300px' }} src={course.CourseImg} alt="The Ultimate Ethical Hacking Boot Camp" className /> </a>
                      <span className="price">
                        <span className="course-price">{course.title}</span>
                      </span>
                      <div className="review ">
                        <div className="sc-review-stars">
                          <div className="review-stars-rated" title="0 out of 5 stars">
                            <div className="review-stars empty" />
                            <div className="review-stars filled" style={{ width: '0%' }} />
                          </div> </div>
                        <span className="vote">(0 vote)</span>
                      </div>
                      <div className="button-when-logged has-wishlist">
                      </div>
                    </div>
                    <div className="sub-content">
                      <h3 className="title">
                        <a href="the-ultimate-ethical-hacking-boot-camp/index.html">Added on 12/32/52</a>
                      </h3>

                      <div className="thim-sc-button text-right hide-separator " style={{ marginRight: '60px' }}>
                        <Link to={`/DetailCourse/${course._id}`} target="_self" className="btn btn-primary btn-lg">
                          <span className="text" style={{ color: '#FFFFFF' }}>Detail</span>
                        </Link>
                      </div>

                    </div>
                  </div>
                </article>
                : <div></div>
              }
            </Fragment>
            :
            <Fragment />
          :
          <Fragment />
      ))}

    </div>
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
              <ul itemProp="breadcrumb" itemScope itemType="http://schema.org/BreadcrumbList" id="breadcrumbs" className="breadcrumbs"><li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem"><a itemProp="item" href="/" title="Home"><span itemProp="name">Home</span></a><meta itemProp="position" content={1} /><span className="breadcrum-icon"><i className="fa fa-angle-right" aria-hidden="true" /></span></li><li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem"><span itemProp="name" title="All courses">Free courses</span><meta itemProp="position" content={2} /></li></ul> </div>
          </div>
        </div>
        <div id="top-sidebar-courses">
          <div >

            <div className="vc_row wpb_row vc_row-fluid overflow top-courses-overflow vc_custom_1502273625937 vc_row-has-fill vc_row-no-padding"><div className="wpb_column vc_column_container vc_col-sm-12"><div className="vc_column-inner"><div className="wpb_wrapper"><div className="thim-sc-heading text-center layout-2 ">
              <div className="heading-content">
                <h3 className="primary-heading">Free Courses</h3> </div>
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

                    {isBusiness ? cartCourseBusiness : isSciences ? cartCourseSciences : isComputerSc ? cartCourseComputerSc : isOther ? cartCourseOther : cartAllCourse}




                  </div>
                </div> </div>
            </article>

            <aside style={{ marginTop: '100px' }} className="sidebar-courses widget-area col-md-3 ">
              <aside ><h4 className="widget-title">Categories</h4>

                <ul className="courses-categories">

                  <li className="cat-item ">
                    <a onClick={handleShowComputerSc}>computer science</a>
                  </li><br></br>
                  <li className="cat-item ">
                    <a onClick={handleShowSciences}>Sciences</a>
                  </li><br></br>
                  <li className="cat-item ">
                    <a onClick={handleShowBusiness}>business</a>
                  </li><br></br>
                  <li className="cat-item ">
                    <a onClick={handleShowOther}>other</a>
                  </li><br></br>


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
              <aside id="media_image-3" className="widget widget_media_image"></aside> <aside id="recent-posts-3" className="widget widget_recent_entries">

              </aside>
            </aside>
          </div></div> </section>
      </div>


    </div>
  )
}

export default Courses
