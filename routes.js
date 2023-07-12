import { app } from "./ghost/app/init.js";
import { catalogRouter } from "./catalog/routes.js";

app.use(catalogRouter)