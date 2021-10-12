import { TextareaAutosize } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import React, { Component, Fragment } from 'react';
import swal from 'sweetalert';
import Swall from 'sweetalert2';
import '../MainCoursForm.css';
import './bareeProgression.css';
import './StepForm.css';



export class FormCourseDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
        CourseImg: [],
        categories:[],
      
       
    }
}
  continue = e => {
    e.preventDefault();
    this.props.nextStep(); 
    this.props.nextPourcentage();
};
  
  handleSubmit = async (dispatch) => {

   
    const res = await axios.post('/course',this.props.course,{headers: {Authorization: this.props.token}}).then(res => {
  
    })
   
  

  };
  alert = e => {
   
    swal({
      title: "Are you sure?",
      text: "in case you want to edit this course ! there is an updte button!",
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
          swal("the information was deleted!");

          window.location = "/Gerercoursemodifsupp";
          break;
     
        case "catch":
          swal("your", "information have been sauvgarded", "success");
          this.handleSubmit();
          window.location = "/Gerercoursemodifsupp";
          
          
          
          break;
     
        default:
          swal("Got away safely!");
      }
    });
   
  };
   notif = async e => {
    Swall.mixin({
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3']
    }).queue([
      {
        title: 'Click to Continue button and passe to next step',
        text: 'The green button to the bottom',
        imageUrl: 'https://i.pinimg.com/736x/61/62/5b/61625b91c47e4a58d0b1d338a8fd0596.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
      },{
        title: 'Click to Cancel button and quit , you have choice to save your information',
        text: 'the grey button to the bottom',
        imageUrl: 'https://i.pinimg.com/736x/61/62/5b/61625b91c47e4a58d0b1d338a8fd0596.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image'
     
      },{
        title: 'Click to Add button and Add Your course',
        text: 'the green button to the bottom  in step 4 conclusion   of add course ',
        imageUrl: 'https://i.pinimg.com/736x/61/62/5b/61625b91c47e4a58d0b1d338a8fd0596.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image'
        
      }
    ]).then((result) => {
      if (result.value) {
        const answers = JSON.stringify(result.value)
        Swall.fire({
      title: '<strong>We are here to <u>HELP YOU</u></strong>',
      icon: 'info',
      html:
        'You can use <b>HELP SECTION</b>, ' +
        'for more details, hope it was clear for you', 
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Clear!',
      confirmButtonAriaLabel: 'Great! Enjoy it!',
    })
      }
    })
  }
  fileChangeHandler = e => {
    this.setState({ file: e.target.files[0] })
  }
  componentDidMount()
  {
      
     axios.get('/categorie').then(res => {
        
           
              this.state.categories=res.data;
   
      }).catch(error => {
               
      })};
  render() {
    const { course, handleChange,uploadHandler } = this.props;
    return (
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
<div className="userform" style={{marginLeft:'30px',width:'1200px',height:'1200px'}}>
      <MuiThemeProvider>
        <>
        <ul className="progressbar">
          <li class="active">Page de garde </li>
          <li>Introduction</li>
          <li>Chapitres</li>
          <li>Conclusion</li>
          <li>Quiz</li>
  </ul>
       
          <div className="row">
            <div  className=" vc_col-sm-6">
          <h2>Course landing page</h2> 
          </div>
          <div  className=" vc_col-sm-6" style={{marginTop:'40px'}}>
          <Button
            
            variant="contained"
            onClick={this.notif}
            style={{ width:'150px',backgroundColor:'#1EA69A',color:'#FFFFFF' }}
            
          >Help</Button>
          </div>
          </div>
                  
          <AppBar title="Titre du cours" />
          <TextField
          className="inputline"
            placeholder="Insert your course title"
            label="Course title"
            onChange={handleChange('title')}
              defaultValue={course.title}
            margin="normal"
            fullWidth 
          />
          <br />
          <TextField className="inputline"
            placeholder="Insert the author name"
            label="Author"
            onChange={handleChange('author')}
            Value={course.author}
            margin="normal"
            fullWidth
          />
          <br />
          <br />

 
          <input type="file" 
          name="file"
          id="file_up" 
       
         onChange={(e)=>uploadHandler(e)}
         Value={course.CourseImg} />
          <img src={course.CourseImg} alt></img>

<br/>
<br />

          <label style={{color:'black'}} ><b> Course description</b> </label>
          <TextareaAutosize
          style={{borderBlockColor:'black'}}
            placeholder="Insert your course description"
            label="Course subtitle"
            onChange={handleChange('description')}
              defaultValue={course.description}
            rowsMin={3} />

          <br />
          <div className="taxonomy">
            <div >
          <label style={{color:'black'}}> <b>Prerequisite</b> </label>
          <TextareaAutosize
          style={{borderBlockColor:'black'}}
            placeholder="Insert your course description"
            label="Course subtitle"
            onChange={handleChange('prerequisite')}
              defaultValue={course.prerequisite}
            rowsMin={1} />
</div>
            <div>
          <label style={{color:'black'}}> <b>What to learn</b> </label>
          <TextareaAutosize
          style={{borderBlockColor:'black'}}
            placeholder="Insert your course description"
            label="Course subtitle"
            onChange={handleChange('comprendre')}
              defaultValue={course.comprendre}
            rowsMin={1} />
</div>
</div>

          <br />
          
          <div className="taxonomy">
            <div >
          <label style={{color:'black'}}> <b>Price :</b> </label>
          <TextareaAutosize
          style={{borderBlockColor:'black'}}
            placeholder="Course Price in Dollars $"
            label="Course Price"
            onChange={handleChange('price')}
            defaultValue={course.price}
            rowsMin={1} />
  </div>
</div>
          <br />
          <div className="form-group">
        <label style={{color:'black'}}><b>Category</b></label>
       <select
       
          name="category"
          className="form-control"
          onChange={handleChange('categorie')}
        >
          <option>select categorie</option>
        
          {
            this.state.categories.map((c) => (
              <Fragment>
              <option key={c._id} value={c.name}>
                {c.name}
              </option>
              </Fragment>
            ))}
        </select>
      </div>

     
          <Button
            
            variant="contained"
            onClick={this.continue}
            style={{ marginLeft: '400px',marginTop:'50px',backgroundColor:'#1EA69A',color:'#FFFFFF' }}
            
          >Continue</Button>
        
          <Button
             color="warning"
            variant="contained"
           onClick={this.alert}
            style={{ marginLeft: '20px',marginTop:'50px' }}
          >cancel</Button>

        </>
      </MuiThemeProvider>
      </div>
      </div>
      
      </div>
      </div>
    );
  }
}

export default FormCourseDetails;
