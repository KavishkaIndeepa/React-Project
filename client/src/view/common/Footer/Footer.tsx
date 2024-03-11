import {Component} from "react";


export class Footer extends Component {
    render() {
        return (
            <div className="flex-row flex-wrap p-4 bg-[#444544] justify-center mt-6">

                <div className={"flex justify-center text-cyan-50"}>
                    <p className="text[10px] pr-2 hover:font-bold">Copyright @2023</p>
                    <h1 className="text-1xl text-third hover:font-bold">Kavishka Indeepa</h1>
                </div>


            </div>
        );
    }
}