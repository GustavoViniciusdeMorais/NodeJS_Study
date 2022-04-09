const routes = (app) => {
    app.route('/products')
        .get((req, res, next) => {
            // very basic middleware
            console.log(`Request url: ${req.originalUrl}`)
            console.log(`Request method: ${req.method}`)
            next();
        },
            (req, res) => {
                res.send('Get request success')
            }
        )
        
        .post((req, res) =>
            res.send('Post success'))
    
    app.route('/products/:productID')
        .get((req, res) => 
            res.send('Get ID request success'))
        
        .put((req, res) => 
            res.send('PUT ID request success'))
        
        .delete((req, res) => 
            res.send('DELETE ID request success'))
}

export default routes;