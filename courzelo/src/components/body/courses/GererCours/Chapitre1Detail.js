import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCourses } from '../../../../redux/actions/courseAction';
import './quiz.css';

function Chapitre1Detail() {
  
  const {id} = useParams();
  const [widthValue, setwidthValue] = useState(0);
  const [timeValue, settimeValue] = useState(0);
  const [score, setScore] = useState(0);
  const courses = useSelector((state) => state.courses);
  
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(getCourses()); 
  
  
  }, [ dispatch]);
  
  let counterLine;
  let counter;

  function startTimer(time,temp1){
    //if timer is less than 9
    let i="corect"+temp1;
    let h="inc1"+temp1;
   let L="inc2"+temp1;
   let T="time"+temp1;
   let b="bt"+temp1;
    counter = setInterval(timer, 1000);
    function timer(){
      if(time >0 ){
      time--;
    }else{document.getElementById(i).style.pointerEvents ='none'
    document.getElementById(h).style.pointerEvents ='none'
    document.getElementById(L).style.pointerEvents ='none'
    document.getElementById(b).style.display ='block'}
      document.getElementById(T).innerHTML = time; //changing the value of timeCount with time value
         //decrement the time value
        if(time < 10){ //if timer is less than 9
            let addZero = document.getElementById(T).innerHTML; 
            document.getElementById(T).innerHTML= "0" + addZero; //add a 0 before time value
        }
           
          
    }
}
  function startTimerLine(time,timeValue,temp1){
    let L="line"+temp1;
    let T="time"+temp1;
    counterLine = setInterval(timer, (timeValue*2)-3);
    function timer(){
     
     
        time += 1;
     
       //upgrading time value with 1
        document.getElementById(L).style.width = time + 250+"px"; //increasing width of time_line with px by time value
    
        if(document.getElementById(T).innerHTML == "00" ){ //if time value is greater than 549
          document.getElementById(L).style.display ='none';
        }
    }
}

  const AfficheSection = async (temp1,temp2) => {
    let i="sec"+temp1;
    let j="sec"+temp2;
    document.getElementById(i).style.display = 'none';
    if(temp1 <11)
    {
    startTimer(15,temp1);
    startTimerLine(widthValue,15,temp1);
  } 
  
    if(courses.length !== 0){
      courses.forEach(course => {
            if(course._id === id){
              course.chapitres.forEach(ch => {
               if(ch.n == 0){
                 console.log('hahahhaahha',ch.time);
            
               }
              })
                
            }
        })
    }
if (document.getElementById(j).style.display == 'none')
document.getElementById(j).style.display = 'block';
else
document.getElementById(j).style.display = 'none';
   
 }


const Afficheoptioncorrect = async (temp) => {
   let i="correct"+temp;
   let h="inc1"+temp;
  let L="inc2"+temp;
  let b="bt"+temp;
  let Line="line"+temp;
  let T="time"+temp;
  setScore(score+1)
  
  document.getElementById(i).style.backgroundColor = '#9cd377';
  document.getElementById(i).style.pointerEvents ='none'

  document.getElementById(h).style.pointerEvents ='none'
  document.getElementById(L).style.pointerEvents ='none'
  document.getElementById(b).style.display = 'block';
  document.getElementById(Line).style.display ='none';
  document.getElementById(T).style.display ='none';
}

