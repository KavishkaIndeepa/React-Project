import React, {Component} from "react";
import '../../../App.css';
import {Link} from "react-router-dom";
import '../../../App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {Testimonials} from "./Testimonials";


export class Home extends Component {
    render() {

        return (

            <div className={"flex-row flex-wrap "}>
                <div className="flex flex-col justify-center items-center min-h-screen bg-cover bg-fixed relative"
                     style={{backgroundImage: 'url("/Sportshoe (2).jpg")'}}>

                    <div className={"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"}>
                        <h1 className={"font-bold text-white text-4xl shadow-xl font-mono bg-gray-600 bg-opacity-40 md:rounded-lg p-6"}>
                            <span className={"text-white text-[64px]"} style={{ textShadow: "2px 2px 0px #000" }}>A</span><span
                            className={"text-white font-bold"} style={{ textShadow: "2px 2px 0px #000" }}>re you ready to Lead the way? </span>
                        </h1>
                    </div>


                    <div className={"absolute bottom-0 left-0 pb-8 pl-8"}>
                        <Link className={"text-white flex items-center"} to="/item">
                            <button className={"p-2 bg-black text-white animate-bounce"}>Buy Now <FontAwesomeIcon
                                icon={faShoppingCart} className="ml-2"/></button>
                        </Link>
                    </div>

                </div>


                <div className={"w-full md:pt-16 md:pb-16 md:pl-4 md:pr-4"}>
                    <h1 className={"p-2 md:ml-8 md:mr-14 text-xl md:text-2xl hover:font-semibold"}>
                        <span className={"text-[48px]"}>"E</span>xplore
                        our curated collection of trendy and comfortable footwear at <span className={"text-Primary"}>Summer Shoes</span>.
                        From casual kicks
                        to elegant heels, find the perfect pair for every occasion. Discover the latest fashion trends
                        and step confidently into the season with our diverse range of shoes. Quality, comfort, and
                        style-your journey to fabulous footwear starts here."</h1>
                </div>

                <div>
                    <Testimonials />
                </div>



            </div>


        );
    }
}
