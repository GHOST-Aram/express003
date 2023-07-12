import { router as catalogUrls } from "../ghost/app/init.js";
import { index } from "./views.js";
import { config } from "../ghost/app/config.js";

config()
catalogUrls.get('/', index)

export {catalogUrls}



