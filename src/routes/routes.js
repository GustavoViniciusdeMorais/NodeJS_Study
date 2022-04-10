import { 
    addNewProduct, 
    getProducts, 
    getProductById,
    updateProductById,
    deleteProductById
}
from '../controllers/ProductsController';

const routes = (app) => {
    app.route('/products')
        .get((req, res, next) => {
            // very basic middleware
            console.log(`Request url: ${req.originalUrl}`)
            console.log(`Request method: ${req.method}`)
            next();
        }, getProducts)
        
        .post(addNewProduct)
    
    app.route('/products/:productID')
        .get(getProductById)
        
        .put(updateProductById)
        
        .delete(deleteProductById)
}

export default routes;