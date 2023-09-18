import { Routes, Route, Navigate } from 'react-router-dom'


import Home from '../pages/Home';
import Scouting from '../pages/Scouting';
import Profile from '../pages/Profile';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/scouting" element={<Scouting />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    );
}