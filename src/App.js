import { UserAccount, SideNav } from './pages/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/assets/index.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<UserAccount />} />
                <Route exact path='h/*' element={<SideNav />} />
            </Routes>
        </Router>

    );

}

export default App;
