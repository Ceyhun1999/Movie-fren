import { getBooksData } from "../../../api/getMoviesData";
import Books from "../../../components/Books/Books";

async function BooksPage() {
    const books = await getBooksData();
    return (
        <section>
            <div className="container">
                <div>
                    <Books books={books} title={'Книги'}/>
                </div>
            </div>
        </section>
    );
}

export default BooksPage;
