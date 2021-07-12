import React from 'react';
// eslint-disable-next-line
import { Collapse } from 'bootstrap';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
            <a href="/" className="navbar-brand mr-auto"><img className="rounded-circle" src="assets/images/logo.jpg" alt="Brand" height="37" /></a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar-target">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-lg-flex justify-content-end" id="navbar-target">
                <ul className="navbar-nav">
                    <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="/" className="nav-link">About Us</a></li>
                    <li className="nav-item"><a href="/" className="nav-link">Contact Us</a></li>
                    <li className="nav-item"><a href="/" className="nav-link">Login</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
