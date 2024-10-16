 
import { CiSearch } from "react-icons/ci";
import Link from 'next/link'

import React from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { FaCalendarDay } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { FaProductHunt } from "react-icons/fa";
import { MdOutlineManageAccounts } from "react-icons/md";
import { IoAnalytics } from "react-icons/io5";

import { GoBell } from "react-icons/go";

export default function Home() {
  return (
    <div>

  <div className="form">
  <form className="w-[500px] relative ">
  <div className=" relative">
    <input type="search" placeholder="search product" className="w-full p-4  bg-gray-900"/>

    <button  className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-gray-900 ">
    <CiSearch />
     </button>
</div>
</form>

  </div>

  

<aside className="side_bar1">
    <div className="side_top" >
    <p className="ic1"><FaCalendarDay /></p>
        <span className="acm">Acme</span>
        <h2 className='bell'> <GoBell /></h2>
       
       
    </div>
  

    <ul>
        <li>
            <Link href="/" className='sidebar_link'>
            <span className="sidebar_icon">
                <h2 className='icon'><MdOutlineDashboard /></h2>
            
            </span>
            
          <span className='side_name'>  Dashboard</span>
            </Link>
        </li>

        <li>
            <Link href="/" className='sidebar_link'>
            <span className="sidebar_icon">
            <h2 className='icon'>< SlBasket/></h2>
           
            </span>
            
          <span className='side_name'>  Orders</span>
            </Link>
        </li>

        <li>
            <Link href="/" className='sidebar_link'>
            <span className="sidebar_icon">
            <h2 className='icon'><FaProductHunt /></h2>
            
            </span>
            
          <span className='side_name'>  Product</span>
            </Link>
        </li>

        <li>
            <Link href="/" className='sidebar_link'>
            <span className="sidebar_icon">
            <h2 className='icon'> <MdOutlineManageAccounts /></h2>
           
            </span>
            
          <span className='side_name'> Customers</span>
            </Link>
        </li>

        <li>
            <Link href="/" className='sidebar_link'>
            <span className="sidebar_icon">
            <h2 className='icon'><IoAnalytics /></h2>
            
            </span>
            
          <span className='side_name'> Analytics</span>
            </Link>
        </li>

    </ul>
   </aside>

   <h1 className="inv">Inventory</h1>

   <div className="product">
   <h1 className="product1">You have no  products</h1>
   <h3 className="product2">you can  start selling as soon as you add a product.</h3>
   <button className="btn">Add Product</button>

   </div>


    </div>

  
  );
}
