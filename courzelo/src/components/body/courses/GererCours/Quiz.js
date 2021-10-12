import Button from '@material-ui/core/Button';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import swal from 'sweetalert';
import { v4 as uuidv4 } from 'uuid';
import { addCourse } from '../../../../redux/actions/courseAction';
import './bareeProgression.css';
import './StepForm.css';



function Quiz({ nextStep, handleSubmitQuiz,prevStep,nextPourcentage,course,ttoken}) {
   
    const [count, setCount] = useState(1);
  
    const [inputFields, setInputFields] = useState([
        { id: uuidv4(),scoreQ:0,n:0, question: '' , correctanwser:'', wrong1:'', wrong2:'' , wrong3:'' ,time:'' },
    ]);
    

    
   
   
    
    
    const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map(i => {
            if (id === i.id) {
                i[event.target.name] = event.target.value

            }
            return i;
        })

        setInputFields(newInputFields);
    }
   
    const handleAddFields = () => {
        
       setCount(count + 1);
      console.log(count);
     
        setInputFields([...inputFields, { id: uuidv4(),scoreQ:0,n:0, question: '' , correctanwser:'', wrong1:'', wrong2:'', wrong3:'',time:''   }])
       
    }
  
   console.log('inputFields',inputFields);
   console.log('course',course)
    const handleRemoveFields = id => {
        const values = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
    }

    const handleSubmitt = (e) => {
        //e.preventDefault();

        console.log("InputFields", inputFields);
    };
   const handleSubmits = async (dispatch) => {
       alert('hello')
       
   
        const res = await axios.post('/course',course,{headers: {Authorization:ttoken}}).then(res => {
      
        })
        console.log("course",course)
    };
   
     
 
    const back = e => {
        e.preventDefault();
        prevStep();
      };

    const token = useSelector(state => state.token)

  


    
const handleSubmittt = async (dispatch) => {

    
    //e.preventDefault();
    dispatch(addCourse(token, course));
    // dispatch(addCourse(this.props.token,this.props.course));
    console.log("wssol l cours",course)

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
          handleSubmitQuiz(inputFields);
          handleSubmits();
          window.location = "/Gerercoursemodifsupp";
          
          
          
          break;
     
        default:
          swal("Got away safely!");
      }
    });
   
  };
    return (
        <div >
            <br /><br /><br /><br /><br />
            <form >

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
          <li>quiz</li>
  </ul>
                                <h1>QUIZ</h1>
                                                        {inputFields.map(inputField => (



                                    <div className="boxcard" style={{ marginBottom: '50px' }}>

                                       

                                        <Button
                                            style={{ marginLeft: '1px' }}
                                            color="primary"
                                            variant="contained"
                                            disabled={inputFields.length === 1}
                                            onClick={() => handleRemoveFields(inputField.id)}

                                        >-</Button>
                                        

                                   
                                            
                                          
                                                        <div className="accordion" id="accordionExample">

<div className="cardd">
    <div className="cardd-header" id="heading9">

        <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse9" aria-expanded="true" aria-controls="collapse9">
            <h5>Quiz</h5>
        </button>

    </div>
    <div id="collapse9" className="collapse " aria-labelledby="heading9" data-parent="#accordionExample">
        <div className="card-body">
            <div className="row">
                <div className="card col-sm-12 col-md-12" style={{ backgroundColor: '#F9F7F7' }} >
                    <h5 style={{ color: 'black' }}><b style={{ color: '#A3E4D7', fontSize: '18px' }}> Question 1  </b> </h5>


                    <div >
                        {/* Tab 1 */}

                        <div >

                            <>

                                <div className="cardd card-body">
                                    <div className="form-group">
                                        <textarea
                                            placeholder=" Type your Question"
                                            label="queustion 1"
                                            onChange={event => handleChangeInput(inputField.id, event)}

                                            name="question"
                                            defaultValue=''
                                            margin="normal"
                                            fullWidth
                                        />
                                        <div className="row mt-1">

                                            <div className="col-md-4"><label className="font-weight-bold"> answer </label>
                                                <textarea
                                                    placeholder=" Type the correct answer"
                                                    label="correct"
                                                    onChange={event => handleChangeInput(inputField.id, event)}

                                                    name="correctanwser"
                                                    defaultValue=''
                                                    margin="normal"
                                                    fullWidth
                                                />
                                            </div>

                                            <div className="col-md-4"><label className="font-weight-bold">  Answer</label>
                                                <textarea
                                                    placeholder=" Type other answer"
                                                    label="wrong1"
                                                    onChange={event => handleChangeInput(inputField.id, event)}

                                                    name="wrong1"
                                                    defaultValue=''
                                                    margin="normal"
                                                    fullWidth
                                                />


                                            </div>
                                            <div className="col-md-4"><label className="font-weight-bold">  Answer</label>
                                                <textarea
                                                    placeholder=" Type other answer"
                                                    label="wrong2"
                                                    onChange={event => handleChangeInput(inputField.id, event)}

                                                    name="wrong2"
                                                    defaultValue=''
                                                    margin="normal"
                                                    fullWidth
                                                />
                                            </div>
                                            <div className="col-md-4"><label className="font-weight-bold">  Answer</label>
                                                <textarea
                                                    placeholder=" Type other answer"
                                                    label="wrong3"
                                                    onChange={event => handleChangeInput(inputField.id, event)}

                                                    name="wrong3"
                                                    defaultValue=''
                                                    margin="normal"
                                                    fullWidth
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </>


                        </div>

                        <a class="btn btn-primary" data-toggle="collapse"
                         href="#collapseExample" role="button" aria-expanded="false" 
                         aria-controls="collapseExample" onClick={handleAddFields}
>
                            Add question
                        </a>
                    </div>

                    <br />
                    <br />
                      </div>


            </div>
        </div>
    </div>
</div>

</div>
                                          
                                         
                                        


                                        </div>



                              



                                ))};
                          <br />




                          <div className="buttonintro">
                                <Button
                                    color="secondary"
                                    variant="contained"
                                    onClick={back}
                                >Back</Button>


<Button
            color="warning"
            variant="contained"
           onClick={alert}
            style={{ marginLeft: '10px'}}
          >cancel</Button>

                
                                 
              <Button
             
             variant="contained"
             onClick={alert}
             style={{backgroundColor:'#1EA69A',color:'#FFFFFF',marginLeft: '10px'}}
           >ADD</Button>
</div>
                            </>
                        </MuiThemeProvider>
                    </div>
                </div>



            </form>
        </div>
    );
}


export default Quiz;
