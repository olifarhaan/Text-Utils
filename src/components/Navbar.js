import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={`${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.titleText}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.aboutText}</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Other Softwares
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="https://www.linkedin.com/feed/update/urn:li:activity:7080300284052160514/">Bank Management System</a></li>
                                <li><a className="dropdown-item" href="https://www.linkedin.com/feed/update/urn:li:activity:7080297578046570497/">Task Management System</a></li>
                                <li><a className="dropdown-item" href="https://www.linkedin.com/feed/update/urn:li:activity:7080299056064806912/">Employee Management System</a></li>
                                <li><a className="dropdown-item" href="https://www.linkedin.com/feed/update/urn:li:activity:7080644284474867713/">Internet Download Manager</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="mailto:olifarhaan@protonmail.com">Not Sure? Contact Us</a></li>
                            </ul>
                        </li>
                    </ul>

                    <div className={`form-check form-switch form-check-reverse" text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch Modes</label>
                    </div>

                    <form className="d-flex mx-2" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form>

                </div>
            </div>
        </nav>
    )
}
Navbar.propTypes = {
    titleText: PropTypes.string,
    aboutText: PropTypes.string
};