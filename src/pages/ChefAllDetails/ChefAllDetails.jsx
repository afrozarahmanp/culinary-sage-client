import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { FaThumbsUp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";


const ChefAllDetails = () => {

    const chefDetails = useLoaderData();
    console.log(chefDetails)

    const { name, experience_years, quote, likes, picture_url, recipes } = chefDetails

    return (
        <div className="recipes-container ">
            <h2 className="title">Chef Details </h2>

            <Container>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={picture_url} alt={name} className="img-fluid rounded-start lg:{w-50}" />

                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title">{name}</h2>
                                <h5 className="card-title">Years of Experience: {experience_years}</h5>
                                <h5 className="card-title">Likes: {likes} <FaThumbsUp className="mb-2"></FaThumbsUp></h5>
                                <p className="card-title">Quote: {quote}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </div >
    );
};

export default ChefAllDetails;