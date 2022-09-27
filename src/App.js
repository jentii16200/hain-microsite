
import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { UserAccount, Home } from './pages/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <ChakraProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<UserAccount />} />
                    <Route path="/Home" element={<Home />} />
                </Routes>
            </Router>
        </ChakraProvider>
    );

}

export default App;
