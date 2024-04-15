import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
    return (
        <div>
            <img className='my-3 mx-5 ' src={loading} alt="Loading" style={{ height: '40px', width: '40px' }} />

        </div>
    )

}

export default Spinner
