function bugsReducer(currentState = [], action : any) {
    if (action.type === 'ADD_NEW_BUG') {
        const newState = [...currentState, action.payload];
        return newState;
    }
    if (action.type === 'REPLACE_BUG') {
        const newState = currentState.map((bug : any) => bug.id === action.payload.id ? action.payload : bug);
        return newState;
    }
    if (action.type === 'REMOVE_BUG') {
        const newState = currentState.filter((bug : any) => bug.id !== action.payload.id);
        return newState;
    }
    if (action.type === 'REMOVE_BUGS') {
        const newState = currentState.filter((bug:any) => !action.payload.find((closedBug:any) => closedBug.id === bug.id));
        return newState;
    }
    if (action.type === 'INIT_BUGS'){
        return action.payload;
    }
    return currentState;
}

export default bugsReducer;