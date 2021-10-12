import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ReactProgressLineBar from 'react-progress-line-bar';
import './StepForm.css';



export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='md'
          >
            <ReactProgressLineBar  className="progress"value={33.33}/>
            
            <AppBar title="Enter User Details" />
            <hr className="ligne"></hr>
            <h1 className="fromTitle"> Pourquoi ne pas mettre un titre provisoire ?</h1>
            <TextField
              className="formField"
              placeholder="par exemple: React pour les débutants"
              label="Title"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
            />
            <br />
           
            <br />
            <Button
              color="primary"
              className="buttonlowel"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
