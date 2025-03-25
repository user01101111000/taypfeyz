import React from "react";
import ShinyText from "@/components/ui/ShinyText.tsx";
import {Button} from "@/components/ui/button.tsx";
import {NavigateFunction, useNavigate} from "react-router";
import about_data from "@/constants/about_data.ts";

const AboutContainer: () => React.JSX.Element = (): React.JSX.Element => {

    const navigator: NavigateFunction = useNavigate();

    return <section
        className="container mx-auto flex items-center justify-center p-4">

        <div className="flex flex-col items-center justify-center gap-3 lg:gap-6">
            <ShinyText text="taypfeyz" className="text-3xl md:text-4xl lg:text-5xl"/>
            <p className="text-text-color-2 text-center leading-6 md:leading-7 lg:leading-8">
                {about_data.about_description}
            </p>

            <Button variant="secondary" className="cursor-pointer" onClick={(): void => {
                navigator("/");
            }}>
                <ShinyText text="Try it now"/>
            </Button>
        </div>


    </section>
};

export default AboutContainer;