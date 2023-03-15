import React from 'react';
import { Link } from "react-router-dom";
import log from '../assate/images/logo.svg'
import '../assate/styles/style.css'
const Layout = ({ children }) => {
    return (
        <div>
            <nav class="max-w-[90rem] mx-auto py-4 fixed top-0 w-full left-1/2 -translate-x-1/2 px-4 md:px-0">
                <Link to="/">
                    <img src={log} alt="logo" />
                </Link>

            </nav>

            <div>
                {children}
            </div>

        </div>
    );
};

export default Layout;