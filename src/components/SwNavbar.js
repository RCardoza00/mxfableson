import React, {Fragment} from 'react'
import * as ReactBootStrap from "react-bootstrap";

function SwNavbar(){
    return(
        <Fragment>
            <div className="container">
            <header>
                    <nav>
                        <ul className="p-4 d-flex justify-content-end ">
                            <li className="m-3" ><a className="text-white" href="#">Home</a></li>
                            <li className="m-3"><a className="text-white" href="#">Scenathons</a></li>
                            <li className="m-3"><a className="text-white" href="#">Contact</a></li>
                            <li className="pl-3 m-3 ml-5"><a className="text-white" href="#">Login</a></li>
                            <li className="m-3"><a className="text-white" href="#">Sign in</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
        </Fragment>
    )
}

export default SwNavbar;