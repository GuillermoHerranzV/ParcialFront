import { PageProps } from "$fresh/server.ts";

const CityRoute = (props: PageProps) => {

    const {city} = props.params;
    const country = "pais";

    return (

        <div>

            {city}

            <a href={`/country/${country}`}> Ciudad: {country}</a>

        </div>

    );

}

export default CityRoute;