import React from 'react';
import { NavLink } from 'react-router-dom';
import "../../styles/AuthStyles.css"

const AdminMenu = () => {
  return (
    <>
    <div className='card-list bg-dark'>
    <div className='text-center'>
    <h4>Admin Panel</h4>
    <div className="list-group">
        <NavLink to="/dashboard/admin/product-details" className="list-group-item list-group-item-action product">
         <h5>Product List</h5>
        </NavLink>
        <NavLink to="/dashboard/admin/order-details" className="list-group-item list-group-item-action order">
        <h5>Order Details</h5>
        </NavLink>

      </div>
    </div>
    </div>

    </>
  );
};

export default AdminMenu;
