import React from 'react';
import './Spinner.css'

function Spinner() {
    return (
        <div className="spinner-button">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Spinner;