import notFound from '../../assets/404.jpg'

const NotFound = () => {
    return (
        <div>
            <img className='w-100 h-100' src={notFound}/>
        </div>
    );
};

export default NotFound;