import {Component} from "react";
import main from "../../../assets/_Shoes Sale  .png"
export class Home extends Component {
    render() {
        return (
            <div className={"flex"}>
                <div>
                   <h1 className={"p-2 mt-52 ml-36 font-bold shadow-xl text-4xl"}>The Best Choice For A <br/><br/>
                       <span className={"ml-36 text-Secondary"}>COMFORTABLE WALK</span></h1>
                </div>
                <div className={"mx-auto"}>
                    <img className={"h-[609px] w-auto p-2 "} src={main} alt=""/>
                </div>



            </div>
        );
    }
}