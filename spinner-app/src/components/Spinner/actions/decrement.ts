export default function decrement(delta : number){
    const action = { type: 'DECREMENT', payload: delta };
    return action;
}

