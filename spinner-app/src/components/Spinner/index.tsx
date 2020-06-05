import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { IonButton } from '@ionic/react';
import spinnerActionCreators from './actions';

import './index.css';


const Spinner : React.FC<any> = ({value, increment, decrement, doubleIncrement, doubleDecrement}) => {
    const [delta, setDelta] = useState(0);
    return(
        <div className="spinnerContainer">
            <h1>Spinner</h1>
            <input type="number" onChange={ evt => setDelta(evt.target.valueAsNumber)} value={delta} />
            <br/>
            <IonButton className="primary" onClick={_ => doubleDecrement()}>Double Decrement</IonButton>
            <IonButton className="primary" onClick={_ => decrement(delta)}>Decrement</IonButton>
            <div className="spinnerValue">[ {value} ]</div>
            <IonButton className="primary" onClick={_ => increment(delta)}>Increment</IonButton>
            <IonButton className="primary" onClick={_ => doubleIncrement()}>Double Increment</IonButton>
        </div>
    )
}

function mapStateToProps(storeState : any){
    return { value : storeState.spinnerState };
}

function mapDispatchProps(dispatch : any){
    return bindActionCreators(spinnerActionCreators, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchProps
)(Spinner);


