import React, { useState, useEffect } from 'react';
import './Modal.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            setIsClosing(false);
        } else if (isVisible) {
            setIsClosing(true);
            setTimeout(() => {
                setIsVisible(false);
                setIsClosing(false);
            }, 800);
        }
    }, [isOpen]);

    if (!isOpen && !isClosing) return null;

    return (
        <div className="modal">
            <div className={`modal-content ${isClosing ? 'modal-content-slide-out' : 'modal-content-slide-up'}`}>
                {children}
                <div className='btn-close'>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
