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

            <div className="flex flex-wrap " style={textStyle}>


                    <div className={"ml-16"}>
                        <h1 className={"p-2 mt-52 ml-2 font-bold text-blue-700 text-4xl shadow-xl font-mono bg-gray-600 bg-opacity-40 md:rounded"}>Step
                            into Style !!</h1>
                    </div>

                    <div className={"w-full mt-4 "}>
                        <h1 className={"p-0.5 ml-28 mr-14 text-2xl bg-black bg-opacity-40 md:rounded"}>Explore our curated collection of trendy and comfortable footwear at Brocelle Shoes. From
                            casual kicks to elegant heels, find the perfect pair for every occasion. Discover the latest
                            fashion trends and step confidently into the season with our diverse range of shoes.
                            Quality, comfort, and style—your journey to fabulous footwear starts here."</h1>
                    </div>


            </div>
        );
    }
}