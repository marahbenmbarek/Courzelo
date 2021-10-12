import React, {useState} from 'react'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../../util/notification/Notification'
import {isEmpty, isEmail, isLength, isMatch} from '../../util/validation/Validation'


const initialState = {
    name: '',
    email: '',
    password: '',
    cf_password: '',
    err: '',
    success: ''
}

function Register() {
    const [user, setUser] = useState(initialState)

    const {name, email, password,cf_password, err, success} = user

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }


    const handleSubmit = async e => {
        e.preventDefault()
        if(isEmpty(name) || isEmpty(password))
                return setUser({...user, err: "Please fill in all fields.", success: ''})

        if(!isEmail(email))
            return setUser({...user, err: "Invalid emails.", success: ''})

        if(isLength(password))
            return setUser({...user, err: "Password must be at least 6 characters.", success: ''})
        
        if(!isMatch(password, cf_password))
            return setUser({...user, err: "Password did not match.", success: ''})

        try {
            const res = await axios.post('/user/register', {
                name, email, password
            })

            setUser({...user, err: '', success: res.data.msg})
        } catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }

    return (
        <div className="sign-in-htm" >
            <div style={{width:'300px',marginLeft:"30px",marginTop:'10px'}}>
            <h3 class="title">Register to start learning</h3>
            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}

            <form onSubmit={handleSubmit}>
                <div>
                    
                    <input style={{marginBottom:'20px',backgroundColor: '#ffeee6'}} type="text" placeholder="Enter your name" id="name"
                    value={name} name="name" onChange={handleChangeInput} />
                </div>

                <div>
                   
                    <input type="text" style={{marginBottom:'20px',backgroundColor: '#ffeee6'}}  placeholder="Enter email address" id="email"
                    value={email} name="email" onChange={handleChangeInput} />
                </div>

                <div>
                    
                    <input type="password" style={{marginBottom:'20px',backgroundColor: '#ffeee6'}}  placeholder="Enter password" id="password"
                    value={password} name="password" onChange={handleChangeInput} />
                </div>

                <div>
                    
                    <input type="password" style={{marginBottom:'40px',backgroundColor: '#ffeee6'}}  placeholder="Confirm password" id="cf_password"
                    value={cf_password} name="cf_password" onChange={handleChangeInput} />
                </div>

            
                    
                    <p className="login-submit">
  <input type="submit" name="wp-submit" id="popupRegisterSubmit" style={{backgroundColor: '#1EA69A'}} value="register" className="button button-primary button-large" defaultValue="Register" />
  
</p>
            </form>
                   
        </div>
        </div>
    )
}

export default Register

