import {Component} from "react";

export class Contact extends Component {
    render() {
        return (
            <>
                <div className="flex">
                    <div className="h-auto pt-5 pb-5 pl-10 mx-auto">

                        <div className="p-2 ">
                            <h2 className="text-3xl text-green-400 text-center underline decoration-2">Contact Us</h2>
                            <p className="pb-3 text-[18px] mt-4">Got a technical Support</p>

                            <form className="h-auto p-2 justify-center">

                                <div className="pb-2">
                                    <label className="text-[18px] pr-2 ">Your Email: </label>
                                    <input className="float-right border-[1px] border-green-200" type="email"/>
                                </div>

                                <div className="pb-2">
                                    <label className="text-[18px] pr-2 ">Your Subject: </label>
                                    <input className="float-right border-[1px] border-green-200" type="text"/>
                                </div>

                                <div className="pb-2">
                                    <label className="text-[18px] pr-2 ">Your Massage: </label>
                                    <textarea className="float-right border-[1px] border-green-200"/>
                                </div>

                                <div className=" mt-2">
                                    <button type="button" className={"m-5 p-[10px] bg-green-400 text-[12px] hover:text-white"}>Submit</button>
                                </div>

                            </form>

                        </div>

                    </div>
                </div>

            </>
        );
    }
}