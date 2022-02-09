import React from 'react';
import { Route, Link } from 'react-router-dom';


const ErrorPage = ( { backHomeBtn }) => {
    return (
        <section>
            <h2>Sorry you that smell like the rancidest of the Rancid Tomatillos. Try again or smell you later.</h2>
            <Link to="/">
            <button className='back-to-main-button'>Back to Main</button>
         </Link>
        </section>
    )
}

export default ErrorPage;