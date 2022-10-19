
import { SideNav } from '../components/SideNav/SideNav';
import { ManageAccountNav } from '../components/ManageAccountNav';
import { AdminAccount } from './Manage-Account/AdminAccount';
import { CustomerAccount } from './Manage-Account/CustomerAccount';
import { EmployeeAccount } from './Manage-Account/EmployeeAccount';

import { MenuManagement } from './Menu-Management/MenuManagement';
import { OrderLog } from './Order-Log/OrderLog';
import { RegisterEmployee } from './Register-Employee/RegisterEmployee';
import { OrderingTransaction } from './Ordering-Transaction/OrderingTransaction';
import { Remarks } from './Remarks/Remarks';
import { MyAccount } from './My-Account/MyAccount';
import { ManageAccount } from './Manage-Account/ManageAccount';
import { UserAccount } from './Login/User-Account';

// import React, { lazy } from 'react';
// const UserAccount = React.lazy(() => import('./Login/User-Account'));
// const ManageAccount = React.lazy(() => import('./Manage-Account/ManageAccount'));
// const MenuManagement = React.lazy(() => import('./Menu-Management/MenuManagement'));
// const MyAccount = React.lazy(() => import('./My-Account/MyAccount'));
// const OrderLog = React.lazy(() => import('./Order-Log/OrderLog'));
// const OrderingTransaction = React.lazy(() => import('./Ordering-Transaction/OrderingTransaction'));
// const RegisterEmployee = React.lazy(() => import('./Register-Employee/RegisterEmployee'));
// const Remarks = lazy(() => import('./Remarks/Remarks'));

export {
    UserAccount, SideNav, ManageAccount, ManageAccountNav, AdminAccount, CustomerAccount, EmployeeAccount,
    MenuManagement, OrderLog, RegisterEmployee, OrderingTransaction, Remarks, MyAccount
};
