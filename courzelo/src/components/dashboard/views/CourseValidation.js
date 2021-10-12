import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { showSuccessMsg, showErrMsg } from '../../util/notification/Notification'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));
function CourseValidation() {
    const { id } = useParams()
    const history = useHistory()
    const [CourseValidation, setCourseValidation] = useState([])

    const courses = useSelector(state => state.courses)
    const token = useSelector(state => state.token)

    const [checkValidation, setCheckValidation] = useState(false)
    const [err, setErr] = useState(false)
    const [success, setSuccess] = useState(false)
    const [num, setNum] = useState(0)
    const classes = useStyles();
    useEffect(() => {

        courses.forEach(course => {
            if (course._id === id) {
                setCourseValidation(course)
                setCheckValidation(course.validation === 1 ? true : false)
            }
        })

    }, [courses, id, history])

    const handleUpdate = async () => {
        try {
            if (num % 2 !== 0) {
                const res = await axios.patch(`/course/update_validation/${CourseValidation._id}`, {
                    validation: checkValidation ? 1 : 0
                }, {
                    headers: { Authorization: token }
                })

                setSuccess(res.data.msg)
                setNum(0)
            }
        } catch (err) {
            err.response.data.msg && setErr(err.response.data.msg)
        }
    }

    const handleCheck = () => {
        setSuccess('')
        setErr('')
        setCheckValidation(!checkValidation)
        setNum(num + 1)
    }

    return (

        <div className="profile_page edit_user profile2">


            <div className="col-left">
                <h2>Edit validation</h2>

                <div className="form-group">
                    <label htmlFor="name">Title</label>
                    <input type="text" name="name" defaultValue={CourseValidation.title} disabled />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Description</label>
                    <input type="email" name="email" defaultValue={CourseValidation.description} disabled />
                </div>

                <div className="form-group">
                    <input type="checkbox" id="isAdmin" checked={checkValidation}
                        onChange={handleCheck} />
                    <label htmlFor="isAdmin">isValid</label>
                </div>

                <form className={classes.container} noValidate>
                    <TextField
                        id="date"
                        label="Publication Date"
                        type="date"
                        defaultValue={CourseValidation.time}
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>
<br/>

<br/>
                <button className="button_update" onClick={handleUpdate}>Update</button>

                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}
            </div>

            <div >
                <button onClick={() => history.goBack()} className="go_back">
                    <i className="fas fa-long-arrow-alt-left"></i>
                </button>
            </div>

        </div>

    )
}

export default CourseValidation
