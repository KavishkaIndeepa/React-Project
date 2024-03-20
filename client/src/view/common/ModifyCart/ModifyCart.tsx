import React, { Component } from "react";
import { CartItems } from "../../../model/CartItems";

interface ModifyCartsProps {
    data: any;
}

interface ModifyCartState {
    itemCount: number;
}

export class ModifyCart extends Component<ModifyCartsProps, ModifyCartState> {
    public static itemsList: CartItems[] = [];

    constructor(props: ModifyCartsProps) {
        super(props);
        this.state = {
            itemCount: 1,
        };
    }

    componentDidMount() {
        const { itemCount } = this.state;

        if (this.props.data.isAdded) {
            if (!ModifyCart.itemsList.find(item => item.product.id === this.props.data.product.id)) {
                ModifyCart.itemsList.push({ product: this.props.data.product, itemCount: itemCount });
            }
        }

        console.log(ModifyCart.itemsList);
    }

    componentDidUpdate(prevProps: Readonly<ModifyCartsProps>, prevState: Readonly<ModifyCartState>, snapshot?: any): void {
        const { itemCount } = this.state;

        const item = ModifyCart.itemsList.find(item => item.product.id === this.props.data.product.id);

        if (item) {
            const index = ModifyCart.itemsList.indexOf(item);
            ModifyCart.itemsList.splice(index, 1);
            ModifyCart.itemsList.push({ product: this.props.data.product, itemCount: itemCount });
        }

        console.log(ModifyCart.itemsList);
    }

    onDecreaseItemCount = () => {
        const { itemCount } = this.state;

        if (itemCount > 1) {
            this.setState({ itemCount: itemCount - 1 });
        } else {
            // @ts-ignore
            alert("Item Count Can't Be Less Than One");
        }
    };

    onIncreaseItemCount = () => {
        const { itemCount } = this.state;
        this.setState({ itemCount: itemCount + 1 });
    };

    render() {
        const { itemCount } = this.state;

        return (
            <div className="w-full mt-4 p-[3px] bg-red-500 text-[15px] text-center">
                <button className="float-left text-[15px] bg-yellow-300 rounded-lg h-6 w-7" onClick={this.onDecreaseItemCount}>-</button>
                <small className="text-[15px] hover:text-white">{itemCount}</small>
                <button className="float-right text-[15px] bg-yellow-300 rounded-lg h-6 w-7" onClick={this.onIncreaseItemCount}>+</button>
            </div>
        );
    }
}
