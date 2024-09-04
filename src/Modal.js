import ReactDOM from 'react-dom';

export default function Modal({children, onClose}){
    return ReactDOM.createPortal(
        <div className='modal-overlay' onClose={onClose}>
            <div className='modal-content' onClick={e=>e.stopPropagation()}>
                {children}
            </div>
        </div>,
        document.body
    );
}