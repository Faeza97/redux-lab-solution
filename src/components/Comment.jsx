import React from 'react'
import {useDispatch} from 'react-redux' ;
import {deleteComment , likeComment , editComment} from '../redux/action';


//Material-ui importing
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

// Icon
import FavoriteIcon from '@material-ui/icons/Favorite';
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    avatar: {
      backgroundColor: red[500],
    },
    icons :{
        display : 'flex' ,
        justifyContent :'center'
    }
  }));

export default function Comment({data}) {
    const classes = useStyles();
    let dispatch = useDispatch() ;
    return (
        <div>
            <Card className={classes.root}>
        <CardHeader
            avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
                {data.author[0]}
            </Avatar>
            }
            title={data.author}
        />
        <CardContent>
            <Typography variant="body1" color="textPrimary" component="p">
                {data.comment}
            </Typography>
        </CardContent>
        <CardActions className ={classes.icons}>
            <Typography variant='body2' color = 'textSecondary' component='p' >
                {data.likes}
            </Typography>
            <IconButton aria-label="add to favorites">
                    <FavoriteIcon 
                        onClick = { () => dispatch(likeComment(data.id))}
                    />
            </IconButton>
            <IconButton aria-label="add to favorites">
                    <Edit 
                       onClick = { () => {
                           dispatch(editComment(data.id , prompt('new comment : ' , data.comment)))}
                         }
                    />
            </IconButton>
            <IconButton aria-label="add to favorites">
                    <Delete 
                        onClick = { () => dispatch(deleteComment(data.id))}
                    />
            </IconButton>
        </CardActions>
        </Card>
        </div>
    )
}
