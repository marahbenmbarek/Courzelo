import { TextareaAutosize } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getCategories } from '../../../../redux/actions/categorieAction';
import { updateCourse } from '../../../../redux/actions/courseAction';
import '../MainCoursForm.css';
import useStyles from './styles';
 

function ModifierFormCours() {
  const classes = useStyles();
    const {id} = useParams();
    const dispatch = useDispatch();
    const courses = useSelector(state => state.courses);
    const categories = useSelector(state => state.categories);
    const [ListCategories, setCategorieData] = useState({ 
        name: '',
        description: ''});
      
    const [postcourse, setCourseData] = useState({ 
        title: '',
        description: '',
        introduction:
        {
          text1: '',
          video1: '',
          img1: '',
    
          text2: '',
          video2: '',
          img2: '',
    
          text3: '',
          video3: '',
          img3: '',
    
          text4: '',
          video4: '',
          img4: ''
    
    
        },
        chapitres: [],
        conclusion:
        {
          text1: '',
          video1: '',
          img1: '',
    
          text2: '',
          video2: '',
          img2: '',
    
          text3: '',
          video3: '',
          img3: '',
    
          text4: '',
          video4: '',
          img4: ''
    
        },
        CourseImg: '',
        categorie:''
    });
    useEffect(() => {
        dispatch(getCategories());
      if(courses.length !== 0){
        courses.forEach(course => {
              if(course._id === id){
                setCourseData(course)
                  
              }
          })
      }
  },[courses, id, dispatch])

  const token = useSelector(state => state.token)
    const handleSubmit = async (e) => {
      alert('hello');
      e.preventDefault();
     
        dispatch(updateCourse(id, postcourse));
       
      }
      const changeAvatar = async(e) => {
        e.preventDefault()

        const file = e.target.files[0]

        if (!file) return this.state;
    
        if (file.size > 1024 * 1024)
          return this.state
    
        if (file.type !== 'image/jpeg' && file.type !== 'image/png')
          return this.state;
    
        let formData = new FormData()
        formData.append('file', file)
    
    
        const res = await axios.post('/CourseImg/upload_Course_img', formData, {
          headers: { 'content-type': 'multipart/form-data', Authorization: token }
        }).then(res => {
        
       setCourseData({ ...postcourse, CourseImg: res.data.url })

    }
  )
}
    
    return (
        <div>
          <div className="main">
           <div className="side"></div>
           <div className="row">
             <div className=" vc_col-sm-2" >
      <div >
      <div className="vc_column-inner vc_custom_1502265039449"><div className="wpb_wrapper">
          <div className="thim-sc-icon-box custom-style layout-6 style_kit">
            <div className="icon-box-wrapper" style={{}}>
              <div className="box-icon" style={{backgroundColor: ''}}>
                <i className="icon-ionicons ion-ios-barcode-outline" aria-hidden="true" /> </div>
              <div className="box-content">
                <h3 className="title">
                  Learn From The Experts </h3>
              </div>
            </div>
          </div>
          <div className="vc_empty_space" style={{height: 25}}><span className="vc_empty_space_inner" /></div>
          <div className="thim-sc-icon-box  layout-6 style_kit">
            <div className="icon-box-wrapper" style={{}}>
              <div className="box-icon" style={{backgroundColor: ''}}>
                <i className="icon-ionicons ion-ios-bookmarks-outline" aria-hidden="true" /> </div>
              <div className="box-content">
                <h3 className="title">
                  Book Library &amp; Store </h3>
              </div>
            </div>
          </div>
          <div className="vc_empty_space" style={{height: 25}}><span className="vc_empty_space_inner" /></div>
          <div className="thim-sc-icon-box  layout-6 style_kit">
            <div className="icon-box-wrapper" style={{}}>
              <div className="box-icon" style={{backgroundColor: ''}}>
                <i className="icon-ionicons ion-social-buffer-outline" aria-hidden="true" /> </div>
              <div className="box-content">
                <h3 className="title">
                  Learn Anything Online </h3>
              </div>
            </div>
          </div>
          <div className="vc_empty_space" style={{height: 30}}><span className="vc_empty_space_inner" /></div>
          <div className="thim-sc-icon-box  layout-6 style_kit">
            <div className="icon-box-wrapper" style={{}}>
              <div className="box-icon" style={{backgroundColor: ''}}>
                <i className="icon-ionicons ion-ios-lightbulb-outline" aria-hidden="true" /> </div>
              <div className="box-content">
                <h3 className="title">
                  Best Industry Leaders </h3>
              </div>
            </div>
          </div>
          <div className="vc_empty_space" style={{height: 59}}><span className="vc_empty_space_inner" /></div></div></div></div>
      </div>
                        <div className=" vc_col-sm-10" >      
<div className="userform" style={{marginLeft:'30px',width:'1200px',height:'900px'}}>
      
  <form onSubmit={handleSubmit}>
      <MuiThemeProvider>
        <>
        <ul className="progressbar">
          <li class="active">Page de garde </li>
          <li>Introduction</li>
          <li>Chapitres</li>
          <li>Conclusion</li>
  </ul>
       
          <h2>Course landing page</h2>
          <AppBar title="Titre du cours" />
          <TextField
          className="inputline"
            placeholder="Insert your course title"
            label="Course title"
            value={postcourse.title}
            margin="normal"
            fullWidth
            onChange={(e) => setCourseData({ ...postcourse, title: e.target.value })}
          />
          <br />
          <TextField
          className="inputline"
            placeholder="Insert the author name"
            label="Author"
           
             
            margin="normal"
            fullWidth
          />
          <br />
          <br />

 <div className="wpb_column vc_column_container vc_col-sm-12">
     <div className="wpb_column vc_column_container vc_col-sm-6">
 <input type="file" 
          name="file"
          id="file_up" 
      
          onChange={e => changeAvatar(e)}
       />
       </div>
       <div className="wpb_column vc_column_container vc_col-sm-6">
           <img src = {postcourse.CourseImg} 
            />
       </div>
       </div>
        

          <label > Course description </label>
          <TextareaAutosize
            placeholder="Insert your course description"
            value={postcourse.description}
            onChange={(e) => setCourseData({ ...postcourse, description: e.target.value })}
            label="Course subtitle"
            rowsMin={3} />

          <br />
          <div className="form-group">
        <label>Category</label>
       <select
          name="category"
          className="form-control"
          value={postcourse.categorie}
          onChange={(e) => setCourseData({ ...postcourse, categorie: e.target.value })}
          
        >
          <option>select categorie</option>

          {
            categories.map((c) => (
              <Fragment>
              <option key={c._id} value={c.name} >
                {c.name}
              </option>
              </Fragment>
            ))}  
        
         
        </select>
      </div>
      <div style={{marginTop:'100px'}}>
          <div className="wpb_column vc_column_container vc_col-sm-6"><div className="vc_column-inner">
            < div className="wpb_wrapper">
              <div className="thim-sc-button text-right hide-separator ">
                  <a href="courses/index.html" target="_self" className="btn btn-primary btn-lg">
                  <Link to={`/modifiersupintro/${postcourse._id}`} >
                    <span className="text" style={{color:'#FFFFFF'}}>Continue</span>
                    </Link>
                  </a>
                </div>
              </div></div></div>
          <div className="wpb_column vc_column_container vc_col-sm-6"><div className="vc_column-inner">
              <div className="wpb_wrapper"><div className="thim-sc-button text-left hide-separator ">
                  <a target="_self" className="btn btn-basic btn-lg" >
                  <Button     type="submit" >modifier</Button>
                  </a>
                </div>
               

              </div>
              </div></div></div>

        </>
      </MuiThemeProvider>
      </form>
      </div>
      </div>
      </div>
      </div>
        </div>
    )
}

export default ModifierFormCours
