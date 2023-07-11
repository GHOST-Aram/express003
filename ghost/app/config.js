import * as ejs from 'ejs'
import * as express  from "express";
import { VIEWS_DIR } from '../../settings';
import { VIEW_ENGINE } from '../../settings';

const app = express()

// Views config 
app.set('view engine', VIEW_ENGINE === 'ejs' && ejs)
app.set('./catalog/templates', VIEWS_DIR)

export {app}
