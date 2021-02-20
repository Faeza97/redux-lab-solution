import React , {useState} from 'react'
import {useDispatch} from 'react-redux' ;
import {addComment} from '../redux/action'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Add from '@material-ui/icons/Add'
const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));
export default function CommentForm() {
    const [comment , setCommet] = useState('') ;
    const classes = useStyles();

   let handleChange = ({target}) => {
        let name = target.name ;
        let value = target.value ;
        setCommet( prev =>({
            ...prev ,
            [name] : value ,
        }));
        console.log(comment);
    }
    const dispatch = useDispatch()
    return (
        
        <Paper component="form" className={classes.root}>
            <InputBase 
            label="Standard" 
            type='text' 
            name='author'
            placeholder='author'
            value={Comment.author}
            onChange={handleChange}
            /> 
             <InputBase 
            label="Standard" 
            type='text' 
            placeholder='comment' 
            name ='comment'
            value={comment.comment}
            onChange={handleChange}
            />
            <IconButton>
              <Add onClick ={() => dispatch(addComment(comment))} />
            </IconButton>
          
        </Paper>
    )
}
