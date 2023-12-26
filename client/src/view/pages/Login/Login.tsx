import {Component} from "react";


export class Login extends Component {
    render() {
        return (
            //
            <div className={"flex h-screen justify-center items-center"}>
                <div className={"h-80  mt-4 mb-4 pl-9 mx-auto border-white border-[0.5] rounded-2xl bg-gray-600 transition-opacity"}>
                    <h2 className={"pt-2 pb-2 text-3xl underline decoration-2 text-white mb-9 "}>Sing In</h2>
                    <form className={"h-auto p-2 justify-center mr-10"}>

                        <div className="pb-2">
                            <label className="text-[10px] pr-2 font-bold text-white">E mail: </label>
                            <input className="float-right border-[1px] border-green-200" type={"email"}/>
                        </div>

                        <div className="pb-2">
                            <label className="text-[10px] pr-2 font-bold text-white">Password: </label>
                            <input className="float-right border-[1px] border-green-200" type={"password"}/>
                        </div>

                        <div className={"mt-2"}>
                            <button className="mt-2 w-full bg-green-400 text-[15px] p-[6px] hover:text-white">Sing In</button>
                        </div>

                    </form>

                </div>

            </div>
        );
    }
}