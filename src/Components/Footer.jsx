import React from 'react'
import { Routes, Route, Link } from "react-router-dom";


export default function Footer() {
  return (
<>
<div className="bg-green-50">
  <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
    <div className="p-5 sm:w-2/12 border-r">
      <div className="text-xs uppercase text-indigo-800 font-bold">Menu</div>
      <ul>
      <li className="my-2">
            
            <Link to="/" className="nav__link" > Home </Link>
    
            </li>
            <li className="my-2">
            <Link to="/Health" className="nav__link" > Health </Link>
            </li>
            <li className="my-2">
            <Link to="/Religion" className="nav__link" > Religion</Link>
            </li>
            <li className="my-2">
            <Link to="/Technology" className="nav__link" > Technology </Link>
            </li>
            <li className="my-2">
            <Link to="/Business" className="nav__link" > Business </Link>
            </li>
            <li className="my-2">
            <Link to="/Politics" className="nav__link" > Politics </Link>
            </li>
            <li className="my-2">
            <Link to="/Features" className="nav__link" > Features</Link>
            </li>
            <li className="my-2">
            <Link to="/Interviews" className="nav__link" > Interviews </Link>
            </li>
            
      </ul>
    </div>
    <div className="p-5 sm:w-7/12 border-r text-center">
      <h3 className="font-bold text-xl text-indigo-600 mb-4">About us</h3>
      <p className="text-gray-500 text-sm mb-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
    </div>
    <div className="p-5 sm:w-3/12">
      <div className="text-sm uppercase text-indigo-600 font-bold">Contact Us</div>
      <ul>
        <li className="my-2">
          <a className="hover:text-indigo-600" href="/#">XXX XXXX,KATHMANDU,NEPAL</a>
        </li>
        <li className="my-2">
          <a className="hover:text-indigo-600" href="/#">contact@company.com</a>
        </li>
      </ul>
    </div>
  </div>
  <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
 
    <div className="my-5">© Copyright 2022. All Rights Reserved.</div>
  </div>
</div>




</>
  )
}
