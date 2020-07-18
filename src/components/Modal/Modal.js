import React from 'react';
import './Modal.css';

const Modal = (props) => {
    return (
        <div className="modal">
            <div className="modal-container">
                <header
                    className="movie-header"
                    style={{
                        backgroundImage: `url(${props.backdrop})`,
                        position: 'relative',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '50% 50%',
                        backgroundColor: '#4e585c',
                    }}
                >
                    <div className="image-container">
                        <img src={props.modalURLImage} alt={props.modalTitle + 'poster'} className="movies-item-poster-image" />
                    </div>
                    <h2 className="title-modal">{props.modalTitle}</h2>
                    <div className="exit-modal" onClick={props.hideModal}>
                        x
                    </div>
                </header>
                <section className="movie-main">
                    <div className="movie-main-container">
                        <div className="modal-overview">
                            <p>{props.modalOverview}</p>
                        </div>
                        <div className="modal-date">
                            <h3 className="date-header">RELEASE DATE</h3>
                            <p className="date-content">{props.modalDate}</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
export default Modal;
