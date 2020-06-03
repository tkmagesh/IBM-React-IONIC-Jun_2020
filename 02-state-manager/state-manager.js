var StateManager = (function(){
    var _currentState = undefined,
        _subscribers = [],
        _reducer = undefined,
        _init_action = { type : '@@INIT-ACTION'};

    function getState(){
        return _currentState;
    }

    function subscribe(callback){
        _subscribers.push(callback);
    }

    function triggerChange(){
        _subscribers.forEach(callback => callback());
    }

    function dispatch(action){
        var newState = _reducer(_currentState, action);
        if (_currentState === newState) return;
        _currentState = newState;
        triggerChange();
    }

    function createStore(reducer) {
        if (typeof reducer !== 'function') throw new Error('Invalid argument(s). Reducer has to be a function')
        _reducer = reducer;
        _currentState = _reducer(undefined, _init_action);
        var store = { getState, subscribe, dispatch };
        return store;
    }

    function bindActionCreators(actionCreators, dispatch) {
        var actionDispatchers = {};
        for (let key in actionCreators) {
            actionDispatchers[key] = function (...args) {
                const action = actionCreators[key](...args);
                dispatch(action);
            }
        }
        return actionDispatchers;
    }

    return { createStore, bindActionCreators };

})();