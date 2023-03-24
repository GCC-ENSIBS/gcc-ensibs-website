import {MiddlewareHandlerContext} from "$fresh/src/server/types.ts";

interface State {
    name: string;
}

export async function handler(
    req: Request,
    ctx: MiddlewareHandlerContext<State>,
) {
    // get cookies
    const cookies = req.headers.get("cookie");
    const accessToken = cookies?.split(";").find((cookie) => cookie.includes("access_token"))?.split("=")[1];

    const result = await fetch("https://api.github.com/user", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "token " + accessToken
        }
    })

    const data = await result.json();

    // Get organization
    const orgResult = await fetch(`https://api.github.com/users/${data.login}/orgs`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "token " + accessToken
        }
    })

    const orgData = await orgResult.json();

    // Check if user is in organization GCC-ENSIBS
    const isInOrg = orgData.find((org: any) => org.login === "GCC-ENSIBS");

    if(!isInOrg) {
        return new Response("Not in organization", {status: 403});
    }

    ctx.state.name = data.login;
    return await ctx.next();
}