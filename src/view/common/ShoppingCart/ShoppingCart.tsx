import {Component} from "react";
import {CartItems} from "../../../model/CartItems";

interface ShoppingCartProps {
    itemsList: CartItems[];
}

export class ShoppingCart extends Component <ShoppingCartProps> {
    render() {
        return (
            <div className={"flex justify-center items-center min-h-screen"}>

                <table className={" w-full mx-6"}>

                    <tr className={"bg-gray-400"}>

                        <th className={"text-[15px] font-normal border-black border-[0.5px] px-1"}> ID</th>
                        <th className={"text-[15px] font-normal border-black border-[0.5px] px-1"}> Name</th>
                        <th className={"text-[15px] font-normal border-black border-[0.5px] px-1"}> Unit Price</th>
                        <th className={"text-[15px] font-normal border-black border-[0.5px] px-1"}> QTY</th>
                        <th className={"text-[15px] font-normal border-black border-[0.5px] px-1"}> Total</th>

                    </tr>

                    {
                        this.props.itemsList.length === 0 ?
                            <tr>
                                <td colSpan={5} className='border-black border-[0.5px] px-1'>
                                    <p className='text-[15px] font-normal text-center'>No items to display</p>
                                </td>
                            </tr>
                            : this.props.itemsList.map((item) => (
                                <tr className='border-black  border-[0.5px]'>
                                    <td className={"text-[12px] border-black border-[0.5px] px-1"}>{item.product.id}</td>
                                    <td className={"text-[12px] border-black border-[0.5px] px-1"}>{item.product.name}</td>
                                    <td className={"text-[12px] border-black border-[0.5px] px-1"}>{item.product.price + ' ' + item.product.currency}</td>
                                    <td className={"text-[12px] border-black border-[0.5px] px-1"}>{item.itemCount}</td>
                                    <td className={"text-[12px] border-black border-[0.5px] px-1"}>{(item.product.price * item.itemCount) + ' ' + item.product.currency}</td>
                                </tr>
                            ))
                    }


                </table>

            </div>
        );
    }
}