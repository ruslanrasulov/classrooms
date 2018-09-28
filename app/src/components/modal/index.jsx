import React, { Component } from 'react';
import './_styles.scss';

class Modal extends Component {
    render() {
        const { visible, title, text, onSubmit, onClose } = this.props;

        return (
            <div>
                {visible?
                <div className="modal-background">
                    <div className="modal">
                        <div className="modal__header">
                            <span className="modal__header__title">{title}</span>
                            <i 
                                onClick={onClose}
                                className="modal__header__close-btn far fa-window-close"></i>
                        </div>
                        <div className="modal__text">{text}</div>
                        <div className="modal__buttons">
                            <button 
                                type="button" 
                                className="modal__buttons__submit" 
                                onClick={onSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div> :
                null
            }
            </div>
        )
    }
}

export default Modal;