export default function remove(bugToRemove : any) {
    const action = { type: 'REMOVE_BUG', payload: bugToRemove };
    return action;
}