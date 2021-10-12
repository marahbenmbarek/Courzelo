import React from 'react'
import HomeQ from './HomeQ/HomeQ';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';  
import './Questionnaire.css';
const theme = createMuiTheme({
    palette: {
       primary: {
          light: '#fff',
          main: '#e7643d',
          dark: '#000'
       },
       secondary: {
         main: '#f44336',
       },
    },
    typography: { 
       useNextVariants: true
    }
  });
function Questionnaire() {
    return (
        

<div className="App">

       <MuiThemeProvider theme = { theme }>
          <HomeQ/>
       </MuiThemeProvider>
    </div>
        
    )
}

export default Questionnaire
