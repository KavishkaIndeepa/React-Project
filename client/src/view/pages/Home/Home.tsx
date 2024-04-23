import React, {Component} from "react";
import '../../../App.css';
import {Link} from "react-router-dom";
import '../../../App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {Testimonials} from "./Testimonials";
// @ts-ignore
import pair from "../../../assets/pair-trainers.png";



export class Home extends Component {
    render() {

        return (

            <div className={"flex-row flex-wrap "}>
                <div className="flex flex-col justify-center items-center min-h-screen bg-cover bg-fixed relative"
                     style={{backgroundImage: 'url("/Sportshoe (2).jpg")'}}>

                    <div
                        className={"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"}>
                        <h1 className={"font-bold text-white text-4xl shadow-xl font-mono bg-gray-600 bg-opacity-40 md:rounded-lg p-6"}>
                            <span className={"text-white text-[64px]"} style={{textShadow: "2px 2px 0px #000"}}>A</span><span
                            className={"text-white font-bold"} style={{textShadow: "2px 2px 0px #000"}}>re you ready to Lead the way? </span>
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
                    <h1 className={"p-2 md:ml-8 md:mr-14 text-xl md:text-2xl"}>
                        <span className={"text-[48px]"}>"E</span>xplore
                        our curated collection of trendy and comfortable footwear at <span className={"text-Primary"}>Summer Shoes</span>.
                        From casual kicks
                        to elegant heels, find the perfect pair for every occasion. Discover the latest fashion trends
                        and step confidently into the season with our diverse range of shoes. Quality, comfort, and
                        style-your journey to fabulous footwear starts here."</h1>
                </div>

                <div className={"flex flex-row m-5"}>

                    <div className="flex-row w-4/12 h-80 bg-cover m-2 " style={{backgroundImage: 'url("/black-sports-shoe.avif")', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <h1 className="text-white text-center border-transparent border-2 border-solid transition duration-300 hover:border-white">Sale 50% off <br/><span className={"text-white text-center text-3xl font-semibold"}>SPORT SHOES</span></h1>
                    </div>

                    <div className="flex-row w-4/12 h-80 bg-cover m-2" style={{backgroundImage: 'url("/new-arrival.avif")', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <h1 className="text-white text-center border-transparent border-2 border-solid transition duration-300 hover:border-white">Sale 50% off <br/><span className={"text-white text-center text-3xl font-semibold"}>NEW ARRIVAL</span></h1>
                    </div>

                    <div className="flex-row w-4/12 h-80 bg-cover m-2" style={{backgroundImage: 'url("/new sneakers.jpg")', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <h1 className="text-white text-center border-transparent border-2 border-solid transition duration-300 hover:border-white">Sale 50% off <br/><span className={"text-white text-center text-3xl font-semibold"}>NEW SNEAKERS</span></h1>
                    </div>


                </div>

                <div className={"flex bg-cover h-auto bg-fixed bg-blend-color-burn"} style={{backgroundImage: 'url("/background.jpg")'}}>
                    <div className={"w-full flex p-6"}>
                        <div className={"flex w-6/12 m-2 justify-center border-b-4 border-r-2 border-white"}>
                            <img src={pair} alt="" className={"w-full h-auto "} style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', objectFit: 'cover' }}/>
                        </div>
                        <div className={"flex w-6/12 m-2"}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem cum doloribus eum hic ipsum maiores minus nemo nobis nostrum numquam obcaecati officia, optio, pariatur quia quidem soluta tempora temporibus!</div>
                    </div>
                </div>


                <div>
                    <Testimonials/>
                </div>


            </div>


        );
    }
}
