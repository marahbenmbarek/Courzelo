import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCourses } from '../../../../redux/actions/courseAction';
import './quiz.css';

function QuizDetail() {
  
  const {id} = useParams();

  const [score, setScore] = useState(0);
  const courses = useSelector((state) => state.courses);
  const token = useSelector(state => state.token)
  let i=1;
  const dispatch = useDispatch();

  useEffect(() => {
  
    dispatch(getCourses()); 
  }, [ dispatch]);

  let counter;

  function startTimer(time){
    //if timer is less than 9
let k,j,m,mm,mmm;
    counter = setInterval(timer, 1000);
    function timer(){
      if(time >0 ){
      time--;
    }else{
      for (let j = 1; j < 6; j++){
      k="correct"+j;
      mm="inc1"+j;
      mmm="inc2"+j;
      document.getElementById(k).style.pointerEvents ='none'
      document.getElementById(mm).style.pointerEvents ='none'
      document.getElementById(mmm).style.pointerEvents ='none'
     if( document.getElementById(k))
     {
       document.getElementById(k).style.backgroundColor ='#9cd377'
       
       
     }}}
      document.getElementById('timerr').innerHTML = time; //changing the value of timeCount with time value
         //decrement the time value
        if(time < 10){ //if timer is less than 9
            let addZero = document.getElementById('timerr').innerHTML; 
            document.getElementById('timerr').innerHTML= "0" + addZero; //add a 0 before time value
        }
       
         
        
      
       
          
    }
}
const submitHandler = async (scoree) => {
  if(courses.length !== 0){
    courses.forEach(course => {
          if(course._id === id){
            const newQuiz = {
              idUser: course.idUser,
              idCourse: id,
              titre: course.title ,
              scoreQ: scoree
              
          }
          try {
             axios.post("/quiz", newQuiz ,{
              headers: {Authorization: token}
          });
          
            
          } catch (err) {}
        }
      }
  )
 
 }
}
  const AfficheQuiz =  () => {
    if(courses.length !== 0){
      courses.forEach(course => {
            if(course._id === id){
              
              startTimer(course.pourcentage);
            }
        })
    }
    document.getElementById('sec1').style.display = 'none';
    document.getElementById('continue').style.display = 'block';
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('timee').style.display = 'block';
  }

  const Afficheoptioncorrect =  (e,j) => {
    let c="correct"+e.target.id.substr(7);
    let a="inc1"+e.target.id.substr(7);
    let b="inc2"+e.target.id.substr(7);
    let v="Falseinc1"+e.target.id.substr(7);
    let vv="Falseinc2"+e.target.id.substr(7);
    let vvv="Truecorrect"+e.target.id.substr(7);
    document.getElementById(e.target.id).style.backgroundColor ='#1DA1F6' 
    document.getElementById(a).style.backgroundColor ='#E4E9EC'
    document.getElementById(b).style.backgroundColor ='#E4E9EC'
    document.getElementById(a).value =v
    document.getElementById(b).value =vv
    document.getElementById(c).value =vvv
  }
  const Afficheoptionincorrect1 =  (e,j) => {

    let c="correct"+e.target.id.substr(4);
    let b="inc2"+e.target.id.substr(4);
    let v="Trueinc1"+e.target.id.substr(4);
    let vv="Falseinc2"+e.target.id.substr(4);
    let vvv="Falsecorrect"+e.target.id.substr(4);
    document.getElementById(e.target.id).style.backgroundColor ='#1DA1F6'
    document.getElementById(e.target.id).value =v
    document.getElementById(b).value =vv
    document.getElementById(c).value =vvv
    document.getElementById(c).style.backgroundColor ='#E4E9EC'
    document.getElementById(b).style.backgroundColor ='#E4E9EC'
  }
  const Afficheoptionincorrect2 =  (e,j) => {
    let b="inc1"+e.target.id.substr(4);
    let c="correct"+e.target.id.substr(4);
    let v="Trueinc2"+e.target.id.substr(4);
    let vv="Falseinc1"+e.target.id.substr(4);
    let vvv="Falsecorrect"+e.target.id.substr(4);
    document.getElementById(e.target.id).style.backgroundColor ='#1DA1F6'
    document.getElementById(c).style.backgroundColor ='#E4E9EC'
    document.getElementById(b).style.backgroundColor ='#E4E9EC'
    document.getElementById(e.target.id).value =v
    document.getElementById(b).value =vv
    document.getElementById(c).value =vvv
  }

const AfficheScore = () => {
  document.getElementById('AfficheScore').style.display = 'npne';
  document.getElementById('quiz').style.display = 'none';
  document.getElementById('score').style.display = 'block';
}
  const AfficheSection =  () => {
let j;
let k;
let m;
let jj;
let v;
let mm;
let mmm;
let jjj;
let v1,v2,vT,s=0;

document.getElementById('timee').style.display = 'none';
document.getElementById('AfficheScore').style.display = 'block';
document.getElementById('continue').style.display = 'none';
for (let j = 1; j < 6; j++){
       k="correct"+j;
     
      m="inc1"+j;
      vT="Truecorrect"+j;
      document.getElementById(k).style.pointerEvents ='none'
      if( document.getElementById(k))
      {

        document.getElementById(k).style.backgroundColor ='#9cd377'
        if(document.getElementById(k).value==vT){
           s=s+1
          setScore(s)
          console.log("k",k,"vT",vT,"s",s)
          
         
        }
        
      }
      
      console.log("isover")
    }
    for (let jj = 1; jj < 6; jj++){
      mm="inc1"+jj;
      v1="Trueinc1"+jj;
      document.getElementById(mm).style.pointerEvents ='none'
      if(document.getElementById(mm).value==v1){
        document.getElementById(mm).style.backgroundColor ='#f0baba'
        
       
      }
    }
    for (let jjj = 1; jjj < 6; jjj++){
      mmm="inc2"+jjj;
      v2="Trueinc2"+jjj;
      document.getElementById(mmm).style.pointerEvents ='none'
      if(document.getElementById(mmm).value==v2){
        document.getElementById(mmm).style.backgroundColor ='#f0baba'
        
       
      }
    } 
    submitHandler(s);
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
                      <li className="section" id="section-256" data-id={256}>
                        <h4 className="section-header">
                          <span className="collapse" />
                          Section 4&nbsp;
                          <span className="section-description">Quiz</span>
                          <span className="meta">
                            <span className="step">
                              0/4</span>
                          </span>
                        </h4>
                        <ul className="section-content">
                       
                          <li className="course-item course-item-lp_lesson course-item-492 item-preview has-status" data-type="lp_lesson">
                            <span className="course-format-icon"><i className="fa fa-file-o" /></span>
                            <div className="meta-rank">
                              <div className="rank"><span className="label">Lecture</span>2.1</div>
                            </div>
                            <a className="section-item-link" href={`/QuizDetail/${id}`}>
                           
                              <span className="item-name">quiz</span>
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

                  <div className="course-curriculum" id="learn-press-course-curriculum"   style={{marginTop:'28px',marginLeft:'400px',width:'1520px'}}>
                  <div className="content-item-wrap">
                  <div class="info_box" id="score" style={{display:'none',marginTop:'200px',marginLeft:'300px'}}>
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
                  <div className="info_box" id="sec1" style={{marginLeft:'300px',marginTop:'50px'}}>
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
      <button className="restart"  onClick = {() => AfficheQuiz()} >Continue</button>
    </div>
  </div>
                  <div className='containerr' id="quiz" style={{display:'none'}}>
     
        <>
          <h1 className='quiz-heading'>Quiz Test</h1>
         
             
              {course.quiz.map((detailquiz) => (
        detailquiz.map((quizz) => (
          
        <Fragment>
        
       <div>
          <ul className='quiz-list'>
       
             <li className='quiz-item' >
                  <p className="quest">{i}.{quizz.question} ?</p>

<div>

  
                      <button className='quiz-button' type='button' value={`Falsecorrect${i}`} id={`correct${i}`} onClick = {(e)=>Afficheoptioncorrect(e,i)} >A) De quel pays La Havane est-elle la capitale</button>
                      <button className='quiz-button' type='button' value={`Falseinc1${i}`} id={`inc1${i}`} onClick = {(e)=>Afficheoptionincorrect1(e,i)}>B) De quel pays La Havane est-elle la capitale</button>
                      <button className='quiz-button' type='button' value={`Falseinc2${i}`} id={`inc2${i}`} onClick = {(e)=>Afficheoptionincorrect2(e,i)}>c) De quel pays La Havane est-elle la capitale</button>
                      </div>
              
                  
                </li>
              
            
          </ul>
          <br/>
          </div>
   
          {i++}
          </Fragment>
        ))))}
        </>
        <div className="buttons" id="continue" style={{display:'none'}}> 
      <button className="restart"  onClick = {AfficheSection} >Continue</button>
    </div>
    <div className="buttons" id="AfficheScore" style={{display:'none'}}>
      <button className="restart"  onClick = {AfficheScore} >your score</button>
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
                
                  <div  id="timee" style={{marginLeft:'180px',fontSize:'30px',display:'none'}}>
                  <div className="timer">
      
      <div className="timer_sec" > Time : <b id="timerr"  style={{fontSize:'40px'}}> {course.pourcentage}</b></div>
    </div>
    </div>
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

export default QuizDetail
