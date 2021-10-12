import React,{useState} from 'react';
import {lighten, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarFillIcon from '@material-ui/icons/StarOutlined';
import BorderLinearProgress from '@material-ui/core/LinearProgress'
import './QuestionPanel.css';


const useStyles = makeStyles({
  root: {
    width: 700,
    minHeight:350,
    maxHeight:400,
    textAlign:'left',
    padding:50
  },
  question:{
    color:'black',
    fontSize: '2rem',
  },

  progressRoot: {
    height: 10,
    backgroundColor: lighten('#ff6c5c', 0.5),
    borderRadius: 20,

  },
  bar: {
    height: 16,
    borderRadius: 20,
  },
});

export default function QuestionPanel({question, nextQuestion, total, questionNo, progress, checkUserAnswer}) {
  const [answered,setAnswered] = useState('');
  const [message]=useState(''); 
  
  const handleAnswer = (ans) =>{
    setAnswered(ans);
    checkUserAnswer(ans);
    

  }

   
  const classes = useStyles();
  return (<>
        <div className={classes.progressRoot}>

          <BorderLinearProgress
              className={classes.bar}
              variant="determinate"
              color="secondary"
              value={progress}
            />
        </div>

        <Card className={classes.root}>
          <CardActionArea>  
            <CardContent>
              <Typography variant="h5" component="h3">
                Question {questionNo} of {total}
              </Typography>
              
              <Typography  variant="body1" color="textSecondary" component="p" className={classes.question}>
                {decodeURIComponent(question['question'])}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            { question['answers'].map(key =>
                <Button variant={answered === decodeURIComponent(key)? "contained" :"outlined"} 
                        color="primary" key={decodeURIComponent(key)} 
                        onClick={()=>handleAnswer(decodeURIComponent(key))}
                        disabled={answered!==''?true : false}
                >
                        {decodeURIComponent(key)}
                </Button>
              )
            }
          </CardActions>
          <Typography variant="h5" component="h3" className="message">
              {answered && message}
          </Typography>
            
          {answered!=='' && progress !==100? 
            <Button variant="contained" 
              className="next-button" 
              color="secondary" key="next" onClick={()=>{nextQuestion(); setAnswered('');}} 
              >
                Next Question
          </Button>
          
          : ''}
        
        {answered!=='' && progress ==100? 
            <Button variant="contained" 
              className="next-button" 
              color="secondary" key="next"  
              >
               <Link to="/GererCourses">finished </Link>

          </Button>
          
          : ''}
            
        </Card>
        
    </>
  );
}
