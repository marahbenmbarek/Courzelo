import  React, { useState, useEffect } from 'react';
import { Button, Typography, Paper,Grid } from '@material-ui/core';
import useStyles from './styles';
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updateCourse,deleteCourse } from '../../../../redux/actions/courseAction';

function Modifiersupcourse() {
    const classes = useStyles();
    const {id} = useParams();
    const dispatch = useDispatch();
    const courses = useSelector(state => state.courses);
    const [postcourse, setCourseData] = useState({ title: '', description: '' });
    useEffect(() => {
      if(courses.length !== 0){
        courses.forEach(course => {
              if(course._id === id){
                setCourseData(course)
                  
              }
          })
      }
  },[courses, id])

  const handleSubmit = async (e) => {
    e.preventDefault();
      dispatch(updateCourse(id, postcourse));
    }
  
    return (
        <div>
          <section className="page-banner pt-200 pb-100 bg_cover" style={{backgroundImage: 'url("/images/hero-bg.jpg")'}}>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="text-center banner-content">
          <h1 className="text-white">add course</h1>
          
        </div>
      </div>
    </div>
  </div>
</section>
<div style={{marginLeft:'600px'}}>
<Grid item xs={12} sm={4}>
<Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">modifier / supprimer course</Typography>
        <input type="text" className="form-control" name="name" id="name" defaultValue={postcourse.title}
                    placeholder="Your title" onChange={(e) => setCourseData({ ...postcourse, title: e.target.value })} />
                    <input type="text" className="form-control" name="name" id="name" defaultValue={postcourse.description}
                    placeholder="Your title" onChange={(e) => setCourseData({ ...postcourse, description: e.target.value })} />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>modifier</Button>
        <Button variant="contained" color="secondary" size="small"  onClick={() => dispatch(deleteCourse(postcourse._id))} fullWidth>supprimer</Button>
      </form>
    </Paper>
            </Grid>
            </div>


        </div>
    )
}

export default Modifiersupcourse
