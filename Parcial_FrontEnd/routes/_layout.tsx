import { PageProps } from "$fresh/server.ts";

export default function Header ({Component, state}: PageProps) {

    return (

        <div>
            <a href={"/"} class = "Header"> Home </a>
            <Component />
            <div class = "Footer">Copyright Nebrija 2025</div>
        </div>

    );

}