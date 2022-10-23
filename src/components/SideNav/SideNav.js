import './SideNav.css';
import React, { lazy } from 'react';
import { Link, Routes, Route, Outlet, NavLink } from 'react-router-dom';
import {
    ManageAccount,
    AdminAccount,
    CustomerAccount,
    EmployeeAccount,
    MenuManagement,
    OrderLog,
    RegisterEmployee,
    OrderingTransaction,
    Remarks,
    MyAccount
} from '../../pages/index.js';
import { Billout } from '../../pages/Ordering-Transaction/Billout.js';
import { OnProcess } from '../../pages/Ordering-Transaction/OnProcess.js';
import { Pending } from '../../pages/Ordering-Transaction/Pending.js';
import { MdSupervisorAccount, MdOutlineNotificationImportant, MdAccountCircle } from 'react-icons/md';
import { IoFastFoodOutline } from 'react-icons/io5';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { IoMdPersonAdd } from 'react-icons/io';
import { BiBorderRadius } from 'react-icons/bi';

// const Remarks = React.lazy(() => import('../../pages/Remarks/Remarks'));
const SideNav = (props) => {
    return (
        <div className='container'>
            <div className='navigation'>
                <h2 className='welcome'>Welcome</h2>
                <ul>
                    <li><NavLink className={({ isActive }) => (isActive && 'active')} to='manage-account/customer'><MdSupervisorAccount />MANAGE ACCOUNT</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive && 'active')} to='menu-management'><IoFastFoodOutline />MENU MANAGEMENT</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive && 'active')} to='order-log'><HiOutlineDocumentText />ORDER LOG</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive && 'active')} to='register-employee'><IoMdPersonAdd />REGISTER EMPLOYEE</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive && 'active')} to='ordering-transaction/pending'><BiBorderRadius />ORDERING TRANSACTION</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive && 'active')} to='remarks'><MdOutlineNotificationImportant />REMARKS</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive && 'active')} to="my-account"><MdAccountCircle />MY ACCOUNT</NavLink></li>
                </ul>
            </div>
            <div className='main'>
                <React.Suspense fallback='Loading'>
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
                        <Route exact path='my-account' element={<MyAccount />}
                        />
                    </Routes>
                </React.Suspense>
            </div>
        </div>

    );
};
export default SideNav;