import { config as dotEnvConfig } from "https://deno.land/x/dotenv/mod.ts";
dotEnvConfig({
    export: true,
    path: Deno.env.get("ENVIRONMENT") == "PRODUCTION" ? "./.env.production": "./.env.local",
});

const appEnv = {
    CLIENT_SECRET: Deno.env.get("CLIENT_SECRET"),
    CLIENT_ID: Deno.env.get("CLIENT_ID"),
};


const everyEnvVariableFilled = Object.values(appEnv).every(
    (v) => v !== null && v !== undefined && v !== "" && !Number.isNaN(v)
);
if (!everyEnvVariableFilled) {
    console.error(
        `[ERROR] Not all env variables are correctly compiled, please check that each env variable has a value.`
    );
    Deno.exit(1);
}

export default appEnv;