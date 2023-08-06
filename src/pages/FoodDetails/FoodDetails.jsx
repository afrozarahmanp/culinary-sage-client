
// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import useData from "../../hook/useData";

import {useParams } from "react-router-dom";
import useData from "../../hook/useData";

const FoodDetails = () => {

    const { recipe_id } = useParams();
    // console.log(recipe_id)


    // const foodDetails =useLoaderData();
    // console.log(foodDetails.recipes)

    const [data] = useData()

    const foodDetails = data[0]?.recipes;
    foodDetails?.map(foodDetail => console.log(foodDetail?.id))

    const foods = foodDetails?.find(foodExtraDetail => foodExtraDetail?.id === recipe_id)
    console.log(foods)


    //     const { id } = useParams();

    //     const [selectedFoods, setSelectedFoods] = useState([])


    //     const foods = foodDetails?.find(foodDetail => foodDetail.id === id);
    // console.log(foods)
    // console.log(selectedFoods)

    return (
        <div>
            <h2>Food Details:</h2>
            <h2></h2>

        </div>
    );
};

export default FoodDetails;