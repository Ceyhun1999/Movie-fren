import Image from "next/image";
import { getBlogData } from "../../../../api/getMoviesData";
import styles from "./style.module.css";

async function SinglePostPage({ params: { slug } }) {
    const blogData = await getBlogData(slug);
    return (
        <section>
            <div className="container">
                <div className={styles.blogSlug}>
                    <Image
                        style={{
                            objectFit: "cover",
                            width: '100%',
                            borderRadius: '20pxS'
                        }}
                        width={500}
                        height={500}
                        src={blogData.img}
                        alt={blogData.title}
                    />
                    <p
                        style={{
                            color: "#fff",
                            fontSize: "20px",
                        }}
                    >
                        {blogData.desc}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default SinglePostPage;
