import React from 'react'

const ModalImage = ({ selectedImg }) => {
    return (
        <div className="backdrop">
            <img src={selectedImg} alt="enlarged pic" />

        </div>
    )
}

export default ModalImage
