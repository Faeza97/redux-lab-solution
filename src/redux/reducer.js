let key = 0 ;
const reducer = (store = [] , action ) => {
    switch(action.type) {
        case 'ADD_COMMENT' :
            return [
                ...store ,
                {
                    id : ++key ,
                    author: action.payload.author ,
                    comment : action.payload.comment ,
                    likes : 0 ,
                }
            ];
        case 'DELETE_COMMENT' :
            return store.filter((item) => item.id !== action.payload.id);
        case 'ADD_LIKE' :
            return store.map((item) => item.id === action.payload.id ? {...item , likes : ++item.likes} : item );
        case 'EDIT_COMMENT' :
            return   store.map((item) => item.id === action.payload.id ? {...item , comment :action.payload.comment} : item );
        default : 
                return store ;
    }
}
export default reducer ;

