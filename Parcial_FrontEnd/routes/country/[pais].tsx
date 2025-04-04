import { PageProps } from "$fresh/server.ts";

const CountryRoute = (props: PageProps) => {

    const {country} = props.params;
    const ciudad = "ciudad";

    return (

        <div>

            {country}

            <a href={`/city/${ciudad}`}> Ciudad: {ciudad}</a>

        </div>

    );

}

export default CountryRoute;