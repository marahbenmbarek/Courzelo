import {
  DownSquareOutlined
} from "@ant-design/icons";
import { Checkbox, Menu } from "antd";
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCourses } from '../../../../redux/actions/courseAction';


const { SubMenu, ItemGroup } = Menu;

function AllCourses() {
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourses());
  }, [ dispatch]);
  
 
    return (
        <div>
          <section className="page-banner pt-200 pb-100 bg_cover" style={{backgroundImage: 'url("assets/images/hero-bg.jpg")'}}>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="text-center banner-content">
          <h1 className="text-white">All Courses</h1>
        </div>
      </div>
    </div>
  </div>
</section>

            <section id="courses" className="course-area pt-140 pb-170">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 pt-2">
          <h4>Search/Filter</h4>
          <hr />

          <Menu
            defaultOpenKeys={["1", "2", "3", "4", "5", "6", "7"]}
            mode="inline"
          >
           

            {/* category */}
            <SubMenu
              key="2"
              title={
                <span className="h6">
                  <DownSquareOutlined /> Categories
                </span>
              }
            >
              <div style={{ maringTop: "-10px" }}>
              <div >
        <Checkbox
          
          className="pb-2 pl-4 pr-4"
          
          name="category"
         
        >
          informatique
        </Checkbox>
        <Checkbox
          
          className="pb-2 pl-4 pr-4"
          
          name="category"
         
        >
          Data Science
        </Checkbox>
        <Checkbox
          
          className="pb-2 pl-4 pr-4"
          
          name="category"
         
        >
          Génie Logiciel
        </Checkbox>
        <br />
      </div>
              </div>
            </SubMenu>
          </Menu>
        </div>

        <div className="col-md-9 pt-2">
         
          <div className="row pb-5">
          
          <div className="row mb-30" style={{marginLeft:'100px'}}>
            <div>
          <input style={{width:'600px',marginLeft:'150px'}}
                        type="search"
                        className="form-control"
                        
                        placeholder="Search by name"
                    />
                    </div>
                    <br/><br/><br/>
    {courses.map((course) => (
       course.validation == 1 ? 
          <Fragment>
          <div className="card " style={{backgroundColor:'#FAEBD7' ,width:'300px',height:'440px' ,paddingTop :'0px', paddingLeft:'0px', paddingRight:'0px',marginRight:'30px',marginLeft:'0px' }}>
      <div style={{backgroundColor: '#f2a92c',height:'50px',textAlign:'center',paddingTop:'5px',fontSize:'20px',color: '#FFFFFF'}}> <b>{course.title}</b>  </div>
      <div className="card-body">
      <div style={{width: '200px',height:'150'}}>
        <img
            src={course.CourseImg}  
            className="mb-3"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
    </div>
        <p className="card-p  mt-2" style={{color:'#000000',fontSize:'15px'}}>{course.description} </p>
        <p className="black-9" style={{color:'#000000',fontSize:'15px'}}>Category: informatique</p>
        <p className="black-8" style={{color:'#000000',fontSize:'15px'}}>Added on 12/32/52</p>
        <button className="btn btn-outline-primary mt-2 mb-2 card-btn-1" style={{backgroundColor: '#f2a92c',marginLeft:'10px',color: '#FFFFFF'}} >
          <Link to={`/DetailCourse/${course._id}`}>View Course</Link>
          </button>
        <button className="btn btn-outline-warning mt-2 mb-2 card-btn-1  " style={{backgroundColor: '#f2a92c',marginLeft:'10px',color: '#FFFFFF'}}>
          Subscribe
        </button> 
      </div>
    </div>
            </Fragment>
            :
            <Fragment/>
        ))}
    </div>
          </div>
        </div>
      </div>
    </div>
   
    
   

</section>

        </div>
    )
}

export default AllCourses
