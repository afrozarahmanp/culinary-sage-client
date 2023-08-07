
import { useLoaderData } from "react-router-dom";

import { Button, Container } from "react-bootstrap";
import { Rating } from "@smastrom/react-rating";
import { useState } from "react";

const FoodDetails = () => {

    const foodDedtails = useLoaderData();




    const foods = foodDedtails.recipes?.find(foodExtraDetail => foodExtraDetail?.id == foodDedtails.id)
    console.log(foods)

    const { name, rating, image, ingredients, instructions } = foods;

    const [isButtonDisabled, setButtonDisabled] = useState(false);

    const handleClick = () => {
        alert('This recipe has beed added to your Favourites');
        setButtonDisabled(true);
    };

    return (
        <Container >

            <div className="d-flex justify-content-center align-items-center min-vh-100">
                <div className="card">
                    <div className="card-body">
                        <img className="" style={{ width: '100%' }} src={image}></img>
                        <h2 className="mt-4">{name}</h2>
                        <div className="d-flex me-5 mt-4">
                            <Rating className=""
                                style={{ maxWidth: 100 }}
                                value={rating}
                                readOnly
                            /> <span>{rating}</span>
                        </div>
                        <h4 className="mt-4">Ingredients: </h4><span>{ingredients.join(', ')}</span>
                        <h4 className="mt-4">Instructions: </h4><span>{instructions.join(', ')}</span>
                    </div>
                    <div>
                        <Button variant="dark" className="m-3"
                            onClick={handleClick}
                            disabled={isButtonDisabled}
                        >
                            {isButtonDisabled ? 'Already added' : 'Add to Favourite'}
                        </Button>
                    </div>
                </div>
            </div>

        </Container>

    );
};

export default FoodDetails;