const Afficheoptionincorrect1 = async (temp) => {
  let i="correct"+temp;
  let j="incorrect1"+temp;
  let k="corect"+temp;
  let h="inc1"+temp;
  let L="inc2"+temp;
  let b="bt"+temp;
  let Line="line"+temp;
  let T="time"+temp;
  document.getElementById(i).style.backgroundColor = '#9cd377';
  document.getElementById(j).style.backgroundColor = '#f0baba';
  document.getElementById(k).style.pointerEvents ='none'
  document.getElementById(h).style.pointerEvents ='none'
  document.getElementById(L).style.pointerEvents ='none'
  document.getElementById(b).style.display = 'block';
  document.getElementById(Line).style.display ='none';
  document.getElementById(T).style.display ='none';
}
const Afficheoptionincorrect2 = async (temp) => {
  let i="correct"+temp;
  let j="incorrect2"+temp;
  let k="corect"+temp;
  let h="inc1"+temp;
  let L="inc2"+temp;
  let b="bt"+temp;
  let Line="line"+temp;
  let T="time"+temp;
  document.getElementById(i).style.backgroundColor = '#9cd377';
  document.getElementById(j).style.backgroundColor = '#f0baba';
  document.getElementById(k).style.pointerEvents ='none'
  document.getElementById(h).style.pointerEvents ='none'
  document.getElementById(L).style.pointerEvents ='none'
  document.getElementById(b).style.display = 'block';
  document.getElementById(Line).style.display ='none';
  document.getElementById(T).style.display ='none';
}
console.log('score',score)
    return (
     
        <div >
         {courses.map((course) => (
            <Fragment>
            {course._id == id ?
     <body  className="bp-nouveau lp_course-template-default single single-lp_course postid-458 wp-embed-responsive theme-wordpress-lms wordpress-lms learnpress learnpress-page pmpro-body-has-access woocommerce-no-js pagetitle-show bg-type-color thim-body-visual-composer responsive lp_login_popup box-shadow auto-login ltr learnpress-v3 in-membership course-free header-template-overlay thim-lp-layout-1 lp-landing wpb-js-composer js-comp-ver-6.4.1 vc_responsive course-item-popup viewing-course-item viewing-course-item-459 course-item-lp_lesson no-js">
 
     <div id="main-content">
  <section className="content-area">
    <div className="container site-content "><div className="row"><main id="main" className="site-main col-sm-12 full-width">
          <article id="post-486" className="post-486 lp_course type-lp_course status-publish has-post-thumbnail hentry course_category-business course_tag-business course_tag-theme course_tag-wordpress pmpro-has-access course">
            <div className="entry-content" >
              <div id="lp-single-course" className="lp-single-course" >
                <div id="learn-press-course" className="course-summary">
                <div id="tab-curriculum" style={{height: 68}} />
                  <div className="course-curriculum" id="learn-press-course-curriculum"   style={{marginTop:'28px'}}>
                    <nav className="thim-font-heading learn-press-breadcrumb" itemProp="breadcrumb">
                      <a href="/">Home</a> <span className="delimiter">/</span> <a href="/course">Courses</a>
                      <span className="delimiter">/</span>  <span className="delimiter"></span>
                      <span className="item-name">{course.title}</span></nav>
                    <ul className="curriculum-sections">
                      <li className="section" id="section-255" data-id={255}>
                        <h4 className="section-header">
                          <span className="collapse" />
                          Section 1&nbsp;
                          <span className="section-description">Introduction</span>
                          <span className="meta">
                            <span className="step">
                              0/7</span>
                          </span>
                        </h4>
                        <ul className="section-content">
                          <li className="course-item course-item-lp_lesson course-item-487  item-preview has-status" data-type="lp_lesson">
                            <span className="course-format-icon"><i className="fa fa-file-o" /></span>
                            <div className="meta-rank">
                              <div className="rank"><span className="label">Lecture</span>1.1</div>
                            </div>
                            <a className="section-item-link" href={`/PhaseADetail/${id}`}>
                              <span className="item-name">Phase 1</span>
                              <span className="course-item-meta">
                                <span className="item-meta duration">30 min</span>
                                <span className="lp-label lp-label-preview">Preview</span>
                              </span>
                            </a>
                          </li>
                          <li className="course-item course-item-lp_lesson course-item-488 item-preview has-status" data-type="lp_lesson">
                            <span className="course-format-icon"><i className="fa fa-file-o" /></span>
                            <div className="meta-rank">
                              <div className="rank"><span className="label">Lecture</span>1.2</div>
                            </div>
                            <a className="section-item-link" href={`/PhaseBDetail/${id}`}>
                              <span className="item-name">Phase 2</span>
                              <span className="course-item-meta">
                                <span className="item-meta duration">30 min</span>
                                <span className="lp-label lp-label-preview">Preview</span>
                              </span>
                            </a>
                          </li>
                          <li className="course-item course-item-lp_lesson course-item-489 item-preview has-status" data-type="lp_lesson">
                            <span className="course-format-icon"><i className="fa fa-play" /></span>
                            <div className="meta-rank">
                              <div className="rank"><span className="label">Lecture</span>1.3</div>
                            </div>
                            <a className="section-item-link" href={`/PhaseCDetail/${id}`}>
                              <span className="item-name">Phase 3</span>
                              <span className="course-item-meta">
                                <span className="item-meta duration">30 min</span>
                                <span className="lp-label lp-label-preview">Preview</span>
                              </span>
                            </a>
                          </li>
                          <li className="course-item course-item-lp_lesson course-item-490 item-preview has-status" data-type="lp_lesson">
                            <span className="course-format-icon"><i className="fa fa-file-o" /></span>
                            <div className="meta-rank">
                              <div className="rank"><span className="label">Lecture</span>1.4</div>
                            </div>
                            <a className="section-item-link" href={`/PhaseDDetail/${id}`}>
                              <span className="item-name">Phase 4</span>
                              <span className="course-item-meta">
                                <span className="item-meta duration">30 min</span>
                                <span className="lp-label lp-label-preview">Preview</span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="section" id="section-256" data-id={256}>
                        <h4 className="section-header">
                          <span className="collapse" />
                          Section 2&nbsp;
                          <span className="section-description">Chapitres</span>
                          <span className="meta">
                            <span className="step">
                              0/4</span>
                          </span>
                        </h4>
                        <ul className="section-content">
                        {course.chapitres.map((detailChapitres) => (
        detailChapitres.map((coursee) => (
                          <li className="course-item course-item-lp_lesson course-item-492 item-preview has-status" data-type="lp_lesson">
                            <span className="course-format-icon"><i className="fa fa-file-o" /></span>
                            <div className="meta-rank">
                              <div className="rank"><span className="label">Lecture</span>2.1</div>
                            </div>
                            <a className="section-item-link" href={`/chapitre${coursee.n}Detail/${id}`}>
                           
                              <span className="item-name">chapitre{coursee.n}</span>
                              <span className="course-item-meta">
                                <span className="item-meta duration">30 min</span>
                                <span className="lp-label lp-label-preview">Preview</span>
                              </span>
                            </a>
                          </li>))
      ))}
                        </ul>
                      </li>

                      <li className="section" id="section-255" data-id={255}>
                        <h4 className="section-header">
                          <span className="collapse" />
                          Section 3&nbsp;
                          <span className="section-description">Conclusion</span>
                          <span className="meta">
                            <span className="step">
                              0/7</span>
                          </span>
                        </h4>
                        <ul className="section-content">
                          <li className="course-item course-item-lp_lesson course-item-487  item-preview has-status" data-type="lp_lesson">
                            <span className="course-format-icon"><i className="fa fa-file-o" /></span>
                            <div className="meta-rank">
                              <div className="rank"><span className="label">Lecture</span>3.1</div>
                            </div>
                            <a className="section-item-link" href={`/PhaseEDetail/${id}`}>
                              <span className="item-name">Phase 1</span>
                              <span className="course-item-meta">
                                <span className="item-meta duration">30 min</span>
                                <span className="lp-label lp-label-preview">Preview</span>
                              </span>
                            </a>
                          </li>
                          <li className="course-item course-item-lp_lesson course-item-488 item-preview has-status" data-type="lp_lesson">
                            <span className="course-format-icon"><i className="fa fa-file-o" /></span>
                            <div className="meta-rank">
                              <div className="rank"><span className="label">Lecture</span>3.2</div>
                            </div>
                            <a className="section-item-link" href={`/PhaseFDetail/${id}`}>
                              <span className="item-name">Phase 2</span>
                              <span className="course-item-meta">
                                <span className="item-meta duration">30 min</span>
                                <span className="lp-label lp-label-preview">Preview</span>
                              </span>
                            </a>
                          </li>
                          <li className="course-item course-item-lp_lesson course-item-489 item-preview has-status" data-type="lp_lesson">
                            <span className="course-format-icon"><i className="fa fa-play" /></span>
                            <div className="meta-rank">
                              <div className="rank"><span className="label">Lecture</span>3.3</div>
                            </div>
                            <a className="section-item-link" href={`/PhaseGDetail/${id}`}>
                              <span className="item-name">Phase 3</span>
                              <span className="course-item-meta">
                                <span className="item-meta duration">30 min</span>
                                <span className="lp-label lp-label-preview">Preview</span>
                              </span>
                            </a>
                          </li>
                          <li className="course-item course-item-lp_lesson course-item-490 item-preview has-status" data-type="lp_lesson">
                            <span className="course-format-icon"><i className="fa fa-file-o" /></span>
                            <div className="meta-rank">
                              <div className="rank"><span className="label">Lecture</span>3.4</div>
                            </div>
                            <a className="section-item-link" href={`/PhaseHDetail/${id}`}>
                              <span className="item-name">Phase 4</span>
                              <span className="course-item-meta">
                                <span className="item-meta duration">30 min</span>
                                <span className="lp-label lp-label-preview">Preview</span>
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  
                  {course.chapitres.map((detailChapitres) => (
        detailChapitres.map((coursee) => (
          <Fragment>
                  {coursee.n == 1 ?
                  <div className="course-curriculum" id="learn-press-course-curriculum"   style={{marginTop:'28px',marginLeft:'400px',width:'1520px'}}>
                  <div className="content-item-wrap">
                        <div className="learn-press-video-intro thim-lesson-media" style={{height:'550px'}}>
                          <div className="wrapper" >
                            <iframe style={{width:'980px',height:'550px'}}  src="https://www.youtube.com/embed/TtoHkSuKJwE?rel=0&showinfo=0" frameBorder={0} allowFullScreen /> </div>
                        </div>
                        <div className="content-item-summary">
                          <h3 className="course-item-title question-title">A Note On Asking For Help</h3>
                          <div className="content-item-description lesson-description"><h3>Course Description</h3>
                            <p>If you are a newbie to managing a WordPress website, then congratulations! You are here at the right track with us because we are going to introduce you one of the most basic knowledge when owning a WordPress page: how to find your site the best WordPress Hosting service. This process is often overlooked by most of the website owners. But it can be considered the most important key point to bring your site to stand out of the crowd. A great hosting service could help you to improve SEO and increase sales as well.</p>
                            <h4><img loading="lazy" className="aligncenter wp-image-3983 size-full" src="../../../../../wp-content/uploads/2017/08/formula_screenshot.png" alt width={594} height={378} /></h4>
                            <h4>{coursee.text1}</h4>
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
                            
                            <p>Learn how to use <a href="https://wordpress.org/plugins/learnpress/"><strong>LearnPress</strong> </a>WordPress Learning Management System to Create an online course for your own website. Creating courses with LearnPress is easy, fast and convenience. There are many options, features that can fit any of your purpose.</p>
                            <p>LearnPress LMS is the best WordPress LMS Plugin that is being used by more than 20,000 websites, schools, universities and educational institutions around the world.</p>
                            <p>Using LearnPress with a nice theme, you can create online course websites like Udemy, Coursera and other popular onlince course websites. Please read this tutorial: How to create a Udemy or Coursera clone easily with LearnPress: How to create a Udemy or Coursera clone easily with LearnPress</p>
                            <h3>The best education WordPress themes:</h3>
                            <ul>
                              <li><a href="https://themeforest.net/item/education-wordpress-theme-education-wp/14058034?ref=thimpress">Education WP</a></li>
                              <li><a href="https://themeforest.net/item/speaker-and-life-coach-wordpress-theme-coaching-wp/17097658?ref=thimpress">Coaching WordPress Theme</a></li>
                              <li><a href="https://themeforest.net/item/lms-wordpress-theme-elearning-wp/11797847?ref=thimpress">eLearning WordPress Theme</a></li>
                            </ul>
                            <h3>ONLINE COURSE CREATION TUTORIALS:</h3>
                            <p>1. <a href="https://thewpcourse.com/adding-membership-plans-in-learnpress-for-your-education-wordpress-website/"><em>Adding Membership plans in LearnPress for your education WordPress website</em></a></p>
                            <p>2. <a href="https://thewpcourse.com/how-coupon-works-in-learnpress-and-eduma/"><em>How Coupon works in LearnPress and Eduma</em></a><br />
                              3. <a href="https://thewpcourse.com/how-instructor-feature-works-in-learnpress-and-eduma/"><em>How instructor feature works in LearnPress and Eduma</em></a><br />
                              4. <a href="https://thewpcourse.com/how-coupon-works-in-learnpress-and-eduma/"><em>How Coupon works in LearnPress and Eduma</em></a><br />
                              5. <a href="https://thewpcourse.com/how-to-create-certificate-in-learnpress-and-get-more-students-to-your-course/"><em>How to create Certificate in LearnPress and get more students to your course</em></a></p>
                          </div>
                          <h3>QUIZ:</h3>
                        <div className="info_box" id="sec1">
    <div className="info-title">
      <span>Some Rules of this Quiz</span>
    </div>
    <div className="info-list">
      <div className="info">
        1. You will have only <span>15 seconds</span> per each question.
      </div>
      <div className="info">
        2. Once you select your answer, it can't be undone.
      </div>
      <div className="info">
        3. You can't select any option once time goes off.
      </div>
      <div className="info">
        4. You can't exit from the Quiz while you're playing.
      </div>
      <div className="info">
        5. You'll get points on the basis of your correct answers.
      </div>
    </div>
    <div className="buttons">
      <button className="restart"  onClick = {() => AfficheSection(1,2)} >Continue</button>
    </div>
  </div>

  
  <div className="info_box" id="sec2" style={{display:'none'}}>
  <header className="ho">
    <div className="title" >Awesome Quiz Application</div>
    <div className="timer">
      <div className="time_left_txt">Time Left</div>
      <div className="timer_sec" id="time1" >{coursee.time}</div>
    </div>
    <div className="time_line" id="line1" />
  </header>
  <section className="so">
    <div className="que_text">
    1. {coursee.q1}
    </div>
    <div className="option_list" id="corect1" onClick = {() => Afficheoptioncorrect(1)}>
      <div className="option" id="correct1">
        <b>{coursee.rv1}</b>
      
    </div>
    </div>
    <div className="option_list" id="inc11" onClick = {() =>Afficheoptionincorrect1(1)}>
    <div className="option" id="incorrect11">
    <b>{coursee.rf1}</b>
    </div>
    </div>
    <div className="option_list" id="inc21" onClick = {() =>Afficheoptionincorrect2(1)}>
    <div className="option" id="incorrect21">
    <b>{coursee.rf2}</b>
    </div>
    </div>
    <div className="buttons" style={{marginTop:'40px'}}>
      <button style={{marginTop:'80px',display:'none'}} className="restart" id="bt1" onClick = {() => AfficheSection(2,3)}   >Next Que</button>
    </div>
    <div class="total_que">
                1 of 10 Question
            </div>
  </section>
    
    </div>
    <div className="info_box" id="sec3" style={{display:'none'}}>
  <header className="ho">
    <div className="title">Awesome Quiz Application</div>
    <div className="timer">
      <div className="time_left_txt">Time Left</div>
      <div className="timer_sec" id="time2" >{coursee.time}</div>
    </div>
    <div className="time_line" id="line2"/>
  </header>
  <section className="so">
    <div className="que_text">
    2. {coursee.q2}
    </div>
    <div className="option_list" id="corect2" onClick = {() => Afficheoptioncorrect(2)}>
      <div className="option" id="correct2" >
        <b>{coursee.rv2}</b>
      
    </div>
    </div>
    <div className="option_list" id="inc12" onClick = {() =>Afficheoptionincorrect1(2)}>
    <div className="option" id="incorrect12">
    <b>{coursee.rf21}</b>
    </div>
    </div>
    <div className="option_list" id="inc22" onClick = {() =>Afficheoptionincorrect2(2)}>
    <div className="option" id="incorrect22">
    <b>{coursee.rf22}</b>
    </div>
    </div>
    <div className="buttons" style={{marginTop:'40px'}}>
      <button style={{marginTop:'80px',display:'none'}} className="restart" id="bt2" onClick = {() => AfficheSection(3,4)}  >Next Que</button>
    </div>
    <div class="total_que">
                2 of 10 Question
            </div>
  </section>
    
    </div>
    <div className="info_box" id="sec4" style={{display:'none'}}>
  <header className="ho">
    <div className="title">Awesome Quiz Application</div>
    <div className="timer">
      <div className="time_left_txt">Time Left</div>
      <div className="timer_sec" id="time3" >{coursee.time}</div>
    </div>
    <div className="time_line" id="line3" />
  </header>
  <section className="so">
    <div className="que_text">
    3. {coursee.q3}
    </div>
    <div className="option_list" id="inc13" onClick = {() =>Afficheoptionincorrect1(3)}>
      <div className="option" id="incorrect13">
        <b>{coursee.rf31}</b>
      
    </div>
    </div>
    <div className="option_list" id="inc23" onClick = {() =>Afficheoptionincorrect2(3)}>
    <div className="option" id="incorrect23">
    <b>{coursee.rf32}</b>
    </div>
    </div>
    <div className="option_list" id="corect3" onClick = {() => Afficheoptioncorrect(3)}>
    <div className="option" id="correct3">
    <b>{coursee.rv3}</b>
    </div>
    </div>
    <div className="buttons" style={{marginTop:'40px'}}>
      <button style={{marginTop:'80px',display:'none'}} className="restart" id="bt3" onClick = {() => AfficheSection(4,5)} >Next Que</button>
    </div>
    <div class="total_que">
                3 of 10 Question
            </div>
  </section>
    
    </div>
    <div className="info_box" id="sec5" style={{display:'none'}}>
  <header className="ho">
    <div className="title">Awesome Quiz Application</div>
    <div className="timer">
      <div className="time_left_txt">Time Left</div>
      <div className="timer_sec" id="time4" >{coursee.time}</div>
    </div>
    <div className="time_line" id="line4"/>
  </header>
  <section className="so">
    <div className="que_text">
    4. {coursee.q4}
    </div>
    <div className="option_list" id="inc14" onClick = {() =>Afficheoptionincorrect1(4)}>
      <div className="option" id="incorrect14" >
        <b>{coursee.rf41}</b>
      
    </div>
    </div>
    <div className="option_list" id="corect4" onClick = {() => Afficheoptioncorrect(4)}>
    <div className="option" id="correct4">
    <b>{coursee.rv4}</b>
    </div>
    </div>
    <div className="option_list" id="inc24" onClick = {() =>Afficheoptionincorrect2(4)}>
    <div className="option" id="incorrect24">
    <b>{coursee.rf42}</b>
    </div>
    </div>
    <div className="buttons" style={{marginTop:'40px'}}>
      <button style={{marginTop:'80px',display:'none'}} className="restart" id="bt4" onClick = {() => AfficheSection(5,6)}  >Next Que</button>
    </div>
    <div class="total_que">
                4 of 10 Question
            </div>
  </section>
    
    </div>
    <div className="info_box" id="sec6" style={{display:'none'}}>
  <header className="ho">
    <div className="title">Awesome Quiz Application</div>
    <div className="timer">
      <div className="time_left_txt">Time Left</div>
      <div className="timer_sec" id="time5" >{coursee.time}</div>
    </div>
    <div className="time_line" id="line5"/>
  </header>
  <section className="so">
    <div className="que_text">
    5. {coursee.q5}
    </div>
    <div className="option_list" id="corect5" onClick = {() => Afficheoptioncorrect(5)}>
      <div className="option" id="correct5">
        <b>{coursee.rv5}</b>
      
    </div>
    </div>
    <div className="option_list" id="inc15" onClick = {() =>Afficheoptionincorrect1(5)}>
    <div className="option" id="incorrect15">
    <b>{coursee.rf51}</b>
    </div>
    </div>
    <div className="option_list" id="inc25" onClick = {() =>Afficheoptionincorrect2(5)}>
    <div className="option" id="incorrect25">
    <b>{coursee.rf52}</b>
    </div>
    </div>
    <div className="buttons" style={{marginTop:'40px'}}>
      <button style={{marginTop:'80px',display:'none'}} className="restart" id="bt5"  onClick = {() => AfficheSection(6,7)} >Next Que</button>
    </div>
    <div class="total_que">
                5 of 10 Question
            </div>
  </section>
    
    </div>
    <div className="info_box" id="sec7" style={{display:'none'}}>
  <header className="ho">
    <div className="title">Awesome Quiz Application</div>
    <div className="timer">
      <div className="time_left_txt">Time Left</div>
      <div className="timer_sec" id="time6" >{coursee.time}</div>
    </div>
    <div className="time_line" id="line6"/>
  </header>
  <section className="so">
    <div className="que_text">
    6. {coursee.q6}
    </div>
    <div className="option_list" id="corect6" onClick = {() => Afficheoptioncorrect(6)}>
      <div className="option" id="correct6">
        <b>{coursee.rv6}</b>
      
    </div>
    </div>
    <div className="option_list" id="inc16" onClick = {() =>Afficheoptionincorrect1(6)}>
    <div className="option" id="incorrect16">
    <b>{coursee.rf61}</b>
    </div>
    </div>
    <div className="option_list" id="inc26" onClick = {() =>Afficheoptionincorrect2(6)}>
    <div className="option" id="incorrect26">
    <b>{coursee.rf62}</b>
    </div>
    </div>
    <div className="buttons" style={{marginTop:'40px'}}>
      <button style={{marginTop:'80px',display:'none'}} className="restart" id="bt6" onClick = {() => AfficheSection(7,8)} >Next Que</button>
    </div>
    <div class="total_que">
                6 of 10 Question
            </div>
  </section>
    
    </div>
    <div className="info_box" id="sec8" style={{display:'none'}}>
  <header className="ho">
    <div className="title">Awesome Quiz Application</div>
    <div className="timer">
      <div className="time_left_txt">Time Left</div>
      <div className="timer_sec" id="time7" >{coursee.time}</div>
    </div>
    <div className="time_line" id="line7"/>
  </header>
  <section className="so">
    <div className="que_text">
    7. {coursee.q7}
    </div>
    <div className="option_list" id="inc17" onClick = {() =>Afficheoptionincorrect1(7)}>
      <div className="option" id="incorrect17">
        <b>{coursee.rf71}</b>
      
    </div>
    </div>
    <div className="option_list" id="inc27" onClick = {() =>Afficheoptionincorrect2(7)}>
    <div className="option" id="incorrect27">
    <b>{coursee.rf72}</b>
    </div>
    </div>
    <div className="option_list" id="corect7" onClick = {() => Afficheoptioncorrect(7)}>
    <div className="option" id="correct7">
    <b>{coursee.rv7}</b>
    </div>
    </div>
    <div className="buttons" style={{marginTop:'40px'}}>
      <button style={{marginTop:'80px',display:'none'}} className="restart" id="bt7" onClick = {() => AfficheSection(8,9)}  >Next Que</button>
    </div>
    <div class="total_que">
                7 of 10 Question
            </div>
  </section>
    
    </div>
    <div className="info_box" id="sec9" style={{display:'none'}}>
  <header className="ho">
    <div className="title">Awesome Quiz Application</div>
    <div className="timer">
      <div className="time_left_txt">Time Left</div>
      <div className="timer_sec" id="time8" >{coursee.time}</div>
    </div>
    <div className="time_line" id="line8"/>
  </header>
  <section className="so">
    <div className="que_text">
    8. {coursee.q8}
    </div>
    <div className="option_list" id="inc18" onClick = {() =>Afficheoptionincorrect1(8)}>
      <div className="option" id="incorrect18">
        <b>{coursee.rf81}</b>
      
    </div>
    </div>
    <div className="option_list" id="corect8" onClick = {() => Afficheoptioncorrect(8)}>
    <div className="option" id="correct8">
    <b>{coursee.rv8}</b>
    </div>
    </div>
    <div className="option_list" id="inc28" onClick = {() =>Afficheoptionincorrect2(8)}>
    <div className="option" id="incorrect28">
    <b>{coursee.rf82}</b>
    </div>
    </div>
    <div className="buttons" style={{marginTop:'40px'}}>
      <button style={{marginTop:'80px',display:'none'}} className="restart" id="bt8" onClick = {() => AfficheSection(9,10)}  >Next Que</button>
    </div>
    <div class="total_que">
                8 of 10 Question
            </div>
  </section>
    
    </div>
    <div className="info_box" id="sec10" style={{display:'none'}}>
  <header className="ho">
    <div className="title">Awesome Quiz Application</div>
    <div className="timer">
      <div className="time_left_txt">Time Left</div>
      <div className="timer_sec" id="time9" >{coursee.time}</div>
    </div>
    <div className="time_line" id="line9"/>
  </header>
  <section className="so">
    <div className="que_text">
    9. {coursee.q9}
    </div>
    <div className="option_list" id="inc19" onClick = {() =>Afficheoptionincorrect1(9)}>
      <div className="option" id="incorrect19">
        <b>{coursee.rf91}</b>
      
    </div>
    </div>
    <div className="option_list" id="corect9" onClick = {() => Afficheoptioncorrect(9)}>
    <div className="option" id="correct9">
    <b>{coursee.rv9}</b>
    </div>
    </div>
    <div className="option_list" id="inc29" onClick = {() =>Afficheoptionincorrect2(9)}>
    <div className="option" id="incorrect29">
    <b>{coursee.rf92}</b>
    </div>
    </div>
    <div className="buttons" style={{marginTop:'40px'}}>
      <button style={{marginTop:'80px',display:'none'}} className="restart" id="bt9"  onClick = {() => AfficheSection(10,11)}  >Next Que</button>
    </div>
    <div class="total_que">
                9 of 10 Question
            </div>
  </section>
    
    </div>

    <div className="info_box" id="sec11" style={{display:'none'}}>
  <header className="ho">
    <div className="title">Awesome Quiz Application</div>
    <div className="timer">
      <div className="time_left_txt">Time Left</div>
      <div className="timer_sec" id="time10" >{coursee.time}</div>
    </div>
    <div className="time_line" id="line10"/>
  </header>
  <section className="so">
    <div className="que_text">
    10. {coursee.q10}
    </div>
    <div className="option_list" id="corect10" onClick = {() => Afficheoptioncorrect(10)}>
      <div className="option" id="correct10">
        <b>{coursee.rv10}</b>
      
    </div>
    </div>
    <div className="option_list" id="inc110" onClick = {() =>Afficheoptionincorrect1(10)}>
    <div className="option" id="incorrect110">
    <b>{coursee.rf101}</b>
    </div>
    </div>
    <div className="option_list" id="inc210" onClick = {() =>Afficheoptionincorrect2(10)}>
    <div className="option" id="incorrect210">
    <b>{coursee.rf102}</b>
    </div>
    </div>
    <div className="buttons" style={{marginTop:'40px'}}>
      <button style={{marginTop:'80px',display:'none'}} className="restart" id="bt10" onClick = {() => AfficheSection(11,12)}  >Terminer</button>
    </div>
    <div class="total_que">
                10 of 10 Question
            </div>
  </section>
    
    </div>

  
    <div class="info_box" id="sec12" style={{display:'none'}}>
        <div class="icon" style={{marginTop:'50px',marginLeft:'300px'}}>
            <i class="fas fa-crown"></i>
        </div>
        <div className="info-title" style={{marginLeft:'170px'}}>
      <span>You've completed the Quiz!</span>
     
    </div>
    <div className="info-title" style={{marginLeft:'170px'}}>
     
      <span>You got 3 out of 5</span>
    </div>
        
        
       
    </div>

                        </div>
                        
                       
            

                       
                      </div>
                      <br/><br/><br/><br/>
                      <div className="course-item-nav">
                          <div className="next">
                            <span>Next</span>
                            <a href={`/PhaseGDetail/${id}`}>
                              Phase 2</a>
                          </div>
                        </div>
                  </div>
                  :<div></div>}
                  </Fragment>
                  ))
      ))}
                  <div   style={{marginTop:'27px'}}>
                    <div >
                   
                      <div id="course-item-content-header" className="thim-course-item-header">
                        <div className="course-item-search">
                          <form>
                            <input type="text" placeholder="Search item" />
                            <button type="button" />
                          </form>
                        </div>
                         
                        <div class="width-logo">
                <a class="no-sticky-logo" href="/" rel="home">
                  <img class="retina-logo" src="../wp-content/uploads/sites/5/2017/09/logo-2-1.png" alt="Demo eLearning II" width="131" height="45" style={{marginLeft:'1000px'}}/>
                  </a> </div>
                        <a  className="back_course" href={`/DetailCourse/${id}`}><i className="fa fa-close" /></a>
                        
                      
                        </div> 
                      
                    </div>
                  </div>
                  </div>
              </div> </div>
          </article>
        </main></div></div> </section>
</div>


</body>
 :<div></div>} </Fragment>
 ))}
        </div>
     
    )
}

export default Chapitre1Detail
