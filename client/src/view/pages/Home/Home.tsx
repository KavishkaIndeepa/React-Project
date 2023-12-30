import {Component} from "react";
import '../../../App.css';
// @ts-ignore
import main from "../../../assets/Shop.jpeg"
export class Home extends Component {
    render() {

        const textStyle = {
            backgroundImage: `url(${main})`,
            backgroundSize: 'cover', // Adjust as needed
            // backgroundPosition: 'center', // Adjust as needed
            color: 'white', // Set text color to contrast with the background image
            padding: '10px', // Add padding as needed
            height: "608px"
        };

        return (

            <div className="flex flex-wrap bg-gray-900" style={textStyle}>
                <div className="flex mt-5 flex-wrap justify-center items-center mx-auto">
                    <div >
                        <h1 className={"p-2 mt-52 ml-36 font-bold shadow-xl text-4xl font-mono"}>The Best Choice For A <br/><br/>
                            <span className={"ml-36 text-Secondary font-serif"}>Where Style Meets Comfort!</span></h1>

                    </div>
                </div>
            </div>
        );
    }
}