
const iState ={
    name:"ramesh",
    wishes:['eat', 'code']
}

const reducer = (state=iState, action) => {
    console.log(action);
    if(action.type === 'CHANGE_NAME'){
        return{
            ...state,
            name:action.payload
        }
    }

    return state;
}

export default reducer;

//  changeName:(name) => {dispatch({type:'CHANGE_NAME',  payload:name})}