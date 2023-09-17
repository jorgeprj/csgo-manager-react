import '../../styles/Sidebar.css';

import { useState } from 'react';

import { Link } from 'react-router-dom'

import { FaChevronLeft, FaChevronRight, FaHouse, FaEnvelope, FaFilePen, FaMagnifyingGlass ,FaLandmark, FaChartLine, FaTrophy, FaUserTie, FaCalendarDays } from 'react-icons/fa6' 

const Sidebar: React.FC = () => {
    const [activeIcon, setActiveIcon] = useState<string>('FaHouse');

    const links = [
        { path: '/home', icon: FaHouse },
        { path: '/inbox', icon: FaEnvelope },
        { path: '/tactics', icon: FaFilePen },
        { path: '/scouting', icon: FaMagnifyingGlass },
        { path: '/stats', icon: FaChartLine },
        { path: '/finances', icon: FaLandmark },
        { path: '/achievements', icon: FaTrophy },
        { path: '/calendar', icon: FaCalendarDays },
        { path: '/profile', icon: FaUserTie },
    ];

    const handleIconClick = (iconName: string) => {
        setActiveIcon(iconName); 
    };

    return (
        <div>
            <nav className='sidebar'>
                <div className='menu'>
                    <div className='menu-header'>
                        <button><FaChevronLeft/></button>
                        <button ><FaChevronRight/></button>
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