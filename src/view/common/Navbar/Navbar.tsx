import React, {Component} from "react";
import logo from '../../../assets/Shoes_Logo__1.png';
import {Link} from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <div className="p-4 bg-[#444544] flex justify-between">
                <div className="flex">
                    <h1 className="text-2xl text-Primary">Brocelle Shoes</h1>

                    <img className="h-10 w-10 ml-1" src={logo} alt=""/>
                </div>

                <ul className="list-none mt-2 flex">
                    <li className="mr-2 text-[18px] text-[#e6f0e6]">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mr-2 text-[18px] text-[#e6f0e6]">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="mr-2 text-[18px] text-[#e6f0e6]">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>

                <button className="text-[20px] text-[#e6f0e6] bg-green-400 pl-3 pr-3 mr-5
                                   hover:text-gray-600" onClick={this.onClickButton}>Sing In</button>


            </div>
        );
    }

    onClickButton = () =>{
        alert("Button Clicked")
    }
}