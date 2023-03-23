import './SideNav.css';
import React, { lazy, useState } from 'react';
import { Link, Routes, Route, Outlet, NavLink } from 'react-router-dom';
import {
    ManageAccount,
    CustomerAccount,
    EmployeeAccount,
    MenuManagement,
    OrderLog,
    RegisterEmployee,
    OrderingTransaction,
    Remarks,
    MyAccount,
    UserAccount
} from '../../pages/index.js';
import { MdSupervisorAccount, MdOutlineNotificationImportant, MdAccountCircle, MdMenu } from 'react-icons/md';
import { IoFastFoodOutline } from 'react-icons/io5';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { IoMdPersonAdd } from 'react-icons/io';
import { BiBorderRadius, BiLogOut } from 'react-icons/bi';
import { IconButton } from '@chakra-ui/react';
import LogOutDialog from '../LogOutDialog';
const SideNav = ({ logOut }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const handleOpenDialog = () => {
        setIsDialogOpen(true);
    };
    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    const [isOpen, setIsOpen] = useState(true);
    let cName = isOpen ? '' : 'small';

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className='container'>
                <div
                    className={`navigation ${cName}`}>
                    <div className='navTopSection'>
                        <div
                            className={`navText ${cName}`}>
                            Welcome
                        </div>
                        <IconButton
                            background='none'
                            _hover={{ background: 'none' }}
                            icon={<MdMenu />}
                            onClick={toggle} />
                    </div>
                    <ul>
                        <li>
                            <NavLink
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                to='manage-account/customer'>
                                <div className={`navIcon ${cName}`} >
                                    <MdSupervisorAccount />
                                </div>
                                <div className={`navText ${cName}`}>
                                    Manage Account
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                to='menu-management'>
                                <div className={`navIcon ${cName}`} >
                                    <IoFastFoodOutline />
                                </div>
                                <div className={`navText ${cName}`}>
                                    Menu Management
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                to='order-log'>
                                <div className={`navIcon ${cName}`} >
                                    <HiOutlineDocumentText />
                                </div>
                                <div className={`navText ${cName}`}>
                                    Order Log
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                to='register-employee'>
                                <div className={`navIcon ${cName}`} >
                                    <IoMdPersonAdd />
                                </div>
                                <div className={`navText ${cName}`}>
                                    Register Emploee
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                to='ordering-transaction'>
                                <div className={`navIcon ${cName}`} >
                                    <BiBorderRadius />
                                </div>
                                <div className={`navText ${cName}`}>
                                    Ordering Transaction
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                to='remarks'>
                                <div className={`navIcon ${cName}`} >
                                    <MdOutlineNotificationImportant />
                                </div>
                                <div className={`navText ${cName}`}>
                                    Remarks
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => (isActive ? 'active' : '')}
                                to="my-account">
                                <div className={`navIcon ${cName}`} >
                                    <MdAccountCircle />
                                </div>
                                <div className={`navText ${cName}`}>
                                    My Account
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <Link
                                // className={({ isActive }) => (isActive ? 'active' : '')}
                                // to="login"
                                onClick={() => {
                                    handleOpenDialog();
                                    // logOut();
                                }}>
                                <div className={`navIcon ${cName}`} >
                                    <BiLogOut />
                                </div>
                                <div className={`navText ${cName}`}>
                                    Log Out
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='main'>
                    <React.Suspense fallback='Loading'>
                        <Routes>
                            <Route exact path='manage-account' element={<ManageAccount />}>
                                <Route exact path='customer' element={<CustomerAccount />} />
                                <Route exact path='employee' element={<EmployeeAccount />} />
                            </Route>
                            <Route exact path='menu-management' element={<MenuManagement />} />
                            <Route exact path='order-log' element={<OrderLog />} />
                            <Route exact path='register-employee' element={<RegisterEmployee />} />
                            <Route exact path='ordering-transaction' element={<OrderingTransaction />} />
                            <Route exact path='remarks' element={<Remarks />} />
                            <Route exact path='my-account' element={<MyAccount />} />
                            <Route exact path='login' element={<UserAccount />} />
                        </Routes>
                    </React.Suspense>
                </div>
            </div >
            {isDialogOpen && <LogOutDialog isOpen={isDialogOpen} onClose={handleCloseDialog} logOut={logOut} />}

        </>

    );
};
export default SideNav;