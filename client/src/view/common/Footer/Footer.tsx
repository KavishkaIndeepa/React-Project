import {Component} from "react";


export class Footer extends Component {
    render() {
        return (
            <div className="flex-row flex-wrap p-4 bg-[#222322] justify-center mt-6">

                <div className={"flex justify-center text-cyan-50"}>
                    <small className="text[10px] pr-2 hover:font-bold">Copyright @2024</small>
                    <small className="text-1xl text-third hover:font-bold">Kavishka Indeepa</small>
                </div>


            </div>
        );
    }
}
