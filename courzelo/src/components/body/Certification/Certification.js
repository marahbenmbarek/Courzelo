import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import 'date-fns';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCertification } from '../../../redux/actions/certificationAction';







const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },

}));

function Certification() {
    const classes = useStyles();


    const [open, setOpen] = React.useState(false);
    const [openPrev, setOpenPrev] = React.useState(false);
    const token = useSelector(state => state.token)
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const dispatch = useDispatch();
    const [postcertification, setCertificationData] = useState({ Date : '',  InstituteName: '', CourseName: '', Address: '', Duration: '', InstructorName: '',StudentName: '', });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickOpenPrev = () => {
        setOpenPrev(true);
    };

  

    const handleClose = async(e) => {
        dispatch(addCertification(token, postcertification));
        setOpen(false);

    };



    const handleClosePrev = () => {
        setOpenPrev(false);
    };
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };



    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));


    return (
        <>
            {/* -----------------------------------------------Header---------------------------------------------------------*/}

            <div className="page-title layout-1">
                <div className="main-top parallax" style={{ backgroundImage: 'url(../wp-content/uploads/sites/5/certification.jpg)' }}>
                    <span className="overlay-top-header" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }} />
                    <div className="content container">
                        <div className="row">
                            <div className="text-title col-md-6">
                                <h1>Certifications</h1> </div>
                            <div className="text-description col-md-6">
                                <div className="banner-description"><p><strong className="br">The best demo education </strong> Be successful with Course Builder theme.</p></div> </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb-content breadcrumb-plus">
                    <div className="breadcrumbs-wrapper container">
                        <ul itemProp="breadcrumb" itemScope itemType="http://schema.org/BreadcrumbList" id="breadcrumbs" className="breadcrumbs">
                            <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem"><a itemProp="item" href="/" title="Home">
                                <span itemProp="name">Home</span></a><meta itemProp="position" content={1} /><span className="breadcrum-icon">
                                    <i className="fa fa-angle-right" aria-hidden="true" /></span></li>
                            <li itemProp="itemListElement" itemScope itemType="http://schema.org/ListItem">
                                <span itemProp="name" title="All courses">Certifications</span><meta itemProp="position" content={2} /></li></ul> </div>
                </div>
            </div>


            <div id="top-sidebar-courses">
                <div >

                    <div className="vc_row wpb_row vc_row-fluid overflow top-courses-overflow vc_custom_1502273625937 vc_row-has-fill vc_row-no-padding"><div className="wpb_column vc_column_container vc_col-sm-12"><div className="vc_column-inner"><div className="wpb_wrapper"><div className="thim-sc-heading text-center layout-1 ">
                        <div className="heading-content">
                            <h3 className="primary-heading">Our International Certificates and universities , training schools and colleges  <br />  <br />
                            </h3> </div>

                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            {/* -----------------------------------------------EndHeader---------------------------------------------------------*/}
            <div className="row mt-1">
                {/* -----------------------------------------------Left---------------------------------------------------------*/}

                <div className="col-md-6" style={{ padding: '10px 20px 10px 30px' }}>
                    <h3 style={{ padding: '10px 20px 10px 50px', fontSize: '25px', color: '#2C6975' }}><strong>The international instituations and colleges we offer it to you</strong></h3>

                    <div className={classes.root}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>Universiti Teknologi Malaysia - Malaysia (UTM)</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                Malaysian academic accredited by the Malaysian higher education bodies to offer bachelor's and master's degree in the fields
                                    of business administration and technology through the distance study system.

                                   

                                </Typography>


                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>Universidad Nacional de Colombia – Colombia  (UNAL)</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Specialized in the certification of experience equivalence system such as:
                                    <br />1-Professional Bachelor.
                                    <br />2-Professional Masters.
                                    <br />3-Professional PhD.
                                    <br />They are equivalent certificates and cannot be equivalent from higher education and are documented by the US State Department and US embassy.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>Universidad de Brazilia - Brazil (UnD)</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    The first coaching university registered in the US government operating in Arabic and English and specialized in coaching accreditation.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>Universy of Ottawa - Canada</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Specialized in the certification of experience equivalence system such as:
                                    <br />1-Professional Bachelor.
                                    <br />2-Professional Masters.
                                    <br />3-Professional PhD.
                                    <br />They are equivalent certificates and cannot be equivalent from higher education and are documented by the US State Department and US embassy.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                      
                        
                        
                       
                    



                    </div>

                </div>


                {/* -----------------------------------------------Right---------------------------------------------------------*/}

                <div className="col-md-6" style={{ padding: '10px 20px 10px 30px' }}>
                    <h3 style={{ padding: '10px 20px 10px 120px', fontSize: '25px', color: '#2C6975' }}><strong>Types of the international certified certificates</strong></h3>

                    <div className={classes.root}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>Workshop - Seminar Certificates</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    We offer a range of certificates that do not need to take tests at the end of the training program such as :
                                    <br /> -Certificate of attending a training workshop.
                                    <br /> -Attendance certificate of seminar
                                    <br /> -Certificate of attendence.
                                    <br /> -Non-printed e-certificate from most e-learning programs.
                                    <br />
                                    <br />
                                    {/* -----------------------------POPUPForm-----------------------------------*/}


                                    <ButtonGroup color="primary" aria-label="outlined primary button group" style={{ float: 'right' }}>
                                        <Button onClick={handleClickOpenPrev}>Preview</Button>
                                        <Button onClick={handleClickOpen}>Subscribe</Button>
                                    </ButtonGroup>

                                    {/*--- <Button variant="outlined" color="primary"  style={{float: 'right'}} onClick={handleClickOpen}>
                                        Subscribe
    </Button> */}
                                    <Dialog
                                        fullScreen={fullScreen}
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="responsive-dialog-title"
                                    >
                                        <DialogTitle id="responsive-dialog-title">{"Subcribe"}</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                Let Google help apps determine location. This means sending anonymous location data to
                                                Google, even when no apps are running.
                                            </DialogContentText>

                                            {/*--   <TextField
                                                autoFocus
                                                margin="dense"
                                                id="name"
                                                label="Email Address"
                                                type="email"
                                                fullWidth
                                         /> */}
                                            <div className="row mt-1">
                                                <div className="col-md-12">
                                                    <label className="font-weight-bold">Institute Name*</label>
                                                    <br />
                                                    <TextField
                                                        id="outlined-full-width"
                                                        style={{ margin: 8 }}
                                                        placeholder="Type institut name"
                                                        fullWidth
                                                        onChange={(e) => setCertificationData({ ...postcertification, InstituteName: e.target.value })}
                                                        margin="normal"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        variant="outlined"
                                                    />

                                                </div>
                                            </div>
                                            <div className="row mt-1">
                                                <div className="col-md-12">
                                                    <label className="font-weight-bold">Course name*</label>
                                                    <br />
                                                    <TextField
                                                        id="outlined-full-width"
                                                        style={{ margin: 8 }}
                                                        placeholder="type the training name"
                                                        fullWidth
                                                        onChange={(e) => setCertificationData({ ...postcertification, CourseName: e.target.value })}
                                                        margin="normal"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        variant="outlined"
                                                    />

                                                </div>
                                            </div>


                                            <div className="row mt-2">
                                                <div className="col-md-6">
                                                    <label className="font-weight-bold">Address</label>
                                                    <br />
                                                    <TextField
                                                        required
                                                        id="outlined-required"
                                                        variant="outlined"
                                                        placeholder="type the place"
                                                        onChange={(e) => setCertificationData({ ...postcertification, Address: e.target.value })}
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="font-weight-bold">Duration*</label>
                                                    <br />
                                                    <TextField
                                                        required
                                                        id="outlined-required"
                                                        variant="outlined"
                                                        placeholder="type the duration of the training"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-md-6">
                                                    <label className="font-weight-bold">Date</label>
                                                    <br />

                                                    <form className={classes.container} noValidate>
                                                        <TextField
                                                            id="date"
                                                            type="date"
                                                            defaultValue="2021-08-02"

                                                            className={classes.textField}
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                        />
                                                    </form>



                                                </div>
                                                <div className="col-md-6">
                                                    <label className="font-weight-bold">Instructor name*</label>
                                                    <br />

                                                    <TextField
                                                        required
                                                        id="outlined-required"
                                                        variant="outlined"
                                                        placeholder="type name of the instroctor"
                                                        onChange={(e) => setCertificationData({ ...postcertification, InstructorName: e.target.value })}
                                                    />



                                                </div>
                                            </div>
                                            <div className="row mt-1">

                                                <div className="col-md-12">
                                                    <label className="font-weight-bold">Student name*</label>
                                                    <br />
                                                    <TextField
                                                        required
                                                        id="outlined-required"
                                                        variant="outlined"
                                                        placeholder="type first and last name "
                                                        onChange={(e) => setCertificationData({ ...postcertification, StudentName: e.target.value })}
                                                        fullWidth
                                                    />
                                                </div>

                                            </div>





                                        </DialogContent>
                                        <DialogActions>
                                            <Button autoFocus onClick={handleClose} color="primary">
                                                Disagree
                                            </Button>
                                            <Button onClick={handleClose} color="primary" autoFocus>
                                                Agree
                                            </Button>
                                        </DialogActions>
                                    </Dialog>



                                    {/* --------------------------ENDPOPUPform----------------------------------*/}
                                    {/* -----------------------------POPUPPreview-----------------------------------*/}

                                    <div>      <Dialog onClose={handleClosePrev} aria-labelledby="customized-dialog-title" open={openPrev}>
                                        <DialogTitle id="customized-dialog-title" onClose={handleClosePrev}>
                                            Certification model
                                        </DialogTitle>
                                        <DialogContent dividers>
                                            <Typography gutterBottom>
                                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                            </Typography>
                                            <br/>
                                            <Typography gutterBottom>
                                                <img style={{width: '100%', height: '50%'}} src="../wp-content/uploads/sites/5/attestation.PNG"
                                                    alt="Grapefruit slice atop a pile of other slices" />
                                            </Typography>


                                        </DialogContent>
                                        <DialogActions>
                                            <Button autoFocus onClick={handleClosePrev} color="primary">
                                                Save changes
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                    </div>

                                    {/* -----------------------------ENDPOPUPPreview-----------------------------------*/}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>Attendance Certificates</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Attendance certificate of training program.
                                    <br />-A certificate issued when attending a full training program without passing a final exam just issued for participate.
                                    <br />
                                    <br />
                                    {/* -----------------------------POPUPForm-----------------------------------*/}


                                    <ButtonGroup color="primary" aria-label="outlined primary button group" style={{ float: 'right' }}>
                                        <Button onClick={handleClickOpenPrev}>Preview</Button>
                                        <Button onClick={handleClickOpen}>Subscribe</Button>
                                    </ButtonGroup>

                                    {/*--- <Button variant="outlined" color="primary"  style={{float: 'right'}} onClick={handleClickOpen}>
                                        Subscribe
    </Button> */}
                                    <Dialog
                                        fullScreen={fullScreen}
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="responsive-dialog-title"
                                    >
                                        <DialogTitle id="responsive-dialog-title">{"Subcribe"}</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                Let Google help apps determine location. This means sending anonymous location data to
                                                Google, even when no apps are running.
                                            </DialogContentText>

                                            {/*--   <TextField
                                                autoFocus
                                                margin="dense"
                                                id="name"
                                                label="Email Address"
                                                type="email"
                                                fullWidth
                                         /> */}
                                            <div className="row mt-1">
                                                <div className="col-md-12">
                                                    <label className="font-weight-bold">Institute Name*</label>
                                                    <br />
                                                    <TextField
                                                        id="outlined-full-width"
                                                        style={{ margin: 8 }}
                                                        placeholder="Type institut name"
                                                        fullWidth
                                                        onChange={(e) => setCertificationData({ ...postcertification, InstituteName: e.target.value })}
                                                        margin="normal"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        variant="outlined"
                                                    />

                                                </div>
                                            </div>
                                            <div className="row mt-1">
                                                <div className="col-md-12">
                                                    <label className="font-weight-bold">Course name*</label>
                                                    <br />
                                                    <TextField
                                                        id="outlined-full-width"
                                                        style={{ margin: 8 }}
                                                        placeholder="type the training name"
                                                        fullWidth
                                                        onChange={(e) => setCertificationData({ ...postcertification, CourseName: e.target.value })}
                                                        margin="normal"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        variant="outlined"
                                                    />

                                                </div>
                                            </div>


                                            <div className="row mt-2">
                                                <div className="col-md-6">
                                                    <label className="font-weight-bold">Address</label>
                                                    <br />
                                                    <TextField
                                                        required
                                                        id="outlined-required"
                                                        variant="outlined"
                                                        placeholder="type the place"
                                                        onChange={(e) => setCertificationData({ ...postcertification, Address: e.target.value })}
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="font-weight-bold">Duration*</label>
                                                    <br />
                                                    <TextField
                                                        required
                                                        id="outlined-required"
                                                        variant="outlined"
                                                        placeholder="type the duration of the training"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-md-6">
                                                    <label className="font-weight-bold">Date</label>
                                                    <br />

                                                    <form className={classes.container} noValidate>
                                                        <TextField
                                                            id="date"
                                                            type="date"
                                                            defaultValue="2021-08-02"

                                                            className={classes.textField}
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                        />
                                                    </form>



                                                </div>
                                                <div className="col-md-6">
                                                    <label className="font-weight-bold">Instructor name*</label>
                                                    <br />

                                                    <TextField
                                                        required
                                                        id="outlined-required"
                                                        variant="outlined"
                                                        placeholder="type name of the instroctor"
                                                        onChange={(e) => setCertificationData({ ...postcertification, InstructorName: e.target.value })}
                                                    />



                                                </div>
                                            </div>
                                            <div className="row mt-1">

                                                <div className="col-md-12">
                                                    <label className="font-weight-bold">Student name*</label>
                                                    <br />
                                                    <TextField
                                                        required
                                                        id="outlined-required"
                                                        variant="outlined"
                                                        placeholder="type first and last name "
                                                        onChange={(e) => setCertificationData({ ...postcertification, StudentName: e.target.value })}
                                                        fullWidth
                                                    />
                                                </div>

                                            </div>





                                        </DialogContent>
                                        <DialogActions>
                                            <Button autoFocus onClick={handleClose} color="primary">
                                                Disagree
                                            </Button>
                                            <Button onClick={handleClose} color="primary" autoFocus>
                                                Agree
                                            </Button>
                                        </DialogActions>
                                    </Dialog>



                                    {/* --------------------------ENDPOPUPform----------------------------------*/}
                                    {/* -----------------------------POPUPPreview-----------------------------------*/}

                                    <div>      <Dialog onClose={handleClosePrev} aria-labelledby="customized-dialog-title" open={openPrev}>
                                        <DialogTitle id="customized-dialog-title" onClose={handleClosePrev}>
                                            Certification model
                                        </DialogTitle>
                                        <DialogContent dividers>
                                            <Typography gutterBottom>
                                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                            </Typography>
                                            <br/>
                                            <Typography gutterBottom>
                                                <img style={{width: '100%', height: '50%'}} src="../wp-content/uploads/sites/5/attestation.PNG"
                                                    alt="Grapefruit slice atop a pile of other slices" />
                                            </Typography>


                                        </DialogContent>
                                        <DialogActions>
                                            <Button autoFocus onClick={handleClosePrev} color="primary">
                                                Save changes
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                    </div>

                                    {/* -----------------------------ENDPOPUPPreview-----------------------------------*/}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>Professional Training Program Certificate</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Professional training certificate is a certificate to be awarded for the training programs that require the granting of a test score at the end of the training program.
                                    <br />
                                    <br />
                                    {/* -----------------------------POPUPForm-----------------------------------*/}


                                    <ButtonGroup color="primary" aria-label="outlined primary button group" style={{ float: 'right' }}>
                                        <Button onClick={handleClickOpenPrev}>Preview</Button>
                                        <Button onClick={handleClickOpen}>Subscribe</Button>
                                    </ButtonGroup>

                                    {/*--- <Button variant="outlined" color="primary"  style={{float: 'right'}} onClick={handleClickOpen}>
                                        Subscribe
    </Button> */}
                                    <Dialog
                                        fullScreen={fullScreen}
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="responsive-dialog-title"
                                    >
                                        <DialogTitle id="responsive-dialog-title">{"Subcribe"}</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                Let Google help apps determine location. This means sending anonymous location data to
                                                Google, even when no apps are running.
                                            </DialogContentText>

                                            {/*--   <TextField
                                                autoFocus
                                                margin="dense"
                                                id="name"
                                                label="Email Address"
                                                type="email"
                                                fullWidth
                                         /> */}
                                            <div className="row mt-1">
                                                <div className="col-md-12">
                                                    <label className="font-weight-bold">Institute Name*</label>
                                                    <br />
                                                    <TextField
                                                        id="outlined-full-width"
                                                        style={{ margin: 8 }}
                                                        placeholder="Type institut name"
                                                        fullWidth
                                                        onChange={(e) => setCertificationData({ ...postcertification, InstituteName: e.target.value })}
                                                        margin="normal"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        variant="outlined"
                                                    />

                                                </div>
                                            </div>
                                            <div className="row mt-1">
                                                <div className="col-md-12">
                                                    <label className="font-weight-bold">Course name*</label>
                                                    <br />
                                                    <TextField
                                                        id="outlined-full-width"
                                                        style={{ margin: 8 }}
                                                        placeholder="type the training name"
                                                        fullWidth
                                                        onChange={(e) => setCertificationData({ ...postcertification, CourseName: e.target.value })}
                                                        margin="normal"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        variant="outlined"
                                                    />

                                                </div>
                                            </div>


                                            <div className="row mt-2">
                                                <div className="col-md-6">
                                                    <label className="font-weight-bold">Address</label>
                                                    <br />
                                                    <TextField
                                                        required
                                                        id="outlined-required"
                                                        variant="outlined"
                                                        placeholder="type the place"
                                                        onChange={(e) => setCertificationData({ ...postcertification, Address: e.target.value })}
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="font-weight-bold">Duration*</label>
                                                    <br />
                                                    <TextField
                                                        required
                                                        id="outlined-required"
                                                        variant="outlined"
                                                        placeholder="type the duration of the training"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-md-6">
                                                    <label className="font-weight-bold">Date</label>
                                                    <br />

                                                    <form className={classes.container} noValidate>
                                                        <TextField
                                                            id="date"
                                                            type="date"
                                                            defaultValue="2021-08-02"

                                                            className={classes.textField}
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                        />
                                                    </form>



                                                </div>
                                                <div className="col-md-6">
                                                    <label className="font-weight-bold">Instructor name*</label>
                                                    <br />

                                                    <TextField
                                                        required
                                                        id="outlined-required"
                                                        variant="outlined"
                                                        placeholder="type name of the instroctor"
                                                        onChange={(e) => setCertificationData({ ...postcertification, InstructorName: e.target.value })}
                                                    />



                                                </div>
                                            </div>
                                            <div className="row mt-1">

                                                <div className="col-md-12">
                                                    <label className="font-weight-bold">Student name*</label>
                                                    <br />
                                                    <TextField
                                                        required
                                                        id="outlined-required"
                                                        variant="outlined"
                                                        placeholder="type first and last name "
                                                        onChange={(e) => setCertificationData({ ...postcertification, StudentName: e.target.value })}
                                                        fullWidth
                                                    />
                                                </div>

                                            </div>





                                        </DialogContent>
                                        <DialogActions>
                                            <Button autoFocus onClick={handleClose} color="primary">
                                                Disagree
                                            </Button>
                                            <Button onClick={handleClose} color="primary" autoFocus>
                                                Agree
                                            </Button>
                                        </DialogActions>
                                    </Dialog>



                                    {/* --------------------------ENDPOPUPform----------------------------------*/}
                                    {/* -----------------------------POPUPPreview-----------------------------------*/}

                                    <div>      <Dialog onClose={handleClosePrev} aria-labelledby="customized-dialog-title" open={openPrev}>
                                        <DialogTitle id="customized-dialog-title" onClose={handleClosePrev}>
                                            Certification model
                                        </DialogTitle>
                                        <DialogContent dividers>
                                            <Typography gutterBottom>
                                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                            </Typography>
                                            <br/>
                                            <Typography gutterBottom>
                                                <img style={{width: '100%', height: '50%'}} src="../wp-content/uploads/sites/5/attestation.PNG"
                                                    alt="Grapefruit slice atop a pile of other slices" />
                                            </Typography>


                                        </DialogContent>
                                        <DialogActions>
                                            <Button autoFocus onClick={handleClosePrev} color="primary">
                                                Save changes
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                    </div>

                                    {/* -----------------------------ENDPOPUPPreview-----------------------------------*/}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography className={classes.heading}><h4><strong>Professional Training Diploma</strong></h4></Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Certificate of vocational training Diploma.
                                    <br />-Certificate awarded for specialized and in-depth training programs in a specific field and has an appropriate number of hours.
                                    <br />
                                    <br />
                                    {/* -----------------------------POPUPForm-----------------------------------*/}


                                    <ButtonGroup color="primary" aria-label="outlined primary button group" style={{ float: 'right' }}>
                                        <Button onClick={handleClickOpenPrev}>Preview</Button>
                                        <Button onClick={handleClickOpen}>Subscribe</Button>
                                    </ButtonGroup>

                                    {/*--- <Button variant="outlined" color="primary"  style={{float: 'right'}} onClick={handleClickOpen}>
                                        Subscribe
    </Button> */}
                                    <Dialog
                                        fullScreen={fullScreen}
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="responsive-dialog-title"
                                    >
                                        <DialogTitle id="responsive-dialog-title">{"Subcribe"}</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                Let Google help apps determine location. This means sending anonymous location data to
                                                Google, even when no apps are running.
                                            </DialogContentText>

                                            {/*--   <TextField
                                                autoFocus
                                                margin="dense"
                                                id="name"
                                                label="Email Address"
                                                type="email"
                                                fullWidth
                                         /> */}
                                            <div className="row mt-1">
                                                <div className="col-md-12">
                                                    <label className="font-weight-bold">Institute Name*</label>
                                                    <br />
                                                    <TextField
                                                        id="outlined-full-width"
                                                        style={{ margin: 8 }}
                                                        placeholder="Type institut name"
                                                        fullWidth
                                                        onChange={(e) => setCertificationData({ ...postcertification, InstituteName: e.target.value })}
                                                        margin="normal"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        variant="outlined"
                                                    />

                                                </div>
                                            </div>
                                            <div className="row mt-1">
                                                <div className="col-md-12">
                                                    <label className="font-weight-bold">Course name*</label>
                                                    <br />
                                                    <TextField
                                                        id="outlined-full-width"
                                                        style={{ margin: 8 }}
                                                        placeholder="type the training name"
                                                        fullWidth
                                                        onChange={(e) => setCertificationData({ ...postcertification, CourseName: e.target.value })}
                                                        margin="normal"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        variant="outlined"
                                                    />

                                                </div>
                                            </div>


                                            <div className="row mt-2">
                                                <div className="col-md-6">
                                                    <label className="font-weight-bold">Address</label>
                                                    <br />
                                                    <TextField
                                                        required
                                                        id="outlined-required"
                                                        variant="outlined"
                                                        placeholder="type the place"
                                                        onChange={(e) => setCertificationData({ ...postcertification, Address: e.target.value })}
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <label className="font-weight-bold">Duration*</label>
                                                    <br />
                                                    <TextField
                                                        required
                                                        id="outlined-required"
                                                        variant="outlined"
                                                        placeholder="type the duration of the training"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-md-6">
                                                    <label className="font-weight-bold">Date</label>
                                                    <br />

                                                    <form className={classes.container} noValidate>
                                                        <TextField
                                                            id="date"
                                                            type="date"
                                                            defaultValue="2021-08-02"

                                                            className={classes.textField}
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                        />
                                                    </form>



                                                </div>
                                                <div className="col-md-6">
                                                    <label className="font-weight-bold">Instructor name*</label>
                                                    <br />

                                                    <TextField
                                                        required
                                                        id="outlined-required"
                                                        variant="outlined"
                                                        placeholder="type name of the instroctor"
                                                        onChange={(e) => setCertificationData({ ...postcertification, InstructorName: e.target.value })}
                                                    />



                                                </div>
                                            </div>
                                            <div className="row mt-1">

                                                <div className="col-md-12">
                                                    <label className="font-weight-bold">Student name*</label>
                                                    <br />
                                                    <TextField
                                                        required
                                                        id="outlined-required"
                                                        variant="outlined"
                                                        placeholder="type first and last name "
                                                        onChange={(e) => setCertificationData({ ...postcertification, StudentName: e.target.value })}
                                                        fullWidth
                                                    />
                                                </div>

                                            </div>





                                        </DialogContent>
                                        <DialogActions>
                                            <Button autoFocus onClick={handleClose} color="primary">
                                                Disagree
                                            </Button>
                                            <Button onClick={handleClose} color="primary" autoFocus>
                                                Agree
                                            </Button>
                                        </DialogActions>
                                    </Dialog>



                                    {/* --------------------------ENDPOPUPform----------------------------------*/}
                                    {/* -----------------------------POPUPPreview-----------------------------------*/}

                                    <div>      <Dialog onClose={handleClosePrev} aria-labelledby="customized-dialog-title" open={openPrev}>
                                        <DialogTitle id="customized-dialog-title" onClose={handleClosePrev}>
                                            Certification model
                                        </DialogTitle>
                                        <DialogContent dividers>
                                            <Typography gutterBottom>
                                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                                                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                            </Typography>
                                            <br/>
                                            <Typography gutterBottom>
                                                <img style={{width: '100%', height: '50%'}} src="../wp-content/uploads/sites/5/attestation.PNG"
                                                    alt="Grapefruit slice atop a pile of other slices" />
                                            </Typography>


                                        </DialogContent>
                                        <DialogActions>
                                            <Button autoFocus onClick={handleClosePrev} color="primary">
                                                Save changes
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                    </div>

                                    {/* -----------------------------ENDPOPUPPreview-----------------------------------*/}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        
                       
                      
                   
                        
                      
                       
                    </div>


                </div>

            </div>

        </>
    )
}

export default Certification
