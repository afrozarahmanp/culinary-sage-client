import { Rating } from "@smastrom/react-rating";
import { Container } from "react-bootstrap";
import { FaThumbsUp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";


const ChefAllDetails = () => {

    const chefDetails = useLoaderData();
    console.log(chefDetails);

    const { name, experience_years, quote, likes, picture_url, recipes } = chefDetails;

    console.log(recipes)

    return (
        <div className="recipes-container ">
            <h2 className="title mt-5">Chef Details </h2>

            <Container>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={picture_url} alt={name} className="img-fluid rounded-start lg:{w-50}" />

                        </div>
                        <div className="col-md-8 d-flex justify-content-center align-items-center">
                            <div className="card-body ms-5 me-5">
                                <h2 className="card-title">{name}</h2>
                                <h5 className="card-title">Years of Experience: {experience_years}</h5>
                                <h5 className="card-title">Likes: {likes} <FaThumbsUp className="mb-2"></FaThumbsUp></h5>
                                <p className="card-title">Quote: {quote}</p>
                                <p>Popular Recipes:  {recipes[0]?.name} and  {recipes[1]?.name}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-center mt-5"> Chef's Famous Recipes</h2>
                    <ul className="recipes-list">
                        {
                            recipes &&
                            recipes.map((recipe) => (
                                <li key={recipe.name} className="recipe-item d-flex flex-column align-items-center  justify-content-between">
                                    <div>
                                        <h3 className="recipe-name">{recipe.name}</h3>
                                        <img src={recipe.image} alt={recipe.name} className="recipe-image" />

                                        <p className="recipe-ingredients p-3"><span className='fw-bold'>Ingredients:</span> {recipe.ingredients.join(', ')}</p>

                                    </div>
                                    <div className="d-flex align-items-center  justify-content-between">
                                        <div className="d-flex me-5">
                                            <Rating className=""
                                                style={{ maxWidth: 75 }}
                                                value={recipe.rating}
                                                readOnly
                                            /> <span>{recipe.rating}</span>
                                        </div>

                                    </div>


                                </li>
                            ))}
                    </ul>
                </div>


            </Container>

        </div >
    );
};

export default ChefAllDetails;