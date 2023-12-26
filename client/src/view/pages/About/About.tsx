import {Component} from "react";
// @ts-ignore
import main from "../../../assets/Shop.jpeg";

export class About extends Component {
    render() {
        return (
            <div className={"mb-9"}>
                <p className={"mt-12 ml-5 text-4xl font-bold"}>Welcome to Brocelle Shoes – Where Style Meets Comfort!</p>
                <div className={"flex"}>

                    <div className={"mt-20 ml-5 mb-5"}>

                        At Brocelle Shoes, we believe that every step you take should be a stylish statement without
                        compromising on comfort. Our passion for footwear drives us to curate a diverse collection of
                        shoes that not only elevate your fashion game but also provide the perfect fit for your
                        lifestyle.
                        <br/>
                        <br/>
                        Discover the perfect pair for every occasion in our carefully selected range, from casual kicks
                        to elegant heels. We pride ourselves on offering not just shoes but a curated experience that
                        reflects the latest trends, exceptional craftsmanship, and unbeatable quality.
                        <br/>
                        <br/>
                        What sets us apart is our commitment to ensuring that each step you take is a confident one. Our
                        team of experts tirelessly seeks out the most comfortable and stylish footwear, so you can
                        express yourself effortlessly. Whether you're strolling through the city streets, striding into
                        the office, or dancing the night away, we have the perfect pair to accompany you.
                        <br/>
                        <br/>
                        Thank you for stepping into the world of [Your Shop Name]. We invite you to explore our
                        collection, embrace your unique style, and step out in confidence with shoes that speak volumes.
                        Your journey to fashionable comfort starts here!
                    </div>

                    <div className={"mx-auto"}>
                        <img className={"ml-5 mb-10 mt-20"} src={main} alt=""/>
                    </div>

                </div>
            </div>

        );
    }
}