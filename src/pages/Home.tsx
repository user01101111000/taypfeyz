import HomeContainer from "../containers/HomeContainer.tsx";
import React from "react";
import { Helmet } from "react-helmet"

const Home: () => React.JSX.Element = (): React.JSX.Element => {
    return <>
        <Helmet>

            <title>taypfeyz</title>

            <link rel="canonical" href={window.location.href} />

            <meta name="description"
                content="This website is a tool to convert JSON data to TypeScript interface. User friendly and beautiful interface." />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="taypfeyz" />
            <meta property="og:description" content="Easily convert JSON data to TypeScript interface." />
            <meta property="og:url" content={window.location.href} />
            <meta property="og:image" content={window.location.href + "icons/apple-touch-icon-180x180.png"} />


            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="taypfeyz" />
            <meta name="twitter:description" content="Easily convert JSON data to TypeScript interface." />
            <meta name="twitter:image" content={window.location.href + "icons/apple-touch-icon-180x180.png"} />

        </Helmet>

        <HomeContainer />
    </>
};

export default Home;
