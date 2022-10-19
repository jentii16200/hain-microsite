import React from 'react';
import { UserAccount, SideNav } from './pages/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/assets/index.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<UserAccount />} />
                <Route exact path='h/*' element={
                    <React.Suspense fallback='Loading'>
                        <SideNav />
                    </React.Suspense>} />
            </Routes>
        </Router>

    );

}

export default App;
