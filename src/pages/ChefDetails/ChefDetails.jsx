import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { FaArrowRight, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";


const ChefDetails = () => {




    const [chefDetails, setchefDetails] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/recipes')
            .then(res => res.json())
            .then(data => setchefDetails(data))
            .catch(error => console.error(error))
    }, [])

    console.log(chefDetails)
    return (
        <div className="recipes-container ">
            <h2 className="title">Chef Details</h2>
            <ul className="recipes-list">
                <Row xs={1} md={2} lg={3} className="g-4">
                    {chefDetails.map((chefDetail) => (
                        <Col key={chefDetail.id}>
                            <Card className="chef-card d-flex flex-column align-items-center  justify-content-between">
                                <Card.Img className='chef-image' variant="top" src={chefDetail.picture_url} alt={chefDetail.name} />
                                <Card.Body>
                                    <div>
                                        <Card.Title>{chefDetail.name}</Card.Title>
                                        <Card.Text><span className="fw-bold">Years of Experience: </span>{chefDetail.experience_years}
                                        </Card.Text>
                                        <Card.Text>{chefDetail.quote}
                                        </Card.Text>
                                        <Card.Text className="me-5"><span className="fw-bold">Likes: </span> {chefDetail.likes} <FaThumbsUp className="mb-2"></FaThumbsUp>
                                        </Card.Text>
                                    </div>




                                </Card.Body>
                                <div className="d-flex align-items-center  justify-content-between">

                                    <Button className="mb-3  align-self-end " variant="dark"><Link className="text-white" to={`/chefdetails/${chefDetail.id}`}>View Details <FaArrowRight></FaArrowRight></Link>
                                    </Button>
                                </div>

                            </Card>
                        </Col>
                    ))}
                </Row>

            </ul>
        </div>
    );
};


export default ChefDetails;