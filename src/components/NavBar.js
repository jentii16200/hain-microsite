import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = (props) => {
    return(
        <div className='container'>
            <div className='navigation'>
                <ul>
                    <h2 className='welcome'>Welcome</h2>
                    <li><Link className='links' to='manage-account'>MANAGE ACCOUNT</Link></li>
                    <li><Link className='links' to='menu-management'>MENU MANAGEMENT</Link></li>
                    <li><Link className='links' to='order-log'>ORDER LOG</Link></li>
                    <li><Link className='links' to='register-employee'>REGISTER EMPLOYEE</Link></li>
                    <li><Link className='links' to='ordering-transaction'>ORDERING TRANSACTION</Link></li>
                    <li><Link className='links' to='remarks'>REMARKS</Link></li>
                    <li><Link className='links' to='my-account'>MY ACCOUNT</Link></li>
                </ul>
            </div>
        </div>

    );
};