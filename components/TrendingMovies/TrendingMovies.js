import Movies from "../Movies/Movies";
import { getMoviesData } from "../../api/getMoviesData";

async function TrendingMovies() {
    const movies = await getMoviesData();
    return <Movies movies={movies} title="TRENDING NOW" />;
}

export default TrendingMovies;
