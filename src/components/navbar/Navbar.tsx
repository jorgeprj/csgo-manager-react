
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'

import '../../styles/Navbar.css';
import { Link, useLocation } from 'react-router-dom';

import { links } from '../sidebar/Sidebar.tsx';
import { useState } from 'react';

const getPageName = (path:string) => {
    return path.substring(1).charAt(0).toUpperCase() + path.substring(2);
  };


const Navbar: React.FC = () => {
    const location = useLocation();
    const pageName = getPageName(location.pathname);

    function getNextPage(): string {
        const { pathname } = useLocation();
        const index = links.findIndex(link => link.path === pathname);
        if (index === links.length - 1) {
            return '/home';
        }
        return links[index + 1].path;
    }

    function getPrevPage(): string {
        const { pathname } = useLocation();
        const index = links.findIndex(link => link.path === pathname);
        if (index === 0) {
            return links[links.length - 1].path;
        }
        return links[index - 1].path;
    }

    return (
        <div>
            <nav className="navbar">
                <header className='navbar-header'>
                    <div className='selected-team'>
                        <img src="./src/assets/teams/2.png" alt="" />
                    </div>
                    <div>
                        <Link to={getPrevPage()}>
                            <span className='navbar-nav-button'><FaChevronUp/></span>
                        </Link>
                        <Link to={getNextPage()}>
                            <span className='navbar-nav-button'><FaChevronDown /></span>
                        </Link>
                    </div>
                    <div>
                        <h2>{pageName}</h2>
                        <p>Upcoming fixture: Fluxo - IEM Rio</p>
                    </div>
                </header>
                <nav className='nav-links'>
                    <ul>
                        <li className='active'>Overview</li>
                        <li>Players</li>
                        <li>Matches</li>
                    </ul>
                </nav>
            </nav>
        </div>
    )
}

export default Navbar