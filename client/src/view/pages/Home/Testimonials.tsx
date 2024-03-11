import {Component} from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonials.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

export class Testimonials extends Component {


    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000
        };
        return (
            <div className="testimonials-container bg-green-50">
                <h2 className={"font-serif text-2xl"}>Testimonials</h2>
                <Slider {...settings}>

                    {/*1*/}
                    <div className="testimonial items-center">

                        <img className="commentor-photo " src="/logo192.png" alt="Commentor 1"/>

                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec justo et nisl ultricies
                            viverra vel at dui. Nulla facilisi. Sed auctor risus quis eros suscipit, eget cursus magna
                            hendrerit."</p>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                        <p className="author">- John Doe</p>
                    </div>

                    {/*2*/}
                    <div className="testimonial">
                        <img className="commentor-photo " src="/logo192.png" alt="Commentor 1"/>

                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec justo et nisl ultricies
                            viverra vel at dui. Nulla facilisi. Sed auctor risus quis eros suscipit, eget cursus magna
                            hendrerit."</p>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                        <p className="author">- Jane Smith</p>
                    </div>

                    {/*    3*/}
                    <div className="testimonial">
                        <img className="commentor-photo " src="/logo192.png" alt="Commentor 1"/>

                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec justo et nisl ultricies
                            viverra vel at dui. Nulla facilisi. Sed auctor risus quis eros suscipit, eget cursus magna
                            hendrerit."</p>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                        <p className="author">- Jane Snow</p>
                    </div>

                    {/*    4*/}
                    <div className="testimonial">
                        <img className="commentor-photo " src="/logo192.png" alt="Commentor 1"/>

                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec justo et nisl ultricies
                            viverra vel at dui. Nulla facilisi. Sed auctor risus quis eros suscipit, eget cursus magna
                            hendrerit."</p>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                        <p className="author">- Jane Kane</p>
                    </div>

                    {/*    5*/}
                    <div className="testimonial">
                        <img className="commentor-photo " src="/logo192.png" alt="Commentor 1"/>

                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec justo et nisl ultricies
                            viverra vel at dui. Nulla facilisi. Sed auctor risus quis eros suscipit, eget cursus magna
                            hendrerit."</p>
                        <div className="stars">
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                            <FontAwesomeIcon icon={faStar}/>
                        </div>
                        <p className="author">- Jane Hansal</p>
                    </div>

                </Slider>
            </div>
        );
    }
}

export default Testimonials;