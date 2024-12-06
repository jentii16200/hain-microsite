import React from 'react';
import { Link, Routes, Route, Outlet } from 'react-router-dom';
import { ManageAccount, AdminAccount, CustomerAccount, EmployeeAccount, MenuManagement, OrderLog, RegisterEmployee,
    OrderingTransaction, Remarks, MyAccount } from '../pages/index.js';

export const SideNav = (props) => {
    return(
        <div className='container'>
            <div className='navigation'>
                <ul>
                    <h2 className='welcome'>Welcome</h2>
                    <li><Link className='links' to='manage-account/customer'>MANAGE ACCOUNT</Link></li>
                    <li><Link className='links' to='menu-management'>MENU MANAGEMENT</Link></li>
                    <li><Link className='links' to='order-log'>ORDER LOG</Link></li>
                    <li><Link className='links' to='register-employee'>REGISTER EMPLOYEE</Link></li>
                    <li><Link className='links' to='ordering-transaction'>ORDERING TRANSACTION</Link></li>
                    <li><Link className='links' to='remarks'>REMARKS</Link></li>
                    <li><Link className='links' to="my-account">MY ACCOUNT</Link></li>
                </ul>
            </div>
            <div className='main'>
                <Routes>
                    <Route exact path='manage-account' element={<ManageAccount />}>
                        {/* <Route exact path='admin' element={<AdminAccount/>}/> */}
                        <Route exact path='customer' element={<CustomerAccount/>}/>
                        <Route exact path='employee' element={<EmployeeAccount/>}/>
                    </Route>
                    <Route exact path='menu-management' element={<MenuManagement />} />
                    <Route exact path='order-log' element={<OrderLog />} />
                    <Route exact path='register-employee' element={<RegisterEmployee />} />
                    <Route exact path='ordering-transaction' element={<OrderingTransaction />} />
                    <Route exact path='remarks' element={<Remarks />} />
                    <Route exact path='my-account' element={<MyAccount />} />
                </Routes>
            </div>
        </div>

    );
};