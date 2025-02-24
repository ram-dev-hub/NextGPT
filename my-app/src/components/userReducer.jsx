

const reducer=(state,action)=>{
    if(action.type==='ADD_USER'){
        return [...state,action.payload]
    }
    if(action.type==='REMOVE_USER'){
        return state.filter(user=>user.id!==action.payload)
    }
    return state
}