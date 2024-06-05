import Advantages from "../components/Advantages/Advantages";
import MainSlider from "../components/MainSlider/MainSlider";
import TrendingMovies from "../components/TrendingMovies/TrendingMovies";
import Blogs from "../components/Blogs/Blogs";

export default async function Home() {
    return (
        <main>
            <MainSlider />
            <TrendingMovies />
            <Advantages />
            <Blogs />
        </main>
    );
}
