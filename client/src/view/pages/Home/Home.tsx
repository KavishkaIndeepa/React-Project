import React, { Component } from "react";
import '../../../App.css';
import { Link } from "react-router-dom";
import '../../../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Testimonials } from "./Testimonials";
// @ts-ignore
import pair from "../../../assets/pair-trainers.png";

export class Home extends Component {
    render() {
        return (
            <div className="flex flex-col">
                {/*hero image*/}
                <div className="flex flex-col justify-center items-center min-h-screen bg-cover bg-fixed relative"
                     style={{ backgroundImage: 'url("/Sportshoe (2).jpg")' }}>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-4">
                        <h1 className="font-bold text-white text-4xl md:text-4xl lg:text-4xl shadow-xl font-mono bg-gray-600 bg-opacity-40 rounded-lg p-6">
                            <span className="text-white text-[48px] md:text-[64px] lg:text-[96px]" style={{ textShadow: "2px 2px 0px #000" }}>A</span><span
                            className="text-white font-bold" style={{ textShadow: "2px 2px 0px #000" }}>re you ready to Lead the way? </span>
                        </h1>
                    </div>
                    <div className="absolute bottom-0 left-0 p-8">
                        <Link className="text-white flex items-center" to="/item">
                            <button className="p-2 bg-black text-white animate-bounce flex items-center">
                                Buy Now <FontAwesomeIcon icon={faShoppingCart} className="ml-2" />
                            </button>
                        </Link>
                    </div>
                </div>

              {/*  description*/}
              <div className={"p-6"}>
                  <div className="w-full p-4 md:pt-16 md:pb-16 md:px-8">
                      <h1 className="text-xl md:text-2xl lg:text-2xl leading-relaxed">
                          <span className="text-[32px] md:text-[48px] lg:text-[64px]">"E</span>xplore our curated collection of trendy and comfortable footwear at <span className="text-Primary">Summer Shoes</span>. From casual kicks to elegant heels, find the perfect pair for every occasion. Discover the latest fashion trends and step confidently into the season with our diverse range of shoes. Quality, comfort, and style - your journey to fabulous footwear starts here."
                      </h1>
                  </div>

                  {/*dis-images*/}
                  <div className="flex flex-wrap m-5 justify-center">
                      <div className="w-full md:w-4/12 h-80 bg-cover m-2 flex justify-center items-center" style={{ backgroundImage: 'url("/black-sports-shoe.avif")' }}>
                          <h1 className="text-white text-center border-transparent border-2 border-solid transition duration-300 hover:border-white p-4">Sale 50% off <br /><span className="text-white text-3xl font-semibold">SPORT SHOES</span></h1>
                      </div>

                      <div className="w-full md:w-4/12 h-80 bg-cover m-2 flex justify-center items-center" style={{ backgroundImage: 'url("/new-arrival.avif")' }}>
                          <h1 className="text-white text-center border-transparent border-2 border-solid transition duration-300 hover:border-white p-4">Sale 50% off <br /><span className="text-white text-3xl font-semibold">NEW ARRIVAL</span></h1>
                      </div>

                      <div className="w-full md:w-4/12 h-80 bg-cover m-2 flex justify-center items-center" style={{ backgroundImage: 'url("/new sneakers.jpg")' }}>
                          <h1 className="text-white text-center border-transparent border-2 border-solid transition duration-300 hover:border-white p-4">Sale 50% off <br /><span className="text-white text-3xl font-semibold">NEW SNEAKERS</span></h1>
                      </div>
                  </div>

                  {/*discount*/}
                  <div className="flex bg-cover bg-fixed bg-blend-color-burn py-16" style={{ backgroundImage: 'url("/background.jpg")' }}>
                      <div className="w-full flex flex-wrap p-6 md:flex-nowrap border-white">
                          <div className="w-full md:w-6/12 flex justify-center md:justify-start items-center p-2 border-r-2 border-b-2 border-white">
                              <img src={pair} alt="" className="w-full h-auto rounded-lg shadow-lg" />
                          </div>
                          <div className="w-full md:w-6/12 flex flex-col justify-center text-center md:text-left p-6">
                              <h1 className="text-red-600 text-lg md:text-2xl">Saving 50%</h1>
                              <h1 className="text-white text-lg md:text-2xl">All Online Store</h1>
                              <h1 className="text-white text-lg md:text-2xl">OFFER AVAILABLE ON ALL SHOES & PRODUCTS</h1>
                          </div>
                      </div>
                  </div>

                  {/*Testimonials*/}
                  <div>
                      <Testimonials />
                  </div>
              </div>
            </div>
        );
    }
}
