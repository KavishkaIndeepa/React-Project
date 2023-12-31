import React, {Component} from "react";
// @ts-ignore
import logo from '../../../assets/Shoes_Logo__1.png';
import {Link} from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <div className="p-4 bg-[#444544] flex flex-wrap justify-between">
                <div className="flex">
                    <h1 className="text-2xl text-Primary">Summer Shoes</h1>

                    <img className="h-10 w-10 ml-1" src={logo} alt=""/>
                </div>

                <ul className="list-none mt-2 flex">
                    <li className="mr-2 text-[18px] text-[#e6f0e6] hover:text-green-500">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mr-2 text-[18px] text-[#e6f0e6] hover:text-green-500">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="mr-2 text-[18px] text-[#e6f0e6] hover:text-green-500">
                        <Link to="/item">Items</Link>
                    </li>
                    <li className="mr-2 text-[18px] text-[#e6f0e6] hover:text-green-600">
                        <Link to="/shopping-cart">My-Cart</Link>
                    </li>
                    <li className="mr-2 text-[18px] text-[#e6f0e6] hover:text-green-500">
                        <Link to="/contact">Contact</Link>
                    </li>

                </ul>

                <div className="flex flex-col md:flex-row space-y-2.5 md:space-y-0 md:space-x-2.5">

                    <button className="text-[20px] text-[#e6f0e6] bg-green-400 pl-3 pr-3
                                   hover:text-gray-600 rounded-2xl"><Link to="/login">Log In</Link></button>

                    <button className="text-[20px] text-[#e6f0e6] bg-green-400 pl-3 pr-3 mr-5
                                   hover:text-gray-600 rounded-2xl"><Link to="/signin">Sing In</Link></button>

                </div>




            </div>
        );
    }


}