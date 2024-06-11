import { Component } from "react";
import { CartItems } from "../../../model/CartItems";

interface ShoppingCartProps {
    itemsList: CartItems[];
}

interface ShoppingCartState {
    total: number;
    itemList: CartItems[];
}

export class ShoppingCart extends Component<ShoppingCartProps, ShoppingCartState> {

    constructor(props: ShoppingCartProps) {
        super(props);
        this.state = {
            total: this.calculateTotal(props.itemsList),
            itemList: props.itemsList,
        };
    }

    calculateTotal(itemList: CartItems[]) {
        return itemList.reduce((acc, item) => acc + item.product.price * item.itemCount, 0);
    }

    render() {
        return (
            <div className="flex flex-col items-center min-h-screen p-4" style={{ backgroundImage: 'url("/Shoe-Rack-Img.png")' }}>
                <div className="w-full flex justify-center items-center overflow-x-auto mt-10">
                    <table className="w-full max-w-4xl divide-y divide-gray-600 mt-20">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs sm:text-sm font-medium font-serif uppercase tracking-wider">ID</th>
                            <th className="px-4 py-3 text-left text-xs sm:text-sm font-medium font-serif uppercase tracking-wider">Name</th>
                            <th className="px-4 py-3 text-left text-xs sm:text-sm font-medium font-serif uppercase tracking-wider">Unit Price</th>
                            <th className="px-4 py-3 text-left text-xs sm:text-sm font-medium font-serif uppercase tracking-wider">Quantity</th>
                            <th className="px-4 py-3 text-left text-xs sm:text-sm font-medium font-serif uppercase tracking-wider">Total</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {this.props.itemsList.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="px-4 py-4 whitespace-nowrap text-sm sm:text-base text-gray-500 text-center">
                                    No items to display
                                </td>
                            </tr>
                        ) : (
                            this.props.itemsList.map((item, index) => (
                                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm sm:text-base text-gray-500">{item.product.id}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm sm:text-base text-gray-500">{item.product.name}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm sm:text-base text-gray-500">{item.product.price + " " + item.product.currency}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm sm:text-base text-gray-500">{item.itemCount}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm sm:text-base text-gray-500">{(item.product.price * item.itemCount) + " " + item.product.currency}</td>
                                </tr>
                            ))
                        )}
                        </tbody>
                    </table>
                </div>

                <div className="flex flex-col items-end w-full max-w-4xl mt-10">
                    <div className="text-xl sm:text-2xl mb-4 text-white">
                        Total Amount: {this.state.total} LKR
                    </div>
                    <button
                        className="bg-green-400 w-48 sm:w-48 h-16 font-bold hover:bg-orange-500 hover:text-white text-xl sm:text-xl rounded-lg text-white"
                        onClick={this.clickOnProceed}>
                        Proceed Payment
                    </button>
                </div>
            </div>
        );
    }

    private clickOnProceed = () => {
        // @ts-ignore
        alert("Payment Confirmed by COD method!");

        // @ts-ignore
        window.location.reload();
    }
}
