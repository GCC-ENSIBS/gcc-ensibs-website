import {MiddlewareHandlerContext} from "$fresh/src/server/types.ts";

interface State {
    name: string;
}

const apiUrl = "https://api.github.com";

export async function handler(
    req: Request,
    ctx: MiddlewareHandlerContext<State>,
) {
    // get cookies
    const cookies = req.headers.get("cookie");
    const accessToken = cookies?.split(";").find((cookie) => cookie.includes("access_token"))?.split("=")[1];

    if (!accessToken) {
        return new Response("No access token", {status: 403});
    }


    const data = await Promise.all([getUserData(accessToken), getOrg()]).then(([userData, orgsMembers]) => {
        // console.log("User data:", userData);
        // console.log("User organizations:", orgsMembers);

        const isInOrg = orgsMembers.some((org: any) => {
            return org.login === userData.login;
        });

        return {
            isInOrg,
            userData,
        }
    });

    if(!data.isInOrg) {
        return new Response("You are not in the GCC organization", {status: 403});
    }

    console.log("Data:", data);

    ctx.state.name = data.userData.name;
    return await ctx.next();
}

// Get the user's data
const getUserData = async (accessToken: string) => {
    const response = await fetch(`${apiUrl}/user`, {
        headers: {
            Authorization: `token ${accessToken}`,
        },
    });
    return response.json();
};

// Get the GCC organization
const getOrg = async () => {
    const response = await fetch(`${apiUrl}/orgs/GCC-ENSIBS/members`);
    return response.json();
};
