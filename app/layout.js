import "./reset.css";
import "../public/fonts/fonts.css";
import "./globals.css";

import Layout from "../components/layout/Layout";

export const metadata = {
    title: "Moive",
    description: "Movie App",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
