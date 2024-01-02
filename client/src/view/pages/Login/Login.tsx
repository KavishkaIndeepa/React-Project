import React, {Component} from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


export class Login extends Component {
    render() {
        return (
            <div className={"flex h-screen justify-center items-center bg-cover bg-center bg-no-repeat"}
                 style={{backgroundImage: 'url("/Shoe-Rack-Img.png")'}}>
                <div
                    className={"h-80 mt-4 mb-4 pl-9 mx-auto border-white border-[0.5] rounded-2xl bg-gray-600 bg-opacity-50"}>
                    <h2 className={"pt-2 pb-2 text-3xl underline decoration-2 text-white mb-9 "}>Log In</h2>
                    <form className={"h-auto m-5 p-2 justify-center mr-10"}>
                        <div className="pb-2 mb-3">
                            <label className="text-[10px] pr-2 font-bold text-white">E mail: </label>
                            <input className="float-right border-[1px] border-green-200" type={"email"}/>
                        </div>
                        <div className="pb-2 mt-3">
                            <label className="text-[10px] pr-2 font-bold text-white">Password: </label>
                            <input className="float-right border-[1px] border-green-200" type={"password"}/>
                        </div>
                        <div className={"mt-2"}>
                            <button className="mt-6 justify-center text-center w-full bg-green-400 text-[15px] p-[6px] rounded-3xl hover:text-white">Log In
                            </button>
                        </div>
                        <div className={"pt-3"}>
                            <Link className={"text-white flex items-center"} to="/">
                                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />

                            </Link>
                        </div>
                    </form>
                </div>
            </div>


        );
    }
}