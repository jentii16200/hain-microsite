import { ManageAccountNav } from "../components/ManageAccountNav";
import { AdminAccount } from "./Manage-Account/AdminAccount";
import { CustomerAccount } from "./Manage-Account/CustomerAccount";
import { EmployeeAccount } from "./Manage-Account/EmployeeAccount";
import { Reports } from "./Order-Log/Reports";
import React, { lazy } from "react";
const UserAccount = React.lazy(() => import("./Login/User-Account"));
const ManageAccount = React.lazy(() =>
  import("./Manage-Account/ManageAccount")
);
const MenuManagement = React.lazy(() =>
  import("./Menu-Management/MenuManagement")
);
const MyAccount = React.lazy(() => import("./My-Account/MyAccount"));
const OrderLog = React.lazy(() => import("./Order-Log/OrderLog"));
const OrderingTransaction = React.lazy(() =>
  import("./Ordering-Transaction/OrderingTransaction")
);
const RegisterEmployee = React.lazy(() =>
  import("./Register-Employee/RegisterEmployee")
);
const Remarks = lazy(() => import("./Remarks/Remarks"));
const SideNav = lazy(() => import("../components/SideNav/SideNav"));

export {
  Reports,
  UserAccount,
  SideNav,
  ManageAccount,
  ManageAccountNav,
  AdminAccount,
  CustomerAccount,
  EmployeeAccount,
  MenuManagement,
  OrderLog,
  RegisterEmployee,
  OrderingTransaction,
  Remarks,
  MyAccount,
};
