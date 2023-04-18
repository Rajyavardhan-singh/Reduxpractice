const intialState = {
    display:false
};


const DisplayReducer = (state=intialState,action) => {
 switch(action.type){
    case 'DISPLAYING':
        return {
            ...state,
            display:true
        }
    case 'NOTDISPLAYING':
        return {
            ...state,
            display:false
        }   
    default : return state    
 }
}

export default DisplayReducer;
