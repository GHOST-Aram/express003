import { router as catalogUrls } from "../ghost/app/init.js";
import { about, contact, index } from "./views.js";
import { config } from "../ghost/app/config.js";

config()
catalogUrls.get('/', index)
catalogUrls.get('/about', about )
catalogUrls.get('/contact', contact)

export {catalogUrls}



