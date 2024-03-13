import React, {Component} from "react";
// @ts-ignore
import about from "../../../assets/Sportshoe (1).jpg";

export class About extends Component {
    render() {
        return (
            <div>
                <div className={"flex flex-col justify-center items-center min-h-screen bg-cover bg-fixed relative"} style={{backgroundImage: 'url("/about.jpg")'}}></div>
                <div className={"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"}>
                    <h1 className={"font-bold text-white text-6xl shadow-xl font-mono "}
                        style={{ textShadow: "2px 2px 0px #000" }}>About Us
                    </h1>
                </div>


                <div className={"grid grid-cols-2 gap-5"}>
                    <div className={"mt-20 ml-5 mb-5 mr-5"}>
                        <p>
                            At Brocelle Shoes, we believe that every step you take should be a stylish statement without
                            compromising on comfort. Our passion for footwear drives us to curate a diverse collection of
                            shoes that not only elevate your fashion game but also provide the perfect fit for your
                            lifestyle.
                            <br/><br/>
                            Discover the perfect pair for every occasion in our carefully selected range, from casual kicks
                            to elegant heels. We pride ourselves on offering not just shoes but a curated experience that
                            reflects the latest trends, exceptional craftsmanship, and unbeatable quality.
                            <br/><br/>
                            What sets us apart is our commitment to ensuring that each step you take is a confident one. Our
                            team of experts tirelessly seeks out the most comfortable and stylish footwear, so you can
                            express yourself effortlessly. Whether you're strolling through the city streets, striding into
                            the office, or dancing the night away, we have the perfect pair to accompany you.
                            <br/><br/>
                            Thank you for stepping into the world of Brocelle Shoes. We invite you to explore our
                            collection, embrace your unique style, and step out in confidence with shoes that speak volumes.
                            Your journey to fashionable comfort starts here!
                        </p>
                    </div>

                    <div className={"mt-20 ml-5 mb-5 mr-5 relative"}>
                        <div className={"overflow-hidden rounded-md"}>
                            <img src={about} alt="" className={"w-full h-auto transition-transform duration-300 transform hover:scale-105"} style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', objectFit: 'cover' }} />
                        </div>
                    </div>

                </div>





            </div>

        );
    }
}
