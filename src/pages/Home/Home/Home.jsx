import { Container } from "react-bootstrap"
import HomeBanner from "../HomeBanner/HomeBanner";
import FamousRecipes from "../PopularRecipes/FamousRecipes/FamousRecipes";
import PopularRecipes from "../PopularRecipes/PopularRecipes";



const Home = () => {
    return (
        <Container>
            <HomeBanner></HomeBanner>
            <PopularRecipes></PopularRecipes>
            <FamousRecipes></FamousRecipes>
        </Container>
    );
};

export default Home;