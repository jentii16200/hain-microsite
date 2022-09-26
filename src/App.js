
import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { UserAccount, Home, ManageAccount, AdminAccount, CustomerAccount, EmployeeAccount, MenuManagement, OrderLog, RegisterEmployee,
    OrderingTransaction, Remarks, MyAccount } from './pages/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <ChakraProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<UserAccount />} />
                </Routes>
                <Home />
                <div className='main'>
                    <Routes>
                        <Route path='manage-account' element={<ManageAccount />}>
                            <Route exact path='admin' element={<AdminAccount/>}/>
                            <Route exact path='customer' element={<CustomerAccount/>}/>
                            <Route exact path='employee' element={<EmployeeAccount/>}/>
                        </Route>
                        <Route path='menu-management' element={<MenuManagement />} />
                        <Route path='order-log' element={<OrderLog />} />
                        <Route path='register-employee' element={<RegisterEmployee />} />
                        <Route path='ordering-transaction' element={<OrderingTransaction />} />
                        <Route path='remarks' element={<Remarks />} />
                        <Route path='my-account' element={<MyAccount />} />
                    </Routes>
                </div>
            </Router>
        </ChakraProvider>
    );

}

export default App;
