import React, { useState } from 'react';
import { IonButton } from '@ionic/react';

import './Spinner.css';

const Spinner : React.FC<{}> = () => {
    const [value, setValue] = useState(0);
    return(
        <div className="spinnerContainer">
            <h1>Spinner</h1>
            <IonButton className="primary" onClick={_ => setValue(value - 1)}>Decrement</IonButton>
            <div className="spinnerValue">[ {value} ]</div>
            <IonButton className="primary" onClick={_ => setValue(value + 1)}>Increment</IonButton>
        </div>
    )
}

export default Spinner;