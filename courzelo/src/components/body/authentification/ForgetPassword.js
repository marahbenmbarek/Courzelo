import React, {useState} from 'react'
import axios from 'axios'
import {isEmail} from '../../util/validation/Validation'
import {showErrMsg, showSuccessMsg} from '../../util/notification/Notification'

const initialState = {
    email: '',
    err: '',
    success: ''
}

function ForgotPassword() {
    const [data, setData] = useState(initialState)

    const {email, err, success} = data

    const handleChangeInput = e => {
        const {name, value} = e.target
        setData({...data, [name]:value, err: '', success: ''})
    }

    const forgotPassword = async () => {
        if(!isEmail(email))
            return setData({...data, err: 'Invalid emails.', success: ''})
            
        try {
            const res = await axios.post('/user/forget', {email})

            return setData({...data, err: '', success: res.data.msg})
        } catch (err) {
            err.response.data.msg && setData({...data, err:  err.response.data.msg, success: ''})
        }
    }
    
    return (
        <div className="fg_pass" style={{width:'300px',marginLeft:"30px",marginTop:'60px'}}>
            <h3 style={{marginBottom:'40px'}} className="title">Forgot Your Password?</h3>

            <div className="row">
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}

                
                <input style={{marginBottom:'40px',marginTop:'30px'}} placeholder="Enter your email address" type="email" name="email" id="email" value={email}
                onChange={handleChangeInput} />
                
                <p className="login-submit">
        <input type="submit" name="wp-submit" value="Verify your email" id="popupLoginSubmit" style={{backgroundColor: '#f2a92c'}} className="button button-primary button-large" onClick={forgotPassword} />
        
      </p> 
            </div>
        </div>
    )
}

export default ForgotPassword
 