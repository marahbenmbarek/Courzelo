import Avatar from '@material-ui/core/Avatar'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import { makeStyles } from '@material-ui/core/styles'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import CheckIcon from '@material-ui/icons/Check'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import TuneIcon from '@material-ui/icons/Tune'
import axios from 'axios'
import React, { Fragment, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ForgotPassword from '../authentification/ForgetPassword'
import Login from '../authentification/login'
import Register from '../authentification/register'
import './DropDown.css' 
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}));

function Header() {


  const auth = useSelector(state => state.auth)
  const { user } = auth;
  const { isLogged, isAdmin } = auth


  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  

  const handleClosee = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);


  const [isRegister, setIsRegister] = useState(false);

  const [show, setShow] = useState(false);
  const [isForgetPassword, setisForgetPassword] = useState(false);
  const handleClose = (isForgetPassword) => { setShow(false); setisForgetPassword(isForgetPassword) }
  const handleShow = (e) => {
    setShow(true);
    setisForgetPassword(false);
    setIsRegister(e.target.id === "signup" ? true : false)
    console.log(e.target.id)
  };

  const handleLogout = async () => {
    try {
      await axios.get('/user/logout')
      localStorage.removeItem('firstLogin')
      window.location.href = "/";
    } catch (err) {
      window.location.href = "/";
    }
  }

  const userLink = (
    <Fragment>
      <div className="content-pusher creative-right bg-type-color">

        <header id="masthead" className="site-header affix-top template-layout-2 sticky-header has-retina-logo has-retina-logo-sticky palette-custom header-overlay custom-sticky">
          <div id="thim-header-topbar" className="navbarHeight">
            <div className="container">
              <div id="thim_layout_builder-8" className="widget widget_thim_layout_builder"><p />
                <div className="vc_row wpb_row vc_row-fluid"><div className="wpb_column vc_column_container vc_col-sm-7"><div className="vc_column-inner"><div className="wpb_wrapper">
                  <div className="wpb_text_column wpb_content_element ">
                    <div className="wpb_wrapper">
                      <ul className="list-inline">
                        <li className="list-inline-item">Have any question?</li>
                        <li className="list-inline-item"><a href="tel:00123456789"><i className="ion-android-call" /> (+216) 25 25 25 25</a></li>
                        <li className="list-inline-item"><a href="https://wordpresslms.thimpress.com/cdn-cgi/l/email-protection#7a13141c153a0e1213170a081f090954191517"><i className="ion-android-mail" /> <span className="_cf_email_" data-cfemail="fb92959d94bb8f9392968b899e8888d5989496">Info@Courzelo.com</span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                </div>
                </div>
                  <div className="pull-right wpb_column vc_column_container vc_col-sm-5"><div className="vc_column-inner">
                    <div className="wpb_wrapper">

                      <div className="thim-sc-course-search  ">
                        <form role="search" method="get" action="https://wordpresslms.thimpress.com/demo-elearning-2/courses/">
                          <input type="text" defaultValue name="s" placeholder="What do you want to learn today?" className="form-control courses-search-input" autoComplete="off" />
                          <input type="hidden" defaultValue="course" name="ref" />
                          <button type="submit"><i className="ion-android-search" /></button>
                          <div className="thim-loading-icon">
                            <div className="sk-three-bounce">
                              <div className="sk-child sk-bounce1" />
                              <div className="sk-child sk-bounce2" />
                              <div className="sk-child sk-bounce3" />
                            </div>
                          </div>
                          <span className="widget-search-close" />
                        </form>
                        <ul className="courses-list-search list-unstyled" />
                      </div>


                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <Link to="/panier">
              <div id="woocommerce_widget_cart-3" className="widget woocommerce widget_shopping_cart" style={{height:'56px ' }}>
                <div className="minicart_hover" id="header-mini-cart">
                  <span className="cart-items-number">
                    <span className="text">My Cart</span>
                    <i className="ion ion-android-cart" />
                  </span>
                  <div className="clear" /></div>
              </div>
              </Link>
              <div className="posi">
                <li className="list-inline-item"> <a>Courzelo For Business</a></li>
              </div>
            </div>

          </div>
          <div className="header-wrapper header-v2 default" style={{ height: '60px' }}>
            <div className="main-header container">
              <div className="menu-mobile-effect navbar-toggle" data-effect="mobile-effect">
                <div className="icon-wrap">
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </div>
              </div>
              <div class="width-logo">
                <a class="no-sticky-logo" href="/" rel="home"><img class="logo" src="assets/puma.png" alt="Demo eLearning II" width="131" height="45" /><img class="retina-logo" src="../wp-content/uploads/sites/5/2017/09/logo-2-1.png" alt="Demo eLearning II" width="131" height="45" /><img class="mobile-logo" src="../wp-content/themes/wordpress-lms/assets/images/mobile-logo.png" alt="Demo eLearning II" width="131" height="45" /></a> </div>
              <div className="width-navigation">
                <ul id="primary-menu" className="main-menu" style={{ marginTop: '10px' }}>
                  <li className=" menu-item-type-custom menu-item-object-custom menu-item-has-children navBarRec " >
                    <a style={{ cursor: 'pointer' }} >Courses</a>
                    <ul className="sub-menu ">
                      <li id="menu-item-60" className=" menu-item-type-post_type menu-item-object-page menu-item-23 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><Link to="/courses" className="header-btn btn-hover" >All Courses</Link></li>
                      <li id="menu-item-60" className=" menu-item-type-post_type menu-item-object-page menu-item-6818 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><Link to="/FreeCourses" className="header-btn btn-hover" >Free access courses</Link></li>
                      <li id="menu-item-60" className=" menu-item-type-post_type menu-item-object-page menu-item-6818 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><Link to="/PayedCourses" className="header-btn btn-hover" >Payed courses</Link></li>
                      <li id="menu-item-60" className=" menu-item-type-post_type menu-item-object-page menu-item-6818 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><Link to="/GererCourses" className="header-btn btn-hover" >Teacher</Link></li>

                      <li id="menu-item-60" className=" menu-item-type-custom menu-item-object-custom menu-item-3992 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><Link to="/" className="header-btn btn-hover" >Become an instructor</Link></li>
                      <li id="menu-item-60" className=" menu-item-type-custom menu-item-object-custom menu-item-3992 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><Link to="/categorie" className="header-btn btn-hover" >Categories</Link></li>

                    </ul>
                  </li>
                  <li id="menu-item-60" className=" menu-item-type-post_type menu-item-object-page menu-item-60 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default" style={{ marginRight: '30px' }}><Link to="/Certification" className="header-btn btn-hover" >Certifications</Link></li>
                  <li id="menu-item-60" className=" menu-item-type-post_type menu-item-object-page menu-item-60 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default" style={{ marginRight: '30px' }}><Link to="/Gerercoursemodifsupp" className="header-btn btn-hover" >Teacher</Link></li>


                  <li id="menu-item-60" className=" menu-item-type-post_type menu-item-object-page menu-item-60 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default" style={{ marginRight: '30px' }}><Link to="/blog" className="header-btn btn-hover" >Blog</Link></li>

                  <li className=" menu-item-type-custom menu-item-object-custom menu-item-has-children navBarRec " >
                    <a style={{ cursor: 'pointer' }} >Pages</a>
                    <ul className="sub-menu ">
                      <li id="menu-item-60" className=" menu-item-type-post_type menu-item-object-page menu-item-23 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><Link to="/" className="header-btn btn-hover" >MembreShip</Link></li>
                      <li id="menu-item-60" className=" menu-item-type-custom menu-item-object-custom menu-item-3992 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><Link to="/aboutUs" className="header-btn btn-hover" >AboutUS</Link></li>
                      <li id="menu-item-60" className=" menu-item-type-post_type menu-item-object-page menu-item-6818 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><Link to="/#" className="header-btn btn-hover" >Shop</Link></li>
                    </ul>
                  </li>

                  <li id="menu-item-60" className=" menu-item-type-post_type menu-item-object-page menu-item-60 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default" style={{ marginRight: '30px' }}><Link to="/contact" className="header-btn btn-hover" >Contact</Link></li>
                  {
                    isAdmin ?
                      <li id="menu-item-60" className=" menu-item-type-post_type menu-item-object-page menu-item-60 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default" style={{ marginRight: '30px' }}><Link to="/index" className="header-btn btn-hover" >Dashboard</Link></li>

                      :
                      <Fragment />
                  }
                </ul> </div>
            </div>
          </div>

          <div className={classes.root}>
            <div className="action">
             

          <Avatar style={{ cursor: 'pointer' }}
          ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="false"
                onClick={handleToggle} alt="Remy Sharp" src={user.avatar} className={classes.large} />

              
              <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClosee}>
                        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                          <MenuItem ><PersonOutlineIcon/><a style={{ color: 'black' }} href="/profile">&nbsp;  Profile </a></MenuItem>
                          <MenuItem ><TuneIcon/><a  style={{ color: 'black' }} href="/">&nbsp;  Settings</a></MenuItem>
                          <MenuItem ><BookmarkBorderIcon/><a  style={{ color: 'black' }} href="/MyCourses">&nbsp; My Courses</a></MenuItem>
                          <MenuItem ><CheckIcon/><a  style={{ color: 'black' }} href="/Progress">&nbsp;  My Progress</a></MenuItem>
                          <MenuItem onClick={handleLogout}><ExitToAppIcon/> <a  style={{ color: 'black' }} href="/">&nbsp;  Logout </a></MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          </div>

        </header>



      </div>
    </Fragment>
  );
  const popup = (
    <Fragment >
      <div id="thim-popup-login" >
        <div className="thim-login-container">
          <div className="login-html">

            <div className="login-banner" >
              <img style={{ height: '560px' }} src="assets/h.jpg" alt="fd"></img>

              <div className="login-banner-wrap">

                <h2>Hello!</h2><h3>We are happy to see you again!</h3>
              </div>
            </div>
            <div className="link-to-form">
              <p className="content-register wrapper">
                Not a member yet? <a href="account/index0ddc.html?action=register" className="register-link">Register Now</a> </p>
              <p className="content-login wrapper">
                Already a member? <a href="/login" className="login-link">Login Now</a> </p>
            </div>
            <Login clickHandler={(value) => handleClose(value)} />
          </div>
        </div>
      </div>

    </Fragment>
  )
  const popupp = (
    <Fragment>
      <div id="thim-popup-login">
        <div className="thim-login-container">
          <div className="login-html">

            <div className="login-banner" >
              <img style={{ height: '560px' }} src="assets/h.jpg" alt="bcv"></img>

              <div className="login-banner-wrap">

                <h2>Hello!</h2><h3>We are happy to see you again!</h3>
              </div>
            </div>
            <div className="link-to-form">
              <p className="content-register wrapper">
                Not a member yet? <a href="account/index0ddc.html?action=register" className="register-link">Register Now</a> </p>
              <p className="content-login wrapper">
                Already a member? <a href="/login" className="login-link">Login Now</a> </p>
            </div>
            <Register />
          </div>
        </div>
      </div>
    </Fragment>
  )
  const popupR = (
    <Fragment >
      <div id="thim-popup-login" show={show}>
        <div className="thim-login-container">
          <div className="login-html">

            <div className="login-banner" >
              <img style={{ height: '560px' }} src="assets/h.jpg" alt="fgdf"></img>

              <div className="login-banner-wrap">

                <h2>Hello!</h2><h3>We are happy to see you again!</h3>
              </div>
            </div>
            <div className="link-to-form">
              <p className="content-register wrapper">
                Not a member yet? <a href="account/index0ddc.html?action=register" className="register-link">Register Now</a> </p>
              <p className="content-login wrapper">
                Already a member? <a href="/login" className="login-link">Login Now</a> </p>
            </div>
            <ForgotPassword />
          </div>
        </div>
      </div>
    </Fragment>
  )
  const transForm = {
    transform: isLogged ? "translateY(-5px)" : 0
  }

  return (
    <div>
      {
        isLogged ? userLink :
          <div className="content-pusher creative-right bg-type-color">
            <header id="masthead" className="site-header affix-top template-layout-2 sticky-header has-retina-logo has-retina-logo-sticky palette-custom header-overlay custom-sticky">
              <div id="thim-header-topbar" className="navbarHeight">
                <div className="container">
                  <div id="thim_layout_builder-8" className="widget widget_thim_layout_builder"><p />
                    <div className="vc_row wpb_row vc_row-fluid">
                      <div className="wpb_column vc_column_container vc_col-sm-7">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="wpb_text_column wpb_content_element ">
                              <div className="wpb_wrapper">
                                <ul className="list-inline">
                                  <li className="list-inline-item">Have any question?</li>
                                  <li className="list-inline-item"><a href="tel:00123456789"><i className="ion-android-call" /> (00) 123 456 789</a></li>
                                  <li className="list-inline-item"><a href="mailto:info@thimpress.com"><i className="ion-android-mail" /> info@thimpress.com</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pull-right wpb_column vc_column_container vc_col-sm-5">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="thim-sc-login ">
                              <div className="widget widget_thim-login">
                                <div className="thim-link-login thim-login-popup textSign">
                                  <Link id="signin" onClick={handleShow} className="header-btn btn-hover">Sign in / </Link>
                                  <Link id="signup" onClick={(e) => handleShow(e)} className="header-btn btn-hover">Sign up</Link>
                                  {isForgetPassword ? popupR : isRegister ? popupp : show ? popup : null}
                                </div>
                              </div>
                            </div>
                            <div className="thim-sc-course-search  ">
                              <form role="search" method="get" action="https://wordpresslms.thimpress.com/demo-elearning-2/courses/">
                                <input type="text" defaultValue name="s" placeholder="What do you want to learn today?" className="form-control courses-search-input" autoComplete="off" />
                                <input type="hidden" defaultValue="course" name="ref" />
                                <button type="submit"><i className="ion-android-search" /></button>
                                <div className="thim-loading-icon">
                                  <div className="sk-three-bounce">
                                    <div className="sk-child sk-bounce1" />
                                    <div className="sk-child sk-bounce2" />
                                    <div className="sk-child sk-bounce3" />
                                  </div>
                                </div>
                                <span className="widget-search-close" />
                              </form>
                              <ul className="courses-list-search list-unstyled" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div><p />
                  </div>
                  <div id="woocommerce_widget_cart-3" className="widget woocommerce widget_shopping_cart">
                    <div className="minicart_hover" id="header-mini-cart"><span className="cart-items-number"><span className="text">My Cart</span> <i className="ion ion-android-cart" /><span className="wrapper-items-number "><span className="items-number">0</span></span></span>
                      <div className="clear" /></div>
                    <div className="widget_shopping_cart_content" style={{ display: 'none', paddingTop: 10, marginTop: 0, paddingBottom: 0, marginBottom: 0 }}>
                      <p className="woocommerce-mini-cart__empty-message">No products in the cart.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="posiLogOut">
                <li className="list-inline-item"> <a>Courzelo For Business</a></li>
              </div>
              <div className="header-wrapper header-v2 default" style={{ height: '60px' }}>
                <div className="main-header container">
                  <div className="menu-mobile-effect navbar-toggle" data-effect="mobile-effect">
                    <div className="icon-wrap">
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </div>
                  </div>
                  <div class="width-logo">
                    <a class="no-sticky-logo" href="/" rel="home"><img class="logo" src="assets/puma.png" alt="Demo eLearning II" width="131" height="45" /><img class="retina-logo" src="../wp-content/uploads/sites/5/2017/09/logo-2-1.png" alt="Demo eLearning II" width="131" height="45" /><img class="mobile-logo" src="../wp-content/themes/wordpress-lms/assets/images/mobile-logo.png" alt="Demo eLearning II" width="131" height="45" /></a> </div>
                  {/* <div className="width-navigation">
                    <ul id="primary-menu" className="main-menu" style={{ marginTop: '10px' }}>
                      <li id="menu-item-60" className=" menu-item-type-post_type menu-item-object-page menu-item-60 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default" style={{ marginRight: '20px' }}><Link to="/" className="header-btn btn-hover" >Home</Link></li>
                      <li className=" menu-item-type-custom menu-item-object-custom menu-item-has-children navBarRec " >
                        <a >Courses</a>
                        <ul className="sub-menu ">
                          <li id="menu-item-60" className=" menu-item-type-post_type menu-item-object-page menu-item-23 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><Link to="/courses" className="header-btn btn-hover" >All Courses</Link></li>
                          <li id="menu-item-60" className=" menu-item-type-custom menu-item-object-custom menu-item-3992 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><Link to="/" className="header-btn btn-hover" >become Instructor</Link></li>
                          <li id="menu-item-60" className=" menu-item-type-post_type menu-item-object-page menu-item-6818 tc-menu-item tc-menu-depth-1 tc-menu-align-left"><Link to="/GererCourses" className="header-btn btn-hover" >Instructor Profile</Link></li>
                        </ul>
                      </li>
                      <li id="menu-item-60" className=" menu-item-type-post_type menu-item-object-page menu-item-60 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default" style={{ marginRight: '30px' }}><Link to="/blog" className="header-btn btn-hover" >Blog</Link></li>

                      <li id="menu-item-60" className=" menu-item-type-post_type menu-item-object-page menu-item-60 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default" style={{ marginRight: '30px' }}><Link to="/DetailAddCourse" className="header-btn btn-hover" >Teacher </Link></li>

                      <li id="menu-item-60" className=" menu-item-type-post_type menu-item-object-page menu-item-60 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default" style={{ marginRight: '30px' }}><Link to="/AboutUS" className="header-btn btn-hover" >About us</Link></li>

                      <li id="menu-item-60" className=" menu-item-type-post_type menu-item-object-page menu-item-60 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default" style={{ marginRight: '30px' }}><Link to="/contact" className="header-btn btn-hover" >Contact</Link></li>
                      {
                        isAdmin ?
                          <li id="menu-item-60" className=" menu-item-type-post_type menu-item-object-page menu-item-60 tc-menu-item tc-menu-depth-0 tc-menu-align-left tc-menu-layout-default" style={{ marginRight: '30px' }}><Link to="/index" className="header-btn btn-hover" >Dashboard</Link></li>

                          :
                          <Fragment />
                      }
                    </ul> </div>*/}
                </div>
              </div>
            </header>
          </div>

      }

    </div>
  )
}

export default Header;



