import React, {Component} from "react";
import '../../../App.css';
import {Link} from "react-router-dom";
import '../../../App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faShoppingCart} from "@fortawesome/free-solid-svg-icons";

export class Home extends Component {
    render() {

        return (

            <div className="flex flex-wrap min-h-screen bg-cover"
                 style={{backgroundImage: 'url("/Shoe-Rack-Img.png")'}}>


                <div className={"md:ml-16 md:mt-12"}>
                    <h1 className={"p-2 mt-6 md:mt-12 ml-2 font-bold text-Primary text-4xl shadow-xl font-mono bg-gray-600 bg-opacity-40 md:rounded-lg"}>
                        <span className={"text-Primary text-[64px]"}>A</span>re you ready to <br/> <span
                        className={"text-white font-bold ml-20"}>
                        Lead the way? </span></h1>
                </div>

                <div className={"w-full md:pl-4 md:pr-4"}>
                    <h1 className={"p-2 md:ml-8 md:mr-14 text-xl md:text-2xl text-white bg-black bg-opacity-40 md:rounded-lg"}>
                        <span className={"text-[48px]"}>E</span>xplore
                        our curated collection of trendy and comfortable footwear at <span className={"text-lime-500"}>Summer Shoes</span>.
                        From casual kicks
                        to elegant heels, find the perfect pair for every occasion. Discover the latest fashion trends
                        and step confidently into the season with our diverse range of shoes. Quality, comfort, and
                        style—your journey to fabulous footwear starts here.</h1>
                </div>

                <div className={"pt-3"}>
                    <Link className={"text-white flex items-center"} to="/item">
                        <button className={"w-full ml-16 p-2 bg-black text-white animate-bounce"}>Buy Now
                            <FontAwesomeIcon icon={faShoppingCart} className="ml-2"/></button>
                    </Link>
                </div>


            </div>
        );
    }
}