import { getGamesData } from "../../../api/getMoviesData";
import Games from "../../../components/Games/Games";

async function GamesPage() {
    const games = await getGamesData();
    return (
        <section>
            <div className="container">
                <div>
                    <Games games={games} title={"Игры"} />
                </div>
            </div>
        </section>
    );
}

export default GamesPage;
