import {Component} from "react";

interface ProductsProps {
    data: any
}

export class Products extends Component<ProductsProps> {
    render() {

        const {data} = this.props;
        const image = require('../../../assets/products/'+data.image)

        return (
            <div className={"w-52 h-64  mr-2 mb-2 justify-center items-center border-gray-800 border-[1px] hover:bg-emerald-500"}>
                <div>
                    <img className={"h-56"} src={image} alt=""/>
                </div>
                <div className={"flex"}>

                    <div>
                        <h3 className={"text-secondary text-[12px] pl-2"}> {data.name} </h3>
                    </div>
                    <div className={"bg-yellow-300 ml-1 p-0.3 rounded-l-lg pr-2"}>
                        <h3 className={"text-[12px] pl-2"}>{data.price} <small className={"text-[7px]"}>{data.currency}</small></h3>
                    </div>

                </div>

                <div className={"flex justify-center"}>
                    <button className={"w-full mt-4 p-{2.5px} bg-green-400 text-{8px} hover:text-white"}>Add to Cart</button>
                </div>

            </div>
        );
    }
}