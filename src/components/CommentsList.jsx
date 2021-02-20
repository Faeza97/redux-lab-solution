import React from 'react'
import {useSelector} from 'react-redux' ;
import Comment from './Comment';

export default function CommentsList() {
    let state = useSelector(s => s) ;

    return (
        
        <div>
            {console.log(state)}
            {state.map(element => <Comment key = {element.id} data ={element}/>)}
        </div>
    )
}
