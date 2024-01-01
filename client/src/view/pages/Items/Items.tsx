import {Component} from "react";
import {Products} from "../../common/Products/Products";

export class Items extends Component {

    constructor(props: {}| Readonly<{}>) {
        super(props);
        this.state={
            data:[],
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () =>{
        try {
            // @ts-ignore
            const response= await fetch('/product-data.json');
            const jsonData = await response.json();
            this.setState({data:jsonData});
        }catch (error) {
            console.log("Error fetching Data")
        }
    }

    render() {

        // @ts-ignore
        const {data} = this.state;
        return (
            <div>
                <div className={"flex flex-wrap mt-6 items-center justify-center"}>
                    <h1 className={"text-4xl"}> This is Items</h1>
                </div>
            <div className={"flex"}>

                <div className={"mt-5 mb-5 flex flex-wrap justify-center items-center mx-auto"}>


                    {/*<Product/>*/}
                    {
                        data.map((product: any) =>(
                            <Products key={product.id} data={product}/>
                        ))

                    }

                </div>
            </div>
            </div>
        );
    }
}