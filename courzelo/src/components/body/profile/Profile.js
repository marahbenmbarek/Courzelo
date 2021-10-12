import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
import {isLength, isMatch} from '../../util/validation/Validation'
import {showSuccessMsg, showErrMsg} from '../../util/notification/Notification'
import {fetchAllUsers, dispatchGetAllUsers} from '../../../redux/actions/usersAction'

const initialState = {
    name: '',
    First_name:'',
    Last_name:'',
    Address:'',
    Country:'',
    Description:'',
    password: '',
    cf_password: '',
    err: '',
    success: ''
}

function Profile() {
    const auth = useSelector(state => state.auth)
    const token = useSelector(state => state.token)


    const {user, isAdmin} = auth
    const [data, setData] = useState(initialState)
    const {name,First_name,Last_name,Address,Country,Description, password, cf_password, err, success} = data


    const [avatar, setAvatar] = useState(false)
    const [loading, setLoading] = useState(false)
    const [callback] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        if(isAdmin){
            fetchAllUsers(token).then(res =>{
                dispatch(dispatchGetAllUsers(res))
            })
        }
    },[token, isAdmin, dispatch, callback])

    const handleChange = e => {
        const {name ,First_name,Last_name,Address,Country,Description, value} = e.target
        setData({...data, [name]:value ,
                          [First_name]: value,
                          [Last_name]: value,
                          [Address]: value,
                          [Country]: value,
                          [Description]: value,
                           
                          err:'', success: ''})
    }
  

    const changeAvatar = async(e) => {
        e.preventDefault()
        try {
            const file = e.target.files[0]

            if(!file) return setData({...data, err: "No files were uploaded." , success: ''})

            if(file.size > 1024 * 1024)
                return setData({...data, err: "Size too large." , success: ''})

            if(file.type !== 'image/jpeg' && file.type !== 'image/png')
                return setData({...data, err: "File format is incorrect." , success: ''})

            let formData =  new FormData()
            formData.append('file', file)

            setLoading(true)
            const res = await axios.post('/api/upload_avatar', formData, {
                headers: {'content-type': 'multipart/form-data', Authorization: token}
            })

            setLoading(false)
            setAvatar(res.data.url)
            
        } catch (err) {
            setData({...data, err: err.response.data.msg , success: ''})
        }
    }

    const updateInfor = () => {
        try {
            axios.patch('/user/update', {
                name: name ? name : user.name,
                First_name: First_name ? First_name : user.First_name,
                Last_name: Last_name ? Last_name : user.Last_name,
                Address: Address ? Address : user.Address,
                Country: Country ? Country : user.Country,
                Description: Description ? Description : user.Description,
               
                avatar: avatar ? avatar : user.avatar
            },{
                headers: {Authorization: token}
            })

            setData({...data, err: '' , success: "Updated Success!"})
        } catch (err) {
            setData({...data, err: err.response.data.msg , success: ''})
        }
    }

    const updatePassword = () => {
        if(isLength(password))
            return setData({...data, err: "Password must be at least 6 characters.", success: ''})

        if(!isMatch(password, cf_password))
            return setData({...data, err: "Password did not match.", success: ''})

        try {
            axios.post('/user/reset', {password},{
                headers: {Authorization: token}
            })

            setData({...data, err: '' , success: "Updated Success!"})
        } catch (err) {
            setData({...data, err: err.response.data.msg , success: ''})
        }
    }

    const handleUpdate = () => {
        if(name || First_name || Last_name || Address || Country || Description ||  avatar ) updateInfor()
        if(password) updatePassword()
    }

    
    return (
        
        <div>
          <div style={{marginTop:'-50px', marginRight:'150px'}}>
  <div className="container rounded bg-white mt-5" >
    <div className="row"  >
      <div className="col-md-4 border-right" >
      <div className="d-flex flex-column align-items-center text-center p-3 py-5" style={{marginTop:'-80px'}} >
     <div className="profile_page" style={{marginTop:'200px'}} >
         <div className="col-left">
         <div className="avatar">
                    <img src={avatar ? avatar : user.avatar} alt=""/>
                    <span>
                        <i className="fas fa-camera"></i>
                        <p>Change</p>
                        <input type="file" name="file" id="file_up" onChange={changeAvatar} />
                    </span>
                </div>
                </div>
                </div>
  <span className="font-weight-bold">{user.name}</span><span className="text-black-50" > {user.email}</span><span> </span>
</div>
      </div>
      <div className="col-md-8" style={{marginTop:'100px'}}>
        <div className="p-3 py-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
          
            <div className="d-flex justify-content-between align-items-center mb-3">
  <h4 className="text-right">Profile Settings</h4>
  
</div>
{err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
            {loading && <h3>Loading.....</h3>}
          </div>
          <div className="row mt-2">
            <div className="col-md-6">
                <label className="font-weight-bold">  User Name</label><input type="text" className="form-control" name="name" id="name" defaultValue={user.name}
                    placeholder="UserName" onChange={handleChange} /></div>
            <div className="col-md-6"><label className="font-weight-bold">  Password</label><input type="text" className="form-control" name="password" id="password"
                    placeholder="Your password" value={password} onChange={handleChange} /></div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6"><label className="font-weight-bold">  Email </label><input type="text" className="form-control" name="email" id="email" defaultValue={user.email}
                    placeholder="Your email address" disabled /></div>
            <div className="col-md-6"><label className="font-weight-bold">  Confirm Password</label><input type="text" className="form-control"  name="cf_password" id="cf_password"
                    placeholder="Confirm password" value={cf_password} onChange={handleChange} /></div>
          </div>
          <div className="row mt-4">
            <div className="col-md-6"><label className="font-weight-bold">  First Name</label><input type="text" className="form-control" name="First_name" id="First_name" defaultValue={user.First_name}
                    placeholder="First Name" onChange={handleChange} /></div>

            <div className="col-md-6"><label className="font-weight-bold">  Last Name</label><input type="text" className="form-control" name="Last_name" id="Last_name"
                    placeholder="Last Name" defaultValue={user.Last_name} onChange={handleChange} /></div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6"><label className="font-weight-bold">  Address</label><input type="text" className="form-control" name="Address" id="Address" defaultValue={user.Address}
                    placeholder="Your Address" onChange={handleChange} /></div>
            
          </div>
          <br/>
          <div className="row mt-6">
            <div className="col-md-12"><label className="font-weight-bold"> About Me</label><input type="text" className="form-control" name="Description" id="Description" defaultValue={user.Description}
                    placeholder="About Me" onChange={handleChange}/></div>
          </div>
          <div style={{marginTop:"20px"}}>
                    <em style={{color: "crimson"}}> 
                    * If you update your password here, you will not be able 
                        to login quickly using google and facebook.
                    </em>
                </div>
        
          <div className="mt-5 text-right"><button className="btn btn-basic btn-lg" type="button" style={{backgroundColor: '#1EA69A',color:'#FFFFFF'}} disabled={loading} onClick={handleUpdate}>Save Profile</button></div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
        
    )
}

export default Profile
