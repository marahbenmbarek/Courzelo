import Button from '@material-ui/core/Button';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import PermMediaTwoToneIcon from '@material-ui/icons/PermMediaTwoTone';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import QueuePlayNextTwoToneIcon from '@material-ui/icons/QueuePlayNextTwoTone';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { updateCourse } from '../../../../redux/actions/courseAction';
import './StepForm.css';




function ModifierChapitres() {
    
    const token = useSelector(state => state.token)

    const [inputFields, setInputFields] = useState([
        { id: uuidv4(), text1: '' , img1:'', vid1:'', pdf1:'', text2: '', img2:'', vid2:'', pdf2:'', text3: '', img3:'', vid3:'', pdf3:'', text4: '', img4:'', vid4:'', pdf4:'', text5: '', img5:'', vid5:'', pdf5:'', text6: '', img6:'', vid6:'', pdf6:'', text7: '', img7:'', vid7:'', pdf7:'', text8: '', img8:'', vid8:'', pdf8:'' },
    ]);

    const handleAddFields = () => {
        setInputFields([...inputFields, { id: uuidv4(), text1: '' , img1:'', vid1:'', pdf1:'', text2: '', img2:'', vid2:'', pdf2:'', text3: '', img3:'', vid3:'', pdf3:'', text4: '', img4:'', vid4:'', pdf4:'', text5: '', img5:'', vid5:'', pdf5:'', text6: '', img6:'', vid6:'', pdf6:'', text7: '', img7:'', vid7:'', pdf7:'', text8: '', img8:'', vid8:'', pdf8:''  }])
    }
    const handleRemoveFields = id => {
        const values = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
    }
    const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map(i => {
            if (id === i.id) {
                i[event.target.name] = event.target.value
            }
            return i;
        })

        setInputFields(newInputFields);
    }
    const { id } = useParams();
    const dispatch = useDispatch();
    const courses = useSelector(state => state.courses);
  
  
    const [postcourse, setCourseData] = useState({
      title: '',
      description: '',
      introduction:
      {
        text1: '',
        video1: '',
        img1: '',
        filePath1: '',
  
        text2: '',
        video2: '',
        img2: '',
        filePath2: '',
        text3: '',
        video3: '',
        img3: '',
        filePath3: '',
        text4: '',
        video4: '',
        img4: '',
        filePath4: ''
  
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
      categorie: ''
    });
    useEffect(() => {
  
      if (courses.length !== 0) {
        courses.forEach(course => {
          if (course._id === id) {
            setCourseData(course)
  
          }
        })
      }
    }, [courses, id])
  
  
    const handleSubmit = async (e) => {
      alert('hello');
      e.preventDefault();
      console.log('test1', postcourse);
      dispatch(updateCourse(id, postcourse));
      console.log('test2', postcourse);
  
  
    }
   
    const uploadimg1 = async(id, event) => {
        event.preventDefault()
    
        const file = event.target.files[0]
    
        if (!file) return 'no file';
    
        if (file.size > 1024 * 1024)
          return 'big size'
    
        if (file.type !== 'image/jpeg' && file.type !== 'image/png')
          return 'wrong type';
    
        let formData = new FormData()
        formData.append('file', file)
    
        const res = await axios.post('/CourseImg/upload_Course_img', formData, {
          headers: { 'content-type': 'multipart/form-data', Authorization: token }
        }).then(res => {
            
            const newInputFields = inputFields.map(i => {
                if (id === i.id) {
                    i.img1 = res.data.url
                }
                return i;
            })
            setInputFields(newInputFields);
        }
    )
}
const uploadvid1 = async(id, event) => {
    event.preventDefault()

    const file = event.target.files[0]

    if (!file) return 'no file';

    if (file.type !== 'video/mp4')
      return 'wrong type';

    let formData = new FormData()
    formData.append('file', file)

    const res = await axios.post('/CourseVideo/upload_Course_Video', formData, {
      headers: { 'content-type': 'multipart/form-data', Authorization: token }
    }).then(res => {
        const newInputFields = inputFields.map(i => {
            if (id === i.id) {
                i.vid1 = res.data.url
            }
            return i;
        })
        setInputFields(newInputFields);
        }
    )
}    
const uploadpdf1 = async(id, event) => {
    event.preventDefault()
    const file = event.target.files[0]
    
    if (!file) return "no file";

    if (file.type !== 'application/pdf')
      return "opsss";

    let formData = new FormData()
    formData.append('file', file)

    const res = await axios.post('/CoursePdf/singleFile', formData, {
      headers: { 'content-type': 'multipart/form-data', Authorization: token }
    }).then(res => {
        const newInputFields = inputFields.map(i => {
            if (id === i.id) {
                i.pdf1 = res.data.url
            }
            return i;
        })
        setInputFields(newInputFields);
        }
    )
};
const uploadimg2 = async(id, event) => {
    event.preventDefault()

    const file = event.target.files[0]

    if (!file) return 'no file';

    if (file.size > 1024 * 1024)
      return 'big size'

    if (file.type !== 'image/jpeg' && file.type !== 'image/png')
      return 'wrong type';

    let formData = new FormData()
    formData.append('file', file)

    const res = await axios.post('/CourseImg/upload_Course_img', formData, {
      headers: { 'content-type': 'multipart/form-data', Authorization: token }
    }).then(res => {
        
        const newInputFields = inputFields.map(i => {
            if (id === i.id) {
                i.img2 = res.data.url
            }
            return i;
        })
        setInputFields(newInputFields);
    }
)
}
const uploadvid2 = async(id, event) => {
event.preventDefault()

const file = event.target.files[0]

if (!file) return 'no file';

if (file.type !== 'video/mp4')
  return 'wrong type';

let formData = new FormData()
formData.append('file', file)

const res = await axios.post('/CourseVideo/upload_Course_Video', formData, {
  headers: { 'content-type': 'multipart/form-data', Authorization: token }
}).then(res => {
    const newInputFields = inputFields.map(i => {
        if (id === i.id) {
            i.vid2 = res.data.url
        }
        return i;
    })
    setInputFields(newInputFields);
    }
)
}    
const uploadpdf2 = async(id, event) => {
event.preventDefault()
const file = event.target.files[0]

if (!file) return "no file";

if (file.type !== 'application/pdf')
  return "opsss";

let formData = new FormData()
formData.append('file', file)

const res = await axios.post('/CoursePdf/singleFile', formData, {
  headers: { 'content-type': 'multipart/form-data', Authorization: token }
}).then(res => {
    const newInputFields = inputFields.map(i => {
        if (id === i.id) {
            i.pdf2 = res.data.url
        }
        return i;
    })
    setInputFields(newInputFields);
    }
)
};
const uploadimg3 = async(id, event) => {
    event.preventDefault()

    const file = event.target.files[0]

    if (!file) return 'no file';

    if (file.size > 1024 * 1024)
      return 'big size'

    if (file.type !== 'image/jpeg' && file.type !== 'image/png')
      return 'wrong type';

    let formData = new FormData()
    formData.append('file', file)

    const res = await axios.post('/CourseImg/upload_Course_img', formData, {
      headers: { 'content-type': 'multipart/form-data', Authorization: token }
    }).then(res => {
        
        const newInputFields = inputFields.map(i => {
            if (id === i.id) {
                i.img3 = res.data.url
            }
            return i;
        })
        setInputFields(newInputFields);
    }
)
}
const uploadvid3 = async(id, event) => {
event.preventDefault()

const file = event.target.files[0]

if (!file) return 'no file';

if (file.type !== 'video/mp4')
  return 'wrong type';

let formData = new FormData()
formData.append('file', file)

const res = await axios.post('/CourseVideo/upload_Course_Video', formData, {
  headers: { 'content-type': 'multipart/form-data', Authorization: token }
}).then(res => {
    const newInputFields = inputFields.map(i => {
        if (id === i.id) {
            i.vid3 = res.data.url
        }
        return i;
    })
    setInputFields(newInputFields);
    }
)
}    
const uploadpdf3 = async(id, event) => {
event.preventDefault()
const file = event.target.files[0]

if (!file) return "no file";

if (file.type !== 'application/pdf')
  return "opsss";

let formData = new FormData()
formData.append('file', file)

const res = await axios.post('/CoursePdf/singleFile', formData, {
  headers: { 'content-type': 'multipart/form-data', Authorization: token }
}).then(res => {
    const newInputFields = inputFields.map(i => {
        if (id === i.id) {
            i.pdf3 = res.data.url
        }
        return i;
    })
    setInputFields(newInputFields);
    }
)
};
const uploadimg4 = async(id, event) => {
    event.preventDefault()

    const file = event.target.files[0]

    if (!file) return 'no file';

    if (file.size > 1024 * 1024)
      return 'big size'

    if (file.type !== 'image/jpeg' && file.type !== 'image/png')
      return 'wrong type';

    let formData = new FormData()
    formData.append('file', file)

    const res = await axios.post('/CourseImg/upload_Course_img', formData, {
      headers: { 'content-type': 'multipart/form-data', Authorization: token }
    }).then(res => {
        
        const newInputFields = inputFields.map(i => {
            if (id === i.id) {
                i.img4 = res.data.url
            }
            return i;
        })
        setInputFields(newInputFields);
    }
)
}
const uploadvid4 = async(id, event) => {
event.preventDefault()

const file = event.target.files[0]

if (!file) return 'no file';

if (file.type !== 'video/mp4')
  return 'wrong type';

let formData = new FormData()
formData.append('file', file)

const res = await axios.post('/CourseVideo/upload_Course_Video', formData, {
  headers: { 'content-type': 'multipart/form-data', Authorization: token }
}).then(res => {
    const newInputFields = inputFields.map(i => {
        if (id === i.id) {
            i.vid4 = res.data.url
        }
        return i;
    })
    setInputFields(newInputFields);
    }
)
}    
const uploadpdf4 = async(id, event) => {
event.preventDefault()
const file = event.target.files[0]

if (!file) return "no file";

if (file.type !== 'application/pdf')
  return "opsss";

let formData = new FormData()
formData.append('file', file)

const res = await axios.post('/CoursePdf/singleFile', formData, {
  headers: { 'content-type': 'multipart/form-data', Authorization: token }
}).then(res => {
    const newInputFields = inputFields.map(i => {
        if (id === i.id) {
            i.pdf4 = res.data.url
        }
        return i;
    })
    setInputFields(newInputFields);
    }
)
};
const uploadimg5 = async(id, event) => {
    event.preventDefault()

    const file = event.target.files[0]

    if (!file) return 'no file';

    if (file.size > 1024 * 1024)
      return 'big size'

    if (file.type !== 'image/jpeg' && file.type !== 'image/png')
      return 'wrong type';

    let formData = new FormData()
    formData.append('file', file)

    const res = await axios.post('/CourseImg/upload_Course_img', formData, {
      headers: { 'content-type': 'multipart/form-data', Authorization: token }
    }).then(res => {
        
        const newInputFields = inputFields.map(i => {
            if (id === i.id) {
                i.img5 = res.data.url
            }
            return i;
        })
        setInputFields(newInputFields);
    }
)
}
const uploadvid5 = async(id, event) => {
event.preventDefault()

const file = event.target.files[0]

if (!file) return 'no file';

if (file.type !== 'video/mp4')
  return 'wrong type';

let formData = new FormData()
formData.append('file', file)

const res = await axios.post('/CourseVideo/upload_Course_Video', formData, {
  headers: { 'content-type': 'multipart/form-data', Authorization: token }
}).then(res => {
    const newInputFields = inputFields.map(i => {
        if (id === i.id) {
            i.vid5 = res.data.url
        }
        return i;
    })
    setInputFields(newInputFields);
    }
)
}    
const uploadpdf5 = async(id, event) => {
event.preventDefault()
const file = event.target.files[0]

if (!file) return "no file";

if (file.type !== 'application/pdf')
  return "opsss";

let formData = new FormData()
formData.append('file', file)

const res = await axios.post('/CoursePdf/singleFile', formData, {
  headers: { 'content-type': 'multipart/form-data', Authorization: token }
}).then(res => {
    const newInputFields = inputFields.map(i => {
        if (id === i.id) {
            i.pdf5 = res.data.url
        }
        return i;
    })
    setInputFields(newInputFields);
    }
)
};
const uploadimg6 = async(id, event) => {
    event.preventDefault()

    const file = event.target.files[0]

    if (!file) return 'no file';

    if (file.size > 1024 * 1024)
      return 'big size'

    if (file.type !== 'image/jpeg' && file.type !== 'image/png')
      return 'wrong type';

    let formData = new FormData()
    formData.append('file', file)

    const res = await axios.post('/CourseImg/upload_Course_img', formData, {
      headers: { 'content-type': 'multipart/form-data', Authorization: token }
    }).then(res => {
        
        const newInputFields = inputFields.map(i => {
            if (id === i.id) {
                i.img6 = res.data.url
            }
            return i;
        })
        setInputFields(newInputFields);
    }
)
}
const uploadvid6 = async(id, event) => {
event.preventDefault()

const file = event.target.files[0]

if (!file) return 'no file';

if (file.type !== 'video/mp4')
  return 'wrong type';

let formData = new FormData()
formData.append('file', file)

const res = await axios.post('/CourseVideo/upload_Course_Video', formData, {
  headers: { 'content-type': 'multipart/form-data', Authorization: token }
}).then(res => {
    const newInputFields = inputFields.map(i => {
        if (id === i.id) {
            i.vid6 = res.data.url
        }
        return i;
    })
    setInputFields(newInputFields);
    }
)
}    
const uploadpdf6 = async(id, event) => {
event.preventDefault()
const file = event.target.files[0]

if (!file) return "no file";

if (file.type !== 'application/pdf')
  return "opsss";

let formData = new FormData()
formData.append('file', file)

const res = await axios.post('/CoursePdf/singleFile', formData, {
  headers: { 'content-type': 'multipart/form-data', Authorization: token }
}).then(res => {
    const newInputFields = inputFields.map(i => {
        if (id === i.id) {
            i.pdf6 = res.data.url
        }
        return i;
    })
    setInputFields(newInputFields);
    }
)
};
const uploadimg7 = async(id, event) => {
    event.preventDefault()

    const file = event.target.files[0]

    if (!file) return 'no file';

    if (file.size > 1024 * 1024)
      return 'big size'

    if (file.type !== 'image/jpeg' && file.type !== 'image/png')
      return 'wrong type';

    let formData = new FormData()
    formData.append('file', file)

    const res = await axios.post('/CourseImg/upload_Course_img', formData, {
      headers: { 'content-type': 'multipart/form-data', Authorization: token }
    }).then(res => {
        
        const newInputFields = inputFields.map(i => {
            if (id === i.id) {
                i.img7 = res.data.url
            }
            return i;
        })
        setInputFields(newInputFields);
    }
)
}
const uploadvid7 = async(id, event) => {
event.preventDefault()

const file = event.target.files[0]

if (!file) return 'no file';

if (file.type !== 'video/mp4')
  return 'wrong type';

let formData = new FormData()
formData.append('file', file)

const res = await axios.post('/CourseVideo/upload_Course_Video', formData, {
  headers: { 'content-type': 'multipart/form-data', Authorization: token }
}).then(res => {
    const newInputFields = inputFields.map(i => {
        if (id === i.id) {
            i.vid7 = res.data.url
        }
        return i;
    })
    setInputFields(newInputFields);
    }
)
}    
const uploadpdf7 = async(id, event) => {
event.preventDefault()
const file = event.target.files[0]

if (!file) return "no file";

if (file.type !== 'application/pdf')
  return "opsss";

let formData = new FormData()
formData.append('file', file)

const res = await axios.post('/CoursePdf/singleFile', formData, {
  headers: { 'content-type': 'multipart/form-data', Authorization: token }
}).then(res => {
    const newInputFields = inputFields.map(i => {
        if (id === i.id) {
            i.pdf7 = res.data.url
        }
        return i;
    })
    setInputFields(newInputFields);
    }
)
};
const uploadimg8 = async(id, event) => {
    event.preventDefault()

    const file = event.target.files[0]

    if (!file) return 'no file';

    if (file.size > 1024 * 1024)
      return 'big size'

    if (file.type !== 'image/jpeg' && file.type !== 'image/png')
      return 'wrong type';

    let formData = new FormData()
    formData.append('file', file)

    const res = await axios.post('/CourseImg/upload_Course_img', formData, {
      headers: { 'content-type': 'multipart/form-data', Authorization: token }
    }).then(res => {
        
        const newInputFields = inputFields.map(i => {
            if (id === i.id) {
                i.img8 = res.data.url
            }
            return i;
        })
        setInputFields(newInputFields);
    }
)
}
const uploadvid8 = async(id, event) => {
event.preventDefault()

const file = event.target.files[0]

if (!file) return 'no file';

if (file.type !== 'video/mp4')
  return 'wrong type';

let formData = new FormData()
formData.append('file', file)

const res = await axios.post('/CourseVideo/upload_Course_Video', formData, {
  headers: { 'content-type': 'multipart/form-data', Authorization: token }
}).then(res => {
    const newInputFields = inputFields.map(i => {
        if (id === i.id) {
            i.vid8 = res.data.url
        }
        return i;
    })
    setInputFields(newInputFields);
    }
)
}    
const uploadpdf8 = async(id, event) => {
event.preventDefault()
const file = event.target.files[0]

if (!file) return "no file";

if (file.type !== 'application/pdf')
  return "opsss";

let formData = new FormData()
formData.append('file', file)

const res = await axios.post('/CoursePdf/singleFile', formData, {
  headers: { 'content-type': 'multipart/form-data', Authorization: token }
}).then(res => {
    const newInputFields = inputFields.map(i => {
        if (id === i.id) {
            i.pdf8 = res.data.url
        }
        return i;
    })
    setInputFields(newInputFields);
    }
)
};

    return (
        <div >
            <br /><br /><br /><br /><br />
            <form >

                <div className="main">

                    <div className="side"></div>
                    <div className="userform" style={{ marginLeft: '-400px', width: '1550px' }}>
                    <form onSubmit={handleSubmit}>

                        <MuiThemeProvider>
                            <>
                                <h1>Chapitres</h1>
                                <div className="row" style={{ marginBottom: '100px' }}>
                                    <div className=" col-sm-12 col-md-6" style={{ height: '290px' }} >

                                        <img loading="lazy" style={{ width: '600px', height: '300px' }} src="assets/kolb.png" alt="The Ultimate Ethical Hacking Boot Camp" className />


                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <p style={{ color: '#0075BA', fontSize: '18px', fontStyle: 'italic', marginTop: '100px' }}>
                                            -As an instructional design tool, 4MAT gives teachers and trainers a systematic
way to train all learners to think and learn well.<br />
-As a professional development tool, it provides a framework for assessing the quality of any learning experience.
-As an organisational model, it offers a method for creating an environment for continuous learning and development.</p>

                                    </div>

                                </div>                           {inputFields.map(inputField => (
                                    <div className="boxcard" style={{ marginBottom: '50px' }}>

                                        <Button

                                            color="primary"
                                            variant="contained"
                                            onClick={handleAddFields}

                                        >+</Button>

                                        <Button
                                            style={{ marginLeft: '1px' }}
                                            color="primary"
                                            variant="contained"
                                            disabled={inputFields.length === 1}
                                            onClick={() => handleRemoveFields(inputField.id)}

                                        >-</Button>

                                        <div className="accordion" id="accordionExample">



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
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> connect? </b> </h5>
                                                                    <p style={{ color: 'black' }}>In the left-hand mode of quadrant 1, the students examine the experience. The method once again involves a discussion, but this time students are asked to look past their own experience. The experience then flows into a meaningful dialogue and reflection. </p>


                                                                    <div >
                                                                        {/* Tab 1 */}


                                                                        <div >

                                                                            <>
                                                                                <section >
                                                                                    <i > < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1" /></i>
                                                                                    <i style={{ marginLeft: '100px' }}> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid1" aria-expanded="false" aria-controls="collapseExampleVid1" /> </i>
                                                                                    <i style={{ marginLeft: '100px' }} >  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg1" aria-expanded="false" aria-controls="collapseExampleImg1" /> </i>
                                                                                    <i style={{ marginLeft: '100px' }}>  <PictureAsPdfIcon data-toggle="collapse" href="#collapseExamplepdf1" aria-expanded="false" aria-controls="collapseExamplepdf1" /> </i>
                                                                                </section>






                                                                                <div className="collapse" id="collapseExample1">
                                                                                    <div className="cardd card-body">
                                                                                        <div className="form-group">
                                                                                            <textarea
                                                                                                placeholder=" phase 1"
                                                                                                label="phase1"
                                                                                                onChange={event => handleChangeInput(inputField.id, event)}
                                                                                                name="text1"
                                                                                                defaultValue={postcourse.title}
                                                                                                margin="normal"
                                                                                                fullWidth
                                                                                            />
                                                                                        </div>    </div>
                                                                                </div>

                                                                                <div className="collapse" id="collapseExampleImg1">
                                                                                    <div className="cardd card-body">
                                                                                        <div className="form-group">
                                                                                            <input type="file"
                                                                                                name="file"
                                                                                                id="file_up"
                                                                                                onChange={event => uploadimg1(inputField.id, event)} />
                                                                                        </div>   <div className="wpb_column vc_column_container vc_col-sm-6">
                                                                                            <img src={inputField.img1}
                                                                                            />

                                                                                        </div> </div>
                                                                                </div>

                                                                                <div className="collapse" id="collapseExampleVid1">
                                                                                    <div className="cardd card-body">
                                                                                        <div className="form-group">
                                                                                            <input type="file"
                                                                                                name="file"
                                                                                                id="file_up"
                                                                                                onChange={event => uploadvid1(inputField.id, event)}
                                                                                            ></input>
                                                                                        </div>
                                                                                        <div className="thim-sc-video-box" >
                                                                                            <div className="video" >
                                                                                                <div>
                                                                                                    <div style={{ width: '100px' }}>
                                                                                                        <ReactPlayer url={inputField.video1} controls={true}></ReactPlayer>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="collapse" id="collapseExamplepdf1">
                                                                                    <div className="cardd card-body">
                                                                                        <div className="form-group">
                                                                                            <input type="file"
                                                                                                name="file"
                                                                                                id="file_up"
                                                                                                onChange={event => uploadpdf1(inputField.id, event)}
                                                                                            ></input>
                                                                                        </div>   <div>
                                                                                            <a style={{ display: "table-cell" }} href={inputField.filePath1} target={inputField.filePath1}>pdf link</a>
                                                                                        </div>  </div>
                                                                                </div>
                                                                            </>


                                                                        </div>


                                                                    </div>

                                                                </div>
                                                                <div className=" col-sm-12 col-md-1"></div>
                                                                <div className=" col-sm-12 col-md-4" >
                                                                    <img loading="lazy" style={{ width: '8000px', height: '320px' }} src="assets/kolbA.jpg" alt="The Ultimate Ethical Hacking Boot Camp" className />


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
                                                                    <h5 style={{ color: 'black' }}> <b style={{ color: '#D23941', fontSize: '18px' }}> Attend? </b> </h5>
                                                                    <p style={{ color: 'black' }}>In the left-hand mode of quadrant 1, the students examine the experience. The method once again involves a discussion, but this time students are asked to look past their own experience. The experience then flows into a meaningful dialogue and reflection. </p>


                                                                    <div >
                                                                        {/* Tab 1 */}


                                                                        <div >

                                                                            <>
                                                                                <section >
                                                                                    <i > < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2" /></i>
                                                                                    <i style={{ marginLeft: '100px' }}> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid2" aria-expanded="false" aria-controls="collapseExampleVid2" /> </i>
                                                                                    <i style={{ marginLeft: '100px' }} >  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg2" aria-expanded="false" aria-controls="collapseExampleImg2" /> </i>
                                                                                    <i style={{ marginLeft: '100px' }}>  <PictureAsPdfIcon data-toggle="collapse" href="#collapseExamplepdf2" aria-expanded="false" aria-controls="collapseExamplepdf2" /> </i>

                                                                                </section>






                                                                                <div className="collapse" id="collapseExample2">
                                                                                    <div className="cardd card-body">
                                                                                        <div className="form-group">
                                                                                            <textarea
                                                                                                placeholder=" phase 2"
                                                                                                label="phase2"
                                                                                                onChange={event => handleChangeInput(inputField.id, event)}
                                                                                                name="text2"
                                                                                                defaultValue=''
                                                                                                margin="normal"
                                                                                                fullWidth
                                                                                            />
                                                                                        </div>    </div>
                                                                                </div>

                                                                                <div className="collapse" id="collapseExampleImg2">
                                                                                    <div className="cardd card-body">
                                                                                        <div className="form-group">
                                                                                            <input type="file"
                                                                                                name="file"
                                                                                                id="file_up"
                                                                                                onChange={event => uploadimg2(inputField.id, event)}
                                                                                            ></input>
                                                                                        </div>    </div>
                                                                                </div>

                                                                                <div className="collapse" id="collapseExampleVid2">
                                                                                    <div className="cardd card-body">
                                                                                        <div className="form-group">
                                                                                            <input type="file"
                                                                                                name="file"
                                                                                                id="file_up"
                                                                                                onChange={event => uploadvid2(inputField.id, event)}
                                                                                            ></input>
                                                                                        </div>    </div>
                                                                                </div>
                                                                                <div className="collapse" id="collapseExamplepdf2">
                                                                                    <div className="cardd card-body">
                                                                                        <div className="form-group">
                                                                                            <input type="file"
                                                                                                name="file"
                                                                                                id="file_up"
                                                                                                onChange={event => uploadpdf2(inputField.id, event)}
                                                                                            ></input>
                                                                                        </div>    </div>
                                                                                </div>
                                                                            </>


                                                                        </div>


                                                                    </div>

                                                                </div>
                                                                <div className=" col-sm-12 col-md-1"></div>
                                                                <div className=" col-sm-12 col-md-4" >
                                                                    <img loading="lazy" style={{ width: '8000px', height: '320px' }} src="assets/b.jpg" alt="The Ultimate Ethical Hacking Boot Camp" className />


                                                                </div>
                                                            </div>
                                                        </div></div></div></div>
                                            <div className="accordion" id="accordionExample">

                                                <div className="cardd">
                                                    <div className="cardd-header" id="headingThree">

                                                        <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                                            <h5>Phase 3:  </h5>
                                                        </button>

                                                    </div>
                                                    <div id="collapseThree" className="collapse " aria-labelledby="headingThree" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}> <b style={{ color: '#D23941', fontSize: '18px' }}> Image? </b> </h5>
                                                                    <p style={{ color: 'black' }}>In the left-hand mode of quadrant 1, the students examine the experience. The method once again involves a discussion, but this time students are asked to look past their own experience. The experience then flows into a meaningful dialogue and reflection. </p>


                                                                    <div >
                                                                        {/* Tab 1 */}


                                                                        <div >

                                                                            <>
                                                                                <section >
                                                                                    <i > < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample3" aria-expanded="false" aria-controls="collapseExample3" /></i>
                                                                                    <i style={{ marginLeft: '100px' }}> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid3" aria-expanded="false" aria-controls="collapseExampleVid3" /> </i>
                                                                                    <i style={{ marginLeft: '100px' }} >  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg3" aria-expanded="false" aria-controls="collapseExampleImg3" /> </i>
                                                                                    <i style={{ marginLeft: '100px' }}>  <PictureAsPdfIcon data-toggle="collapse" href="#collapseExamplepdf3" aria-expanded="false" aria-controls="collapseExamplepdf3" /> </i>

                                                                                </section>






                                                                                <div className="collapse" id="collapseExample3">
                                                                                    <div className="cardd card-body">
                                                                                        <div className="form-group">
                                                                                            <textarea
                                                                                                placeholder=" phase 3"
                                                                                                label="phase3"
                                                                                                onChange={event => handleChangeInput(inputField.id, event)}
                                                                                                name="text3"
                                                                                                defaultValue=''
                                                                                                margin="normal"
                                                                                                fullWidth
                                                                                            />
                                                                                        </div>    </div>
                                                                                </div>

                                                                                <div className="collapse" id="collapseExampleImg3">
                                                                                    <div className="cardd card-body">
                                                                                        <div className="form-group">
                                                                                            <input type="file"
                                                                                                name="file"
                                                                                                id="file_up"
                                                                                                onChange={event => uploadimg3(inputField.id, event)}
                                                                                            ></input>
                                                                                        </div>    </div>
                                                                                </div>

                                                                                <div className="collapse" id="collapseExampleVid3">
                                                                                    <div className="cardd card-body">
                                                                                        <div className="form-group">
                                                                                            <input type="file"
                                                                                                name="file"
                                                                                                id="file_up"
                                                                                                onChange={event => uploadvid3(inputField.id, event)}
                                                                                            ></input>
                                                                                        </div>    </div>
                                                                                </div>
                                                                                <div className="collapse" id="collapseExamplepdf3">
                                                                                    <div className="cardd card-body">
                                                                                        <div className="form-group">
                                                                                            <input type="file"
                                                                                                name="file"
                                                                                                id="file_up"
                                                                                                onChange={event => uploadpdf3(inputField.id, event)}
                                                                                            ></input>
                                                                                        </div>    </div>
                                                                                </div>
                                                                            </>


                                                                        </div>


                                                                    </div>

                                                                </div>
                                                                <div className=" col-sm-12 col-md-1"></div>
                                                                <div className=" col-sm-12 col-md-4" >
                                                                    <img loading="lazy" style={{ width: '8000px', height: '320px' }} src="assets/kolbC.jpg" alt="The Ultimate Ethical Hacking Boot Camp" className />


                                                                </div>
                                                            </div>
                                                        </div></div></div></div>
                                            <div className="accordion" id="accordionExample">

                                                <div className="cardd">
                                                    <div className="cardd-header" id="headingFour">

                                                        <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                                            <h5>Phase 4:  </h5>
                                                        </button>

                                                    </div>
                                                    <div id="collapseFour" className="collapse " aria-labelledby="headingFour" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}> <b style={{ color: '#D23941', fontSize: '18px' }}> Inform? </b> </h5>
                                                                    <p style={{ color: 'black' }}>In the left-hand mode of quadrant 1, the students examine the experience. The method once again involves a discussion, but this time students are asked to look past their own experience. The experience then flows into a meaningful dialogue and reflection. </p>


                                                                    <div >
                                                                        {/* Tab 1 */}


                                                                        <div >

                                                                            <>
                                                                                <section >
                                                                                    <i > < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample4" aria-expanded="false" aria-controls="collapseExample4" /></i>
                                                                                    <i style={{ marginLeft: '100px' }}> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid4" aria-expanded="false" aria-controls="collapseExampleVid4" /> </i>
                                                                                    <i style={{ marginLeft: '100px' }} >  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg4" aria-expanded="false" aria-controls="collapseExampleImg4" /> </i>
                                                                                    <i style={{ marginLeft: '100px' }}>  <PictureAsPdfIcon data-toggle="collapse" href="#collapseExamplepdf1" aria-expanded="false" aria-controls="collapseExamplepdf4" /> </i>

                                                                                </section>






                                                                                <div className="collapse" id="collapseExample4">
                                                                                    <div className="cardd card-body">
                                                                                        <div className="form-group">
                                                                                            <textarea
                                                                                                placeholder=" phase 4"
                                                                                                label="phase4"
                                                                                                onChange={event => handleChangeInput(inputField.id, event)}
                                                                                                name="text4"
                                                                                                defaultValue=''
                                                                                                margin="normal"
                                                                                                fullWidth
                                                                                            />
                                                                                        </div>    </div>
                                                                                </div>

                                                                                <div className="collapse" id="collapseExampleImg4">
                                                                                    <div className="cardd card-body">
                                                                                        <div className="form-group">
                                                                                            <input type="file"
                                                                                                name="file"
                                                                                                id="file_up"
                                                                                                onChange={event => uploadimg4(inputField.id, event)}
                                                                                            ></input>
                                                                                        </div>    </div>
                                                                                </div>

                                                                                <div className="collapse" id="collapseExampleVid4">
                                                                                    <div className="cardd card-body">
                                                                                        <div className="form-group">
                                                                                            <input type="file"
                                                                                                name="file"
                                                                                                id="file_up"
                                                                                                onChange={event => uploadvid4(inputField.id, event)}
                                                                                            ></input>
                                                                                        </div>    </div>
                                                                                </div>
                                                                                <div className="collapse" id="collapseExamplepdf4">
                                                                                    <div className="cardd card-body">
                                                                                        <div className="form-group">
                                                                                            <input type="file"
                                                                                                name="file"
                                                                                                id="file_up"
                                                                                                onChange={event => uploadpdf4(inputField.id, event)}
                                                                                            ></input>
                                                                                        </div>    </div>
                                                                                </div>
                                                                            </>


                                                                        </div>


                                                                    </div>

                                                                </div>
                                                                <div className=" col-sm-12 col-md-1"></div>
                                                                <div className=" col-sm-12 col-md-4" >
                                                                    <img loading="lazy" style={{ width: '8000px', height: '320px' }} src="assets/kolbD.jpg" alt="The Ultimate Ethical Hacking Boot Camp" className />


                                                                </div>
                                                            </div>
                                                        </div></div></div></div>
                                            <div className="accordion" id="accordionExample">

                                                <div className="cardd">
                                                    <div className="cardd-header" id="headingFive">

                                                        <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                                            <h5>Phase 5:  </h5>
                                                        </button>

                                                    </div>
                                                    <div id="collapseFive" className="collapse " aria-labelledby="headingFive" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}> <b style={{ color: '#D23941', fontSize: '18px' }}> Practice? </b> </h5>
                                                                    <p style={{ color: 'black' }}>In the left-hand mode of quadrant 1, the students examine the experience. The method once again involves a discussion, but this time students are asked to look past their own experience. The experience then flows into a meaningful dialogue and reflection. </p>


                                                                    <div >
                                                                        {/* Tab 1 */}


                                                                        <div >

                                                                            <>
                                                                                <section >
                                                                                    <i > < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample5" aria-expanded="false" aria-controls="collapseExample5" /></i>
                                                                                    <i style={{ marginLeft: '100px' }}> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid5" aria-expanded="false" aria-controls="collapseExampleVid5" /> </i>
                                                                                    <i style={{ marginLeft: '100px' }} >  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg5" aria-expanded="false" aria-controls="collapseExampleImg5" /> </i>
                                                                                    <i style={{ marginLeft: '100px' }}>  <PictureAsPdfIcon data-toggle="collapse" href="#collapseExamplepdf5" aria-expanded="false" aria-controls="collapseExamplepdf5" /> </i>

                                                                                </section>






                                                                                <div className="collapse" id="collapseExample5">
                                                                                    <div className="cardd card-body">
                                                                                        <div className="form-group">
                                                                                            <textarea
                                                                                                placeholder=" phase 5"
                                                                                                label="phase5"
                                                                                                onChange={event => handleChangeInput(inputField.id, event)}
                                                                                                name="text5"
                                                                                                defaultValue=''
                                                                                                margin="normal"
                                                                                                fullWidth
                                                                                            />
                                                                                        </div>    </div>
                                                                                </div>

                                                                                <div className="collapse" id="collapseExampleImg5">
                                                                                    <div className="cardd card-body">
                                                                                        <div className="form-group">
                                                                                            <input type="file"
                                                                                                name="file"
                                                                                                id="file_up"
                                                                                                onChange={event => uploadimg5(inputField.id, event)}
                                                                                            ></input>
                                                                                        </div>    </div>
                                                                                </div>

                                                                                <div className="collapse" id="collapseExampleVid5">
                                                                                    <div className="cardd card-body">
                                                                                        <div className="form-group">
                                                                                            <input type="file"
                                                                                                name="file"
                                                                                                id="file_up"
                                                                                                onChange={event => uploadvid5(inputField.id, event)}
                                                                                            ></input>
                                                                                        </div>    </div>
                                                                                </div>
                                                                                <div className="collapse" id="collapseExamplepdf5">
                                                                                    <div className="cardd card-body">
                                                                                        <div className="form-group">
                                                                                            <input type="file"
                                                                                                name="file"
                                                                                                id="file_up"
                                                                                                onChange={event => uploadpdf5(inputField.id, event)}
                                                                                            ></input>
                                                                                        </div>    </div>
                                                                                </div>
                                                                            </>


                                                                        </div>


                                                                    </div>
                                                                </div>
                                                                <div className=" col-sm-12 col-md-1"></div>
                                                                <div className=" col-sm-12 col-md-4" >
                                                                    <img loading="lazy" style={{ width: '8000px', height: '320px' }} src="assets/kolbE.jpg" alt="The Ultimate Ethical Hacking Boot Camp" className />


                                                                </div>
                                                            </div>
                                                        </div></div></div></div>
                                            <div className="accordion" id="accordionExample">

                                                <div className="cardd">
                                                    <div className="cardd-header" id="headingSix">

                                                        <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                                                            <h5>Phase 6:  </h5>
                                                        </button>

                                                    </div>
                                                    <div id="collapseSix" className="collapse " aria-labelledby="headingSix" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}><b style={{ color: '#D23941', fontSize: '18px' }}> Extend? </b> </h5>
                                                                    <p style={{ color: 'black' }}>In the left-hand mode of quadrant 1, the students examine the experience. The method once again involves a discussion, but this time students are asked to look past their own experience. The experience then flows into a meaningful dialogue and reflection. </p>


                                                                    <div >
                                                                        {/* Tab 1 */}


                                                                        <div >

                                                                            <>
                                                                                <section >
                                                                                    <i > < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample6" aria-expanded="false" aria-controls="collapseExample6" /></i>
                                                                                    <i style={{ marginLeft: '100px' }}> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid6" aria-expanded="false" aria-controls="collapseExampleVid6" /> </i>
                                                                                    <i style={{ marginLeft: '100px' }} >  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg6" aria-expanded="false" aria-controls="collapseExampleImg6" /> </i>
                                                                                    <i style={{ marginLeft: '100px' }}>  <PictureAsPdfIcon data-toggle="collapse" href="#collapseExamplepdf6" aria-expanded="false" aria-controls="collapseExamplepdf6" /> </i>

                                                                                </section>






                                                                                <div className="collapse" id="collapseExample6">
                                                                                    <div className="cardd card-body">
                                                                                        <div className="form-group">
                                                                                            <textarea
                                                                                                placeholder=" phase 6"
                                                                                                label="phase6"
                                                                                                onChange={event => handleChangeInput(inputField.id, event)}
                                                                                                name="text6"
                                                                                                defaultValue=''
                                                                                                margin="normal"
                                                                                                fullWidth
                                                                                            />
                                                                                        </div>    </div>
                                                                                </div>

                                                                                <div className="collapse" id="collapseExampleImg6">
                                                                                    <div className="cardd card-body">
                                                                                        <div className="form-group">
                                                                                            <input type="file"
                                                                                                name="file"
                                                                                                id="file_up"
                                                                                                onChange={event => uploadimg6(inputField.id, event)}
                                                                                            ></input>
                                                                                        </div>    </div>
                                                                                </div>

                                                                                <div className="collapse" id="collapseExampleVid6">
                                                                                    <div className="cardd card-body">
                                                                                        <div className="form-group">
                                                                                            <input type="file"
                                                                                                name="file"
                                                                                                id="file_up"
                                                                                                onChange={event => uploadvid6(inputField.id, event)}
                                                                                            ></input>
                                                                                        </div>    </div>
                                                                                </div>
                                                                                <div className="collapse" id="collapseExamplepdf6">
                                                                                    <div className="cardd card-body">
                                                                                        <div className="form-group">
                                                                                            <input type="file"
                                                                                                name="file"
                                                                                                id="file_up"
                                                                                                onChange={event => uploadpdf6(inputField.id, event)}
                                                                                            ></input>
                                                                                        </div>    </div>
                                                                                </div>
                                                                            </>


                                                                        </div>


                                                                    </div>

                                                                </div>
                                                                <div className=" col-sm-12 col-md-1"></div>
                                                                <div className=" col-sm-12 col-md-4" >
                                                                    <img loading="lazy" style={{ width: '8000px', height: '320px' }} src="assets/kolbF.jpg" alt="The Ultimate Ethical Hacking Boot Camp" className />


                                                                </div>
                                                            </div>
                                                        </div></div></div></div>
                                            <div className="accordion" id="accordionExample">

                                                <div className="cardd">
                                                    <div className="cardd-header" id="headingEight">

                                                        <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
                                                            <h5>Phase 7:  </h5>
                                                        </button>

                                                    </div>
                                                    <div id="collapseEight" className="collapse " aria-labelledby="headingEight" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}> <b style={{ color: '#D23941', fontSize: '18px' }}> Refine? </b> </h5>
                                                                    <p style={{ color: 'black' }}>In the left-hand mode of quadrant 1, the students examine the experience. The method once again involves a discussion, but this time students are asked to look past their own experience. The experience then flows into a meaningful dialogue and reflection. </p>


                                                                    <div >
                                                                        {/* Tab 1 */}


                                                                        <div >

                                                                            <>
                                                                                <section >
                                                                                    <i > < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample7" aria-expanded="false" aria-controls="collapseExample7" /></i>
                                                                                    <i style={{ marginLeft: '100px' }}> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid7" aria-expanded="false" aria-controls="collapseExampleVid7" /> </i>
                                                                                    <i style={{ marginLeft: '100px' }} >  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg7" aria-expanded="false" aria-controls="collapseExampleImg7" /> </i>
                                                                                    <i style={{ marginLeft: '100px' }}>  <PictureAsPdfIcon data-toggle="collapse" href="#collapseExamplepdf7" aria-expanded="false" aria-controls="collapseExamplepdf7" /> </i>

                                                                                </section>






                                                                                <div className="collapse" id="collapseExample7">
                                                                                    <div className="cardd card-body">
                                                                                        <div className="form-group">
                                                                                            <textarea
                                                                                                placeholder=" phase 7"
                                                                                                label="phase7"
                                                                                                onChange={event => handleChangeInput(inputField.id, event)}
                                                                                                name="text7"
                                                                                                defaultValue=''
                                                                                                margin="normal"
                                                                                                fullWidth
                                                                                            />
                                                                                        </div>    </div>
                                                                                </div>

                                                                                <div className="collapse" id="collapseExampleImg7">
                                                                                    <div className="cardd card-body">
                                                                                        <div className="form-group">
                                                                                            <input type="file"
                                                                                                name="file"
                                                                                                id="file_up"
                                                                                                onChange={event => uploadimg7(inputField.id, event)}
                                                                                            ></input>
                                                                                        </div>    </div>
                                                                                </div>

                                                                                <div className="collapse" id="collapseExampleVid7">
                                                                                    <div className="cardd card-body">
                                                                                        <div className="form-group">
                                                                                            <input type="file"
                                                                                                name="file"
                                                                                                id="file_up"
                                                                                                onChange={event => uploadvid7(inputField.id, event)}
                                                                                            ></input>
                                                                                        </div>    </div>
                                                                                </div>
                                                                                <div className="collapse" id="collapseExamplepdf7">
                                                                                    <div className="cardd card-body">
                                                                                        <div className="form-group">
                                                                                            <input type="file"
                                                                                                name="file"
                                                                                                id="file_up"
                                                                                                onChange={event => uploadpdf7(inputField.id, event)}
                                                                                            ></input>
                                                                                        </div>    </div>
                                                                                </div>
                                                                            </>


                                                                        </div>


                                                                    </div>

                                                                </div>
                                                                <div className=" col-sm-12 col-md-1"></div>
                                                                <div className=" col-sm-12 col-md-4" >
                                                                    <img loading="lazy" style={{ width: '8000px', height: '320px' }} src="assets/kolbG.jpg" alt="The Ultimate Ethical Hacking Boot Camp" className />


                                                                </div>
                                                            </div>
                                                        </div></div></div></div>
                                            <div className="accordion" id="accordionExample">

                                                <div className="cardd">
                                                    <div className="cardd-header" id="headingOnev">

                                                        <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOnev" aria-expanded="true" aria-controls="collapseOnev">
                                                            <h5>Phase 8:  </h5>
                                                        </button>

                                                    </div>
                                                    <div id="collapseOnev" className="collapse " aria-labelledby="headingOnev" data-parent="#accordionExample">
                                                        <div className="card-body">
                                                            <div className="row">
                                                                <div className="card col-sm-12 col-md-7" style={{ backgroundColor: '#EFEFEF' }} >
                                                                    <h5 style={{ color: 'black' }}> <b style={{ color: '#D23941', fontSize: '18px' }}> Perform? </b> </h5>
                                                                    <p style={{ color: 'black' }}>In the left-hand mode of quadrant 1, the students examine the experience. The method once again involves a discussion, but this time students are asked to look past their own experience. The experience then flows into a meaningful dialogue and reflection. </p>


                                                                    <div >
                                                                        {/* Tab 1 */}


                                                                        <div >

                                                                            <>
                                                                                <section >
                                                                                    <i > < DescriptionTwoToneIcon data-toggle="collapse" href="#collapseExample8" aria-expanded="false" aria-controls="collapseExample8" /></i>
                                                                                    <i style={{ marginLeft: '100px' }}> <QueuePlayNextTwoToneIcon data-toggle="collapse" href="#collapseExampleVid8" aria-expanded="false" aria-controls="collapseExampleVid8" /> </i>
                                                                                    <i style={{ marginLeft: '100px' }} >  <PermMediaTwoToneIcon data-toggle="collapse" href="#collapseExampleImg8" aria-expanded="false" aria-controls="collapseExampleImg8" /> </i>
                                                                                    <i style={{ marginLeft: '100px' }}>  <PictureAsPdfIcon data-toggle="collapse" href="#collapseExamplepdf8" aria-expanded="false" aria-controls="collapseExamplepdf8" /> </i>

                                                                                </section>






                                                                                <div className="collapse" id="collapseExample8">
                                                                                    <div className="cardd card-body">
                                                                                        <div className="form-group">
                                                                                            <textarea
                                                                                                placeholder=" phase 8"
                                                                                                label="phase8"
                                                                                                onChange={event => handleChangeInput(inputField.id, event)}
                                                                                                name="text8"
                                                                                                defaultValue=''
                                                                                                margin="normal"
                                                                                                fullWidth
                                                                                            />
                                                                                        </div>    </div>
                                                                                </div>

                                                                                <div className="collapse" id="collapseExampleImg8">
                                                                                    <div className="cardd card-body">
                                                                                        <div className="form-group">
                                                                                            <input type="file"
                                                                                                name="file"
                                                                                                id="file_up"
                                                                                                onChange={event => uploadimg8(inputField.id, event)}
                                                                                            ></input>
                                                                                        </div>    </div>
                                                                                </div>

                                                                                <div className="collapse" id="collapseExampleVid8">
                                                                                    <div className="cardd card-body">
                                                                                        <div className="form-group">
                                                                                            <input type="file"
                                                                                                name="file"
                                                                                                id="file_up"
                                                                                                onChange={event => uploadvid8(inputField.id, event)}
                                                                                            ></input>
                                                                                        </div>    </div>
                                                                                </div>
                                                                                <div className="collapse" id="collapseExamplepdf8">
                                                                                    <div className="cardd card-body">
                                                                                        <div className="form-group">
                                                                                            <input type="file"
                                                                                                name="file"
                                                                                                id="file_up"
                                                                                                onChange={event => uploadpdf8(inputField.id, event)}
                                                                                            ></input>
                                                                                        </div>    </div>
                                                                                </div>
                                                                            </>


                                                                        </div>


                                                                    </div>

                                                                </div>
                                                                <div className=" col-sm-12 col-md-1"></div>
                                                                <div className=" col-sm-12 col-md-4" >
                                                                    <img loading="lazy" style={{ width: '8000px', height: '320px' }} src="assets/kolbb.jpg" alt="The Ultimate Ethical Hacking Boot Camp" className />


                                                                </div>
                                                            </div>

                                                        </div></div></div></div>


                                        </div>






                                    </div>


                                ))};
                                        <br />



                                <br />

                                <div >
                <div className="wpb_column vc_column_container vc_col-sm-6"><div className="vc_column-inner">
                  < div className="wpb_wrapper">
                    <div className="thim-sc-button text-right hide-separator ">
                      <a target="_self" className="btn btn-primary btn-lg">
                        <Link to={`/modifiersupchapitres/${postcourse._id}`}>
                          <span className="text" style={{ color: '#FFFFFF' }}>Continue</span>
                        </Link>
                      </a>
                    </div>
                  </div></div></div>
                <div className="wpb_column vc_column_container vc_col-sm-6"><div className="vc_column-inner">
                  <div className="wpb_wrapper"><div className="thim-sc-button text-left hide-separator ">
                    <a target="_self" className="btn btn-basic btn-lg" >
                      <Button type="submit" >modifier</Button>
                    </a>
                  </div>


                  </div>
                </div></div></div>
                            </>
                        </MuiThemeProvider>
                        </form>
                    </div>

                </div>



            </form>
        </div>
    );
}


export default ModifierChapitres