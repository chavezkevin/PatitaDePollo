import React from 'react'

export const Loader = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div className='loader spinner-grow text-info' role="status">
                <span className='visually-hidden'>Cargando...</span>
            </div>
        </div>
    )
}
