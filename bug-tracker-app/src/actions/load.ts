import bugApi from '../services/bugApi';

export default function load(){
    /* If sync */
    /* 
        var bugs = bugApi.getAll();
        const action = { type: 'INIT_BUGS', payload : bugs};
        return action;
        //the returned action is dispatched
    */
    return function(dispatch : any){
        bugApi
            .getAll()
            .then((bugs : any) => {
                const action = { type: 'INIT_BUGS', payload: bugs }
                dispatch(action);
            });
    };
}