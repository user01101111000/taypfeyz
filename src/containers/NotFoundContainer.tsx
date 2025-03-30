import React from "react";
import { NavigateFunction, useNavigate } from "react-router";
import { Button } from "@/components/ui/shadcn/button.tsx";

const NotFoundContainer: () => React.JSX.Element = (): React.JSX.Element => {

    const navigator: NavigateFunction = useNavigate();

    return <section className="container mx-auto flex items-center justify-center p-4">

        <div className="flex flex-col items-center justify-center gap-3">
            <p className="text-text-color-2">Page not found.</p>
            <Button size="sm" variant="secondary" className="cursor-pointer" onClick={(): void => {
                navigator("/")
            }}>
                Go home
            </Button>
        </div>

    </section>

};

export default NotFoundContainer;