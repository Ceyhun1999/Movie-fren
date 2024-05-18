import Advantages from "../components/Advantages/Advantages";
import MainSlider from "../components/MainSlider/MainSlider";
import TrendingMovies from "../components/TrendingMovies/TrendingMovies";

export default async function Home() {
    return (
        <main>
            <MainSlider />
            <TrendingMovies />
            <Advantages/>
        </main>
    );
}
