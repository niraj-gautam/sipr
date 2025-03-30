import Hero from "../components/home/Hero";
import ResearchAreas from "../components/home/ResearchAreas";
import FeaturedPublication from "../components/home/FeaturedPublication";
import Events from "../components/home/Events";
import LatestNews from "../components/home/LatestNews";

const Home = () => {
    return (
        <>
            <Hero />
            <ResearchAreas />
            <FeaturedPublication />
            <Events />
            <LatestNews />
        </>
    );
};

export default Home;
