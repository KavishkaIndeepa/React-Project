import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

export class Navbar extends Component {
    //@ts-ignore
    constructor(props) {
        super(props);
        this.state = {
            isScrolled: false,
            isMobileMenuOpen: false
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    }

    componentDidMount() {
        // @ts-ignore
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        // @ts-ignore
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        // @ts-ignore
        const currentScrollPos = window.pageYOffset;
        const isScrolled = currentScrollPos > 50;
        this.setState({
            isScrolled
        });
    }

    toggleMobileMenu() {
        this.setState(prevState => ({
            //@ts-ignore
            isMobileMenuOpen: !prevState.isMobileMenuOpen
        }));
    }

    render() {
        //@ts-ignore
        const { isScrolled, isMobileMenuOpen } = this.state;

        return (
            <div className={`p-8 flex justify-between items-center fixed w-full h-10 z-50 ${isScrolled ? 'navbar-scrolled top-0 shadow-md' : 'bg-white'}`}>
                <div className="flex items-center justify-start w-full md:w-4/12">
                    {/*<img src={logo} alt="logo" className="w-28 h-auto sm:w-24 md:w-32 lg:w-40 max-w-full" />*/}
                    <h1 className="text-2xl text-Primary">Summer Shoes</h1>
                </div>

                <div className="hidden md:flex items-center justify-center w-4/12">
                    <ul className="list-none mt-0 flex space-x-4">
                        <li className="text-[18px]">
                            <Link to="/" className="hover:text-gray-600">Home</Link>
                        </li>
                        <li className="text-[18px]">
                            <Link to="/about" className="hover:text-gray-600">About</Link>
                        </li>
                        <li className="text-[18px]">
                            <Link to="/item" className="hover:text-gray-600">Item</Link>
                        </li>
                        <li className="text-[18px]">
                            <Link to="/shopping-cart" className="hover:text-gray-600">Cart</Link>
                        </li>
                        <li className="text-[18px]">
                            <Link to="/contact" className="hover:text-gray-600">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="hidden md:flex items-center justify-end space-x-5 w-4/12">
                    <button className="text-[20px]">
                        <Link to="/login">Log In</Link>
                    </button>
                    <button className="text-[20px]">
                        <Link to="/signin">Sign In</Link>
                    </button>
                </div>

                <div className="md:hidden flex items-center justify-end w-4/12">
                    <button className="text-[20px]" onClick={this.toggleMobileMenu}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-16 right-0 bg-white text-black w-full">
                        <ul className="list-none mt-0 flex flex-col space-y-4 items-center">
                            <li className="text-[18px]">
                                <Link to="/" className="hover:text-gray-600">Home</Link>
                            </li>
                            <li className="text-[18px]">
                                <Link to="/about" className="hover:text-gray-600">About</Link>
                            </li>
                            <li className="text-[18px]">
                                <Link to="/item" className="hover:text-gray-600">Item</Link>
                            </li>
                            <li className="text-[18px]">
                                <Link to="/shopping-cart" className="hover:text-gray-600">Cart</Link>
                            </li>
                            <li className="text-[18px]">
                                <Link to="/contact" className="hover:text-gray-600">Contact</Link>
                            </li>
                            <li className="text-[18px]">
                                <Link to="/login" className="hover:text-gray-600">Log In</Link>
                            </li>
                            <li className="text-[18px]">
                                <Link to="/signin" className="hover:text-gray-600">Sign In</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}
