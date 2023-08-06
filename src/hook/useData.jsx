import { useEffect, useState } from "react";


const useData = () => {

    const [popularRecipes, setPopularRecipes] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/recipes')
      .then(res => res.json())
      .then(data => setPopularRecipes(data))
      .catch(error => console.error(error))
  }, [])


    return [ popularRecipes ]
};

export default useData;