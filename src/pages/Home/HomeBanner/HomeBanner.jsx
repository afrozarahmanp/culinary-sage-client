import { Card } from "react-bootstrap";
import banner from '../../../assets/bannerImg2.jpg'

const HomeBanner = () => {
    return (
        <div className='mb-5'>
            <Card className="bg-dark text-white mt-5">
                <Card.Img style={{}} className="" src={banner} alt="Card image" />
                <Card.ImgOverlay className='ms-5 my-auto d-flex flex-column justify-content-center'>
                    <Card.Title className='fs-3'>Diet Food Is Not a Meal <br /><span className='fw-bold'>IT IS A MEDICINE</span></Card.Title> <br />
                    <Card.Text className='fs-4'>
                        Browse your favourite chinese recipes <br />
                        
                    </Card.Text>

                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default HomeBanner;