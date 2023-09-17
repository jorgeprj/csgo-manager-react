import { useState } from 'react';

import { Link, useLocation } from 'react-router-dom'

import { FaChevronLeft, FaChevronRight, FaHouse, FaMagnifyingGlass, FaUserTie } from 'react-icons/fa6' 

import '../../styles/Sidebar.css';

const Sidebar: React.FC = () => {
    const links = [
        { path: '/home', icon: FaHouse },
        { path: '/scouting', icon: FaMagnifyingGlass },
        { path: '/profile', icon: FaUserTie },
        /*
        { path: '/inbox', icon: FaEnvelope },
        { path: '/tactics', icon: FaFilePen },
        { path: '/stats', icon: FaChartLine },
        { path: '/achievements', icon: FaTrophy },
        { path: '/finances', icon: FaLandmark },
        { path: '/calendar', icon: FaCalendarDays },
        */
    ];
    const [activeIcon, setActiveIcon] = useState<string>('FaHouse');

    const handleIconClick = (iconName: string) => {
        setActiveIcon(iconName); 
    };

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
            <nav className='sidebar'>
                <div className='menu'>
                    <div className='menu-header'>
                        <Link to={getPrevPage()}>
                            <button><FaChevronLeft/></button>
                        </Link>
                        <Link to={getNextPage()}>
                            <button onClick={() => handleIconClick('FaMagnifyingGlass')}><FaChevronRight/></button>
                        </Link>
                    </div>
                    <ul className='menu-links'>
                        {links.map((link, index) => (
                            <Link to={link.path} key={index}>
                                <li key={index} onClick={() => handleIconClick(link.icon)} className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}>
                                    <link.icon />
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar