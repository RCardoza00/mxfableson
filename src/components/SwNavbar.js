import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

function SwNavbar() {

    return (
        <div className="container-sw">
            <header>
                <nav>
                    <ul className="p-4 d-flex justify-content-end ">
                        <li className="m-3"><Link className="text-white" to="">Home</Link></li>
                        <li className="m-3"><a className="text-white" href="#">Scenathons</a></li>
                        <li className="m-3"><Link className="text-white" to="contact">Contact</Link></li>
                        <li className="pl-3 m-3 ml-5"><a className="text-white" href="#">Login</a></li>
                        <li className="m-3"><a className="text-white" href="#">Sign in</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default SwNavbar;