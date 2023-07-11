import { faChartSimple, faHouse, faMap, faTable } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <Link class="navbar-brand" to="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/6/6a/20230204021246%21Intel_logo_%282020%2C_dark_blue%29.svg/120px-Intel_logo_%282020%2C_dark_blue%29.svg.png"
                        alt="Intel Logo"
                        loading="lazy"
                    />
                </Link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">
                                <FontAwesomeIcon icon={faMap} />
                                {' '}
                                Maps
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/charts_device">
                                <FontAwesomeIcon icon={faChartSimple} />
                                {' '}
                                Charts
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/tables_device">
                                <FontAwesomeIcon icon={faTable} />
                                {' '}
                                Tables
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav