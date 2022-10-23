import './SideNav.css';
import React, { lazy, useState } from 'react';
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
import { MdSupervisorAccount, MdOutlineNotificationImportant, MdAccountCircle, MdMenu } from 'react-icons/md';
import { IoFastFoodOutline } from 'react-icons/io5';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { IoMdPersonAdd } from 'react-icons/io';
import { BiBorderRadius } from 'react-icons/bi';
import { IconButton } from '@chakra-ui/react';
const SideNav = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => {
        console.log('na Toggle');
        setIsOpen(!isOpen);
    };
    return (
        <div className='container'>
            <div
                className={`navigation ${isOpen ? '' : 'small'}`}>
                <div className='navTopSection'>
                    <div
                        className={`navText ${isOpen ? '' : 'small'}`}>
                        Welcome
                    </div>
                    <IconButton
                        background='none'
                        mt={5}
                        _hover={{ background: 'none' }}
                        icon={<MdMenu />}
                        onClick={toggle} />
                </div>
                <ul>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? 'active' : '')}
                            to='manage-account/customer'>
                            <div className={`navIcon ${isOpen ? ' ' : 'small'}`} >
                                <MdSupervisorAccount />
                            </div>
                            <div className={`navText ${isOpen ? '' : 'small'}`}>
                                MANAGE ACCOUNT
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? 'active' : '')}
                            to='menu-management'>
                            <div className={`navIcon ${isOpen ? ' ' : 'small'}`} >
                                <IoFastFoodOutline />
                            </div>
                            <div className={`navText ${isOpen ? '' : 'small'}`}>
                                MENU MANAGEMENT
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? 'active' : '')}
                            to='order-log'>
                            <div className={`navIcon ${isOpen ? ' ' : 'small'}`} >
                                <HiOutlineDocumentText />
                            </div>
                            <div className={`navText ${isOpen ? '' : 'small'}`}>
                                ORDER LOG
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? 'active' : '')}
                            to='register-employee'>
                            <div className={`navIcon ${isOpen ? ' ' : 'small'}`} >
                                <IoMdPersonAdd />
                            </div>
                            <div className={`navText ${isOpen ? '' : 'small'}`}>
                                REGISTER EMPLOYEE
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? 'active' : '')}
                            to='ordering-transaction/pending'>
                            <div className={`navIcon ${isOpen ? ' ' : 'small'}`} >
                                <BiBorderRadius />
                            </div>
                            <div className={`navText ${isOpen ? '' : 'small'}`}>
                                ORDERING TRANSACTION
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? 'active' : '')}
                            to='remarks'>
                            <div className={`navIcon ${isOpen ? ' ' : 'small'}`} >
                                <MdOutlineNotificationImportant />
                            </div>
                            <div className={`navText ${isOpen ? '' : 'small'}`}>
                                REMARKS
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? 'active' : '')}
                            to="my-account">
                            <div className={`navIcon ${isOpen ? ' ' : 'small'}`} >
                                <MdAccountCircle />
                            </div>
                            <div className={`navText ${isOpen ? '' : 'small'}`}>
                                MY ACCOUNT
                            </div>
                        </NavLink>
                    </li>
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
        </div >

    );
};
export default SideNav;