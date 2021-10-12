import React, {Fragment,useState,useCallback,useEffect} from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { getAllCourses, getCourses } from '../../../redux/actions/courseAction';
import useStyles from './GererCours/styles';
import {Link} from 'react-router-dom'

function GraduationEtudiant() {
  const token = useSelector(state => state.token);
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  useEffect(() => {
    
    dispatch(getCourses())
  }, [ dispatch(getCourses())]);
 
 
  
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
                  <div className="user-tab" >
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
                        <p className="description">you can add , update or delete your courses here...</p>
                      </div>
                    </div>
                  </div>
                  <div className="profile-tabs" >
                  <ul className="learn-press-tabs">
  <li className="courses active">
    <a href="/GererCourses">
      <i className="fa fa-book" />
      <span className="text">Courses</span>{" "}
    </a>
  </li>
  <li className="quizzes">
    <a href="QuizResults" >
      <i className="fa fa-check-square-o" />
      <span className="text">Quiz Results</span>{" "}
    </a>
  </li>
</ul>
                    <div id="learn-press-profile-content" className="tab-content">
                      <div id="profile-content-courses">
                      <ul className="lp-tab-sections">
  <li className="section-tab owned active">
    <span><a href="/GererCourses">Owned</a></span>
  </li>
  <li className="section-tab purchased">
    <a href="/GraduationEtudiant">Purchased</a>
  </li>
</ul>
<br/><br/>
<div className="learn-press-subtab-content" style={{marginTop:'-20px'}}>
 
  <table className="lp-list-table profile-list-courses profile-list-table">
    <thead>
      <tr>
        <th className="column-course">Course</th>
        <th className="column-date">Date</th>
        <th className="column-passing-grade">Passing Grade</th>
        <th className="column-status">Graduation</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="column-course">
          <a href="../../../../courses/the-complete-sql-bootcamp/index.html">
            The Complete SQL Bootcamp{" "}
          </a>
        </td>
        <td className="column-date">August 9, 2017</td>
        <td className="column-passing-grade">80%</td>
        <td className="column-status">
          
          <span className="lp-label label-failed">Failed </span>
        </td>
      </tr>
     
      
      <tr>
        <td className="column-course">
          <a href="../../../../courses/the-ultimate-ethical-hacking-boot-camp/index.html">
            The Ultimate Ethical Hacking Boot Camp{" "}
          </a>
        </td>
        <td className="column-date">August 7, 2017</td>
        <td className="column-passing-grade">80%</td>
        <td className="column-status">
         
          <span className="lp-label label-passed">Passed </span>
        </td>
      </tr>
     
      
    </tbody>
    <tfoot>
      <tr className="list-table-nav">
        <td colSpan={2} className="nav-text">
          Displaying 1 to 6 of 9 courses.{" "}
        </td>
        <td colSpan={2} className="nav-pages">
          <div className="learn-press-pagination">
            <ul className="page-numbers">
              <li>
                <span aria-current="page" className="page-numbers current">
                  1
                </span>
              </li>
              <li>
                <a className="page-numbers" href="2/index.html">
                  2
                </a>
              </li>
              <li>
                <a className="next page-numbers" href="2/index.html">
                  &gt;
                </a>
              </li>
            </ul>
          </div>
        </td>
      </tr>
    </tfoot>
  </table>
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

export default GraduationEtudiant
