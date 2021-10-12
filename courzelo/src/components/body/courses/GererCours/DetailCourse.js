import React, { Fragment, useState, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCourses } from '../../../../redux/actions/courseAction';
import { getAllSubscribe } from '../../../../redux/actions/subscribeAction';
import { useParams, useHistory, Link } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert';
import { getAllCoursesByUser } from '../../../../redux/actions/panierAction';



function DetailCourse() {
  const auth = useSelector(state => state.auth)

  const { id } = useParams();
  const { user } = auth;
  const token = useSelector(state => state.token)
  const courses = useSelector((state) => state.courses);
  const subscribes = useSelector((state) => state.subscribes);




  const paniers = useSelector((state) => state.paniers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
    dispatch(getAllCoursesByUser(id, user._id,token));
    dispatch(getAllSubscribe(id, user._id));

  }, [dispatch]);


  console.log("hello subscribe", subscribes)


  const submitHandler = async (e) => {
    if (courses.length !== 0) {
      courses.forEach(course => {
        if (course._id === id) {
          const newCourse = {
            idUser: user._id,
            idCourse: id,
            title: course.title,
            time: course.time,
            CourseImg: course.CourseImg,
            price: course.price,

          }
          try {
            axios.post("/panier", newCourse, {
              headers: { Authorization: token }
            });

          } catch (err) { }
        }
      }
      )

    }
  }
  const submitttHandler = async (e) => {

    if (courses.length !== 0) {
      courses.forEach(course => {
        if (course._id === id) {
          const Subscribed = {
            idUser: user._id,
            idCourse: id,

          }
          try {
            axios.post("/Subscribe", Subscribed, {
              headers: { Authorization: token }
            });
            document.getElementById("myButton1").value = "already subscribed";
            document.getElementById("myButton1").style.pointerEvents = 'none';
          } catch (err) { }
        }
      }
      )

    }
  }

  const alert = async (e) => {

    swal({
      title: "Are you sure?",
      text: "Are you sure you want to add this course",
      icon: "warning",
      buttons: {
        cancel: "cancel",
        catch: {
          text: "yes",
          value: "catch",
        },
        defeat: "no",
      },
    })
      .then((value) => {
        switch (value) {

          case "defeat":
            swal("this course was droped !");
            break;
          case "catch":
            swal("your", "course have been added to Cart", "success");
            submitHandler()
            document.getElementById("myButton2").value = "already in Cart";
            document.getElementById("myButton2").style.pointerEvents = 'none';
            break;
          default:
            swal("Got away safely!");
        }
      });

  }
  return (
    <div>

      {courses.map((course) => (
        <Fragment>
          {course._id == id ?
            <body className="bp-nouveau lp_course-template-default single single-lp_course postid-458 wp-embed-responsive theme-wordpress-lms wordpress-lms learnpress learnpress-page pmpro-body-has-access woocommerce-no-js pagetitle-show bg-type-color thim-body-visual-composer responsive lp_login_popup box-shadow auto-login ltr learnpress-v3 buy-through-membership course-no-free header-template-overlay thim-lp-layout-1 lp-landing wpb-js-composer js-comp-ver-6.4.1 vc_responsive no-js">


              <div id="main-content" style={{ marginTop: '50px' }}> <section className="content-area">
                <div className="page-title layout-2">
                  <div className="main-top parallax" style={{ backgroundImage: 'url(../../wp-content/uploads/sites/5/2018/10/page_title_7.jpg)' }}>
                    <span className="overlay-top-header" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }} />
                    <div className="content container">
                      <div className="text-title">
                        <h1>{course.title}</h1> </div>
                      <div className="text-description">
                        <div className="banner-description">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.<div className="price">
                          {course.price == null ?
                            <span className="course-price">Free</span>
                            :
                            <span className="course-price">£{course.price}</span>
                          }
                        </div></div> </div>
                    </div>
                  </div>
                  <div className="breadcrumb-content">
                    <div className="breadcrumbs-wrapper container">
                      <div className="learn-press-course-buttons">


                        {course.price == null ?
                          <Fragment
                          >
                            {subscribes.length == 0 ?
                              <input className="lp-button button button-purchase-course" type="button" value="subscribe now" id="myButton1" onClick={submitttHandler} style={{ backgroundColor: '#0E504A', borderRadius: '20px', fontSize: '20px', width: '250px', height: '50px', color: 'white' }}>
                              </input>
                              :
                              <Fragment
                              >
                                {subscribes.map((subscribe) => (
                                  <Fragment>
                                    {course._id == subscribe.idCourse ?
                                      <Fragment>
                                        {user._id == subscribe.idUser ?

                                          <input className="lp-button button button-purchase-course" type="button" value="already subscribed" id="myButton1" disabled style={{ backgroundColor: '#0E504A', borderRadius: '20px', fontSize: '20px', width: '250px', height: '50px', color: 'white' }}>
                                          </input>

                                          :
                                          <input className="lp-button button button-purchase-course" type="button" value="subscribe now" id="myButton1" onClick={submitttHandler} style={{ backgroundColor: '#0E504A', borderRadius: '20px', fontSize: '20px', width: '250px', height: '50px', color: 'white' }}>
                                          </input>

                                        }
                                      </Fragment>
                                      :
                                      <input className="lp-button button button-purchase-course" type="button" value="subscribe noww" id="myButton1" onClick={submitttHandler} style={{ backgroundColor: '#0E504A', borderRadius: '20px', fontSize: '20px', width: '250px', height: '50px', color: 'white' }}>
                                      </input>

                                    }
                                  </Fragment>
                                ))}
                              </Fragment>

                            }
                          </Fragment>
                          :
                          <Fragment>
                            {paniers.length == 0 ?
                              <input className="lp-button button button-purchase-course" type="button" value="Add To Cart now" id="myButton2" onClick={alert} style={{ backgroundColor: '#0E504A', borderRadius: '20px', fontSize: '20px', width: '250px', height: '50px', color: 'white' }}>
                              </input>
                              :
                              <Fragment
                              >
                                {paniers.map((panier) => (
                                  <Fragment>
                                    {user._id == panier.idUser ?
                                      <Fragment>
                                        {id == panier.idCourse ?

                                          <input className="lp-button button button-purchase-course" type="button" value="already in Cart" id="myButton2" disabled style={{ backgroundColor: '#0E504A', borderRadius: '20px', fontSize: '20px', width: '250px', height: '50px', color: 'white' }}>
                                          </input>

                                          :
                                          <input className="lp-button button button-purchase-course" type="button" value="Add To Cart now" id="myButton2" onClick={alert} style={{ backgroundColor: '#0E504A', borderRadius: '20px', fontSize: '20px', width: '250px', height: '50px', color: 'white' }}>
                                          </input>

                                        }
                                      </Fragment>
                                      :
                                      <input className="lp-button button button-purchase-course" type="button" value="Add To Cart now" id="myButton2" onClick={alert} style={{ backgroundColor: '#0E504A', borderRadius: '20px', fontSize: '20px', width: '250px', height: '50px', color: 'white' }}>
                                      </input>

                                    }
                                  </Fragment>
                                ))}
                              </Fragment>

                            }
                          
                          </Fragment>
                        }
                        <input type="hidden" name="redirect_to" />

                      </div>
                    </div>
                  </div>
                </div>
                <div className="container site-content "><div className="row"><main id="main" className="site-main col-sm-12 full-width">
                  <article id="post-444" className="sidebar-right post-444 lp_course type-lp_course status-publish has-post-thumbnail hentry course_category-web-development course_tag-business course_tag-theme course_tag-wordpress pmpro-has-access course">
                    <div className="entry-content">
                      <div id="lp-single-course" className="lp-single-course">
                        <div id="learn-press-course">
                          <div className="course-summary">
                            <div className="landing-1">
                              <div className="course-info">
                                <ul className="list-inline clearfix">
                                  <li className="list-inline-item item-author">
                                    <div className="author" itemProp="creator">
                                      <span className="avatar"><img alt src="https://secure.gravatar.com/avatar/?s=60&d=mm&r=g" srcSet="https://secure.gravatar.com/avatar/?s=120&d=mm&r=g 2x" className="avatar avatar-60 photo avatar-default" height={60} width={60} loading="lazy" /></span>
                                      <div className="info">
                                        <label>Teacher</label>
                                        <a href="#">
                                        </a>
                                      </div>
                                    </div>
                                  </li>
                                  <li className="list-inline-item item-categories">
                                    <label>Categories</label>
                                    <span className="cat-links"><a href="../../course-category/web-development/index.html" rel="tag">Web Development</a></span> </li>
                                  <li className="list-inline-item item-students">
                                    <label>Students</label>
                                    169 (Registered) </li>
                                  <li className="list-inline-item item-review">
                                    <label>Review</label>
                                    <div className="review-stars-rated" title="0 out of 5 stars">
                                      <div className="review-stars empty" />
                                      <div className="review-stars filled" style={{ width: '0%' }} />
                                    </div>(0 Review) </li>
                                </ul>
                              </div>
                              <div className="course-thumbnail">
                                <img src="../../wp-content/uploads/sites/5/2017/06/shutterstock_184641842-5-e1503481994491-1000x500.jpg" alt="shutterstock" title="shutterstock" /> <a href="https://www.youtube.com/watch?v=TtoHkSuKJwE" className="play-button video-thumbnail">
                                  <span className="video-thumbnail hvr-push" />
                                </a>
                                <div className="time">
                                  <div className="date-start">21</div>
                                  <div className="month-start">Jul</div>
                                </div>
                              </div>
                              <div className="course-landing-summary has-social">

                                <div className="content-landing-1">
                                  <div className="course-meta">
                                  </div>

                                  <div className="course-description" id="learn-press-course-description">
                                    <div id="tab-overview">
                                      <h4>Course Description</h4>
                                      <p>If you are a newbie to managing a WordPress website, then congratulations! You are here at the right track with us because we are going to introduce you one of the most basic knowledge when owning a WordPress page: how to find your site the best WordPress Hosting service. This process is often overlooked by most of the website owners. But it can be considered the most important key point to bring your site to stand out of the crowd. A great hosting service could help you to improve SEO and increase sales as well.</p>
                                      <h4>Certification</h4>
                                      <p>If you are a newbie to managing a WordPress website, then congratulations! You are here at the right track with us because we are going to introduce you one of the most basic knowledge when owning a WordPress page: how to find your site the best WordPress Hosting service. This process is often overlooked by most of the website owners. But it can be considered the most important key point to bring your site to stand out of the crowd. A great hosting service could help you to improve SEO and increase sales as well.</p>
                                      <h4>Learning Outcomes</h4>
                                      <ul>
                                        <li>Over 37 lectures and 55.5 hours of content!</li>
                                        <li>LIVE PROJECT End to End Software Testing Training Included.</li>
                                        <li>Learn Software Testing and Automation basics from a professional trainer from your own desk.</li>
                                        <li>Information packed practical training starting from basics to advanced testing techniques.</li>
                                        <li>Best suitable for beginners to advanced level users and who learn faster when demonstrated.</li>
                                        <li>Course content designed by considering current software testing technology and the job market.</li>
                                        <li>Practical assignments at the end of every session.</li>
                                        <li>Practical learning experience with live project work and examples.</li>
                                      </ul>
                                    </div>
                                  </div>

                                  <div className="course-content pt-50 pb-35">
                                    <div className="course-curriculum" id="learn-press-course-curriculum">
                                      <div className="curriculum-heading">
                                        <div className="title">
                                          <h2 className="course-curriculum-title">Course Content</h2>
                                        </div>

                                        <span className="total-lessons">Total learning: <span className="text">12 lessons</span></span>
                                        <span className="total-time">Time: <span className="text">10 weeks</span></span>
                                      </div>
                                      <ul className="curriculum-sections">
                                        <li className="section" id="section-230" >
                                          <h4 className="section-header">
                                            <span className="collapse" />
                                            Step 1&nbsp;
                                            <span className="section-description"> Introduction to this Course</span>
                                            <span className="meta">
                                              <span className="step">
                                                0/5</span>
                                            </span>
                                          </h4>
                                          <ul className="section-content">

                                            <li className="accordion" id="accordionExample" className="course-item course-item-lp_lesson course-item-459 item-preview has-status" data-type="lp_lesson">
                                              <ul>

                                                <li >

                                                  <a className="section-item-link" id="headingOne">
                                                    <span className="item-name">Phase1</span>
                                                    <span className="course-item-meta">
                                                      <button className="lp-label lp-label-preview" style={{ backgroundColor: '#1EA69A', marginLeft: '650px' }} type="button" >
                                                        <Link to={`/PhaseADetail/${id}`} >Preview</Link>
                                                      </button>
                                                    </span>
                                                  </a>
                                                </li>

                                              </ul>
                                            </li>
                                            <li className="accordion" id="accordionExample" className="course-item course-item-lp_lesson course-item-459 item-preview has-status" data-type="lp_lesson">
                                              <ul>

                                                <li >

                                                  <a className="section-item-link" id="headingOne1">
                                                    <span className="item-name">Phase2</span>
                                                    <span className="course-item-meta">
                                                      <button className="lp-label lp-label-preview" style={{ backgroundColor: '#1EA69A', marginLeft: '650px' }} type="button" >
                                                        <Link to={`/PhaseBDetail/${id}`} >Preview</Link>
                                                      </button>
                                                    </span>
                                                  </a>
                                                </li>

                                              </ul>
                                            </li>
                                            <li className="accordion" id="accordionExample" className="course-item course-item-lp_lesson course-item-459 item-preview has-status" data-type="lp_lesson">
                                              <ul>

                                                <li >

                                                  <a className="section-item-link" id="headingOne2">
                                                    <span className="item-name">Phase3</span>
                                                    <span className="course-item-meta">
                                                      <button className="lp-label lp-label-preview" style={{ backgroundColor: '#1EA69A', marginLeft: '650px' }} type="button" >
                                                        <Link to={`/PhaseCDetail/${id}`} >Preview</Link>
                                                      </button>
                                                    </span>
                                                  </a>
                                                </li>

                                              </ul>
                                            </li>
                                            <li className="accordion" id="accordionExample" className="course-item course-item-lp_lesson course-item-459 item-preview has-status" data-type="lp_lesson">
                                              <ul>

                                                <li >

                                                  <a className="section-item-link" id="headingOne3">
                                                    <span className="item-name">Phase4</span>
                                                    <span className="course-item-meta">
                                                      <button className="lp-label lp-label-preview" style={{ backgroundColor: '#1EA69A', marginLeft: '650px' }} type="button" >
                                                        <Link to={`/PhaseDDetail/${id}`} >Preview</Link>
                                                      </button>
                                                    </span>
                                                  </a>
                                                </li>

                                              </ul>
                                            </li>


                                          </ul>
                                        </li>
                                        <li className="section" id="section-231" data-id={231}>
                                          <h4 className="section-header">
                                            <span className="collapse" />
                                            Step 2&nbsp;
                                            <span className="section-description">Chapitres to this course</span>
                                            <span className="meta">
                                              <span className="step">
                                                0/3</span>
                                            </span>
                                          </h4>
                                          <ul className="section-content">
                                            {console.log('coursechapitre', course.chapitres)}
                                            {course.chapitres.map((detailChapitres) => (
                                              detailChapitres.map((coursee) => (
                                                <li className="course-item course-item-lp_lesson course-item-464 item-locked" data-type="lp_lesson">
                                                  <span className="course-format-icon"><i className="fa fa-file-o" /></span>

                                                  <div className="section-item-link">
                                                    {<span className="item-name">chapitre{coursee.n}</span>}
                                                    <span className="course-item-meta">
                                                      <button className="lp-label lp-label-preview" style={{ backgroundColor: '#1EA69A', marginLeft: '-170px' }} type="button" >
                                                        <Link to={`/chapitre${coursee.n}Detail/${id}`} >Preview</Link>
                                                      </button>
                                                    </span>
                                                  </div>
                                                </li>))
                                            ))}
                                          </ul>
                                        </li>
                                        <li className="section" id="section-232" data-id={232}>
                                          <h4 className="section-header">
                                            <span className="collapse" />
                                            Step 3&nbsp;
                                            <span className="section-description"> Conclusion to this course</span>
                                            <span className="meta">
                                              <span className="step">
                                                0/4</span>
                                            </span>
                                          </h4>
                                          <ul className="section-content">

                                            <li className="accordion" id="accordionExample2" className="course-item course-item-lp_lesson course-item-459 item-preview has-status" data-type="lp_lesson">
                                              <ul>

                                                <li >

                                                  <a className="section-item-link" id="headingOnec">
                                                    <span className="item-name">Phase1</span>
                                                    <span className="course-item-meta">
                                                      <button className="lp-label lp-label-preview" style={{ backgroundColor: '#1EA69A', marginLeft: '650px' }} type="button" >
                                                        <Link to={`/PhaseEDetail/${id}`} >Preview</Link>
                                                      </button>
                                                    </span>
                                                  </a>
                                                </li>

                                              </ul>
                                            </li>
                                            <li className="accordion" className="course-item course-item-lp_lesson course-item-459 item-preview has-status" data-type="lp_lesson">
                                              <ul>

                                                <li >

                                                  <a className="section-item-link" id="headingOne1c">
                                                    <span className="item-name">Phase2</span>
                                                    <span className="course-item-meta">
                                                      <button className="lp-label lp-label-preview" style={{ backgroundColor: '#1EA69A', marginLeft: '650px' }} type="button" >
                                                        <Link to={`/PhaseFDetail/${id}`} >Preview</Link>
                                                      </button>
                                                    </span>
                                                  </a>
                                                </li>

                                              </ul>
                                            </li>
                                            <li className="accordion" id="accordionExample2" className="course-item course-item-lp_lesson course-item-459 item-preview has-status" data-type="lp_lesson">
                                              <ul>

                                                <li >

                                                  <a className="section-item-link" id="headingOne2">
                                                    <span className="item-name">Phase3</span>
                                                    <span className="course-item-meta">
                                                      <button className="lp-label lp-label-preview" style={{ backgroundColor: '#1EA69A', marginLeft: '650px' }} type="button" >
                                                        <Link to={`/PhaseGDetail/${id}`} >Preview</Link>
                                                      </button>
                                                    </span>
                                                  </a>
                                                </li>

                                              </ul>
                                            </li>
                                            <li className="accordion" id="accordionExample2" className="course-item course-item-lp_lesson course-item-459 item-preview has-status" data-type="lp_lesson">
                                              <ul>

                                                <li >

                                                  <a className="section-item-link" id="headingOne3">
                                                    <span className="item-name">Phase4</span>
                                                    <span className="course-item-meta">
                                                      <button className="lp-label lp-label-preview" style={{ backgroundColor: '#1EA69A', marginLeft: '650px' }} type="button" >
                                                        <Link to={`/PhaseHDetail/${id}`} >Preview</Link>
                                                      </button>
                                                    </span>
                                                  </a>
                                                </li>

                                              </ul>
                                            </li>


                                          </ul>
                                        </li>
                                        <li className="section" id="section-231" data-id={231}>
                                          <h4 className="section-header">
                                            <span className="collapse" />
                                            Step 4&nbsp;
                                            <span className="section-description">quiz</span>
                                            <span className="meta">
                                              <span className="step">
                                                0/3</span>
                                            </span>
                                          </h4>
                                          <ul className="section-content">

                                            <li className="course-item course-item-lp_lesson course-item-464 item-locked" data-type="lp_lesson">
                                              <span className="course-format-icon"><i className="fa fa-file-o" /></span>

                                              <div className="section-item-link">
                                                {<span className="item-name">quiz</span>}
                                                <span className="course-item-meta">
                                                  <button className="lp-label lp-label-preview" style={{ backgroundColor: '#1EA69A', marginLeft: '-170px' }} type="button" >
                                                    <Link to={`/QuizDetail/${id}`} >Preview</Link>
                                                  </button>
                                                </span>
                                              </div>
                                            </li>
                                          </ul>
                                        </li></ul>
                                    </div>


                                  </div>
                                  <div id="tab-instructor" style={{ height: 40 }} />
                                  <div className="course-author">
                                    <h3>Instructor</h3>
                                    <div className="thim-course-author teacher">
                                      <div className="author-avatar">
                                        <img alt src="https://secure.gravatar.com/avatar/?s=150&d=mm&r=g" srcSet="https://secure.gravatar.com/avatar/?s=300&d=mm&r=g 2x" className="avatar avatar-150 photo avatar-default" height={150} width={150} loading="lazy" />
                                        <ul className="social-link">
                                        </ul>
                                      </div>
                                      <div className="author-bio">
                                        <div className="name">
                                          <a href="#" /> </div>
                                      </div>
                                    </div>
                                  </div>



                               
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> </div>
                  </article>
                </main></div></div> </section>
              </div>

            </body>
            : <div></div>} </Fragment>
      ))}
    </div>
  )
}

export default DetailCourse
