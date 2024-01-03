import {Component} from "react";
import {CartItems} from "../../../model/CartItems";

interface ShoppingCartProps {
    itemsList: CartItems[];
}

export class ShoppingCart extends Component <ShoppingCartProps> {
    render() {
        return (
            <div className="flex justify-center items-center min-h-screen" style={{ backgroundImage: 'url("/Shoe-Rack-Img.png")' }}>
                <div className="w-full overflow-x-auto">
                    <table className="w-full divide-y divide-gray-600">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium font-serif uppercase tracking-wider">ID</th>
                            <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium font-serif uppercase tracking-wider">Name</th>
                            <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium font-serif uppercase tracking-wider">Unit Price</th>
                            <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium font-serif uppercase tracking-wider">Quantity</th>
                            <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium font-serif uppercase tracking-wider">Total</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {this.props.itemsList.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm sm:text-base text-gray-500 text-center">
                                    No items to display
                                </td>
                            </tr>
                        ) : (
                            this.props.itemsList.map((item, index) => (
                                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm sm:text-base text-gray-500">{item.product.id}</td>
                                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm sm:text-base text-gray-500">{item.product.name}</td>
                                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm sm:text-base text-gray-500">{item.product.price + " " + item.product.currency}</td>
                                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm sm:text-base text-gray-500">{item.itemCount}</td>
                                    <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm sm:text-base text-gray-500">{(item.product.price * item.itemCount) + " " + item.product.currency}</td>
                                </tr>
                            ))
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}