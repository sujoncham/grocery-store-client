import Banner from "../Banner/Banner";
import HomeInventory from "../HomeSection/HomeInventory";
import HomeService from "../HomeSection/HomeService";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeInventory></HomeInventory>
            <HomeService></HomeService>
        </div>
    );
};

export default Home;