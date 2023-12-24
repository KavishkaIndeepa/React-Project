import {Component} from "react";
import {ModifyCart} from "../ModifyCart/ModifyCart";

interface ProductsProps {
    data: any
}
interface ProductState{
    isActive : boolean
}

export class Products extends Component<ProductsProps, ProductState> {


    constructor(props: ProductsProps) {
        super(props);
        this.state={
            isActive: false
        }
    }
    render() {

        const {data} = this.props;
        const image = require('../../../assets/products/'+data.image)

        return (
            <div className={"w-52 h-64  mr-2 mb-2 mb-5 justify-center items-center border-gray-800 border-[1px] hover:bg-emerald-500"}>
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

                <div className={"flex justify-center"}>{
                    this.state.isActive ? <ModifyCart data={{product: data, isAdded: this.state.isActive}}/>:
                        <button className={"w-full mt-4 p-{2.5px} bg-green-400 text-{8px} hover:text-white"}
                                onClick={this.addToCartOnClick}>Add to Cart
                        </button>
                }

                </div>

            </div>
        );
    }

    private addToCartOnClick = () => {
        this.setState({isActive: !this.state.isActive},()=>{
            console.log(this.state.isActive);
            alert(this.state.isActive)
        })
    }
}