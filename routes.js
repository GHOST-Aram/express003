import { app } from "./ghost/app/init.js";
import { catalogUrls } from "./catalog/routes.js";

app.use(catalogUrls)