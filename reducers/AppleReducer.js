import {handleActions} from "redux-actions"
let initState = {
    isPlanting:false,
    nextApple:3,
    apples:[
        {id:1,weight:450,eaten:false},
        {id:2,weight:260,eaten:false}
    ]
}
// function reducer(state = initState,action){
//     console.log(action)
//     switch(action.type){
//         case "START_PLANT_APPLE":
//             return {...state,isPlanting:true}
//         case "END_PLANT_APPLE":
//             return {...state,isPlanting:false}
//         case "EAT_APPLE":
//             return {...state,apples:state.apples.map(apple=>{
//                 if(apple.id === action.payload){
//                     return {...apple,eaten:true}
//                 }
//                 else
//                     return apple;
//             })};
//         case "PLANT_APPLE":
//             return {...state,nextApple:state.nextApple+1,apples:[...state.apples,{id:state.nextApple,weight:260,eaten:false}]};
//         default:
//             return state;
//     }
// }
// export default reducer;
let reducer = handleActions({
    START_PLANT_APPLE:(state,action)=>{
        return {...state,isPlanting:true}
    },
    END_PLANT_APPLE:(state,action)=>{
        return {...state,isPlanting:false}
    },
    EAT_APPLE:(state,action)=>{
        return {...state,apples:state.apples.map(apple=>{
                if(apple.id === action.payload){
                    return {...apple,eaten:true}
                }
                else
                    return apple;
            })};
    },
    PLANT_APPLE:(state,action)=>{
        return {...state,nextApple:state.nextApple+1,apples:[...state.apples,{id:state.nextApple,weight:260,eaten:false}]};
    }
},initState);
export default reducer;