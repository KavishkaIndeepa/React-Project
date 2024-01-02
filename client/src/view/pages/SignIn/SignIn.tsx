import React, {Component} from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export class SignIn extends Component {
    render() {
        return (
            <div className={"flex h-screen justify-center items-center bg-cover bg-center bg-no-repeat"}
                 style={{backgroundImage: 'url("/Shoe-Rack-Img.png")'}}>
                <div className={"h-80 mt-4 mb-4 pl-9 mx-auto border-white border-[0.5] rounded-2xl bg-gray-600 bg-opacity-70"}>
                    <h2 className={"pt-2 pb-2 text-3xl underline decoration-2 text-white mb-9 "}>Sign In</h2>
                    <form className={"h-auto p-2 justify-center mr-10 "}>

                        <div className="pb-2">
                            <label className="text-[10px] pr-2 font-bold text-white">Name: </label>
                            <input className="float-right border-[1px] border-green-200" type={""}/>
                        </div>

                        <div className="pb-2">
                            <label className="text-[10px] pr-2 font-bold text-white">E-Mail: </label>
                            <input className="float-right border-[1px] border-green-200" type={"email"}/>
                        </div>

                        <div className="pb-2">
                            <label className="text-[10px] pr-2 font-bold text-white">Password: </label>
                            <input className="float-right border-[1px] border-green-200" type={"password"}/>
                        </div>

                        <div className={"mt-2"}>
                            <button className="mt-2 w-full bg-green-400 text-[15px] p-[6px] hover:text-white">Sign In</button>
                        </div>

                        <div className={"pt-3"}>
                            <p className={"text-white"}>Already a Member? <Link className={"font-bold"} to="/login">Log In</Link></p>
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