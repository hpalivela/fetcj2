import { getAllPosts, getSinglePost, updatePost } from "./BlogActionTypes";

const URL = "https://jsonplaceholder.typicode.com/posts";

export const getAll = () => {
  return (dispatch)=>{
  try {
    const response = fetch(URL).then((response) => response.json())
    .then((data) => dispatch({
        type: getAllPosts,
        payload: data,
      })) 
    }
    catch(error){
        console.log('ERROR')
    } 
}
} 
export const singleData=(id)=>{
    return(dispatch)=>{
    try{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response)=>response.json())
        .then((singleLine)=>dispatch({
            type:getSinglePost,
            payload:singleLine
        }))
        // .then((data)=>console.log(data))
        
    }
    catch(error){
        console.log('error');
    }
    }
}

export const updating=(data)=>{
    return(dispatch)=>{
        try{
            const response=fetch(URL,{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body:JSON.stringify(data)
            }).then((response)=>response.json())
            const update=response.data;
            console.log(update);
            dispatch({
                type:updatePost,
                payload:update
            })
        }
        catch(error){
            console.log('ERROR')
        }
    }
}
