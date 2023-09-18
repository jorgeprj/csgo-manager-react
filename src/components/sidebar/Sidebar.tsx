import { useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom'

import { FaChevronLeft, FaChevronRight, FaHouse, FaMagnifyingGlass, FaUserTie } from 'react-icons/fa6' 

import '../../styles/Sidebar.css';

export const links = [
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


const Sidebar: React.FC = () => {
    const location = useLocation();
    const [activeIcon, setActiveIcon] = useState<string>('FaHouse');

    useEffect(() => {
        const matchingLink = links.find(link => link.path === location.pathname);
        setActiveIcon(matchingLink?.icon);
      }, [location]);

    return (
        <div>
            <nav className='sidebar'>
                <div className='menu'>
                    <div className='menu-header'>
                        <button><FaChevronLeft/></button>
                        <button><FaChevronRight/></button>
                    </div>
                    <ul className='menu-links'>
                        {links.map((link, index) => (
                            <Link to={link.path} key={index}>
                                <li key={index} className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}>
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