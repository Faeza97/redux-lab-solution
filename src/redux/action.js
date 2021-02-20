export const addComment = (comment) =>{
    console.log(comment);
    return {
        type : 'ADD_COMMENT' ,
        payload :{
            author :comment.author ,
            comment: comment.comment ,
        }
    }
}
export const deleteComment = (id) =>{
    return {
        type : 'DELETE_COMMENT' ,
        payload : {
            id,
        }
    }
}
export const likeComment = (id) => {
    return {
        type : 'ADD_LIKE' ,
        payload : {
            id,
        }
    }
}
export const editComment = (id , newComment) =>{
    return {
        type : 'EDIT_COMMENT' ,
        payload :{
            id ,
            comment: newComment ,
        }
    }
}