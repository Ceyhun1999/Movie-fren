import Image from "next/image";
import { getGameData } from "../../../../api/getMoviesData";
import styles from "./style.module.css";
import Modal from "../../../../components/Modal/Modal";

async function SinglePostPage({ params: { slug } }) {
    const gameData = await getGameData(slug);
    return (
        <section>
            <div className="container">
                <div className={styles.gameSlug}>
                    <Image
                        style={{
                            objectFit: "cover",
                            width: "100%",
                            borderRadius: "20pxS",
                        }}
                        width={500}
                        height={500}
                        src={gameData.img}
                        alt={gameData.title}
                    />
                    <p
                        style={{
                            color: "#fff",
                            fontSize: "20px",
                        }}
                    >
                        {gameData.desc}
                    </p>
                    <Modal activationKey={gameData.activationKey} href={gameData.href}/>
                </div>
            </div>
        </section>
    );
}

export default SinglePostPage;
