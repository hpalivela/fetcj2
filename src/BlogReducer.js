import { getAllPosts, getSinglePost,updatePost} from "./BlogActionTypes";
const intialState={
    allData:[],
    oneData:[]
}
 export const completeData=(state=intialState,action)=>{
    switch(action.type){
        case getAllPosts:
            return {...state,allData:action.payload}
        case getSinglePost:
            return {...state,oneData:[action.payload]}    
        case updatePost:
            return{...state,allData:action.payload}    
        default:
            return state
    }
}