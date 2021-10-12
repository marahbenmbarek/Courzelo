import React from 'react'
import {Link} from 'react-router-dom'
import ReactPlayer from 'react-player'
function DetailAddCourse() {
    return (
        <div>
         <div className="thim-sc-steps layout-3 ">
  <div className="container">
    <div className="row">
      <div className="col-md-12 heading">
        <div className="steps-wrapper">
          <h3 className="sc-title">
            Share your knowledge in Five simple steps </h3>
          <div className="steps">
            <ul className="nav" role="tablist">
              <li className="nav-item active" data-toggle="tab" href="#thim_60454efe17b46-step-0" role="tab">
                  <a className="nav-link" >1<span>step</span></a><p className="tab-title">Create a course for free</p>
              </li><li className="nav-item " data-toggle="tab" href="#thim_60454efe17b46-step-1" role="tab">
                  <a className="nav-link">2<span>step</span></a><p className="tab-title">Upload your content</p>
                  </li><li className="nav-item " data-toggle="tab" href="#thim_60454efe17b46-step-2" role="tab">
                      <a className="nav-link">3<span>step</span></a><p className="tab-title">Make your school beautiful</p>
                      </li><li className="nav-item " data-toggle="tab" href="#thim_60454efe17b46-step-3" role="tab">
                          <a className="nav-link">4<span>step</span></a><p className="tab-title">Engage your students</p>
                          </li> </ul>
          </div>
        </div>
      </div>
      <div className="col-md-6 media-box">
        <div className="media-wrapper">
          <ReactPlayer url="https://www.youtube.com/watch?v=xy5eM41LNiM" controls={true}></ReactPlayer>
           </div>
      </div>
      <div className="col-md-6 content-box">
        <div className="steps-wrapper">
          <div className="steps">
            <div className="tab-content">
              <div className="tab-pane active" id="thim_60454efe17b46-step-0" role="tabpanel">
                  <h4 className="tab-title">Create a course for free</h4>
                  <p className="description">Get started with just your email and the name of your school. It’s as simple as that -- no payments or credit card information required here are many variations of passages of Lorem </p
                  ><a  className="readmore" style={{backgroundColor: '#f2a92c'}}><Link to="/GererCourses">Add Courses</Link> </a>
                  </div>
                  <div className="tab-pane " id="thim_60454efe17b46-step-1" role="tabpanel">
                      <h4 className="tab-title">Upload your content</h4>
                      <p className="description">It’s as simple as that -- no payments or credit card information required here are many variations of passages of Lorem. Get started with just your email and the name of your school.</p>
                      <a  className="readmore" style={{backgroundColor: '#f2a92c'}}><Link to="/Questionnaire">Add Courses</Link> </a>
                      </div><div className="tab-pane " id="thim_60454efe17b46-step-2" role="tabpanel">
                          <h4 className="tab-title">Make your school beautiful</h4>
                          <p className="description">No payments or credit card information required here are many variations of passages of Lorem. Get started with just your email and the name of your school. It’s as simple as that.</p>
                          <a className="readmore" style={{backgroundColor: '#f2a92c'}}><Link to="/Questionnaire">Add Courses</Link> </a>
                          </div><div className="tab-pane " id="thim_60454efe17b46-step-3" role="tabpanel">
                              <h4 className="tab-title">Engage your students</h4>
                              <p className="description">Get started with just your email and the name of your school. It’s as simple as that -- no payments or credit card information required here are many variations of passages of Lorem </p>
                              <a  className="readmore" style={{backgroundColor: '#f2a92c'}}> <Link to="/Questionnaire">Add Courses</Link> </a>
                              </div>
                              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


        </div>
    )
}

export default DetailAddCourse
