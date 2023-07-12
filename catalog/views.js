import { render } from "../ghost/utils/httpResponse.js";

const index = (req, res) =>{
    const context = {
        title: 'Home', 
        heading: 'Welcome to the Library'
    }
    render(res, 'catalog/index',  context)
}

const about = (req, res) =>{
    const context = {
        title: 'About us', 
        heading: 'Who we are and what we do.'
    }
    render(res, 'catalog/about', context)
}

const contact = (req, res) =>{
    const context = {
        title: 'Contact Us', 
        heading: 'How and Where to Find Us.',
        contact:{
            phone: '+254898934218',
            email: 'llb@gmail.com',
            address: 'Moi Ave',
            block: 'Laznol House 2nd Floor'
        }
    }
    render(res, 'catalog/contact-me', context)
}

export {index, about, contact}