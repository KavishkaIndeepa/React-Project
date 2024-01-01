import {Component} from "react";
import {CartItems} from "../../../model/CartItems";

interface ModifyCartsProps{
    data: any
}

interface ModifyCartState{
    itemCount: number
}

export class ModifyCart extends Component <ModifyCartsProps, ModifyCartState> {

    public static itemsList: CartItems[] = [];

    constructor(props: ModifyCartsProps) {
        super(props);
        this.state = {
            itemCount: 1
        }
    }

    componentDidMount() {
        const {itemCount}=this.state;

        if (this.props.data.isAdded){
            if (!ModifyCart.itemsList.find(item =>item.product.id === this.props.data.product.id)){
                ModifyCart.itemsList.push({product: this.props.data.product, itemCount: itemCount})
            }

        }
        console.log(ModifyCart.itemsList)
    }

    componentDidUpdate(prevProps: Readonly<ModifyCartsProps>, prevState: Readonly<ModifyCartState>, snapshot?: any): void {
        let { itemCount } = this.state;

        let item = ModifyCart.itemsList.find(item => item.product.id === this.props.data.product.id);

        // @ts-ignore
        let index = ModifyCart.itemsList.indexOf(item);

        ModifyCart.itemsList.splice(index, 1);
        ModifyCart.itemsList.push({
            product: this.props.data.product, itemCount: itemCount
        });

        console.log(ModifyCart.itemsList);
    }

    render() {
        let {itemCount} = this.state

        const onDecreaseItemCount = () =>{
            if (itemCount > 1){
                this.setState({itemCount: --itemCount})
            }else {
                // @ts-ignore
                alert("Item Count Can't Be Less Than One")
            }
        }

        const onIncreaseItemCount = () =>{
            this.setState({itemCount: ++itemCount})
        }

        return (
            <div className={"w-full mt-4 p-[3px] bg-red-500 text-[15px] text-center"}>

                <button className={"float-left text-[15px] bg-yellow-300 rounded-lg h-6 w-7"} onClick={onDecreaseItemCount}>-</button>
                <small className={"text-[15px] hover:text-white"}>{itemCount}</small>
                <button className={"float-right text-[15px] bg-yellow-300 rounded-lg h-6 w-7"} onClick={onIncreaseItemCount}>+</button>

            </div>
        );



    }


}