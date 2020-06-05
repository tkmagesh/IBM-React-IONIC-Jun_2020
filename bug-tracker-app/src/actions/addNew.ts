export default function addNew(bugName : any) {
    const newBug = {
        id: 0,
        name: bugName,
        isClosed: false,
        createdAt: new Date()
    }
    const action = { type: 'ADD_NEW_BUG', payload: newBug };
    return action;
}