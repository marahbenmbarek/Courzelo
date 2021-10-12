import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { showErrMsg, showSuccessMsg } from '../../util/notification/Notification'
import { dispatchLogin } from '../../../redux/actions/authAction'
import { useDispatch } from 'react-redux'
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import { LinkedIn } from 'react-linkedin-login-oauth2';
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png'

const initialState = {
    email: '',
    password: '',
    err: '',
    success: ''
}
function Login(props) {



    const [user, setUser] = useState(initialState)
    const dispatch = useDispatch()
    const history = useHistory()
    const { email, password, err, success } = user

    const [setShow] = useState(false);
    console.log('test2', setShow);
    const handleCloseforget = () => {
        props.clickHandler(true);
        console.log('test1', setShow);

    };

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value, err: '', success: '' })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post('/user/login', { email, password })
            setUser({ ...user, err: '', success: res.data.msg })

            localStorage.setItem('firstLogin', true)

            dispatch(dispatchLogin())
            history.push("/")


        } catch (err) {
            err.response.data.msg &&
                setUser({ ...user, err: err.response.data.msg, success: '' })
        }
    }
    const responseGoogle = async (response) => {
        try {
            const res = await axios.post('/user/google_login', { tokenId: response.tokenId })

            setUser({ ...user, error: '', success: res.data.msg })
            localStorage.setItem('firstLogin', true)

            dispatch(dispatchLogin())
            history.push('/')
        } catch (err) {
            err.response.data.msg &&
                setUser({ ...user, err: err.response.data.msg, success: '' })
        }
    }

    const responseFacebook = async (response) => {
        try {
            const { accessToken, userID } = response
            const res = await axios.post('/user/facebook_login', { accessToken, userID })

            setUser({ ...user, error: '', success: res.data.msg })
            localStorage.setItem('firstLogin', true)

            dispatch(dispatchLogin())
            history.push('/')
        } catch (err) {
            err.response.data.msg &&
                setUser({ ...user, err: err.response.data.msg, success: '' })
        }
    }
    const handleSuccess = async (data) => {
        
        setUser({ ...user, error: '', success: data.code })
            localStorage.setItem('firstLogin', true)

            dispatch(dispatchLogin())
            history.push('/')
    
      }
    
     const handleFailure = async (err) => {
        this.setState({
          code: '',
          err: err,
        });
      }


    return (


        <div className="sign-in-htm" >
            <div style={{ width: '300px', marginLeft: "30px", marginTop: '10px' }}>
                <h3 style={{ marginBottom: '8px' }} className="title">Login to your account</h3>
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}
                <form style={{ marginTop: '10px' }} onSubmit={handleSubmit}>

                    <p className="login-username">
                        <input type="text" style={{ backgroundColor: '#ffeee6' }} defaultValue size={20} placeholder="Enter email address" id="email"
                            value={email} name="email" onChange={handleChangeInput} />
                    </p>
                    <p className="login-password">

                        <input type="password" style={{ backgroundColor: '#ffeee6' }} defaultValue size={20} placeholder="Enter password" id="password"
                            value={password} name="password" onChange={handleChangeInput} />

                    </p>
                    <div className="login-extra-options">
                        <p className="login-remember">
                        </p>
                        <a ><Link className="lost-pass-link" id="signin" onClick={handleCloseforget}  >Forgot your password?</Link></a>
                    </div>
                    <p className="login-submit">
                        <input type="submit" name="wp-submit" id="popupLoginSubmit" style={{ backgroundColor: '#1EA69A' }} className="button button-primary button-large" value="Login" defaultValue="Login" />
                        <input type="hidden" name="redirect_to" defaultValue="https://wordpresslms.thimpress.com/demo-coursify/" />
                    </p>
                    <div className="popup-message" />




                </form>




                <div className="shortcode">


                    <a >
                        <GoogleLogin
                            clientId="328111978580-h50mir0c5i18iind4u3ihbnc07ukhp0l.apps.googleusercontent.com"
                            onSuccess={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />      </a>
                   

                    <LinkedIn
                        clientId="81lx5we2omq9xh"
                        redirectUri={`${window.location.origin}/linkedin`}
                        scope="r_emailaddress"
                        state="34232423"
                        onFailure={handleFailure}
                        onSuccess={handleSuccess}
                        supportIE
                        redirectPath='/linkedin'
                    >
                        <img src={linkedin} alt="Log in with Linked In" style={{ maxWidth: '180px' }} />
                    </LinkedIn>
                    </div>
            </div>
        </div>




    )
}


export default Login
