import { render } from "../ghost/utils/httpResponse.js";

const index = (request, response) =>{
    const context = {title: 'Home', heading: 'Welcome to the Library'}

    render(response, 'catalog/index',  context)
}

export {index}