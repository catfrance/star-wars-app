import React from 'react'
import './Modal.css'

function Modal(props) {
    return (
        <div 
            className="modal"
            style={{display: props.show ? 'block' : 'none'}}
        >
            <div className="modal-background">
                <div className="modal-container">
                    <div className="modal-header">
                        <h3>{props.header}</h3>
                        <span className="close-modal-btn" onClick={props.close}>×</span>
                    </div>
                    <div className="modal-content">
                        {props.children}
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default Modal;