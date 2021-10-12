import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCourses } from '../../../../redux/actions/courseAction';

function CourseByCategory() {
  const {categorie} = useParams();
  const courses = useSelector((state) => state.courses);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
    
  }, [ dispatch]);
 
    return (
        <div>
        
        <div id="main-content"> <section className="content-area">
    <div className="page-title layout-1" style={{marginBottom:'100px'}}>
      <div className="main-top parallax" style={{backgroundImage: 'url(../../wp-content/uploads/sites/5/2018/10/page_title_7.jpg)'}}>
        <span className="overlay-top-header" style={{backgroundColor: 'rgba(0,0,0,0.6)'}} />
        <div className="content container">
          <div className="row">
            <div className="text-title col-md-6">
              <h1>Courzelo</h1> </div>
            <div className="text-description col-md-6">
              <div className="banner-description"><p><strong className="br">The best demo education </strong> It is a long established fact that a reade.</p></div> </div>
          </div>
        </div>
      </div>
      <div className="breadcrumb-content ">
        <div className="breadcrumbs-wrapper container">
          <ul itemProp="breadcrumb" itemScope itemType="http://schema.org/BreadcrumbList" id="breadcrumbs" className="breadcrumbs"><li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem"><a itemProp="item" href="../../index.html" title="Home"><span itemProp="name">Home</span></a><meta itemProp="position" content={1} /><span className="breadcrum-icon"><i className="fa fa-angle-right" aria-hidden="true" /></span></li><li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem"><a itemProp="item" href="../index.html" title="Collections"><span itemProp="name">Collections</span></a><meta itemProp="position" content={2} /><span className="breadcrum-icon"><i className="fa fa-angle-right" aria-hidden="true" /></span></li><li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem"><span itemProp="name" title="WordPress">{categorie}</span><meta itemProp="position" content={3} /></li></ul> </div>
      </div>
    </div>
    <div className="container site-content "><div className="row"><main id="main" className="site-main col-sm-12 full-width">
          <div id="post-211" className="post-211 lp_collection type-lp_collection status-publish has-post-thumbnail pmpro-has-access" itemScope itemType="http://schema.org/CreativeWork">
            <div className="collection-summary">
              <div className="learn-press-collections learn-press-courses" id="learn-press-collection-211">
                <div className="learn-press-courses row">
                  
                {courses.map((course) => (
                   
                  
          <Fragment>
 {course.categorie == categorie ?
                  <article id="post-486" className="col-md-4 col-12 col-sm-6 col-xs-6 lpr-course post-486 lp_course type-lp_course status-publish has-post-thumbnail course_category-business course_tag-business course_tag-theme course_tag-wordpress pmpro-has-access course">
                    <div className="content">
                      <div className="thumbnail">
                        <a href="../../courses/the-ultimate-ethical-hacking-boot-camp/index.html" className="img_thumbnail">
                          <img  style = {{ width:'365px',height:'300px'}}  src={course.CourseImg} alt="The Ultimate Ethical Hacking Boot Camp" className /> </a>
                        <span className="price">
                          <span className="course-price">{course.title}</span>
                        </span>
                        
                      </div>
                      <div className="sub-content">
                        <h3 className="title">
                          <a href="../../courses/the-ultimate-ethical-hacking-boot-camp/index.html">{course.description}</a>
                        </h3>
                        <div className="date-comment">
                          <span className="date-meta">July 21, 2017</span> </div>
                        
                      </div>
                    </div>
                   </article>
                    : <div></div>}
                   </Fragment>
                    
                            ))}
                </div> <div className="learn-press-pagination">
                  <ul className="page-numbers">
                    <li><span aria-current="page" className="page-numbers current">1</span></li>
                    <li><a className="page-numbers" href="page/2/index.html">2</a></li>
                    <li><a className="next page-numbers" href="page/2/index.html">&gt;</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main></div></div> </section>
</div>


        </div>
    )

    
}

export default CourseByCategory
