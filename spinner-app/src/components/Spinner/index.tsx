import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { IonButton } from '@ionic/react';
import spinnerActionCreators from './actions';

import './index.css';


const Spinner : React.FC<any> = ({value, increment, decrement}) => {
    const [delta, setDelta] = useState(0);
    return(
        <div className="spinnerContainer">
            <h1>Spinner</h1>
            <input type="number" onChange={ evt => setDelta(evt.target.valueAsNumber)} value={delta} />
            <br/>
            <IonButton className="primary" onClick={_ => decrement(delta)}>Decrement</IonButton>
            <div className="spinnerValue">[ {value} ]</div>
            <IonButton className="primary" onClick={_ => increment(delta)}>Increment</IonButton>
        </div>
    )
}

 export default connect(
    (storeState : any) => ({ value : storeState.spinnerState }),
    (dispatch : any) => {
        var spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, dispatch);
        return spinnerActionDispatchers;
    }
)(Spinner);


