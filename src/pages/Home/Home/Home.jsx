import { Container } from "react-bootstrap"
import HomeBanner from "../HomeBanner/HomeBanner";
import FamousRecipes from "../PopularRecipes/FamousRecipes/FamousRecipes";
import PopularRecipes from "../PopularRecipes/PopularRecipes";
import ChefDetails from "../../ChefDetails/ChefDetails";



const Home = () => {
    return (
        <Container>
            <HomeBanner></HomeBanner>
            <PopularRecipes></PopularRecipes>
            <FamousRecipes></FamousRecipes>
            <ChefDetails></ChefDetails>
        </Container>
    );
};

export default Home;