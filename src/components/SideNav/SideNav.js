import './SideNav.css';
import React from 'react';
import { Link, Routes, Route, Outlet } from 'react-router-dom';
import {
    ManageAccount, AdminAccount, CustomerAccount, EmployeeAccount, MenuManagement, OrderLog, RegisterEmployee,
    OrderingTransaction, Remarks, MyAccount
} from '../../pages/index.js';
import { Billout } from '../../pages/Ordering-Transaction/Billout.js';
import { OnProcess } from '../../pages/Ordering-Transaction/OnProcess.js';
import { Pending } from '../../pages/Ordering-Transaction/Pending.js';
import { MdSupervisorAccount, MdOutlineNotificationImportant, MdAccountCircle } from 'react-icons/md';
import { IoFastFoodOutline } from 'react-icons/io5';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { IoMdPersonAdd } from 'react-icons/io';
import { BiBorderRadius } from 'react-icons/bi';

export const SideNav = (props) => {
    return (
        <div className='container'>
            <div className='navigation'>
                <h2 className='welcome'>Welcome</h2>
                <ul>
                    <li><Link className='links' to='manage-account/customer'><MdSupervisorAccount />MANAGE ACCOUNT</Link></li>
                    <li><Link className='links' to='menu-management'><IoFastFoodOutline />MENU MANAGEMENT</Link></li>
                    <li><Link className='links' to='order-log'><HiOutlineDocumentText />ORDER LOG</Link></li>
                    <li><Link className='links' to='register-employee'><IoMdPersonAdd />REGISTER EMPLOYEE</Link></li>
                    <li><Link className='links' to='ordering-transaction/pending'><BiBorderRadius />ORDERING TRANSACTION</Link></li>
                    <li><Link className='links' to='remarks'><MdOutlineNotificationImportant />REMARKS</Link></li>
                    <li><Link className='links' to="my-account"><MdAccountCircle />MY ACCOUNT</Link></li>
                </ul>
            </div>
            <div className='main'>
                <Routes>
                    <Route exact path='manage-account' element={<ManageAccount />}>
                        {/* <Route exact path='admin' element={<AdminAccount/>}/> */}
                        <Route exact path='customer' element={<CustomerAccount />} />
                        <Route exact path='employee' element={<EmployeeAccount />} />
                    </Route>
                    <Route exact path='menu-management' element={<MenuManagement />} />
                    <Route exact path='order-log' element={<OrderLog />} />
                    <Route exact path='register-employee' element={<RegisterEmployee />} />
                    <Route exact path='ordering-transaction' element={<OrderingTransaction />}>
                        <Route exact path='pending' element={<Pending />} />
                        <Route exact path='onprocess' element={<OnProcess />} />
                        <Route exact path='billout' element={<Billout />} />
                    </Route>
                    <Route exact path='remarks' element={<Remarks />} />
                    <Route exact path='my-account' element={<MyAccount />} />
                </Routes>
            </div>
        </div>

    );
};