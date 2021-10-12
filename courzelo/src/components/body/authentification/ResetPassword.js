import React, {useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {showErrMsg, showSuccessMsg} from '../../util/notification/Notification'
import {isLength, isMatch} from '../../util/validation/Validation'


const initialState = {
    password: '',
    cf_password: '',
    err: '',
    success: ''
}

function ResetPassword(props) {
    const [data, setData] = useState(initialState)
   

    const {password, cf_password, err, success} = data

    const handleChangeInput = e => {
        const {name, value} = e.target
        setData({...data, [name]:value, err: '', success: ''})
    }

    const{token} =useParams()
    const handleResetPass = async () => {
        if(isLength(password))
            return setData({...data, err: "Password must be at least 6 characters.", success: ''})

        if(!isMatch(password, cf_password))
            return setData({...data, err: "Password did not match.", success: ''})
        
        try {
            const res = await axios.post('/user/reset', {password}, {
                headers: {Authorization: token}
            })

            return setData({...data, err: "", success: res.data.msg})

        } catch (err) {
            err.response.data.msg && setData({...data, err: err.response.data.msg, success: ''})
        }
        
    }


    return (
        <div>
            <section className="page-banner pt-200 pb-100 bg_cover" style={{backgroundImage: 'url("assets/images/hero-bg.jpg")'}}>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="text-center banner-content">
          <h1 className="text-white">Reset Your Password</h1>
          
        </div>
      </div>
    </div>
  </div>
</section>
        <div className="fg_pass" style={{marginBottom:'60px',marginTop:'70px'}}>
            <div className="row">
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}

                
                <input placeholder="Password" type="password" name="password" id="password" value={password}
                onChange={handleChangeInput} />

                
                <input style={{marginBottom:'60px',marginTop:'20px'}} placeholder="Confirm Password" type="password" name="cf_password" id="cf_password" value={cf_password}
                onChange={handleChangeInput} />         

                
                <p className="login-submit">
        <input type="submit" name="wp-submit" id="popupLoginSubmit" onClick={handleResetPass} style={{backgroundColor: '#f2a92c'}} className="button button-primary button-large" value="Reset Password" defaultValue="Login" />
        
      </p>
            </div>
        </div>
        </div>
    )
}

export default ResetPassword
