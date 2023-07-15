import { config as dotEnvConfig } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";
dotEnvConfig({
    export: true
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
