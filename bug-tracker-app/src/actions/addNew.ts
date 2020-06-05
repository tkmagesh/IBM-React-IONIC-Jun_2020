import bugApi from '../services/bugApi';

export default function addNew(bugName : any) {
    return function(dispatch : any){
        const newBugData = {
            id: 0,
            name: bugName,
            isClosed: false,
            createdAt: new Date()
        }
        bugApi
            .save(newBugData)
            .then(newBug => {
                const action = { type: 'ADD_NEW_BUG', payload: newBug };
                dispatch(action);
            })
        
    }
}