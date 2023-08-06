import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const PopularRecipes = () => {

  const [popularRecipes, setPopularRecipes] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/data')
      .then(res => res.json())
      .then(data => setPopularRecipes(data))
      .catch(error => console.error(error))
  }, [])
  const allRecipes = popularRecipes[0]?.recipes;
  console.log(allRecipes)
  // const allRecipes = popularRecipes[0].recipes;
  // console.log(allRecipes)

  return (
    <div className="recipes-container">
      <h2 className="title">Popular Chinese Cuisine Recipes</h2>
      <ul className="recipes-list">
        {
          allRecipes &&
          allRecipes.map((recipe) => (
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

                <Button className="mb-3  align-self-end " variant="dark">View Details <FaArrowRight></FaArrowRight>
                </Button>

              </div>


            </li>
          ))}
      </ul>
    </div>
  );
};

export default PopularRecipes;
