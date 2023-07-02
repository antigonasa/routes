import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {

    const navigate = useNavigate();

    // useEffect(() => {
    //     setTimeout(
    //         () => {
    //             navigate('/about')
    //         }, 5000
    //     )
    // }, [])

    const handleNavigate = () => {
        navigate('/about');
        console.log('button clicked successfully')
    }

    return (
        <div className='welcome-page'>
            <h1>Welcome!</h1>
            <p>Learn more about us!</p>
            <button className='about-link' onClick={handleNavigate}>About Us</button>
        </div>
    )
}

export default Welcome