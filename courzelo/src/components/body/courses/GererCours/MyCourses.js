import React, {Fragment,useState,useCallback,useEffect} from 'react'


function MyCourses() {
 
 
    return (
     
        <div style={{marginBottom:'-100px'}} >
             <div className="page-title layout-1" style={{marginBottom:'100px'}}>
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
        <div className="vc_row wpb_row vc_row-fluid vc_custom_1500447655900 vc_column-gap-35">
  <div className="wpb_column vc_column_container vc_col-sm-6">
      <div className="vc_column-inner">
          <div className="wpb_wrapper" style={{marginTop:'50px',marginLeft:'200px',width:'600px',height:'600px'}}>
              <div className="thim-sc-text-box style-3 size-default " style={{backgroundColor:'#F2F2F2'}}>
          <div className="title-1">Taken Courses</div>
          <div className="title-2"><p>Solve your business problems by getting help from our network of thousands of design professionals. Get industry-leading designers as personal coaches</p>
          </div>
          <a href="/GererCourses" className="btn btn-default">
              <span className="text"><a >GO!!</a></span></a></div>
      </div></div></div><div className="wpb_column vc_column_container vc_col-sm-6">
          <div className="vc_column-inner">
              <div className="wpb_wrapper" style={{marginTop:'50px',width:'600px',height:'600px'}}>
                  <div className="thim-sc-text-box style-3 size-default " style={{backgroundColor:'#F2F2F2'}}>
          <div className="title-1">Given Courses</div>
          <div className="title-2"><p>Solve your business problems by getting help from our network of thousands of design professionals. Get industry-leading designers as personal coaches</p>
          </div>
          <a href="/Gerercoursemodifsupp" className="btn btn-default">
              <span className="text">GO!!</span></a></div>
      </div></div></div></div>

        </div>
     
    )
}

export default MyCourses
