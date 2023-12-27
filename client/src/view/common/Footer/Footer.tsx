import {Component} from "react";
// @ts-ignore
import logo from '../../../assets/Shoes_Logo__1.png';

export class Footer extends Component {
    render() {
        return (
            <div className="p-2 bg-[#444544] flex justify-center">

                <p className="text[10px] text-[#e6f0e6] pr-2 hover:text-green-400">Copyright @2023</p>
                <h1 className="text-1xl text-third hover:text-white">Kavishka Indeepa</h1>

                <img className="h-10 w-10 ml-1" src={logo} alt=""/>
            </div>
        );
    }
}