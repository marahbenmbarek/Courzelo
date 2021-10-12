import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Button from '@material-ui/core/Button';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import PermMediaTwoToneIcon from '@material-ui/icons/PermMediaTwoTone';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import QueuePlayNextTwoToneIcon from '@material-ui/icons/QueuePlayNextTwoTone';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import { addCourse } from '../../../../redux/actions/courseAction';
import './bareeProgression.css';

export class Conclusion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conclusion:
      {
        video1: [],
        img1: [],
        filePath1: [],

        video2: [],
        img2: [],
        filePath2: [],

        video3: [],
        img3: [],
        filePath3: [],

        video4: [],
        img4: [],
        filePath4: [],

      }
    }
  }

  handleSubmit = async (dispatch) => {

    
    //e.preventDefault();
    this.props.dispatch(addCourse(this.props.token, this.props.course));
    // dispatch(addCourse(this.props.token,this.props.course));
    console.log(this.props.course)

  };
  handleSubmitt = async (dispatch) => {

    
    //e.preventDefault();
    this.props.dispatch(addCourse(this.props.token, this.props.course));
    // dispatch(addCourse(this.props.token,this.props.course));
    console.log(this.props.course)

  };
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
    this.props.nextPourcentage();
    console.log('hazem dhki',this.props.course.pourcentage)
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  alert = e => {
   
    swal({
      title: "Are you sure?",
      text: "Are you sure you want to add this course",
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
          swal("this course was droped !");

          window.location = "/Gerercoursemodifsupp";
          break;
     
        case "catch":
          swal("your", "course have been sauvgarded", "success");
          this.handleSubmit();
          window.location = "/Gerercoursemodifsupp";
          
          
          
          break;
     
        default:
          swal("Got away safely!");
      }
    });
   
  };
  render() {
    const { course, handleChangePhase5, handleChangePhase6, handleChangePhase7, handleChangePhase8, uploadHandlerVideo5, uploadHandlerVideo6, uploadHandlerVideo7, uploadHandlerVideo8, uploadHandlerImg5, uploadHandlerImg6, uploadHandlerImg7, uploadHandlerImg8, uploadHandlerPdf5, uploadHandlerPdf6, uploadHandlerPdf7, uploadHandlerPdf8 } = this.props;
    return (
      <div className="main">

<div className="side"></div>
        <div className="userform" style={{ marginLeft: '-400px', width: '1480px' }}>
          
          <MuiThemeProvider>
            <>
            <ul className="progressbar" style={{marginLeft:'1px'}}>
          <li class="active">Page de garde </li>
          <li class="active">Introduction</li>
          <li class="active">Chapitres</li>
          <li class="active">Conclusion</li>
          <li class="active">Quiz</li>
  </ul>
              <h1 style={{ marginBottom: '50px' }}>Conclusion</h1>
              <div className="row" style={{ marginBottom: '150px' }}>
                <div className=" col-sm-12 col-md-6" style={{ height: '290px' }} >


                  <div className="thim-sc-video-box" >
                    <div className="video" >
                      <div>
                        <div style={{ width: '100px' }}>
                          <ReactPlayer url="assets/What-is-4MAT.m4v" controls={true}></ReactPlayer>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="col-sm-12 col-md-6">
                  <p className="parag " style={{ color: '#0075BA', fontStyle: 'italic', marginBottom: '-3px', fontSize: '18px' }}>

                    *The 4MAT model entails the use of right and left-mode strategies within four distinct phases of the learning cycle…..</p>
                  <p style={{ color: '#0075BA', marginLeft: '20px', marginBottom: '6px' }} className="parag ">
                    <b>
                      1-Experiencing<br />
2-Conceptualising <br />
3-Applying <br />
4-Refining</b></p><p style={{ color: '#0075BA', fontSize: '18px', fontStyle: 'italic' }}>
                    -As an instructional design tool, 4MAT gives teachers and trainers a systematic
way to train all learners to think and learn well.<br />
-As a professional development tool, it provides a framework for assessing the quality of any learning experience.
-As an organisational model, it offers a method for creating an environment for continuous learning and development.</p>

                </div>

              </div>
              <p style={{ color: '#0075BA', fontStyle: 'italic', marginTop: '-80px', fontSize: '18px' }}>*The complete model is an integration of learning styles and hemisphericity in a sequence that
              follows the natural cycle of learning.For real learning to take place, all parts of the learning cycle must be addressed,
 starting from one and moving around to four, answering the key question of each style:</p>
              <div className="row" style={{ paddingBottom: '50px' }}>
                <div className=" col-sm-12 col-md-4" style={{ paddingLeft: '100px' }} >
                  <img loading="lazy" style={{ width: '600px', height: '300px' }} src="assets/mokh.jpg" alt="The Ultimate Ethical Hacking Boot Camp" className />
                </div>
                <div className=" col-sm-12 col-md-4" style={{ paddingTop: '60px', paddingLeft: '200px' }} >
                  <p style={{ color: '#D23941', fontSize: '18px' }}><b> 1-WHY?</b></p>
                  <p style={{ color: '#425689', fontSize: '18px' }}><b>2-WHAT?</b></p>
                  <p style={{ color: '#3E8C50', fontSize: '18px' }}><b>3-HOW?</b></p>
                  <p style={{ color: '#FFCC52', fontSize: '18px' }}><b>4-IF?</b></p>
                </div>
                <div className=" col-sm-12 col-md-4"  >
                  <img loading="lazy" style={{ width: '600px', height: '300px' }} src="assets/mat.jpg" alt="The Ultimate Ethical Hacking Boot Camp" className />
                </div>


              </div>
              <h2 style={{ marginBottom: '50px' }}> Add Conclusion </h2>
              <div className="accordion" id="accordionExample">

                <div className="cardd">
                  <div className="cardd-header" id="headingOne">

                    <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <h5>Phase 1:  </h5>
                    </button>

                  </div>
                  <div id="collapseOne" className="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-body">
                      <div className="row">
                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                          <h5 style={{ color: 'black' }}><b>Phase 1:</b> <b style={{ color: '#D23941', fontSize: '18px' }}> Why? </b> </h5>
                          <p style={{ color: 'black' }}>We want to understand meaning and purpose, and the instructor’s role is to make connections between the material and the learners, to engage their attention.</p>


                          <div className="tabset">
                            {/* Tab 1 */}
                            <input type="radio" name="tabset" id="tab1" aria-controls="marzen" />
                            <label htmlFor="tab1">Select content type</label>

                            <div className="tab-panels">

                              <>
                                <section id="marzen" className="tab-panel">
                                  <i> < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1" /></i>
                                  <i> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid1" aria-expanded="false" aria-controls="collapseExampleVid1" /> </i>
                                  <i>  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg1" aria-expanded="false" aria-controls="collapseExampleImg1" /> </i>
                                  <i>  <PictureAsPdfIcon data-toggle="collapse" href="#collapseExamplepdf1" aria-expanded="false" aria-controls="collapseExamplepdf1" /> </i>

                                </section>






                                <div className="collapse" id="collapseExample1">
                                  <div className="cardd card-body">
                                    <div className="form-group">
                                      <CKEditor
                                        editor={ClassicEditor}

                                        onChange={handleChangePhase5}

                                      />
                                    </div>    </div>
                                </div>

                                <div className="collapse" id="collapseExampleImg1">
                                  <div className="cardd card-body">
                                    <div className="form-group">

                                    </div>   <input type="file"
                                      name="file"
                                      id="file_up"
                                      onChange={(e) => uploadHandlerImg5(e)}
                                      Value={course.conclusion.img5} /> </div>
                                </div>

                                <div className="collapse" id="collapseExampleVid1">
                                  <div className="cardd card-body">
                                    <div className="form-group">

                                    </div><input type="file"
                                      name="file"
                                      id="file_up"
                                      onChange={(e) => uploadHandlerVideo5(e)} ></input>     </div>
                                </div>
                                <div className="collapse" id="collapseExamplepdf1">
                        <div className="cardd card-body">
                          <div className="form-group">

                          </div> <input type="file"
                            name="file"
                            id="file_up"
                            onChange={(e) => uploadHandlerPdf5(e)}
                            Value={course.conclusion.filePath1} />

                        </div>
                      </div>
                              </>


                            </div>


                          </div>


                        </div>
                        <div className=" col-sm-12 col-md-1"></div>
                        <div className=" col-sm-12 col-md-4" >
                          <img loading="lazy" style={{ width: '8000px', height: '320px' }} src="assets/a.png" alt="The Ultimate Ethical Hacking Boot Camp" className />


                        </div>
                      </div>
                    </div></div></div></div>

              <div className="accordion" id="accordionExample">

                <div className="cardd">
                  <div className="cardd-header" id="headingTwo">

                    <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                      <h5>Phase 2:  </h5>
                    </button>

                  </div>
                  <div id="collapseTwo" className="collapse " aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div className="card-body">
                      <div className="row">
                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                          <h5 style={{ color: 'black' }}><b>Phase 2:</b> <b style={{ color: '#425689', fontSize: '18px' }}> What? </b> </h5>
                          <p style={{ color: 'black' }}>Only when we are satisfied about relevance are we ready to know ‘What?’ At this stage, the trainer provides information and satisfies our desire for facts, structure and theory.</p>


                          <div className="tabset">
                            {/* Tab 2 */}
                            <input type="radio" name="tabset" id="tab2" aria-controls="marzen" />
                            <label htmlFor="tab2">Select content type</label>

                            <div className="tab-panels">

                              <>
                                <section id="marzen" className="tab-panel">
                                  <i> < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2" /></i>
                                  <i> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid2" aria-expanded="false" aria-controls="collapseExampleVid2" /> </i>
                                  <i>  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg2" aria-expanded="false" aria-controls="collapseExampleImg2" /> </i>
                                  <i>  <PictureAsPdfIcon data-toggle="collapse" href="#collapseExamplepdf2" aria-expanded="false" aria-controls="collapseExamplepdf2" /> </i>

                                </section>






                                <div className="collapse" id="collapseExample2">
                                  <div className="cardd card-body">
                                    <div className="form-group">
                                      <CKEditor
                                        editor={ClassicEditor}

                                        onChange={handleChangePhase6}

                                      />
                                    </div>    </div>
                                </div>

                                <div className="collapse" id="collapseExampleImg2">
                                  <div className="cardd card-body">
                                    <div className="form-group">

                                    </div>  <input type="file"
                                      name="file"
                                      id="file_up"
                                      onChange={(e) => uploadHandlerImg6(e)}
                                      Value={course.conclusion.img6} />  </div>
                                </div>

                                <div className="collapse" id="collapseExampleVid2">
                                  <div className="cardd card-body">
                                    <div className="form-group">

                                    </div> <input type="file"
                                      name="file"
                                      id="file_up"
                                      onChange={(e) => uploadHandlerVideo6(e)} ></input>    </div>
                                </div>
                                <div className="collapse" id="collapseExamplepdf2">
                        <div className="cardd card-body">
                          <div className="form-group">

                          </div> <input type="file"
                            name="file"
                            id="file_up"
                            onChange={(e) => uploadHandlerPdf6(e)}
                            Value={course.conclusion.filePath2} />

                        </div>
                      </div>
                              </>


                            </div>


                          </div>


                        </div>
                        <div className=" col-sm-12 col-md-1"></div>
                        <div className=" col-sm-12 col-md-4" >
                          <img loading="lazy" style={{ width: '8000px', height: '320px' }} src="assets/b.png" alt="The Ultimate Ethical Hacking Boot Camp" className />


                        </div>
                      </div>
                    </div></div></div></div>
              <div className="accordion" id="accordionExample">

                <div className="cardd">
                  <div className="cardd-header" id="headingThree">

                    <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                      <h5>Phase 3: </h5>
                    </button>

                  </div>
                  <div id="collapseThree" className="collapse " aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div className="card-body">
                      <div className="row">
                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                          <h5 style={{ color: 'black' }}><b>Phase 3:</b> <b style={{ color: '#3E8C50', fontSize: '18px' }}> How? </b> </h5>
                          <p style={{ color: 'black' }}>Once we have the knowledge, we ask ‘How?’ and we want to understand how we can apply our new insights to the real world. We focus on problems and how we can use our learning to solve them.</p>

                          <div className="tabset">
                            {/* Tab 3 */}
                            <input type="radio" name="tabset" id="tab3" aria-controls="marzen" />
                            <label htmlFor="tab3">Select content type</label>

                            <div className="tab-panels">

                              <>
                                <section id="marzen" className="tab-panel">
                                  <i> < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3" /></i>
                                  <i> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid3" aria-expanded="false" aria-controls="collapseExampleVid3" /> </i>
                                  <i>  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg3" aria-expanded="false" aria-controls="collapseExampleImg3" /> </i>
                                  <i>  <PictureAsPdfIcon data-toggle="collapse" href="#collapseExamplepdf3" aria-expanded="false" aria-controls="collapseExamplepdf3" /> </i>

                                </section>






                                <div className="collapse" id="collapseExample3">
                                  <div className="cardd card-body">
                                    <div className="form-group">
                                      <CKEditor
                                        editor={ClassicEditor}

                                        onChange={handleChangePhase7}

                                      />
                                    </div>    </div>
                                </div>

                                <div className="collapse" id="collapseExampleImg3">
                                  <div className="cardd card-body">
                                    <div className="form-group">

                                    </div> <input type="file"
                                      name="file"
                                      id="file_up"
                                      onChange={(e) => uploadHandlerImg7(e)}
                                      Value={course.conclusion.img7} />   </div>
                                </div>

                                <div className="collapse" id="collapseExampleVid3">
                                  <div className="cardd card-body">
                                    <div className="form-group">

                                    </div>  <input type="file"
                                      name="file"
                                      id="file_up"
                                      onChange={(e) => uploadHandlerVideo7(e)} ></input>   </div>
                                </div>
                                <div className="collapse" id="collapseExamplepdf3">
                        <div className="cardd card-body">
                          <div className="form-group">

                          </div> <input type="file"
                            name="file"
                            id="file_up"
                            onChange={(e) => uploadHandlerPdf7(e)}
                            Value={course.conclusion.filePath3} />

                        </div>
                      </div>
                              </>


                            </div>


                          </div>


                        </div>
                        <div className=" col-sm-12 col-md-1"></div>
                        <div className=" col-sm-12 col-md-4" >
                          <img loading="lazy" style={{ width: '8000px', height: '320px' }} src="assets/c.png" alt="The Ultimate Ethical Hacking Boot Camp" className />


                        </div>
                      </div>
                    </div></div></div></div>
              <div className="accordion" id="accordionExample">

                <div className="cardd">
                  <div className="cardd-header" id="headingFour">

                    <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                      <h5>Phase 4: </h5>
                    </button>

                  </div>
                  <div id="collapseFour" className="collapse " aria-labelledby="headingFour" data-parent="#accordionExample">
                    <div className="card-body">
                      <div className="row">
                        <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }}>
                          <h5 style={{ color: 'black' }}><b>Phase 4:</b> <b style={{ color: '#FFCC52', fontSize: '18px' }}>  if? </b> </h5>
                          <p style={{ color: 'black' }}>Finally, we want to try it out, so we ask questions like ‘What if?’ ‘What else?’ or ‘What next?’ This is when we engage in active experimentation, trial and error, pushing at the boundaries – learning by doing.</p>



                          <div className="tabset">
                            {/* Tab 4 */}
                            <input type="radio" name="tabset" id="tab4" aria-controls="marzen" />
                            <label htmlFor="tab4">Select content type</label>

                            <div className="tab-panels">

                              <>
                                <section id="marzen" className="tab-panel">
                                  <i> < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4" /></i>
                                  <i> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid4" aria-expanded="false" aria-controls="collapseExampleVid4" /> </i>
                                  <i>  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg4" aria-expanded="false" aria-controls="collapseExampleImg4" /> </i>
                                  <i>  <PictureAsPdfIcon data-toggle="collapse" href="#collapseExamplepdf4" aria-expanded="false" aria-controls="collapseExamplepdf4" /> </i>

                                </section>






                                <div className="collapse" id="collapseExample4">
                                  <div className="cardd card-body">
                                    <div className="form-group">
                                      <CKEditor
                                        editor={ClassicEditor}

                                        onChange={handleChangePhase8}

                                      />
                                    </div>    </div>
                                </div>

                                <div className="collapse" id="collapseExampleImg4">
                                  <div className="cardd card-body">
                                    <div className="form-group">

                                    </div> <input type="file"
                                      name="file"
                                      id="file_up"
                                      onChange={(e) => uploadHandlerImg8(e)}
                                      Value={course.conclusion.img8} />   </div>
                                </div>

                                <div className="collapse" id="collapseExampleVid4">
                                  <div className="cardd card-body">
                                    <div className="form-group">

                                    </div>  <input type="file"
                                      name="file"
                                      id="file_up"
                                      onChange={(e) => uploadHandlerVideo8(e)} ></input>   </div>
                                </div>
                                <div className="collapse" id="collapseExamplepdf4">
                        <div className="cardd card-body">
                          <div className="form-group">

                          </div> <input type="file"
                            name="file"
                            id="file_up"
                            onChange={(e) => uploadHandlerPdf8(e)}
                            Value={course.conclusion.filePath4} />

                        </div>
                      </div>
                              </>


                            </div>


                          </div>


                        </div>



                        <div className=" col-sm-12 col-md-1"></div>
                        <div className=" col-sm-12 col-md-4" >
                          <img loading="lazy" style={{ width: '8000px', height: '320px' }} src="assets/d.png" alt="The Ultimate Ethical Hacking Boot Camp" className />


                        </div>
                      </div>

                    </div></div></div></div>





              <br />
              <br />




              <div className="buttonintro">
              <Button
                color="secondary"
                variant="contained"
                onClick={this.back}
              >Back</Button>
                 <Button
                                   
                                   variant="contained"
                                   onClick={this.continue}
                                   style={{backgroundColor:'#1EA69A',color:'#FFFFFF'}}
                               >Continue</Button>

             
              </div>


            </>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default connect()(Conclusion)

