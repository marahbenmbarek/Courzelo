import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ReactProgressLineBar from 'react-progress-line-bar';
import './StepForm.css';


export class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Votre parfum favori est : ' + this.state.value);
    event.preventDefault();
  }
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
   
    
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='md'
          >
            <ReactProgressLineBar value={100}/>
            <AppBar title="Confirm User Data" />
            <hr className="ligne"></hr>
            <h1 className="fromTitle">Combien de temps par semaine pouvez-vous consacrer à la création de votre cours ?</h1>
            <form onSubmit={this.handleSubmit}>
        <label>
          <select class="select-css">
  <option>This is a native select element</option>
  <option>Apples</option>
  <option>Bananas</option>
  <option>Grapes</option>
  <option>Oranges</option>
</select>
        </label>
        
      </form>
            <br />
            <div className="formButtons">
            <Button
             className="buttonBack2"
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              className="buttonlowel"
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Créer un cour</Button>
            </div>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
