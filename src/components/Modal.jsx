import React from 'react';
    function Modal(props) {
        const   {toggleModal,selectedCat}=props
        return ( 
        <div className='overlay' onClick={toggleModal}>
           <div className="overlay-cover" onClick={e=>e.stopPropagation()}>
                <img src={selectedCat.imageUrl} alt='image of ${props.imageUrl}' height={400} />
                <div className="overlay-content">
                    <h2>{selectedCat.name}</h2>
                    <p>{selectedCat.description}</p>
                </div>
           </div>
                

        </div> );
    }
    
    export default Modal;