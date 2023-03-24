// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/about.tsx";
import * as $1 from "./routes/admin/_middleware.ts";
import * as $2 from "./routes/admin/api/fame.ts";
import * as $3 from "./routes/admin/index.tsx";
import * as $4 from "./routes/api/callback.ts";
import * as $5 from "./routes/api/fame.ts";
import * as $6 from "./routes/api/login.ts";
import * as $7 from "./routes/fame.tsx";
import * as $8 from "./routes/index.tsx";
import * as $9 from "./routes/projects.tsx";
import * as $$0 from "./islands/BlinkingCursor.tsx";
import * as $$1 from "./islands/FameAdd.tsx";
import * as $$2 from "./islands/MarkdownAdd.tsx";
import * as $$3 from "./islands/Menu.tsx";

const manifest = {
  routes: {
    "./routes/about.tsx": $0,
    "./routes/admin/_middleware.ts": $1,
    "./routes/admin/api/fame.ts": $2,
    "./routes/admin/index.tsx": $3,
    "./routes/api/callback.ts": $4,
    "./routes/api/fame.ts": $5,
    "./routes/api/login.ts": $6,
    "./routes/fame.tsx": $7,
    "./routes/index.tsx": $8,
    "./routes/projects.tsx": $9,
  },
  islands: {
    "./islands/BlinkingCursor.tsx": $$0,
    "./islands/FameAdd.tsx": $$1,
    "./islands/MarkdownAdd.tsx": $$2,
    "./islands/Menu.tsx": $$3,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
