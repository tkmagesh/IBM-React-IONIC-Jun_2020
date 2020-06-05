export default function increment(delta : number){
    const action = { type: 'INCREMENT', payload: delta };
    return action;
}