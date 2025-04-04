import { Handlers, PageProps, FreshContext } from "$fresh/server.ts";

type Data = {

    phone: string;

}

const Handler:Handlers <Data> = {

    GET (req: Request, ctx: FreshContext) {

        const url = new URL (req.url);
        const phone = url.searchParams.get ("phone");

        if (phone == undefined){
            return ctx.render ("");
        }

        return ctx.render (phone);
    }

}

const HomePage = (data: PageProps <Data>) => {

    const {phone} = data;

    return (

        <div>

            <form>

                <input type = "text" name = "phone" value = {phone} />
                <button type = "submit"> Search </button>

            </form>

            <div>

                {phone}

            </div>

        </div>

    );

}

export default HomePage;