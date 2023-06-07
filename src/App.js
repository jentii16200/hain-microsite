import React, { useState } from 'react';
import { UserAccount, SideNav } from './pages/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/assets/index.css';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const logIn = () => {
        setIsLoggedIn(true);
    };
    const logOut = () => {
        setIsLoggedIn(false);
    };
    return (
        <>
        <Router>
            <Routes>
                <Route exact path='/' element={<UserAccount logIn={logIn} />} />
                <Route exact path='h/*' element={
                    <ProtectedRoute isLoggedIn={isLoggedIn} >
                        <React.Suspense fallback='Loading'>
                            <SideNav logOut={logOut} />
                        </React.Suspense>
                    </ProtectedRoute>
                } />
            </Routes>
        </Router>
        </>

    );

}

export default App;
