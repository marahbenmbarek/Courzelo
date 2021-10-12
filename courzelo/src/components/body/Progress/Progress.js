import Box from '@material-ui/core/Box';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import { Radar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import './Progress.css';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',

    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);


function Progress() {
    const auth = useSelector(state => state.auth)
    const { user } = auth;




    const datachartSoft = {
        labels: ['public speaking', 'test', 'coaching'],
        datasets: [
            {
                label: 'Soft Skills Data',
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(0,191,255)',
                pointBackgroundColor: 'rgba(0,191,255)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(0,191,255)',
                data: ['30', '70', '90']
            },


        ]
    };
    const datachartFront = {
        labels: ['angularjs', 'react ', 'test'],
        datasets: [
            {
                label: 'Front Skills ',
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: ['60', '70', '80']
            },


        ]
    };

    const datachartBack = {
        labels: ['Laravel', 'Djando ', 'NodeJS'],
        datasets: [
            {
                label: 'BackEnd Skills ',
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: ['40', '60', '90']
            },


        ]
    };
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            {/* -----------------------------------------------Header---------------------------------------------------------*/}

            <div className="page-title layout-1">
                <div className="main-top parallax" style={{ backgroundImage: 'url(../wp-content/uploads/sites/5/progress.jpg)' }}>
                    <span className="overlay-top-header" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }} />
                    <div className="content container">
                        <div className="row">
                            <div className="text-title col-md-6">
                                <h1>My Progress</h1> </div>
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
                            <h3 className="primary-heading">Advancement <br />  <br />
                            </h3> </div>

                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            {/* -----------------------------------------------EndHeader---------------------------------------------------------*/}
            <div className="main">
                <div className="CardPorgress">
                    <div className="row">
                       
                            <h2>Hello, <a>{user.First_name} {user.Last_name}  </a>  </h2> 
                    
                    </div>

                    <hr/>
                    <br></br>
                    <br></br>
                    
           
            



                    <div className={classes.root}>
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            className={classes.tabs}
                        >
                            <Tab label="Hard Skills" {...a11yProps(0)} />
                            <Tab label="Soft Skills" {...a11yProps(1)} />
                            <Tab label="Others" {...a11yProps(2)} />

                        </Tabs>
                        <TabPanel  style={{width:'100%'}} value={value} index={0}>

                                    <div class="Charts ">
                                    
                                                    <div className="chart" >
                                                        <Radar data={datachartBack}></Radar>
                                                    </div>
                                                   

                                                    <div className="chart" >
                                                        <Radar data={datachartFront}></Radar>
                                                    </div>

                                           
                                    </div>
                               
                            



                        </TabPanel>
                        <TabPanel  style={{width:'100%'}} value={value} index={1}>
                        <div class="Charts ">
                                    
                                    <div className="chart" >
                                        <Radar data={datachartSoft}></Radar>
                                    </div>
                                   

                                    <div className="chart" >
                                        <Radar data={datachartSoft}></Radar>
                                    </div>

                           
                    </div>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            Others
                        </TabPanel>

                    </div>




                </div>
            </div>
            
        </div>
    )
}

export default Progress
