import React, {Component} from "react";
// @ts-ignore
import about from "../../../assets/Sportshoe (1).jpg";
// @ts-ignore
import benefit from "../../../assets/shiny-black-leatheri.jpg"

export class About extends Component {

    //@ts-ignore
    constructor(props) {
        super(props);
        this.state = {
            openSection: null,
        };
    }
//@ts-ignore
    toggleVisibility = (section) => {
        this.setState((prevState) => ({
            //@ts-ignore
            openSection: prevState.openSection === section ? null : section,
        }));
    };
    render() {

        //@ts-ignore
        const {openSection } = this.state;

        return (
            <div>
                <div
                    className="flex flex-col justify-center items-center min-h-screen bg-cover bg-fixed relative"
                    style={{backgroundImage: 'url("/about.jpg")'}}
                >
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <h1
                            className="font-bold text-white text-4xl sm:text-5xl md:text-6xl shadow-xl font-mono"
                            style={{textShadow: "2px 2px 0px #000"}}
                        >
                            About Us
                        </h1>
                    </div>
                </div>

                <div className="p-4 sm:p-6 md:p-8 lg:p-10">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex justify-center items-center mt-10 md:mt-20 ml-5 mb-5 mr-5">
                            <p className=" text-sm sm:text-base md:text-lg lg:text-xl">
                                At Brocelle Shoes, we believe every step should be stylish and comfortable. Our passion
                                drives us to offer a diverse collection that elevates your fashion while perfectly
                                fitting your lifestyle. Discover the ideal pair for any occasion in our curated range,
                                from casual kicks to elegant heels, reflecting the latest trends and exceptional
                                craftsmanship.
                            </p>
                        </div>

                        <div className="mt-10 md:mt-20 ml-5 mb-5 mr-5 relative">
                            <div className="overflow-hidden rounded-md">
                                <img
                                    src={about}
                                    alt="About us"
                                    className="w-full h-auto transition-transform duration-300 transform hover:scale-105"
                                    style={{
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                </div>

                {/*benefits*/}

                <div className="p-6 md:p-12">
                    <div className="text-center">
                        <div className="bg-blue-500 text-white text-xl font-bold py-2 px-4 rounded-full inline-block mb-4">
                            Benefits
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Summer Shoes</h2>
                        {/*<p className="text-gray-700 max-w-2xl mx-auto mb-6">*/}
                        {/*    Pet care is renowned pet care service and solution for the lifetime. We love pets and believe pets make us better people.*/}
                        {/*</p>*/}
                    </div>

                    <div className="md:flex md:space-x-4">
                        <div className="md:w-6/12 flex justify-center p-8">
                            <img src={benefit} alt="Pets" className="max-w-full h-auto transition-transform duration-300 transform hover:scale-105"
                                 style={{
                                     borderRadius: '8px',
                                     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                     objectFit: 'cover'
                                 }} />
                        </div>

                        <div className="md:w-6/12 mt-8 md:mt-0 flex flex-col justify-center p-8">
                            {/* 1 */}
                            <div className="flex items-center">
                                <button onClick={() => this.toggleVisibility('findDoctors')}>
                                    <i className={`bi ${openSection === 'findDoctors' ? 'bi-dash-circle-fill' : 'bi-plus-circle-fill'} text-blue-500 text-xl mr-2`}></i>
                                </button>
                                <span className="font-medium">Buy Easily</span>
                            </div>
                            {openSection === 'findDoctors' && (
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            )}
                            <div className="h-0.5 w-auto bg-blue-300 mt-2 mx-auto md:mx-0"></div>

                            {/* 2 */}
                            <div className="flex items-center mt-4">
                                <button onClick={() => this.toggleVisibility('bookingRegistration')}>
                                    <i className={`bi ${openSection === 'bookingRegistration' ? 'bi-dash-circle-fill' : 'bi-plus-circle-fill'} text-blue-500 text-xl mr-2`}></i>
                                </button>
                                <span className="font-medium">Brand New Shoes</span>
                            </div>
                            {openSection === 'bookingRegistration' && (
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            )}
                            <div className="h-0.5 w-auto bg-blue-300 mt-2 mx-auto md:mx-0"></div>

                            {/* 3 */}
                            <div className="flex items-center mt-4">
                                <button onClick={() => this.toggleVisibility('accessWebsites')}>
                                    <i className={`bi ${openSection === 'accessWebsites' ? 'bi-dash-circle-fill' : 'bi-plus-circle-fill'} text-blue-500 text-xl mr-2`}></i>
                                </button>
                                <span className="font-medium">Reasonable Prices</span>
                            </div>
                            {openSection === 'accessWebsites' && (
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            )}
                            <div className="h-0.5 w-auto bg-blue-300 mt-2 mx-auto md:mx-0"></div>

                            {/* 4 */}
                            <div className="flex items-center mt-4">
                                <button onClick={() => this.toggleVisibility('additionalServices')}>
                                    <i className={`bi ${openSection === 'additionalServices' ? 'bi-dash-circle-fill' : 'bi-plus-circle-fill'} text-blue-500 text-xl mr-2`}></i>
                                </button>
                                <span className="font-medium">Find Their Additional Services</span>
                            </div>
                            {openSection === 'additionalServices' && (
                                <p className="text-gray-600">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            )}
                            <div className="h-0.5 w-auto bg-blue-300 mt-2 mx-auto md:mx-0"></div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
